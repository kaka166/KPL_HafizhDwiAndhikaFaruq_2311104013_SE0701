import SayaTubeUser from "./SayaTubeUser.js";
import SayaTubeVideo from "./SayaTubeVideo.js";

const user = new SayaTubeUser("Hafizh")
const videoTitles = [
    "Review Film Inception oleh Hafizh",
    "Review Film Interstellar oleh Hafizh",
    "Review Film The Dark Knight oleh Hafizh",
    "Review Film Tenet oleh Hafizh",
    "Review Film Dunkirk oleh Hafizh",
    "Review Film The Prestige oleh Hafizh",
    "Review Film Memento oleh Hafizh",
    "Review Film The Matrix oleh Hafizh",
    "Review Film Avatar oleh Hafizh",
    "Review Film The Lord of the Rings oleh Hafizh"
]

videoTitles.forEach(title => {
    const video = new SayaTubeVideo(title)
    user.addVideo(video)
})

user.printAllVideoPlayCount()