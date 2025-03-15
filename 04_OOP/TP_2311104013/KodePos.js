class KodePos {
    static dataKodePos = {
        'Batununggal' : 402622,
        'Batununggal': 40266,
        'A. Kujangsari': 40287,
        'Mengger': 40267,
        'Wates': 40256,
        'Cijaura': 40287,
        'Jatisari': 40286,
        'Margasari': 40286,
        'Sekejati': 40286,
        'Kebonwaru': 40272,
        'Maleer': 40274,
        'Samoja': 40273
    };

    static getKodePos(kelurahan) {
        return this.dataKodePos[kelurahan] || 'Kode Pos tidak ditemukan'
    }
}

export default KodePos;