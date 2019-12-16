const fs = require("fs");
const promisify = require("util").promisify;
const express = require("express");

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
    const entries = JSON.parse((await readFile("../data.json")).toString());

    res.json({
        ok: true,
        addressbook: entries,
    });
});

app.get("/:id", async (req, res) => {
    const id = +req.params.id;
    const entries = JSON.parse((await readFile("../data.json")).toString());

    res.json({
        ok: true,
        entry: entries[id],
    });
});

app.post("/", async (req, res) => {
    const newEntry = req.body;

    const entries = JSON.parse((await readFile("../data.json")).toString());
    entries.push(newEntry);
    await writeFile("../data.json", JSON.stringify(entries, null, 4));

    res.json({
        ok: true,
        addressbook: entries,
    });
});

app.listen(3000, () => console.log("Server listening"));