// Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.

const people = [
  { name: "Alice", age: 25, gender: "Female" },
  { name: "Bob", age: 30, gender: "Male" },
  { name: "Charlie", age: 22, gender: "Non-Binary" },
  { name: "Diana", age: 27, gender: "Female" },
  { name: "Edward", age: 35, gender: "Male" },
];

const updatePersonAge = (array, personName, newAge) => {
  const person = array.find((p) => p.name === personName);
  if (person) {
    person.age = newAge;
  } else {
    console.log(`Person named ${personName} not found.`);
  }
};

updatePersonAge(people, "Charlie", 26);

console.log(people);
