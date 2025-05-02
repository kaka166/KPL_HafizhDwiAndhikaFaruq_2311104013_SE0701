const fs = require('fs');

class DataMahasiswa1234567890 {
    static ReadJSON() {
        fs.readFile('tp7_1_2311104013.json', 'utf8', (err, data) => {
            if (err) {
                console.error("Gagal membaca file:", err);
                return;
            }

            try {
                const obj = JSON.parse(data);
                const namaLengkap = `${obj.nama.depan} ${obj.nama.belakang}`;
                const nim = obj.nim;
                const fakultas = obj.fakultas;

                console.log(`Nama ${namaLengkap} dengan nim ${nim} dari fakultas ${fakultas}`);
            } catch (parseErr) {
                console.error("Gagal parsing JSON:", parseErr);
            }
        });
    }
}

DataMahasiswa1234567890.ReadJSON();
