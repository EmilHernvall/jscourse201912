let persons = [];
persons.push({
    name: "George",
    birthdate: { month: 2, day: 22, },
});
persons.push({
    name: "John",
    birthdate: {
        month: 10, day: 30,
    },
});
persons.push({
    name: "Thomas",
    birthdate: {
        month: 4, day: 13,
    },
});

function findPersonsByBirthdate(persons, month, day) {
    let output = [];
    for (const person of persons) {
        if (person.birthdate.month === month && person.birthdate.day === day) {
            output.push(person);
        }
    }
    return output;
}

console.log(findPersonsByBirthdate(persons, 4, 13));

function findPersonsByBirthmonth(persons, month) {
    return persons.filter((person) => person.birthdate.month === month);
} 

console.log(findPersonsByBirthmonth(persons, 10));