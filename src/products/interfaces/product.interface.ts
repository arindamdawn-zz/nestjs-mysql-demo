export interface Product {
  id?: number;
  name: string;
  qty: number;
  price: number;
  productDetails: ProductDetails;
}

export interface UpdateProduct {
  id?: number;
  name?: string;
  qty?: number;
  price?: number;
  dimension?: string;
  partNumber: string; 
  manufacturer?: string;
  weight?: number;
  origin?: string;
}

export interface ProductDetails {
  dimension?: string;
  partNumber: string; 
  manufacturer?: string;
  weight?: number;
  origin?: string;
}
