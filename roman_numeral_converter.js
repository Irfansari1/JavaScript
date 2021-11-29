function convertToRoman(num) {
  const romanNumbers = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let sum = "";

  for (const key in romanNumbers) {
    const numValue = romanNumbers[key];

    while (numValue <= num) {
      num -= numValue;
      sum += key;
    }
  }
  return sum;
}

convertToRoman(999);
