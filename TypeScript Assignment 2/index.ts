import { Rocket } from "./Rocket.js";
import { Astronaut } from "./Astronaut.js";
import { Cargo } from "./Cargo.js";

console.log("Hello");
const a1=new Astronaut(75,"Mammooty");
const a2=new Astronaut(60,"Mohanlal");
const c1=new Cargo(40,"Food");
const c2=new Cargo(90,"Machines");
const r1=new Rocket("Chandrayan",10000);
console.log(a1.name);
r1.addAstronaut(a1);
r1.addAstronaut(a2);
r1.addCargo(c1);
r1.addCargo(c2);
console.log(r1.currentMassKg());


