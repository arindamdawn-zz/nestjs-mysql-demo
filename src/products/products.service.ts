import { Injectable, NotFoundException } from '@nestjs/common';
import { Product, UpdateProduct } from './interfaces/product.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { ProductEntity } from './entities/product.entity';
import { CreateProductDTO } from './dto/create-product.dto';
import { ProductDetailsEntity } from './entities/product-details.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
    @InjectRepository(ProductDetailsEntity)
    private readonly productDetailsRepository: Repository<ProductDetailsEntity>,
  ) {}

  async create(product: CreateProductDTO): Promise<Product> {
    const productDetails = await this.productDetailsRepository.save({
      dimension: product.dimension,
      partNumber: product.partNumber,
      manufacturer: product.manufacturer,
      weight: product.weight,
      origin: product.origin,
    });
    // return await this.productRepository.save(product);
    const newProduct = new ProductEntity();
    newProduct.name = product.name;
    newProduct.price = product.price;
    newProduct.qty = product.qty;
    newProduct.productDetails = productDetails;

    await this.productRepository.save(newProduct);
    return { ...newProduct, productDetails };
  }

  async findAll(): Promise<Product[]> {
    return await this.productRepository.find({ relations: ['productDetails'] });
  }

  async findOne(id: string): Promise<Product> {
    const result = await this.productRepository.findOne(id, {
      relations: ['productDetails'],
    });
    if (!result) {
      throw new NotFoundException('Could not find product');
    } else {
      return result;
    }
  }

  async update(id: number, recordToUpdate: UpdateProduct): Promise<Product> {
    const product = await this.productRepository.findOne(id, {
      relations: ['productDetails'],
    });
    if (!product) {
      throw new NotFoundException('Product not found');
    } else {
      //merge the product and record to update
      const { name, price, qty } = recordToUpdate;
      await this.productRepository.merge(product, { name, price, qty });

      const updatedProduct = await this.productRepository.save(product);

      const foundDetails = await this.productDetailsRepository.findOne(
        product.productDetails.id,
      );
      const {
        partNumber,
        dimension,
        weight,
        manufacturer,
        origin,
      } = recordToUpdate;
      await this.productDetailsRepository.merge(foundDetails, {
        partNumber,
        dimension,
        weight,
        manufacturer,
        origin,
      });

      const updatedDetails = await this.productDetailsRepository.save(
        foundDetails,
      );

      return { ...updatedProduct, productDetails: updatedDetails };
    }
  }

  async delete(productId: number, productDetailsId: number): Promise<any> {
    await Promise.all([
      await this.productRepository.delete(productId),
      await this.productDetailsRepository.delete(productDetailsId),
    ]);

    return { message: `product with id ${productId} has been deleted` };
  }
}
