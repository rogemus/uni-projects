import Number from './number/number.main';
import Vektor from './vektor/vektor.main';
import Matrix from './matrix/matrix.main';

import * as VOperations from './vektor/vektor.operations';
import * as NOperations from './number/number.operations';
import * as MOperations from './matrix/matrix.operations';

class Complex {
	constructor() {
		Object.assign(this, {
			operations: {
				complex: NOperations,
				vektor: VOperations,
				matrix: MOperations
			}
		});
	}

	complex(real, imaginary) {
		return new Number(real, imaginary);
	}

	vektor(list) {
		return new Vektor(list);
	}

	matrix(row1, row2, row3, row4) {
		return new Matrix(row1, row2, row3, row4);
	}
}

export default new Complex();
