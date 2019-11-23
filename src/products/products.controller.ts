import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Delete,
  UseFilters,
  UseInterceptors,
  Put,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDTO } from './dto/create-product.dto';
import { Product, UpdateProduct } from './interfaces/product.interface';
import { TransformInterceptor } from 'src/common/interceptors/transform.interceptor';
import { DeleteResult } from 'typeorm';
import { HttpExceptionFilter } from 'src/common/filters/http-exception.filter';

@Controller('products')
@UseFilters(HttpExceptionFilter)
@UseInterceptors(TransformInterceptor)
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Post()
  async create(@Body() product: CreateProductDTO): Promise<Product> {
    return await this.productsService.create(product);
  }

  @Get()
  async findAll(): Promise<Product[]> {
    return await this.productsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id): Promise<Product> {
    return await this.productsService.findOne(id);
  }

  @Put(':id')
  async update(@Param() id, @Body() recordToUpdate: UpdateProduct) {
    return await this.productsService.update(id, recordToUpdate);
  }

  @Delete(':productId/:detailsId')
  async delete(@Param() params): Promise<DeleteResult> {
    return await this.productsService.delete(
      params.productId,
      params.detailsId,
    );
  }
}
