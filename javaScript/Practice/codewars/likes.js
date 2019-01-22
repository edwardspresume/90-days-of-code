// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

// likes [] // must be "no one likes this"
// likes ["Peter"] // must be "Peter likes this"
// likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
// likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
// likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"

console.clear();

/* ==========================================================================
                                 Logic
   ========================================================================== */

// const likes = names => {
//   return {
//     0: "no one likes this",
//     1: `${names[0]} likes this`,
//     2: `${names[0]} and ${names[1]} like this`,
//     3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
//     4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
//   }[Math.min(4, names.length)];
// };

/* ==========================================================================
                                 Alternative 
   ========================================================================== */

const likes = names => {
  const [a, b, c] = names;

  switch (names.length) {
    case 0:
      return "no one likes this";

    case 1:
      return `${a} likes this`;

    case 2:
      return `${a} and ${b} like this`;

    case 3:
      return `${a}, ${b} and ${c} like this`;

    default:
      return `${a}, ${b} and ${names.length - 2} others like this`;
  }
};

/* ==========================================================================
                                    Alternative 3
      ========================================================================== */

// const likes = names => {
//   if (names.length === 0) return "no one likes this";

//   if (names.length === 1) return `${names} likes this`;

//   if (names.length === 2) return `${names[0]} and ${names[1]} like this`;

//   if (names.length === 3)
//     return `${names[0]}, ${names[1]} and ${names[2]} like this`;

//   return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
// };

console.log(
  `----------------------------- Test 1 -----------------------------`
);
console.log(likes([]));
console.log(
  `----------------------------- Test 2 -----------------------------`
);
console.log(likes(["Peter"]));
console.log(
  `----------------------------- Test 3 -----------------------------`
);
console.log(likes(["Jacob", "Alex"]));
console.log(
  `----------------------------- Test 4 -----------------------------`
);
console.log(likes(["Max", "John", "Mark"]));
console.log(
  `----------------------------- Test 5 -----------------------------`
);
console.log(likes(["James", "Edwards", "Kevin", "Steve"]));
