// YOUR CODE BELOW
console.clear();

// const compareObjects = (obj1, obj2) => JSON.stringify(obj1) === JSON.stringify(obj2);

/* ==========================================================================
                                 Alternative
   ========================================================================== */

// const compareObjects = (objectOne, objectTwo) => {
//   let objectOneProps = "";
//   let objectTwoProps = "";

//   for (let keys in objectOne) objectOneProps = `${keys}: ${objectOne[keys]}`;

//   for (let keys in objectTwo) objectTwoProps = `${keys}: ${objectTwo[keys]}`;

//   if (objectOneProps !== objectTwoProps) return false;

//   return true;
// };

/* ==========================================================================
                                 Alternative 2
   ========================================================================== */

const compareObjects = (objectOne, objectTwo) => {
  objectOneKeys = Object.keys(objectOne);
  objectTwoKeys = Object.keys(objectTwo);
  // objectTwoKeys3 = Object.getOwnPropertyNames(objectTwo);

  if (objectOneKeys.length !== objectTwoKeys.length) return false;

  for (let keys in objectOne) {
    if (objectOne[keys] !== objectTwo[keys]) return false;
  }

  return true;
};
