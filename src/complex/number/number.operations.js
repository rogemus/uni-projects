import Complex from './number.main';

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
	const rlA = num1.real + num2.real;
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
	const real = num1.real * num2.real - num1.imaginary * num2.imaginary;
	const imaginary = num1.real * num2.imaginary + num1.imaginary * num2.real;

	return new Complex(real, imaginary);
}

// Dzielenie
export function division(num1, num2) {
	const topReal = num1.real * num2.real + num1.imaginary * num2.imaginary;
	const topImaginary =
		num1.imaginary * num2.real - num1.real * num2.imaginary;
	const bottom = Math.pow(num2.real, 2) + Math.pow(num2.imaginary, 2);

	return `(${new Complex(topReal, topImaginary).display()})/(${bottom})`;
}
