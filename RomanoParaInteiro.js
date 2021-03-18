function romanoToInt(romano) {
  let romanoUpper = romano.toUpperCase();

  const dePara = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let numero = 0;

  for (let index = 0; index < romanoUpper.length; index++) {
    let atual = romanoUpper[index];
    let proximo = romanoUpper[index + 1];

    if (proximo && dePara[proximo] > dePara[atual]) {
      numero -= dePara[atual];
    } else {
      numero += dePara[atual];
    }
  }

  return numero;
}
