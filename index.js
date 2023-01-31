// Write your solution here!
const cats = ["Milo","Otis","Garfield"];

function destructivelyAppendCat(Ralph){
   return cats.push("Ralph")
}

function destructivelyPrependCat(Bob){
   return cats.unshift("Bob")
}

function destructivelyRemoveLastCat(){
   return cats.pop()
}

function destructivelyRemoveFirstCat(){
   return cats.shift()
}

function appendCat(Broom){
    return [...cats,"Broom"]
}

function prependCat(Arnold){
    return ["Arnold",...cats]
}

function removeLastCat(){
    return removeLastCat = [...cats.slice(0,2)]
}

function removeFirstCat(){
    return removeFirstCat = [...cats.slice(1)]
}