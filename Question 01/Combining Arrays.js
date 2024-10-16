function combiningArrays(Fruits,Vegetables) {
    const grocery=[...Fruits,...Vegetables]
    return grocery
}

const Fruits=["Apple","Mango","Grapes"]
const Vegetables=["Potato","Onion","Brinjal"]

const groceries=combiningArrays(Fruits,Vegetables)

console.log(groceries)