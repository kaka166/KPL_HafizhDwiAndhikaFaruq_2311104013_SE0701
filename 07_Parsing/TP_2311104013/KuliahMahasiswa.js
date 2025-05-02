const fs = require('fs');

function readJSON() {
    fs.readFile('tp7_2_2311104013.json', 'utf8', (err, data) => {
        if (err) {
            console.error("Gagal membaca file:", err);
            return;
        }

        try {
            const obj = JSON.parse(data);
            const courses = obj.courses;

            console.log("Daftar mata kuliah yang diambil:");
            courses.forEach((course, index) => {
                console.log(`MK ${index + 1} ${course.code} - ${course.name}`);
            });
        } catch (parseErr) {
            console.error("Gagal parsing JSON:", parseErr);
        }
    });
}

readJSON();
