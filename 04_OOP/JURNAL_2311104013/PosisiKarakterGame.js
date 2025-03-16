class PosisiKarakterGame {
    state = "Berdiri";
    nim = 3;
    transitions = {
        "Berdiri": { "TombolS": "Jongkok", "TombolW": "Terbang" },
        "Jongkok": { "TombolW": "Berdiri", "TombolS": "Tengkurap" },
        "Tengkurap": { "TombolW": "Jongkok" },
        "Terbang": { "TombolX": "Jongkok", "TombolS": "Berdiri" }
    };

    ubahState(tombol) {
        let next = this.transitions[this.state] && this.transitions[this.state][tombol];
        if (!next) {
            console.log("Transisi tidak valid");
            return;
        }

        if (this.nim % 3 == 0) {
            if (tombol == "TombolS") console.log("Tombol arah bawah ditekan");
            if (tombol == "TombolW") console.log("Tombol arah atas ditekan");
        }

        if (this.nim % 3 == 1) {
            if (tombol == "Berdiri") console.log("Posisi standby");
            if (tombol == "Tengkurap") console.log("Posisi istirahat");
        }

        if (this.nim % 3 == 2) {
            if (tombol == "Terbang" && next == "Jongkok") console.log("Posisi landing");
            if (tombol == "Berdiri" && next == "Terbang") console.log("Posisi take off");
        }

        this.state = next;
        console.log(this.state);
    }
}

export default PosisiKarakterGame;
