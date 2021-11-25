function telephoneCheck(str) {
  const checker = /^1? ?(( ?\d{3}[- ]*)|(\( ?\d{3}[- ]*\) *))\d{3}[- ]?\d{4}$/;

  return checker.test(str);
}

telephoneCheck("555-555-5555");

// /^(1\s|1)?(\(\d{3}\)|\d{3})(-|\s)?\d{3}(-|\s)?\d{4}$/

//Regex tools!!!
