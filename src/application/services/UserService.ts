import { UserRepository } from "../../infrastructure/repositories/UserRepository";
import { User } from "../../domain/User";

export const UserService = {

  create(user: User) {
    return UserRepository.create(user);
  },

  getAll() {
    return UserRepository.getAll();
  }

};