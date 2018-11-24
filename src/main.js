import complexMath from './complex/complex';
import { addParagraph, addHeading, addLine } from './utils/dom';

const { complex, vektor } = complexMath.operations;

const a = complexMath.complex(2, 3);
const b = complexMath.complex(2, 2);
const gamma = complexMath.complex(3, 2);

const w = complexMath.vektor([
	complexMath.complex(1, 2),
	complexMath.complex(3, -4)
]);

const v = complexMath.vektor([
	complexMath.complex(-1, -1),
	complexMath.complex(2, 1)
]);

addHeading('LICZBY');

addParagraph(`a = ${a.display()}`);
addParagraph(`b = ${b.display()}`);
addParagraph(`a + b = ${complex.addition(a, b).display()}`);
addParagraph(`a - b = ${complex.subtraction(a, b).display()}`);
addParagraph(`a * b = ${complex.multiplication(a, b).display()}`);
addParagraph(`a / b = ${complex.division(a, b)}`);
addParagraph(`sprzężenie a = ${complex.coupling(a).display()}`);
addParagraph(`| a | = ${complex.module(a)}`);

addLine();
addHeading('VEKTORY');

addParagraph(`Wektor V = ${v.display()}`);
addParagraph(`Wektor W = ${w.display()}`);
addParagraph(`W + V = ${vektor.addition(w, v).display()}`);
addParagraph(`W - V = ${vektor.subtraction(w, v).display()}`);
addParagraph(`gamma * W = ${vektor.scalarMultiplicatio(w, gamma).display()}`);
addParagraph(`< V | W > = ${vektor.scalarProduct(v, w).display()}`);
