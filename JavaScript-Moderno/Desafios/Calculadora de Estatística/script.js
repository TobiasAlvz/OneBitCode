const simpleMedia = (...num) => {
  const sum = num.reduce((acumulador, num) => acumulador + num, 0);
  return sum / num.length;
};

console.log(`Média Aritmétrica Simples: ${simpleMedia(2, 6, 3, 7, 4)}`);

const weightedMedia = (...entries) => {
  const sum = entries.reduce(
    (acumulador, { num, weight }) => acumulador + num * weight,
    0
  );
  const sumWeigth = entries.reduce(
    (acumulador, entry) => acumulador + entry.weight,
    0
  );
  return sum / sumWeigth;
};

console.log(
  `Média Aritmétrica Ponderada: ${weightedMedia(
    { num: 7, weight: 2 },
    { num: 9, weight: 5 },
    { num: 3, weight: 1 }
  )}`
);

const median = (...numbers) => {
  const orderedNumbers = [...numbers].sort((a, b) => a - b);
  const middle = Math.floor(orderedNumbers.length / 2);
  if (orderedNumbers.length % 2 !== 0) {
    return orderedNumbers[middle];
  }
  const firstMedian = orderedNumbers[middle - 1];
  const secondMedian = orderedNumbers[middle];
  return average(firstMedian, secondMedian);
};

console.log(`Mediana: ${median(2, 5, 99, 4, 42, 7)}`);
console.log(`Mediana: ${median(15, 14, 8, 7, 3)}`);

const mode = (...numbers) => {
  // [ [n, qtd], [n, qtd], [n, qtd] ]
  const quantities = numbers.map((num) => [
    num,
    numbers.filter((n) => num === n).length,
  ]);
  quantities.sort((a, b) => b[1] - a[1]);
  return quantities[0][0];
};

console.log(
  `Moda: ${mode(
    1,
    1,
    99,
    99,
    99,
    99,
    99,
    99,
    99,
    99,
    5,
    4,
    9,
    7,
    4,
    3,
    5,
    2,
    4,
    0,
    4
  )}`
);
