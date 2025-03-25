//Penjumalahan

// import Penjumlahan from "./Penjumlahan.js";

// function main() {
//     const penjumlahan = new Penjumlahan();

//     let angka1 = "10"
//     let angka2 = "40"
//     let angka3 = "13"

//     let hasil = penjumlahan.JumlahTigaAngka(angka1, angka2, angka3)
//     console.log(`hasil penjumlahan tiga angka: ${hasil}`)
// }

// main();


//SimpleDataBase

import SimpleDataBase from "./SimpleDataBase.js";

function main() {
    const database = new SimpleDataBase()

    database.addNewData(10)
    database.addNewData(40)
    database.addNewData(13)

    database.printAllData()
}

main();