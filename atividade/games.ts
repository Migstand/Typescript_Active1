interface Videogame{
    ligar(): void;
    mover(x:number, y:number): string;
}

export class NintendoSwitch implements Videogame{
    joyconred : number;
    joyconblue : number;

    constructor(red: number, blue: number){
        this.joyconblue = blue;
        this.joyconred = red;
        this.ligar();
    }
    
    ligar(){
        console.log("Nintendo ligando")
    }

    mover(x:number, y:number): string {
        this.joyconblue = x;
        this.joyconred = y;
        if (x < 0){
            return ("Mario Andou para esquerda")
        }
        if (x > 0){
            return ("Mario Andou para direita")
        }
        if (y < 0){
            return ("Mario Andou para baixa")
        }
        if (y > 0){
            return ("Mario Andou para cima")
        }

        return "Parado"

    }
    

}

export class Xbox implements Videogame{
    leftstick : number;
    rightstick: number;
    constructor(x: number, y: number){
        this.rightstick = y;
        this.leftstick = x;
        this.ligar();
    }

    ligar(){
        console.log("Xbox ligando")
    }

    mover(x:number, y:number): string {
        this.leftstick = x;
        this.rightstick = y;
        if (x < 0){
            return ("Masterchief Andou para esquerda")
        }
        if (x > 0){
            return ("Masterchief Andou para direita")
        }
        if (y < 0){
            return ("Masterchief Andou para baixa")
        }
        if (y > 0){
            return ("Masterchief Andou para cima")
        }

        return "Parado"

    }
}

let xbox: Xbox = new Xbox(0, 0);
let nin: NintendoSwitch = new NintendoSwitch(0, 0);

console.log(xbox.mover(1, 1));
console.log(nin.mover(-1, -1));