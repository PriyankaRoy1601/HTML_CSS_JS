import { Rocket } from "./Rocket.js";
import { Astronaut } from "./Astronaut.js";
import { Cargo } from "./Cargo.js";


var name1=prompt("Enter astronaut 1s name");
var weight=prompt("Enter weight of astronaut 1:");
const astronaut1=new Astronaut(parseInt(weight,10),name1);
console.log(astronaut1);
const astronaut2=new Astronaut(60,"Mohanlal");
const cargo1=new Cargo(40,"Food");
const cargo2=new Cargo(90,"Machines");
const rocket1=new Rocket("Chandrayan",10000);
rocket1.addAstronaut(astronaut1);
rocket1.addAstronaut(astronaut2);
rocket1.addCargo(cargo1);
rocket1.addCargo(cargo2);
console.log(astronaut1);
console.log(rocket1.currentMassKg());


