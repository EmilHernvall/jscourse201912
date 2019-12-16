const fs = require("fs");
const promisify = require("util").promisify;

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

function readInput(question) {
    return new Promise(function(resolve) {
        readline.question(question, function(input) {
            resolve(input);
        });
    });
}

const newEntry = {};
readInput("Name: ")
    .then(function(name) {
        newEntry.name = name;
        return readInput("Address: ");
    }).then(function(address) {
        newEntry.address = address;
        return readInput("Zip: ");
    }).then(function(zip) {
        newEntry.zip = zip;
        return readInput("City: ");
    }).then(function(city) {
        newEntry.city = city;
        return readInput("PhoneNR: ");
    }).then(function(phonenr) {
        newEntry.phonenr = phonenr;
        
        return readFile("data.json");
    }).then(function(data) {
        const entries = JSON.parse(data.toString());
        entries.push(newEntry);

        return writeFile("data.json", JSON.stringify(entries, null, 4));
    }).then(function() {
        console.log("OK");
        readline.close();
    });
