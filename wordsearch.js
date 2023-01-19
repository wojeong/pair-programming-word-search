const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''));
    const transposeJoin = transpose(letters).map(ls => ls.join(''));
  
    for (l of horizontalJoin || transposeJoin) {
      if (l.includes(word)) return true;
    }
  
    return false;
};
  
  
const transpose = function(letters) {
    return letters[0].map((col, i) => letters.map(row => row[i]));
};

module.exports = wordSearch
