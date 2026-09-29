import { ProductRepository } from "../../infrastructure/repositories/ProductRepository";
import { Product } from "../../domain/Product";

export const ProductService = {
  create(product: Product) {
    return ProductRepository.create(product);
  }
};