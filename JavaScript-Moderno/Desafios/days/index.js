const dayjs = require("dayjs");

const birthday = (date) => {
  const birthday = dayjs(date);
  const today = dayjs();

  const ageYears = today.diff(birthday, "year");
  const newBirthday = birthday.add(ageYears + 1, "year");
  const nextBirthday = newBirthday.diff(today, "day") + 1;

  console.log(`Idade: ${ageYears}`);
  console.log(`Proximo niver: ${newBirthday.format("DD/MM/YYYY")}`);
  console.log(`Dias para fazer: ${ageYears + 1} anos: ${nextBirthday}`);
};

birthday("2001-08-30");
