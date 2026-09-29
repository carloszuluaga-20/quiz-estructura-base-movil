import db from "../database/database";
import { User } from "../../domain/User";

export const UserRepository = {

  create(user: User) {
    return db.runAsync(
      "INSERT INTO users (name, email) VALUES (?, ?)",
      user.name,
      user.email
    );
  },

  getAll() {
    return db.getAllAsync<User>(
      "SELECT * FROM users"
    );
  }

};