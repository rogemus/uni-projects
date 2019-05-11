import Matrix from './matrix.main';
import ComplexNumber from '../number/number.main';
import {
	multiplication as complexNumberMultiplication,
	addition as complexNumberAddition
} from '../number/number.operations';

// Mnożenie
export function multiplication(m1, m2) {
	const matrix1 = m1.get();
	const matrix2 = m2.get();

	// let top1 = complexNumberMultiplication(matrix1[0][0], matrix2[0][0]);
	// let top2 = complexNumberMultiplication(matrix1[0][1], matrix2[1][0]);

	// let bottom1 = complexNumberMultiplication(matrix1[1][0], matrix2[0][0]);
	// let bottom2 = complexNumberMultiplication(matrix1[1][1], matrix2[1][0]);

	// console.log(top1.display(), '|', top2.display())
	// console.log(bottom2.display(), '|', bottom2.display())

	let top = complexNumberAddition(
		complexNumberMultiplication(matrix1[0][0], matrix2[0][0]),
		complexNumberMultiplication(matrix1[0][1], matrix2[1][0])
	);

	if (matrix1.length > 1) {
		let bottom = complexNumberAddition(
			complexNumberMultiplication(matrix1[1][0], matrix2[0][0]),
			complexNumberMultiplication(matrix1[1][1], matrix2[1][0])
		);

		return new Matrix([top], [bottom])
	}

	return new Matrix([top])
}

// Transpozycja
export function transposition(m) {
	const matrix = m.get();

	return new Matrix(
		[matrix[0][0], matrix[1][0]],
		[matrix[0][1], matrix[1][1]]
	);
}

// Pomiar
export function measurement(M0, M1) {
	const M0t = transposition(M0);

	const q2 = new Matrix(
		[new ComplexNumber('a', 0)],
		[new ComplexNumber('b', 0)]
	);

	const q1 = new Matrix(
		[new ComplexNumber('a', 0), new ComplexNumber('b', 0)],
	);

	const MM0q2 = multiplication(M0, q2);
	const q1MM0q2 = multiplication(q1, MM0q2);
	const MM1q2 = multiplication(M1, q2);
	const q1MM1q2 = multiplication(q1, MM1q2);

	const p0 = q1MM0q2;
	const p1 = q1MM1q2;

	const s0 = `${multiplication(M0, q2).display()}\n-------\n  _______\n✔${p0.display()}`;
	const s1 = `${multiplication(M1, q2).display()}\n-------\n  _______\n✔${p1.display()}`;

	console.log('stan 0')
	console.log(s0);
	console.log('/*******************************************/')
	console.log('stan 1')
	console.log(s1);


	return `${s0} ${s1}`
}