const getTheTitles = function(arr) {
    return arr.map((book) => book.title);
};

//========================================================================
//Simple array check
const books = [
    {
      title: 'Boomerang',
      author: 'Nicolas'
    },
    {
      title: 'Cultural Heritage',
      author: 'Adolphus'
    }
  ]

console.log(getTheTitles(books));
//========================================================================

// Do not edit below this line
module.exports = getTheTitles;

