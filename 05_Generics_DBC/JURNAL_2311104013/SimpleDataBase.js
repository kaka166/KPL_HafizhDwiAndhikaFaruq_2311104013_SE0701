class SimpleDataBase {
    constructor() {
        this.storedData = []
        this.inputDates = []
    }

    addNewData(data) {
        this.storedData.push(data)
        this.inputDates.push(new Date().toUTCString())
    }

    printAllData() {
        this.storedData.forEach((data, index) => {
            console.log(`data ${index + 1} berisi: ${data}, yang tersimpan pada waktu UTC: ${this.inputDates[index]}`)
        })
    }
}

export default SimpleDataBase;