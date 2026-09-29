import db from "../database/database";
import { Product } from "../../domain/Product";

export const ProductRepository = {

  create(product: Product) {
    return db.runAsync(
      "INSERT INTO products (name, price) VALUES (?, ?)",
      product.name,
      product.price
    );
  },

  getAll() {
    return db.getAllAsync<Product>(
      "SELECT * FROM products"
    );
  }

};