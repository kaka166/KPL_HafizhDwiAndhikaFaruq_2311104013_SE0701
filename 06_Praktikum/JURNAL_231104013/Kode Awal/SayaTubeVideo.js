class SayaTubeVideo {
    constructor(title) {
        this.id = Math.floor(10000 + Math.random() * 90000)
        this.title = title
        this.playCount = 0
    }

    increasePlayCount (count) {
        if (count > 0) {
            this.playCount += count
        }   
    }

    printVideoDetails() {
        console.log(`ID: ${this.id}`)
        console.log(`Title: ${this.title}`)
        console.log(`Play Count: ${this.playCount}`)
    }
}

export default SayaTubeVideo