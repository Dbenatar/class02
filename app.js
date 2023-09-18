let base = prompt(
  "What base would you like on your pizza?" +
    "(Tomato, White, Garlic, BBQ)"
);
console.log("Your pizza will have a " + base + " base");

let vegetable = prompt("What vegetables would you like?");
console.log("You would like a " + base + " base" + " with " + vegetable);

let meat = prompt("Would you like meat or vegetarian?");
console.log(
  "You would like a " +
    base +
    " base" +
    " with " +
    vegetable +
    " and " +
    meat
);

let spicy = prompt("Would you like to make it spicy or not spicy?");
console.log(
  "You would like a " +
    base +
    " base" +
    " with " +
    vegetable +
    " and " +
    meat +
    " " +
    spicy
);

alert(
  "You would like a " +
    base +
    " base" +
    " with " +
    vegetable +
    " and " +
    meat +
    " " +
    spicy
);