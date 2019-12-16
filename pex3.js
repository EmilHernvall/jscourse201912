function classify(word) {
    if (word.endsWith("u")) {
        return "Finnish";
    } else if (word.startsWith("Die") || word.startsWith("Der") || word.startsWith("Das")) {
        return "German";
    } else if (word.startsWith("Le")) {
        return "French";
    } else if (word.startsWith("The")) {
        return "English";
    } else {
        return "Unknown";
    }
}

const words = [ "Burku", "Die Burk", "The Försäkringsbolag", "Das Försäkringsbolag", "Le Boll", "Der Boll" ];

let wordsByLanguage = {
    "English": [],
    "Finnish": [],
    "French": [],
    "German": [],
    "Unknown": [],
};
for (const word of words) {
    const language = classify(word);
    wordsByLanguage[language].push(word);
}

function printLanguage(language) {
    console.log(language + ":");
    for (const word of wordsByLanguage[language]) {
        console.log(word);
    }
    console.log();
}

printLanguage("English");
printLanguage("French");
printLanguage("German");
printLanguage("Finnish");