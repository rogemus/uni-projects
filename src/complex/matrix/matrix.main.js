import ComplexNumber from '../number/number.main';

export default class Matrix {
	constructor(row1, row2, row3, row4) {
		this.matrix = [];

		if (row1) {
			this.matrix.push(row1);
		}

		if (row2) {
			this.matrix.push(row2);
		}

		if (row3) {
			this.matrix.push(row3);
		}

		if (row4) {
			this.matrix.push(row4);
		}
	}

	get() {
		return this.matrix;
	}

	display() {
		const helperArr = [];

		this.matrix.forEach(row => {
			let rowHelper = '';

			row.forEach(item => {
				if (item instanceof ComplexNumber) {
					rowHelper = `${rowHelper} ${item.display()}`;
				} else {
					rowHelper = `${rowHelper} ${item}`;
				}
			});

			helperArr.push(`|${rowHelper} |`);
		});

		return helperArr.join('\n');
	}
}
