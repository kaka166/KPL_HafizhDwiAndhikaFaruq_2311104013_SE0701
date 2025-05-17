const express = require('express');
const app = express();
const port = 3000;

const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.use(express.json());

let movies = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    stars: ["Tim Robbins", "Morgan Freeman"],
    description: "Two imprisoned men bond over a number of years."
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    stars: ["Marlon Brando", "Al Pacino"],
    description: "The aging patriarch of an organized crime dynasty transfers control to his son."
  }
];

app.get('/movies', (req, res) => {
  res.json(movies);
});

app.get('/movies/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const movie = movies.find(m => m.id === id);
  if (movie) {
    res.json(movie);
  } else {
    res.status(404).send("Movie not found");
  }
});

app.post('/movies', (req, res) => {
  const newMovie = req.body;
  movies.push(newMovie);
  res.status(201).send("Movie added successfully");
});


app.delete('/movies/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = movies.findIndex(m => m.id === id);
  if (index !== -1) {
    movies.splice(index, 1);
    res.send("Movie deleted");
  } else {
    res.status(404).send("Movie not found");
  }
});

app.listen(port, () => {
  console.log(`Movies API listening at http://localhost:${port}`);
});
