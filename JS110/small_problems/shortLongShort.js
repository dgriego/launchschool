function shortLongShort(strA, strB) {
  let shortStr = strA;
  let longStr = strB;

  if (strB.length < strA.length) {
    shortStr = strB;
    longStr = strA;
  }

  let finalStr = `${shortStr}${longStr}${shortStr}`;

  console.log(finalStr);

  return finalStr;
}

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"
