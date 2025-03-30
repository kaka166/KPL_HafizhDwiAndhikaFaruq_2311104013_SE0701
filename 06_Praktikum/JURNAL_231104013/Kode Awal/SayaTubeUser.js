import SayaTubeVideo from './SayaTubeVideo.js'

class SayaTubeUser {
    constructor(username) {
        this.id = Math.floor(10000 + Math.random() * 90000)
        this.username = username
        this.uploadedVideos = []
    }

    getTotalVideoPlayCount() {
        return this.uploadedVideos.reduce((total, video) => total + video.playCount, 0)
    }

    addVideo(video) {
        if (video instanceof SayaTubeVideo) {
            this.uploadedVideos.push(video)
        }
    }

    printAllVideoPlayCount() {
        console.log(`User: ${this.username}`)
        this.uploadedVideos.forEach((video, index) => {
            console.log(`Video ${index + 1} judul: ${video.title}`)
        })
    }
}
    
export default SayaTubeUser