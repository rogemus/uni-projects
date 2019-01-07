import Complex from './number.main';

// Mnożenie
export function multiplication(num1, num2) {
	let real;
	let imaginary;

	if (num1.isLetterReal() && num2.isLetterReal()) {
		if (num1.imaginary === 0 && (num2.isLetterImaginary() || num2.imaginary > 0)) {
			real = `${num1.real} * ${num2.real}`;
			imaginary = `${num1.real} * ${num2.imaginary}`;

			return new Complex(real, imaginary);
		}

		if (num1.imaginary === 0 && num2.imaginary === 0) {
			real = `${num1.real} * ${num2.real}`;
			imaginary = 0;

			return new Complex(real, imaginary);
		}

		if (
			(num1.isLetterImaginary() || num1.imaginary > 0) &&
			(num2.isLetterImaginary() || num2.imaginary > 0)
		) {
			real = `${num1.real} * ${num2.real} - ${num1.imaginary} * ${num2.imaginary}`;
			imaginary = `${num1.real} * ${num2.imaginary} + ${num1.imaginary * num2.real}`;

			return new Complex(real, imaginary);
		}

		if ((num1.imaginary > 0 || num1.isLetterImaginary()) && num2.imaginary === 0) {
			real = `${num1.real} * ${num2.real}`;
			imaginary = `${num1.imaginary} * ${num2.real}`;

			return new Complex(real, imaginary);
		}

		return;
	}

	if (num1.isLetterReal() && num2.real > 0) {
		if (num1.imaginary === 0 && (num2.isLetterImaginary() || num2.imaginary > 0)) {
			real = `${num1.real} * ${num2.real}`;
			imaginary = `${num1.real} * ${num2.imaginary}`;

			return new Complex(real, imaginary);
		}

		if (num1.imaginary === 0 && num2.imaginary === 0) {
			real = `${num1.real} * ${num2.real}`;
			imaginary = 0;

			return new Complex(real, imaginary);
		}

		if (num1.imaginary > 0 && (num2.isLetterImaginary() || num2.imaginary > 0)) {
			real = `${num1.real} * ${num2.real} - ${num1.imaginary} * ${num2.imaginary}`;
			imaginary = `${num1.real} * ${num2.imaginary} + ${num1.imaginary * num2.real}`;

			return new Complex(real, imaginary);
		}

		if ((num1.imaginary > 0 || num1.isLetterImaginary()) && num2.imaginary === 0) {
			real = `${num1.real} * ${num2.real}`;
			imaginary = num1.imaginary * num2.real;

			return new Complex(real, imaginary);
		}

		if (num1.isLetterImaginary() && (num2.imaginary > 0 || num2.isLetterImaginary())) {
			real = `${num1.real} * ${num2.real} - ${num1.imaginary} * ${num2.imaginary}`;
			imaginary = `${num1.real} * ${num2.imaginary} + ${num1.imaginary} * ${num2.real}`;

			return new Complex(real, imaginary);
		}

		return;
	}

	if (num1.real > 0 && num2.isLetterReal()) {
		if (num1.imaginary === 0 && num2.isLetterImaginary()) {
			real = `${num1.real} * ${num2.real}`;
			imaginary = `${num1.real} * ${num2.imaginary}`;

			return new Complex(real, imaginary);
		}

		if (num1.imaginary === 0 && num2.imaginary > 0) {
			real = `${num1.real} * ${num2.real}`;
			imaginary = num1.real * num2.imaginary;

			return new Complex(real, imaginary);
		}

		if (num1.imaginary === 0 && num2.imaginary === 0) {
			real = `${num1.real} * ${num2.real}`;
			imaginary = 0;

			return new Complex(real, imaginary);
		}

		if (
			(num1.imaginary > 0 || num1.isLetterImaginary()) &&
			(num2.isLetterImaginary() || num2.imaginary > 0)
		) {
			real = `${num1.real} * ${num2.real} - ${num1.imaginary * num2.imaginary}`;
			imaginary = `${num1.real} * ${num2.imaginary} + ${num1.imaginary * num2.real}`;

			return new Complex(real, imaginary);
		}

		if (num1.imaginary > 0 && num2.imaginary === 0) {
			real = `${num1.real} * ${num2.real}`;
			imaginary = `${num1.imaginary} * ${num2.real}`;

			return new Complex(real, imaginary);
		}

		if (num1.isLetterImaginary() && num2.imaginary === 0) {
			real = `${num1.real} * ${num2.real} - ${num1.imaginary} * ${num2.imaginary}`;
			imaginary = `${num1.imaginary} * ${num2.real}`;

			return new Complex(real, imaginary);
		}

		return;
	}

	if (num1.real === 0 && num2.isLetterReal()) {
		real = `${num1.real} * ${num2.real} - ${num1.imaginary * num2.imaginary}`;
		imaginary = `${num1.real} * ${num2.imaginary} + ${num1.imaginary * num2.real}`;

		return;
	}

	if (num1.isLetterReal() && num2.real === 0) {
		if (num1.imaginary === 0 && num2.isLetterImaginary()) {
			real = 0;
			imaginary = 0;

			return new Complex(real, imaginary);
		}

		if (num1.imaginary === 0 && num2.imaginary === 0) {
			real = 0;
			imaginary = 0;

			return new Complex(real, imaginary);
		}

		if (num1.imaginary === 0 && num2.imaginary > 0) {
			real = `${num1.real * num2.real}`;
			imaginary = `${num1.real * num2.imaginary}`;

			return new Complex(real, imaginary);
		}

		if (num1.imaginary === 0 && num2.isLetterImaginary()) {
			real = 0;
			imaginary = `${num1.real} * ${num2.imaginary}`;

			return new Complex(real, imaginary);
		}
	}

	real = num1.real * num2.real - num1.imaginary * num2.imaginary;
	imaginary = num1.real * num2.imaginary + num1.imaginary * num2.real;

	return new Complex(real, imaginary);
}
