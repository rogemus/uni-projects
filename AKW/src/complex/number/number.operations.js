import Complex from './number.main';
import { multiplication as complexMultiplication } from './number.operations.multiplication';

// Sprzężenie
export function coupling(num) {
	const im = num.imaginary * -1;

	return new Complex(num.real, im);
}

// Moduł
export function module(num) {
	const inner = Math.pow(num.real, 2) + Math.pow(num.imaginary, 2);

	return Math.sqrt(inner);
}

// Dodawanie
export function addition(num1, num2) {
	let rlA, imgA;

	if (num1.isLetterReal() || num2.isLetterReal()) {
		rlA = `${num1.real} + ${num2.real}`;
	} else {
		rlA = num1.real + num2.real;
	}

	if (num1.isLetterReal() && num2.real === 0) {
		rlA = num1.real;
	}

	if (num2.isLetterReal() && num1.real === 0) {
		rlA = num2.real;
	}

	if (num1.isLetterImaginary() || num2.isLetterImaginary()) {
		imgA = `${num1.imaginary} + ${num2.imaginary}`;
	} else {
		imgA = num1.imaginary + num2.imaginary;
	}

	if (num1.isLetterImaginary() && num2.imaginary === 0) {
		imgA = num1.imaginary;
	}

	if (num2.isLetterImaginary() && num1.imaginary === 0) {
		imgA = num2.imaginary;
	}

	return new Complex(rlA, imgA);
}

// Odejmowanie
export function subtraction(num1, num2) {
	const rlS = num1.real - num2.real;
	const imgS = num1.imaginary - num2.imaginary;

	return new Complex(rlS, imgS);
}

// Mnożenie
export function multiplication(num1, num2) {
	return complexMultiplication(num1, num2);
}

// Dzielenie
export function division(num1, num2) {
	const topReal = num1.real * num2.real + num1.imaginary * num2.imaginary;
	const topImaginary = num1.imaginary * num2.real - num1.real * num2.imaginary;
	const bottom = Math.pow(num2.real, 2) + Math.pow(num2.imaginary, 2);

	return `(${new Complex(topReal, topImaginary).display()})/(${bottom})`;
}
