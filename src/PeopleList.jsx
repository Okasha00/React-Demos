import React from 'react';

function PeopleList() {
  const people = [
    { username: "Sameer", age: 25 },
    { username: "Alice", age: 30 },
    { username: "Bob", age: 35 },
  ];

  return (
    <div>
      {people.map((person) => (
        <h1 key={person.username}>
          Hello, {person.username}, You are {person.age} year old
        </h1>
      ))}
    </div>
  );
}

export default PeopleList;
