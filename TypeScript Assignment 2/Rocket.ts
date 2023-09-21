import { Astronaut } from "./Astronaut.js";
import { Cargo } from "./Cargo.js";
import { Payload } from "./Payload.js";
class Rocket {
     cargoItems:Cargo[]=[];
    astronauts:Astronaut[]=[];
    constructor( public name:string, public totalCapacityKg:number){
        this.name=name;
        this.totalCapacityKg=totalCapacityKg;
        
        
    }

    sumMass(items: Payload[]): number {
        var sum=0;
        for(var i in items){
            sum=sum+items[i].massKg;
        }
        return sum;
      }
    
      currentMassKg(): number {
        var sumA=this.sumMass(this.astronauts);
        var sumC=this.sumMass(this.cargoItems);
        return sumA+sumC;
    }
    
      canAdd(item: Payload): boolean {

        return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
      }
    
      addCargo(cargo: Cargo): boolean {
        if (this.canAdd(cargo)) {
          this.cargoItems.push(cargo);
          return true;
        }
        return false;
      }
    
      addAstronaut(a: Astronaut): boolean {
        if (this.canAdd(a)) {
          this.astronauts.push(a);
          return true;
        }}
    }

    export{Rocket}