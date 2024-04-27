export class Lover{

    #name
    #age
    #weakness
    #number

    static #all_people = []

    constructor(name, age="", weakness="", number=""){

        this.#name = name;
        this.#age = age;
        this.#weakness = weakness;
        this.#number = number;
    }

    static create(name){

        if(!name || typeof name !== 'string'){
            return null;
        }
        let lover = new Lover(name);

        Lover.#all_people.push(lover);

        return lover;

    }

    static findByName(name) {
        
        return Lover.#all_people.find((lover) => {
            return lover.getName() == name;
        });
    }

    getName(){
        return this.#name;
    }
    setAge(age){
        this.#age = age;
    }
    setWeakness(weakness){
        this.#weakness = weakness;
    }
    setNumber(number){
        this.#number = number;
    }
    static deleteLover(name){
        Lover.#all_people = Lover.#all_people.filter((i) => i.getName() !== name);
    }
    static getAllLovers(){
        return Lover.#all_people.map(lover => lover.json());
    }

    static getAllLoverNames(){
        return Lover.#all_people.map(lover => lover.name);
    }

    json(){
        return {
            name: this.#name,
            age: this.#age,
            weakness: this.#weakness,
            number: this.#number
        };
    }

}