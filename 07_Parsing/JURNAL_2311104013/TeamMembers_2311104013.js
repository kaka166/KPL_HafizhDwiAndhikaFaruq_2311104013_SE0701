import { readFile } from 'fs/promises';

function readJSON() {
    readFile('jurnal7_2_2311104013.json', 'utf8')
        .then(data => {
            const obj = JSON.parse(data);
            const members = obj.members;

            console.log("Team member list:");
            members.forEach(member => {
                console.log(`${member.nim} ${member.firstName} ${member.lastName} (${member.age} ${member.gender})`);
            });
        })
        .catch(err => {
            console.error("Gagal membaca atau parsing file:", err);
        });
}

readJSON();
