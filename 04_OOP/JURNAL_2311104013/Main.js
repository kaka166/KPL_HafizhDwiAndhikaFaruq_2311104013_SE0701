/*-------------------------------------------------------- */
// import KodeBuah from "./KodeBuah.js";

// console.log(KodeBuah.getKodeBuah('Apel'))
/*-------------------------------------------------------*/

import PosisiKarakterGame from "./PosisiKarakterGame.js";

const tombolList = ["TombolS", "TombolS", "TombolW", "TombolW", "TombolW", "TombolX", "TombolS"];

for (let i = 0; i < tombolList.length; i++) {
    PosisiKarakterGame.ubahState(tombolList[i])
}



