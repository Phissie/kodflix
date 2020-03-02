const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const path = require("path")
const getMovies = require("./moviedata");

app.get("/api/movies", (req, res) => res.send(getMovies()));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
app.use(express.static(path.join(__dirname, "../../build")));
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../../build", "index.html"));
});
