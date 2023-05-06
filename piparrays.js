// Given an array of strings, use a function to reverse all 
// the elements in the string in ascending order and the specific elements in descending order




// Given an array of objects, each object representing a person with a name and age property,
// write a function that returns the sum of all people who are less than 18 years in js.
// const people = [
//   { name: 'Alice', age: 17 },
//   { name: 'Eunice', age: 22 },
//   { name: 'Charlie', age: 14 },
//   { name: 'Max', age: 19 },
// ];

// function Array(people){
//     return people.filter(person=>person.age<=18,person=>person.name)
//     const people = [
//         { name: 'Alice', age: 17 },
//         { name: 'Eunice', age: 22 },
//         { name: 'Charlie', age: 14 },
//         { name: 'Max', age: 19 },
//       ];
//       console.log(Array(people))
// }

// Array(people)
function names(people){
    return people.filter(people=>people.age>=18,
      people=>people.name)
  }
      const people=[
          { name: 'Alice', age: 17 },
            { name: 'Eunice', age: 22 },
            { name: 'Charlie', age: 14 },
            { name: 'Max', age: 19 },
      ]
  console.log(names(people))

// Given an array of objects, where each object represents an employee with an id, name, and salary property, write a function that returns a new array of employee objects 
// sorted by their salary in ascending order. in js

function sortEmployeesBySalaryAscending(employees) {
    const sortedEmployees = employees.slice().sort((a, b) => a.salary - b.salary);
    return sortedEmployees;
  }


  const employees = [
    { id: 1, name: 'Alice', salary: 50000 },
    { id: 2, name: 'Bob', salary: 60000 },
    { id: 3, name: 'Charlie', salary: 45000 },
    { id: 4, name: 'Dave', salary: 75000 },
  ];
  
  const sortedEmployees = sortEmployeesBySalaryAscending(employees);
  console.log(sortedEmployees);