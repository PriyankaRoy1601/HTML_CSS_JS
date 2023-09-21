import { IPayload } from "./Payload.js";

export class Cargo implements IPayload{
    constructor(public massKg:number,public material:string){
        this.massKg=massKg;
        this.material=material;
    }
}

