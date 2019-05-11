export default class Vektor {
	constructor(vektor = []) {
		this.vektor = vektor;
	}

	getList() {
		return this.vektor;
	}

	display() {
		const formated = this.vektor.map(item => item.display());

		return `[${formated.join(', ')}]`;
	}
}
