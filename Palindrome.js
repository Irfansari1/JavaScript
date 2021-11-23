function palindrome(str) {
  var char = /[^A-Za-z0-9]/g;
  var lowerStr = str.toLowerCase();
  var lowerNoCharNoSpace = lowerStr.replace(char, "");
  var reverseStr = lowerNoCharNoSpace.split("").reverse().join("");

  if (reverseStr === lowerNoCharNoSpace) {
    console.log("It is a Palindrome");
  } else {
    console.log("It is not a Palindrome");
  }
}

palindrome("kavak");
