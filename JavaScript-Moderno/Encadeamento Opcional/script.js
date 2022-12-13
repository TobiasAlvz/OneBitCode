const user = {
  name: "John Doe",
  email: "doejohn@email.com",
  friends: [
    {
      name: "Mary",
      address: {
        street: "Some Street",
        number: 89,
      },
    },
  ],
  age: 42,
  phone: {
    countryCode: "+55",
    ddd: "22",
    number: "998765432",
  },
};

// Ele evita o print de erros, a "?" serve para verificar se a referencia é nula,
// Se for nula, ele para e retorna.
console.log(user.friends[0].phone?.ddd);
console.log(user?.brothers?.length);

console.log(user.brothers?.[5].name);
