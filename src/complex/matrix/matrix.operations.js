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

	let top = complexNumberAddition(
		complexNumberMultiplication(matrix1[0][0], matrix2[0][0]),
		complexNumberMultiplication(matrix1[0][1], matrix2[1][0])
	);
	let bottom = complexNumberAddition(
		complexNumberMultiplication(matrix1[1][0], matrix2[0][0]),
		complexNumberMultiplication(matrix1[1][1], matrix2[1][0])
	);

	let top1 = complexNumberMultiplication(matrix1[0][0], matrix2[0][0]);
	let top2 = complexNumberMultiplication(matrix1[0][1], matrix2[1][0]);

	let bottom1 = complexNumberMultiplication(matrix1[1][0], matrix2[0][0]);
	let bottom2 = complexNumberMultiplication(matrix1[1][1], matrix2[1][0]);

	console.log(top1.display(), '|', top2.display());
	console.log(bottom1.display(), '|', bottom2.display());

	const newMatrix = new Matrix([top], [bottom]);

	console.log(newMatrix.display());
	return newMatrix.display();
}
