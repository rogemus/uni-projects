import complexMath from './complex/complex';
import { addParagraph, addHeading, addLine, clear } from './utils/dom';

const { complex, vektor, matrix } = complexMath.operations;

const a = complexMath.complex(2, 3);
const b = complexMath.complex(2, 2);
const c1 = complexMath.complex(2, 2);
const c2 = complexMath.complex('a', 'b');
const gamma = complexMath.complex(3, 2);

const w = complexMath.vektor([complexMath.complex(1, 2), complexMath.complex(3, -4)]);

const v = complexMath.vektor([complexMath.complex(-1, -1), complexMath.complex(2, 1)]);

const gateX = complexMath.matrix(
	[complexMath.complex(0, 0), complexMath.complex(1, 0)],
	[complexMath.complex(1, 0), complexMath.complex(0, 0)]
);
const gateY = complexMath.matrix(
	[complexMath.complex(0, 0), complexMath.complex(0, -1)],
	[complexMath.complex(0, 1), complexMath.complex(0, 0)]
);
const gateZ = complexMath.matrix(
	[complexMath.complex(1, 0), complexMath.complex(0, 0)],
	[complexMath.complex(0, 0), complexMath.complex(-1, 0)]
);

const matrixA = complexMath.matrix(
	[complexMath.complex('a', 0)],
	[complexMath.complex('b', 0)]
);

clear();

//--------------------------------------------------------------

addHeading('#️⃣ LICZBY');

// addParagraph(`a = ${a.display()}`);
// addParagraph(`b = ${b.display()}`);
// addParagraph(`c1 = ${c1.display()}`);
// addParagraph(`c2 = ${c2.display()}`);
// addParagraph(`a + b = ${complex.addition(a, b).display()}`);
// addParagraph(`a - b = ${complex.subtraction(a, b).display()}`);
// addParagraph(`a * b = ${complex.multiplication(a, b).display()}`);
// addParagraph(`c1 * c2 = ${complex.multiplication(c1, c2).display()}`);
// addParagraph(`a / b = ${complex.division(a, b)}`);
// addParagraph(`sprzężenie a = ${complex.coupling(a).display()}`);
// addParagraph(`| a | = ${complex.module(a)}`);

//--------------------------------------------------------------

// addLine();
// addHeading('🔀 VEKTORY');

// addParagraph(`Wektor V = ${v.display()}`);
// addParagraph(`Wektor W = ${w.display()}`);
// addParagraph(`W + V = ${vektor.addition(w, v).display()}`);
// addParagraph(`W - V = ${vektor.subtraction(w, v).display()}`);
// addParagraph(`gamma * W = ${vektor.scalarMultiplicatio(w, gamma).display()}`);
// addParagraph(`< V | W > = ${vektor.scalarProduct(v, w).display()}`);

//--------------------------------------------------------------

addLine();
addHeading('🔢 MACIERZE');

addParagraph(`Bramka X = <br /> ${gateX.display()}`);
addParagraph(`Bramka Y = <br /> ${gateY.display()}`);
addParagraph(`Bramka Z = <br /> ${gateZ.display()}`);
addParagraph(`A = <br /> ${matrixA.display()}`);

addParagraph(`A * X = <br />  ${matrix.multiplication(gateX, matrixA)}`);
addParagraph(`A * Y = <br />  ${matrix.multiplication(gateY, matrixA)}`);
addParagraph(`A * Z = <br />  ${matrix.multiplication(gateZ, matrixA)}`);

//--------------------------------------------------------------
