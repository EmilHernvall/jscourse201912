const wordsoup = "loReM IpsuM doLOr siT ameT, ConseCTETUr ADIPisCinG eLIT. maURiS fACiLISis In est sIt AmET luctUS. veSTIBulUM TrIstiqUe CONGuE TUrPis, Id TINciduNt JuSTo AccuMsAN quIS. sUSpeNDiSse erAt mAuRIs, AlIqUam EU tuRPIS eGEt, PULvInAr comMoDO tortor. nam friNgIlLA LaCinIA QUAM, SIt AMET EleIfeND enim lOBortIS A. NunC iNTerDUM eSt MaLeSUAda CursUs veNENATis. alIQUAM efficItUr AuGUE Ac MaGNa AlIQuAm cOnSequAT. QuisQuE OrNaRE Ac ORci vitae PhaRetRa. ";

console.log(
    wordsoup.split(". ")
        .map((x) => {
            const firstChar = x.charAt(0);
            const rest = x.substr(1);
            return firstChar.toUpperCase() + rest.toLowerCase();
        })
        .join(". ")
);