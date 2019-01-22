// Edit the code below



function fullstackHQ() {

  return middleFunction('United States');

  function middleFunction(country) {

    return innerFunction('New York State');

    function innerFunction(state) {

      let city = 'New York City';
      return innermostFunction();

      function innermostFunction() {
        let planet = 'Planet Earth';
        return 'Fullstack HQ is at ' + planet + ', ' + country + ', ' + state + ', ' + city;
      }
    }
  }
}

console.log(fullstackHQ());