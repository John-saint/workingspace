// How to find the longest word in a string

function findLongestWordLength(str) {
  var words = str.split(" ");
  var maxlength = 0;

  for (var i = 0; i < words.length; i++) {
    if (words[i].length > maxlength) {
      maxlength = words[i].length;
    } 
  } 
  return maxlength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
