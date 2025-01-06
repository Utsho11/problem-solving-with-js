// Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.
const people = [
  { name: "Alice", age: 25, gender: "Female" },
  { name: "Bob", age: 30, gender: "Male" },
  { name: "Charlie", age: 22, gender: "Non-Binary" },
  { name: "Diana", age: 27, gender: "Female" },
  { name: "Edward", age: 35, gender: "Male" },
];

function filterFemales(people) {
  return people.filter((person) => person.gender === "Female");
}

console.log(filterFemales(people));
