import express from 'express';

const app = express();
const port = 3333;

// Step 1: Replace the array with data comming from https://swapi.dev/api/people.
// Step 2: Add support for local pagination.
// Step 3: Add support to return the list in reverse alphabetical order (name).
// Step 4: Using data from https://swapi.dev/api/films, return the list of people order by amount of appearances in films.

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

// ./app.js
// import express from 'express';
// import { initialize } from 'express-openapi';
// import v1WorldsService from './api-v1/services/worldsService';
// import v1ApiDoc from './api-v1/api-doc';

// const app = express();
// initialize({
//   app,
//   // NOTE: If using yaml you can provide a path relative to process.cwd() e.g.
//   // apiDoc: './api-v1/api-doc.yml',
//   apiDoc: v1ApiDoc,
//   dependencies: {
//     worldsService: v1WorldsService
//   },
//   paths: './api-v1/paths'
// });

// app.listen(3333);