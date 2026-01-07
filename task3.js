export class Player {
    name;
    level;

    constructor(name,level) {
      this.name = name;
      this.level = level;
    }
    set name(value){
      this.name=value
      
    }
    get name(){
      return this.name;
    }
    set level (value){
      this.level=value
    }
    get level(){
      return this.level;
    }
    info(){
      console.log=(`${this.name} has reached lvl ${this.level}`);
    }
  }
  const player1 = new Player("Alexis",30);
  console.log(player1.info);