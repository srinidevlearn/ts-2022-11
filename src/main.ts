import { Person } from "./person.interface";

let temp: string = "";
let num1: number = 0;
let bool: boolean = false;
let data: string[] = ["abc", "def", "ghi"];
let data2: number[] = [1, 2, 4];
let data3: boolean[] = [false, true, true];
let data4: (string | number | boolean)[] = ["srini", 1, true, "data"];


let p1: Person = {
  name: "Srini",
  age: 20,
};

//@ts-ignore
let personData: Person[] = Array.from({length: 5}, (v, i) => p1);


console.dir(personData)




