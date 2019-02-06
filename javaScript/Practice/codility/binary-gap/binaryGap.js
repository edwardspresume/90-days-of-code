console.clear();
function solution(N) {
  const binary = (N >> 0).toString(2); // Convert the integer to binary

  console.log("Binary:", binary);

  if (!binary.match(/1.*1/)) return 0; // Return 0 if there aren't two one's to make it a binary gap

  if (!binary.match(/0/)) return 0; // Return 0 if there are no zero's

  // let regEx = /1(0*?)1(0*?)/g;
  let regEx = /1(0*)1(0*)/;
  // let regEx = /1(0*)1+?(0*)1?/;

  let gapSequence = binary.match(regEx);

  if (gapSequence) {
    let gap1 = gapSequence[1].length;
    let gap2 = gapSequence[2].length;

    return gap1 > gap2 ? gap1 : gap2;
  } else {
    return binary.match(/0/g).length;
  }
}

console.log(solution(483));
