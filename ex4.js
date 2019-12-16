const fs = require("fs");
const promisify = require("util").promisify;

const readFile = promisify(fs.readFile);

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

async function main() {
    try {
        const query = await readInput("Query: ");

        const entries = JSON.parse((await readFile("data.json")).toString());

        // const matchingEntries = entries.filter((entry) => entry.name.match(query));
        // Equivalent to:
        // const matchingEntries = entries.filter(function(entry) {
        //    return entry.name.match(query);
        // });

        // for (const entry of matchingEntries) {
        //    console.log(`Name: ${entry.name}`);
        //    console.log(`Address: ${entry.address}`);
        //    console.log(`         ${entry.zip} ${entry.city}`);
        //    console.log(`PhoneNR: ${entry.phonenr}`);
        //    console.log();
        // }

        const hits = entries
            .filter((entry) => entry.name.match(query))
            .map((entry) => `${entry.name} from ${entry.city}`);

        console.log("Hits: ");
        for (const hit of hits) {
            console.log(hit);
        }

    } catch (e) {
        console.log(e);
    }
}

main();