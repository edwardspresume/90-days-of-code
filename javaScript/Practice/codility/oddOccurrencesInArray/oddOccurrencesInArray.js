console.clear();

const solution = A => {
  //   if (A.length === 1) return A[0]; // If there is only one number in the array return that number

  //   const stringVersion = A.join(""); // Turn the array into a string

  //   // Loop through the stringified array
  //   for (num of stringVersion) {
  //     let regex = new RegExp(num, "g"); //  Match all the current iteration of our string
  //     if (stringVersion.match(regex).length === 1) return Number(num); // If there was only one match that number return the number
  //   }

  //   let sort = A.sort((a, b) => a - b).filter(a => a === 1);

  console.log(sort);
};

const arr = [4, 9, 1, 9, 9, 9, 9, 9, 1];

console.log(solution(arr));
