const express = require('express');
const bodyParser = require('body-parser');
const { indexDocuments, readDocuments } = require('../indexer/indexer');
const { performSearch } = require('../search/search');
const app = express();
app.use(bodyParser.json());

app.get('/search', (req, res) => {
   const keyword = req.query.keyword;
   const documents = readDocuments('patents_json');
   const indexedData = indexDocuments(documents);
   const searchResults = performSearch(indexedData, keyword);
   res.json(searchResults);
 });
 

const port = 3000;
app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});
