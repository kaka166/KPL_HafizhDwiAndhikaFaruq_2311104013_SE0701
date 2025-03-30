class SayaTubeVideo {
    constructor(title) {
        if (!title || title.length > 100) {
            throw new error("Judul video tidak boleh null dan maksimum 100 karakter")
        }
        this.id = 10000 + Math.floor(Math.random() * 90000)
        this.title = title
        this.playCount = 0
    }

    increasePlayCount (count) {
        if (count > 10000000) {
            throw new error("Play count tidak boleh melebihi 10.000.000 per panggilan")
        }
        try {
            if (this.playCount + count < this.playCount) {
                throw new error("Integer overflo terdeteksi")
            }
            this.playCount += count
        } catch (error) {
            console.error("Error menambahkan play count: ", error.message)
        }
        
    }

    printVideoDetails () {
        console.log(`Video ID: ${this.id}`)
        console.log(`Title: ${this.title}`)
        console.log(`Play Count: ${this.playCount}`)
    }
}

try {
    const video = new SayaTubeVideo("Tutorial Desaign By Contract - Hafizh Dwi Andhika Faruq")
    video.increasePlayCount(101000000)
    video.printVideoDetails() 
} catch(error) {
    console.error("Error untuk menginisialisasi video")
}

