console.clear();

// const expandedForm = num => {
//   num = num.toString();
//   let result = "";

//   // 10 to the power of how many digits is inputted
//   let placeValue = Math.pow(10, num.length - 1);

//   for (let i = 0; i < num.length; i++) {
//     let currentDigit = num[i];

//     if (currentDigit !== '0') {
//       result += `${currentDigit * placeValue}`;

//       if (i < num.length - 1) result += " + ";
//     }

//     placeValue /= 10;
//   }

//   return result;
// };

/* ==========================================================================
                                 Alternative
   ========================================================================== */

// const expandedForm = (num) => {

//   num = num.toString();
//   let result = [];

//   let placeValue = 1;

//   for (let i = num.length - 1; i >= 0; i--) {

//     let currentDigit = num[i];

//     if (currentDigit !== '0') result.unshift(currentDigit * placeValue);

//     placeValue *= 10;
//   }

//   return result.join(' + ');
// }


/* ==========================================================================
                                 Alternative 2
   ========================================================================== */

// const expandedForm = (num) => [...num.toString()].reverse().map((num, i) => num * Math.pow(10, i)).filter(num => num !== 0).reverse().join(' + ');



/* ==========================================================================
                                 Alternative 3
   ========================================================================== */


const expandedForm = (num) => {

  num = num.toString();
  let result = '';

  for (let i = 0; i < num.length; i++) {

    let currentDigit = num[i];

    result += `${currentDigit + '0'.repeat(i)}`;

    if (i < num.length - 1) result += " + ";
  }

  return result;
}



console.log(expandedForm(12)); // Should return '10 + 2'
// console.log(expandedForm(42)); // Should return '40 + 2'
// console.log(expandedForm(70304)); // Should return '70000 + 300 + 4'
// console.log(expandedForm(90000000));