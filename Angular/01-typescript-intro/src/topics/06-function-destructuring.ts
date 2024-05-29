export interface Product {
	description: string;
	price: number;
}

const phone: Product = {
	description: "iPhone 12",
	price: 999,
}

const tablet: Product = {
	description: "iPad Pro",
	price: 1012,
}

interface TaxCalculationOptions {
	products: Product[];
	taxRate: number;
}

//function taxCalculation(options: TaxCalculationOptions): [number, number] {
//function taxCalculation({taxRate, products}: TaxCalculationOptions): [number, number] {
export function taxCalculation(options: TaxCalculationOptions): [number, number] {
	const {taxRate, products} = options
	let total = 0;

	products.forEach(({ price }) => {
		total += price
	});

	return [total, total * taxRate]
}

const shoppingCart = [phone, tablet];
const tax = 0.15;

const [total, totalTax] = taxCalculation({
	products: shoppingCart,
	taxRate: tax
});

console.log('total:', total)
console.log('tax:', totalTax)
