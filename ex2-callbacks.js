const fs = require("fs");
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

const newEntry = {};
readline.question("Name: ", function(name) {
    newEntry.name = name;
    readline.question("Address: ", function(address) {
        newEntry.address = address;
        readline.question("Zip: ", function(zip) {
            newEntry.zip = zip;
            readline.question("City: ", function(city) {
                newEntry.city = city;
                readline.question("PhoneNR: ", function(phonenr) {
                    newEntry.phonenr = phonenr;
                    console.log(newEntry);
                });
            });
        });
    });
});