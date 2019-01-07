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
	let rlA;

	if (num1.isLetterReal() || num2.isLetterReal()) {
		rlA = `${num1.real} + ${num2.real}`;
	} else {
		rlA = num1.real + num2.real;
	}

	const imgA = num1.imaginary + num2.imaginary;

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
	let real;
	let imaginary;

	complexMultiplication(num1, num2);

	// if real1 nan && real2 nan
	// img1 0 && img2 nan
	// img1 nan && img2 0
	// img1 n && img2 nan
	// img1 n && img n
	// img nan && img2 n

	// if real1 n || 0 && real2 n || 0
	// img1 n || 0 && img2 n || 0

	// if real n && real2
	// img1 0 && img2 nan
	// img1 nan && img2 0
	// img1 n && img2 0
	// img1 0 && img2 n
	// img1 n && img2 nan
	// img1 nan && img2 n

	real = num1.real * num2.real - num1.imaginary * num2.imaginary;
	imaginary = num1.real * num2.imaginary + num1.imaginary * num2.real;

	return new Complex(real, imaginary);
}

// Dzielenie
export function division(num1, num2) {
	const topReal = num1.real * num2.real + num1.imaginary * num2.imaginary;
	const topImaginary = num1.imaginary * num2.real - num1.real * num2.imaginary;
	const bottom = Math.pow(num2.real, 2) + Math.pow(num2.imaginary, 2);

	return `(${new Complex(topReal, topImaginary).display()})/(${bottom})`;
}
