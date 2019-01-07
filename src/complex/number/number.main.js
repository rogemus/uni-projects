export default class ComplexNumber {
	constructor(real = 0, imaginary = 0) {
		this.real = isNaN(real) ? real : parseFloat(real);
		this.imaginary = isNaN(imaginary) ? imaginary : parseFloat(imaginary);
		this.isRealLetter = false;
		this.isImaginaryLetter = false;

		if (isNaN(this.real)) {
			this.isRealLetter = true;
		}

		if (isNaN(this.imaginary)) {
			this.isImaginaryLetter = true;
		}
	}

	isLetterReal() {
		return this.isRealLetter;
	}

	isLetterImaginary() {
		return this.isImaginaryLetter;
	}

	display() {
		const re = this.real;
		const im = this.imaginary;

		if (im === '0' || im === 0) {
			return `${re}`;
		}

		if (re === 0) {
			return `${im}i`;
		}

		if (im < 0) {
			return `${re} ${im}i`;
		}

		return `${re} + ${im}i`;
	}
}
