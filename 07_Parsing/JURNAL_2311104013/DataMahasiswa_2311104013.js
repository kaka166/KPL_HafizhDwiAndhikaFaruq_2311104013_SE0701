import { readFile } from 'fs/promises';

function ReadJSON() {
    readFile('jurnal7_1_2311104013.json', 'utf8')
        .then(data => {
            const obj = JSON.parse(data);

            console.log("===== HASIL DESERIALISASI =====");
            console.log(`Nama: ${obj.firstName} ${obj.lastName}`);
            console.log(`Jenis Kelamin: ${obj.gender}`);
            console.log(`Usia: ${obj.age}`);
            console.log("Alamat:");
            console.log(`  Jalan: ${obj.address.streetAddress}`);
            console.log(`  Kota: ${obj.address.city}`);
            console.log(`  Provinsi: ${obj.address.state}`);
            console.log("================================");
        })
        .catch(err => {
            console.error('Gagal membaca atau parsing file:', err);
        });
}

ReadJSON();
