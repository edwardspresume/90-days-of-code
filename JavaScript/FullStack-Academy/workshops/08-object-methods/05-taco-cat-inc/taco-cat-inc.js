console.clear();

let tacoCatInc = {
  gourmetShell: {
    'hard treat shell': {
      cost: 2,
      quantity: 100
    },
    'soft treat shell': {
      cost: 1.5,
      quantity: 100
    }
  },

  gourmetFishFilling: {
    'salmon': {
      cost: 5,
      quantity: 100
    },
    'tuna': {
      cost: 5.5,
      quantity: 100
    },
    'sardines': {
      cost: 1.5,
      quantity: 100
    }
  },

  gourmetVeggie: {
    'cat grass': {
      cost: 1,
      quantity: 100
    }
  },

  gourmetSeasoning: {
    'cat nip': {
      cost: 0.5,
      quantity: 100
    },
    'treat dust': {
      cost: 0.1,
      quantity: 100
    }
  },

  cash: 0
};

tacoCatInc.currentInventory = function () {

  let totalInventoryCost = 0;

  // loop through every key in tacoCatInc
  for (let keys in this) {

    let currentProp = this[keys];

    if (typeof currentProp === 'object') {

      // If the current Property is an object, loop through it
      for (let itemName in currentProp) {

        let currentItem = currentProp[itemName];

        totalInventoryCost += currentItem.quantity * currentItem.cost;
      }
    }
  }
  return totalInventoryCost;
};

tacoCatInc.sale = function (order) {
  let saleTotal = 0;

  for (let keys in order) {

    let orderedItem = order[keys];
    let stockItem = this[keys][orderedItem];

    if (stockItem.quantity > 1) {
      saleTotal += stockItem.cost;
      this.cash += stockItem.cost;
      stockItem.quantity--;
    } else return `${orderedItem} is out of stock`;
  }

  return saleTotal;
}

let order = {
  gourmetShell: 'hard treat shell',
  gourmetFishFilling: 'salmon'
};


// console.log(tacoCatInc.sale(order));


// console.log(`----------------------------- Order -----------------------------`);
// console.log(tacoCatInc.sale(order));
// console.log(`\n`);

// console.log(`----------------------------- Quantity -----------------------------`);
// console.log(tacoCatInc.gourmetFishFilling.tuna.quantity);