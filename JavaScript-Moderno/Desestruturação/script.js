let people = {
  name: "Igor",
  phone: 1233123,
  status: "Solteiro",
  cidade: "Tavares",
  pais: ["João", "Maria"],
};

let people1 = {
  name: "Pedro",
  phone: 5454,
  status: "Casado",
  cidade: "Tavares",
};

const { cidade, pais } = people;
console.log(cidade, pais);

const [pai, mae] = pais;
console.log(pai, mae);

const creatUser = ({ name, phone, cidade, pais }) => {
  const id = Math.floor(Math.random() * 9999);
  return {
    id,
    name,
    phone,
    cidade,
    pais,
  };
};
const igor = creatUser(people);

console.log(igor);
