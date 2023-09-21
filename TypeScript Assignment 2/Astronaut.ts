import { IPayload } from "./Payload.js";
export class Astronaut implements IPayload{

    constructor(public massKg:number,public name:string){
        this.massKg=massKg;
        this.name=name;
    }
}

