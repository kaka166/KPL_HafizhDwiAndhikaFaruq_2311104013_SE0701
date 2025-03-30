import SayaTubeUser from './SayaTubeUser.js';
import SayaTubeVideo from './SayaTubeVideo.js';

try {
    const user = new SayaTubeUser("Hafizh");
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
    ];

    videoTitles.forEach(title => {
        try {
            const video = new SayaTubeVideo(title);
            user.addVideo(video);
        } catch (error) {
            console.error("Gagal menambahkan video:", error.message);
        }
    });

    user.printAllVideoPlaycount();

    try {
        const testVideo = new SayaTubeVideo("Test Overflow Video");

        let overflowCount = Number.MAX_SAFE_INTEGER / 2
        for (let i = 0; i < 10; i++) {
            testVideo.increasePlayCount(overflowCount);
        }
    } catch (error) {
        console.error("Error saat menambahkan play count:", error.message);
    }
} catch (error) {
    console.error("Terjadi kesalahan pada pembuatan user:", error.message);
}