import { IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';
export class CreateProductDTO {
  @IsNotEmpty()
  @IsString()
  readonly name: string;
  @IsNotEmpty()
  @IsNumber()
  readonly qty: number;
  @IsNotEmpty()
  @IsNumber()
  readonly price: number;

  @IsOptional()
  @IsString()
  readonly dimension: string;
  @IsNotEmpty()
  @IsString()
  readonly partNumber: string;
  @IsOptional()
  @IsNumber()
  readonly weight: number;
  @IsOptional()
  @IsString()
  readonly manufacturer: string;
  @IsOptional()
  @IsString()
  readonly origin: string;
}
