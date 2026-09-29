import { PersonRepository } from "../../infrastructure/repositories/PersonRepository";
import { Person } from "../../domain/Person";

export const PersonService = {
  create(person: Person) {
    return PersonRepository.create(person);
  }
};