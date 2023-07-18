const Fuse = require('fuse.js');

function performSearch(indexedData, keyword) {
  const options = {
    keys: ['textContent'],
  };
  const fuse = new Fuse(indexedData, options);
  const result = fuse.search(keyword);
  return result;
}

module.exports = {
  performSearch,
};
