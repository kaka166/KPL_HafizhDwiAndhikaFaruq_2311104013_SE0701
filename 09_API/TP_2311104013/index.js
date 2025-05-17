const express = require("express");
const app = express();
const port = 3000;

const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yaml");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.json());

let mahasiswa = [
  { nama: "Ardhian Dwi Saputra", nim: "2311104040" },
  { nama: "Andika Rifki Pratama", nim: "2311104011" },
  { nama: "Farrel Izaz Yuwono", nim: "2311104014" },
  { nama: "Haikal Fadhilah Mufid", nim: "2311104027" },
];

app.get("/api/mahasiswa", (req, res) => {
  res.json(mahasiswa);
});

app.get("/api/mahasiswa/:index", (req, res) => {
  const index = parseInt(req.params.index);
  if (index >= 0 && index < mahasiswa.length) {
    res.json(mahasiswa[index]);
  } else {
    res.status(404).send("Mahasiswa not found");
  }
});

app.post("/api/mahasiswa", (req, res) => {
  const { nama, nim } = req.body;
  if (!nama || !nim) {
    return res.status(400).send("Field 'nama' dan 'nim' wajib diisi");
  }
  mahasiswa.push({ nama, nim });
  res.status(201).send("Mahasiswa added successfully");
});

app.delete("/api/mahasiswa/:index", (req, res) => {
  const index = parseInt(req.params.index);
  if (index >= 0 && index < mahasiswa.length) {
    mahasiswa.splice(index, 1);
    res.send("Mahasiswa deleted");
  } else {
    res.status(404).send("Mahasiswa not found");
  }
});

app.listen(port, () => {
  console.log(`Mahasiswa API listening at http://localhost:${port}`);
});
