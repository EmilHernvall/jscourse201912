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

async function readValidatedInput(question, validator) {
    while (true) {
        const input = await readInput(question);
        if (!validator(input)) {
            console.log("Does not match requirements");
            continue;
        }
        return Promise.resolve(input);
    }
}

function validateNotEmpty(input) {
    return input.length !== 0;
}

function validateZipCode(input) {
    const validCharacters = "0123456789 ";
    for (let i = 0; i < input.length; i++) {
        const c = input.charAt(i);
        if (validCharacters.indexOf(c) === -1) {
            return false;
        }
    }
    return true;
}

async function main() {
    const newEntry = {};

    newEntry.name = await readValidatedInput("Name: ", validateNotEmpty);
    newEntry.address = await readValidatedInput("Address: ", validateNotEmpty);
    newEntry.zip = await readValidatedInput("Zip: ", validateZipCode);
    newEntry.city = await readValidatedInput("City: ", validateNotEmpty);
    newEntry.phonenr = await readValidatedInput("PhoneNR: ", validateNotEmpty);
  
    // read file from disk
    let entries;
    try {
        const entriesBuffer = await readFile("data.json");
        entries = JSON.parse(entriesBuffer.toString());
    } catch (e) {
        console.log(e);
        entries = [];
    }

    // add newEntry to array
    entries.push(newEntry);

    // write file to disk
    await writeFile("data.json", JSON.stringify(entries, null, 4));
}

main();