import SayaTubeVideo from './SayaTubeVideo.js';

class SayaTubeUser {
    constructor(username) {
        if (!username || username.length > 100) {
            throw new Error("Username tidak boleh null dan maksimal 100 karakter");
        }
        this.id = Math.floor(10000 + Math.random() * 90000);
        this.username = username;
        this.uploadedVideos = [];
    }

    getTotalVideoPlayCount() {
        return this.uploadedVideos.reduce((total, video) => total + video.playCount, 0);
    }

    addVideo(video) {
        if (!(video instanceof SayaTubeVideo)) {
            throw new Error("Video yang ditambahkan harus sebuah instance dari SayaTubeVideo");
        }
        if (video.playCount > Number.MAX_SAFE_INTEGER) {
            throw new Error("Play count video melebihi batas maksimum integer");
        }
        this.uploadedVideos.push(video);
    }

    printAllVideoPlaycount() {
        console.log(`User: ${this.username}`);
        this.uploadedVideos.slice(0, 8).forEach((video, index) => {
            console.log(`Video ${index + 1} judul: ${video.title}`);
        });
    }
}

export default SayaTubeUser;