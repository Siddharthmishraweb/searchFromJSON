const fs = require('fs');

function readDocuments(directory) {
  const files = fs.readdirSync(directory);
  const documents = [];

  for (const file of files) {
    if (file.endsWith('.json')) {
      const content = fs.readFileSync(`${directory}/${file}`, 'utf8');
      const document = JSON.parse(content);
      documents.push(document);
    }
  }

  return documents;
}

function indexDocuments(documents) {
  const indexedData = documents.map((document) => {
    const textContent = Object.values(document)
      .flatMap((value) => (Array.isArray(value) ? value.map((item) => item.text) : [value]))
      .join(' ');

    return {
      id: document.patent_number,
      textContent,
    };
  });
  return indexedData;
}

module.exports = {
  indexDocuments,
  readDocuments,
};
