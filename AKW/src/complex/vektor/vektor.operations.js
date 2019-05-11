import Vektor from './vektor.main';
import {
	addition as complexAddition,
	subtraction as complexSubtraction,
	multiplication as complexMultiplication,
	coupling as complexCoupling
} from '../number/number.operations';

// Dodawanie
export function addition(vektor1, vektor2) {
	const vekList1 = vektor1.getList();
	const vekList2 = vektor2.getList();
	const newV = [];

	vekList1.forEach((num, index) => {
		const num2 = vekList2[index];
		newV.push(complexAddition(num, num2));
	});

	return new Vektor(newV);
}

// Odejmowanie
export function subtraction(vektor1, vektor2) {
	const vekList1 = vektor1.getList();
	const vekList2 = vektor2.getList();
	const newV = [];

	vekList1.forEach((num, index) => {
		const num2 = vekList2[index];
		newV.push(complexSubtraction(num, num2));
	});

	return new Vektor(newV);
}

// Mnożenie przez skalar
export function scalarMultiplicatio(vektor, skalar) {
	const vekList = vektor.getList();
	const newV = [];

	vekList.forEach((num, index) => {
		newV.push(complexMultiplication(num, skalar));
	});

	return new Vektor(newV);
}

// Iloczyn skalarny
export function scalarProduct(vektor1, vektor2) {
	const vekList1 = vektor1.getList();
	const vekList2 = vektor2.getList();
	const newV = [];
	let dot = 0;

	vekList1.forEach((num, index) => {
		const num2 = vekList2[index];
		newV.push(complexMultiplication(num, complexCoupling(num2)));
	});

	for (let i = 0; i < newV.length; i++) {
		if (i === 0) {
			dot = complexAddition(newV[i], newV[i + 1]);
		} else if (i === 1) {
		} else {
			dot = complexAddition(newV[i]);
		}
	}

	return dot;
}
