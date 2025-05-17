const express = require('express');
const app = express();
const port = 3000;

const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.use(express.json());

let mahasiswa = [
  {
    id: 1,
    name: "Ardhian Dwi Saputra",
    nim: "2311104040",
    course: ["Konstruksi Perangkat Lunak", "Basis Data"],
    year: 2023
  },
  {
    id: 2,
    name: "Andika Rifki Pratama",
    nim: "2311104011",
    course: ["Konstruksi Perangkat Lunak", "Basis Data"],
    year: 2023
  },
  {
    id: 3,
    name: "Farrel Izaz Yuwono",
    nim: "2311104014",
    course: ["Konstruksi Perangkat Lunak", "Basis Data"],
    year: 2023
  },
  {
    id: 4,
    name: "Haikal Fadhilah Mufid",
    nim: "2311104027",
    course: ["Konstruksi Perangkat Lunak", "Basis Data"],
    year: 2023
  }
];

app.get('/mahasiswa', (req, res) => {
  res.json(mahasiswa);
});

app.get('/mahasiswa/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const mhs = mahasiswa.find(m => m.id === id);
  if (mhs) {
    res.json(mhs);
  } else {
    res.status(404).send("Mahasiswa not found");
  }
});

app.post('/mahasiswa', (req, res) => {
  const newMahasiswa = req.body;
  mahasiswa.push(newMahasiswa);
  res.status(201).send("Mahasiswa added successfully");
});


app.delete('/mahasiswa/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = mahasiswa.findIndex(m => m.id === id);
  if (index !== -1) {
    mahasiswa.splice(index, 1);
    res.send("Mahasiswa deleted");
  } else {
    res.status(404).send("Mahasiswa not found");
  }
});

app.listen(port, () => {
  console.log(`Mahasiswa API listening at http://localhost:${port}`);
});
