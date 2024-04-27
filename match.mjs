export class Match{

    #name1
    #name2
    #score

    static #all_matches = []

    constructor(name1, name2, score){

        this.#name1 = name1;
        this.#name2 = name2;
        this.#score = score;
        
    }

    static create(name1, name2, score){

        if(!name1 || typeof name1 !== 'string' || !name2 || typeof name2 !== 'string'){
            return null;
        }
        let match = new Match(name1, name2, score);

        Match.#all_matches.push(match);

        return match;

    }
    static findByName(name1) {
        
        return Match.#all_matches.find((match) => {
            return match.getName1() == name1;
        });
    }
    setName1(name1){
        this.#name1 = name1;
    }
    setName2(name2){
        this.#name2 = name2;
    }
    static deleteMatch(name1, name2){
        Match.#all_matches = Match.#all_matches.filter((i) => i.getName1() !== name1 && i.getName2() !== name2);
    }
    getName1(){
        return this.#name1;
    }
    getName2(){
        return this.#name2;
    }
    getScore(){
        return this.#score;
    }
    
    static getAllMatches(){
        return Match.#all_matches.map(match => match.json());
    }


    json(){
        return {
            name1: this.#name1,
            name2: this.#name2,
            score: this.#score
        };
    }

}