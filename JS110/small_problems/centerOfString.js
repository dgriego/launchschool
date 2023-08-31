function centerOf(str) {
  const centerIdx = Math.floor(str.length / 2);
  let centerStr = `${str[centerIdx]}`;

  if (str.length % 2 === 0) {
    centerStr = `${str[centerIdx - 1]}${str[centerIdx]}`;
  }

  console.log(centerStr);

  return centerStr;
}

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');
