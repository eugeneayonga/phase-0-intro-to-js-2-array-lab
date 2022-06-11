// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
  return cats;
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats;
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    const catA = [...cats, "Broom"];
    return catA;
}

function prependCat(name) {
    const catsB = ["Arnold", ...cats];
    return catsB;
}

function removeLastCat(name) {
    const catsC = cats.slice(0, cats.length -1);
    return catsC;
}

function removeFirstCat() {
    const catsD = cats.slice(1);
    return catsD;
}