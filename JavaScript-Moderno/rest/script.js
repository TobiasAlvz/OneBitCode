// O rest permite que uma função receba qualquer numero de paramentros.
const rest = (...students) => {
  return students.reduce(function (acumulador, nome) {
    if (acumulador[nome]) {
      acumulador[nome].push(nome);
    } else {
      acumulador[nome] = [nome];
    }
    return acumulador;
  }, {});
};

console.log(rest("Joao", "Igor", "Marcos", "Geraldo"));
