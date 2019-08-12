function getYearOfBirth(age) {
  if (age < 0) {
    throw new Error('Age can not be negative!!!');
  }
  return 2019 - age;
}

function createGreeting(name, age) {
  if (name === undefined || age === undefined) {
    throw new Error('Please enter in a valid name and age.');
  } else if (typeof name !== 'string' || typeof age !== 'number') {
    throw new Error('Please enter in a valid name and age...');
  } else {
    return `Hi, my name is ${name} and I'm ${age} years old and I was born in ` + getYearOfBirth(age) + '.';
  }
}

try {
  const greeting1 = createGreeting('Steven', 26);
} catch (error) {
  console.error(error);
}

const greeting1 = createGreeting('Steven', 26);
console.log(greeting1);