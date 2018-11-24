import complexMath from './complex/complex';
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

console.log('-------------------------------------------');
console.log('------------------LICZBY-------------------');
console.log('-------------------------------------------');

console.log('Liczba a =', a.display());
console.log('Liczba b =', b.display());
console.log('a + b = ', complex.addition(a, b).display());
console.log('a - b = ', complex.subtraction(a, b).display());
console.log('a * b = ', complex.multiplication(a, b).display());
console.log('a / b = ', complex.division(a, b));
console.log('sprzezenie a ', complex.coupling(a).display());
console.log('modul a ', complex.module(a));

console.log('-------------------------------------------');
console.log('------------------VEKTORY------------------');
console.log('-------------------------------------------');

console.log('Wektor V = ', v.display());
console.log('Wektor W = ', w.display());
console.log('W + V = ', vektor.addition(w, v).display());
console.log('W - V = ', vektor.subtraction(w, v).display());
console.log('gamma *W = ', vektor.scalarMultiplicatio(w, gamma).display());
console.log('<V|W> = ', vektor.scalarProduct(v, w).display());
