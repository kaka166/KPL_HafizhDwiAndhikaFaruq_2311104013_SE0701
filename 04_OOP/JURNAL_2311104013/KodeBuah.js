class KodeBuah {
    static dataKodeBuah = {
        'Apel' : 'A00',
        'Aprikot': 'B00',
        'Alpukat': 'C00',
        'Pisang': 'D00',
        'Paprika': 'E00',
        'Blackberry': 'F00',
        'Ceri': 'H00',
        'Kelapa': 'I00',
        'Jagung': 'J00',
        'Kurma': 'K00',
        'Durian': 'L00',
        'Anggur': 'M00',
        'Melon' : 'N00',
        'Semanggka' : 'O00'
    };

    static getKodeBuah(buah) {
        return this.dataKodeBuah[buah] || 'Kode Buah tidak ditemukan'
    }
}

export default KodeBuah;