let name: string = "John Doe";
let hpPoints: number | string = 95;  // can be a number or a string, but not an array
const isAlive: boolean = true; // constant variable cannot be reassigned

hpPoints = 'FULL';

console.log({name, hpPoints, isAlive});

export {};