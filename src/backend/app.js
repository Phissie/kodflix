const express = require("express");
const app = express();
const port = 3001;
const getMovies = require("./moviedata");

app.get("/api/movies", (req, res) => res.send(getMovies()));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
