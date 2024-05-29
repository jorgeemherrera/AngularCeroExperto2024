export interface Passenger {
	name: string;
	children?: string[];
}

const passenger1: Passenger = {
	name: "Jorge",
}

const passenger2: Passenger = {
	name: "Jhon",
	children: ["Jhon Jr", "Jhon Jr Jr"]
}

const printChildren = (passenger: Passenger) => {
	const howManyChildren = passenger.children?.length || 0;
	console.log(passenger.name, howManyChildren)
}

printChildren(passenger2)