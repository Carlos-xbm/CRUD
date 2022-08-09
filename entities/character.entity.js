const crypto = require("crypto");
class CharacterEntity {
    constructor(character) {
        this.id = character.id ?? crypto.randomUUID();
        this.name = character.name;
        this.lastName = character.lastName;
        this.gender = character.gender;
        this.age = character.age;
        this.nationality = character.nationality;
    }

    validate() {
        if (!this.name || !this.name.lenght > 5) {
            throw new Error("O nome precisa ser preenchido");
        }
        if (!this.lastName) {
            throw new Error("unknown");
        }
        if (!this.gender) {
            throw new Error("O genero precisa ser preenchido");
        }
        if (!this.age) {
            throw new Error("A idade precisa ser informada");
        }
        if (!this.nationality) {
            throw new Error("A nacionalidade precisa ser informada");
        }
    }

    getCharacter() {
        return {
            id: this.id,
            name: this.name,
            lastName: this.lastName,
            gender: this.gender,
            age: this.age,
            nationality: this.nationality,
        };
    }
}
module.exports = CharacterEntity;
