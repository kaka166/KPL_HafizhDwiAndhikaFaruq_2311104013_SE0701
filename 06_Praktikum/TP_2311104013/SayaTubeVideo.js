class SayaTubeVideo {
    constructor(title) {
        this.id = 10000 + Math.floor(Math.random() * 90000)
        this.title = title
        this.playCount = 0
    }

    increasePlayCount (count) {
        this.playCount += count
    }

    printVideoDetails () {
        console.log(`Video ID: ${this.id}`)
        console.log(`Title: ${this.title}`)
        console.log(`Play Count: ${this.playCount}`)
    }
}

const video = new SayaTubeVideo("Tutorial Desaign By Contract - Hafizh Dwi Andhika Faruq")
video.increasePlayCount(100)
video.printVideoDetails()