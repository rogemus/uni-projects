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

	const newMatrix = new Matrix([top], [bottom]);

	return newMatrix.display();
}
