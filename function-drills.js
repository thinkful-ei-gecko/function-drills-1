function getYearOfBirth(age) {
    return 2019 - age;
}

function createGreeting(name, age) {
    return `Hi, my name is ${name} and I'm ${age} years old and I was born in ` + getYearOfBirth(age) + '.';
}

const greeting1 = createGreeting();
console.log(greeting1);


