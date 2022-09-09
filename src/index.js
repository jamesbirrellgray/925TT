const express = require("express");

const app = express();
const port = 3333;

//Step 1: Replace the array with data comming from https://swapi.dev/api/people.
//Step 2: Add support for local pagination.
//Step 3: Add support to return the list in reverse alphabetical order (name).
//Step 4: Using data from https://swapi.dev/api/films, return the list of people order by amount of appearances in films.

const data = [
  {
    name: "Luke Skywalker",
    height: "172",
    url: "https://swapi.dev/api/people/1/"
  },
  {
    name: "C-3PO",
    height: "167",
    url: "https://swapi.dev/api/people/2/"
  },
  {
    name: "R2-D2",
    height: "96",
    url: "https://swapi.dev/api/people/3/"
  },
  {
    name: "Darth Vader",
    height: "202",
    url: "https://swapi.dev/api/people/4/"
  }
];

app.get("/", (req, res) => {
  res.status(200).json({ data });
});

app.listen(port);
