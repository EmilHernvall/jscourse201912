const fs = require("fs");

fs.readFile("data.json", function(err, data) {
    if (err) {
        console.log(err);
        return;
    }

    const entries = JSON.parse(data.toString());
    for (const entry of entries) {
        console.log(`Name: ${entry.name}`);
        console.log(`Address: ${entry.address}`);
        console.log(`         ${entry.zip} ${entry.city}`);
        console.log(`PhoneNR: ${entry.phonenr}`);
        console.log();
    }
});