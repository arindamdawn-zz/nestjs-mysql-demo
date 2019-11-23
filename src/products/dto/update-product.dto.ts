import { IsOptional, IsString, IsInt, IsNumber, IsNotEmpty } from "class-validator";

export class UpdateProductDTO {
    @IsOptional()
    @IsString()
    name: string;
    @IsOptional()
    @IsInt()
    qty: number;
    @IsOptional()
    @IsNumber()
    price: number;

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