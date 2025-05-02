import { readFile } from 'fs/promises';

function readJSON() {
    readFile('jurnal7_3_2311104013.json', 'utf8')
        .then(data => {
            const obj = JSON.parse(data);
            const entry = obj.glossary.GlossDiv.GlossList.GlossEntry;

            console.log("===== GLOSSARY ENTRY =====");
            console.log(`ID        : ${entry.ID}`);
            console.log(`SortAs    : ${entry.SortAs}`);
            console.log(`Term      : ${entry.GlossTerm}`);
            console.log(`Acronym   : ${entry.Acronym}`);
            console.log(`Abbrev    : ${entry.Abbrev}`);
            console.log(`Definition: ${entry.GlossDef.para}`);
            console.log(`See Also  : ${entry.GlossDef.GlossSeeAlso.join(", ")}`);
            console.log(`GlossSee  : ${entry.GlossSee}`);
            console.log("===========================");
        })
        .catch(err => {
            console.error("Gagal membaca atau parsing file:", err);
        });
}

readJSON();
