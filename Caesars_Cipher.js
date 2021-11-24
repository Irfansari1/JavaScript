function rot13(str) {
  let encodedLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let decodedLetters = "NOPQRSTUVWXYZABCDEFGHIJKLM";

  let decodedString = [];
  for (let i = 0; i < str.length; i++) {
    var j = encodedLetters.indexOf(str[i]);
    if (j == -1) {
      decodedString.push(str[i]);
    } else {
      decodedString.push(decodedLetters[j]);
    }
  }

  return decodedString.join("");
}

rot13("SERR PBQR PNZC");
