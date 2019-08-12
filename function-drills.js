function getYearOfBirth(age) {
  if (age < 0) {
    throw new Error('Age can not be negative!!!');
  }
  return 2019 - age;
}

function createGreeting(name, age) {
  return `Hi, my name is ${name} and I'm ${age} years old and I was born in ` + getYearOfBirth(age) + '.';
}

try {
  const greeting1 = createGreeting('Steven', -12);
} catch (error) {
  console.error(error);
}

console.log(greeting1);


