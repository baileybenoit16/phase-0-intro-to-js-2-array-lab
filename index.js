// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push("Ralph");
}
function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(name) {
    cats.pop();
}
function destructivelyRemoveFirstCat(name) {
    cats.shift();
}
const copyOfCats = cats.slice()

function appendCat(name) {
    return [...cats, "Broom"];
}
function prependCat(name) {
    return ["Arnold", ...cats];
}
function removeLastCat(name) {
    const newArray = cats.slice(0, -1);
    return newArray;
}
function removeFirstCat(name) {
    const newArray = cats.slice(1);
    return newArray;
}