import Number from './number/number.main';
import Vektor from './vektor/vektor.main';

import * as VOperations from './vektor/vektor.operations';
import * as NOperations from './number/number.operations';

class Complex {
	constructor() {
		Object.assign(this, {
			operations: {
				complex: NOperations,
				vektor: VOperations
			}
		});
	}

	complex(real, imaginary) {
		return new Number(real, imaginary);
	}

	vektor(list) {
		return new Vektor(list);
	}
}

export default new Complex();
