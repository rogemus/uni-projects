export default class ComplexNumber {
	constructor(real = 0, imaginary = 0) {
		this.real = this.real || parseFloat(real);
		this.imaginary = this.imaginary || parseFloat(imaginary);
	}

	display() {
		const re = this.real;
		const im = this.imaginary;

		if (im === '0') {
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
