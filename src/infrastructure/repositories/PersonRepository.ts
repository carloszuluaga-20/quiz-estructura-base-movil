import db from "../database/database";
import { Person } from "../../domain/Person";

export const PersonRepository = {

  create(person: Person) {
    return db.runAsync(
      "INSERT INTO persons (name, document) VALUES (?, ?)",
      person.name,
      person.document
    );
  },

  getAll() {
    return db.getAllAsync<Person>(
      "SELECT * FROM persons"
    );
  }

};