import { Product, taxCalculation } from './06-function-destructuring'

const shoppinCart: Product[] = [
	{
		description: 'Nokia',
		price: 50,
	},
	{
		description: 'Xbox',
		price: 350,
	}
];

let taxValue = 0.15

const [total, tax] = taxCalculation({
	products: shoppinCart,
	taxRate: taxValue
});

console.log('total:', total)
console.log('Tax:', tax)