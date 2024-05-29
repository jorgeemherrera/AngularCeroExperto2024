
function addNumbers(a: number, b: number) {
	return a + b;
}

const result = addNumbers(1,2);

console.log({result})

//Arrow functions

const addNumbersArrow = (a: number, b: number):string => {
	return `${a + b}`; // retornar un string
}

const resultArrow: string = addNumbersArrow(1,2);

console.log({resultArrow})

function multiply(firstNumber: number, secondNumber?: number, base: number = 2) {
	return firstNumber * base;
}

const resultMultiply: number = multiply(5);

console.log({resultMultiply})

// funciones con objetos como argumento

interface Character {
	name: string;
	hp: number;
	showHp: () => void
}
const healCharacter = (character: Character, amount: number) => {
	character.hp += amount;
}

const strider: Character = {
	name: 'Strider',
	hp: 55,
	showHp: () => {
		console.log(`Strider has ${strider.hp} hp`)
	}
}

healCharacter(strider, 10)

strider.showHp();

export {};