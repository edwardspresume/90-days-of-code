console.log("\x1Bc"); //Clear console

// YOUR CODE BELOW
const oddCouple = arrayOfNum => {
  let oddNumbers = [];

  for (num of arrayOfNum) {
    if (num % 2 === 1) {
      oddNumbers.push(num);

      if (oddNumbers.length === 2) return oddNumbers; // or break;
    }
  }

  return oddNumbers;
  // or oddNumbers.splice(0,2)
};

console.log(oddCouple([1, 2, 3, 4, 5]));
