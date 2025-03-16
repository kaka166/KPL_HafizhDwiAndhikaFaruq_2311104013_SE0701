/*-------------------------------------------------------- */
// import KodeBuah from "./KodeBuah.js";

// console.log(KodeBuah.getKodeBuah('Apel'))
// console.log(KodeBuah.getKodeBuah('Mangga'))
/*-------------------------------------------------------*/

import PosisiKarakterGame from "./PosisiKarakterGame.js";

const game = new PosisiKarakterGame();
const tombolList = ["TombolS", "TombolS", "TombolW", "TombolW", "TombolW", "TombolX", "TombolS"];

for (let i = 0; i < tombolList.length; i++) {
    game.ubahState(tombolList[i]);
}




