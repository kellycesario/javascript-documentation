function cobraKai() {
  console.log("Cobra Kai Never Dies");
}
cobraKai();

const eagleFang = function () {
  console.log("Eagle Fly Free");
};
eagleFang();

const miyagiDo = () => {
  console.log("Bonsai!!! Banzai!!!");
};
miyagiDo();

function potencia(base, exp) {
  return Math.pow(base, exp);
}

const bits8 = potencia(2, 8);
console.log(bits8);

const potencia2 = (base) => (exp) => Math.pow(base, exp);
console.log(potencia2(2)(10));

function sum(a, b, c) {
  return a + b + c;
}
console.log(sum(3, 4, 5));

function calcular(x) {
  return function (y) {
    return function (fn) {
      return fn(x, y);
    };
  };
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

const r1 = calcular(10)(5)(subtrair);
const r2 = calcular(10)(5)(multiplicar);
console.log(r1, r2);