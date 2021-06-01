const groceries = [
    {
        id: 1,
        name: "Milk",
        price: 3.5
    },
    {
        id: 2,
        name: "Eggs",
        price: 1.5
    },
    {
        id: 3,
        name: "Pizza rolls",
        price: 4
    },
    {
        id: 4,
        name: "Chicken Breast",
        price: 6
    },
    {
        id: 5,
        name: "Pineapple",
        price: 3.5
    },
    {
        id: 6,
        name: "Sandwich Buns",
        price: 3
    },
    {
        id: 7,
        name: ["Ketchup","Mustard","Mayo"],
        price: 6
    }
]
// console.log(groceries)

const newID = () => {
    let currentMaxID = 0
    for (grocery of groceries) {
        if (grocery.id > currentMaxID) {
         currentMaxID = grocery.id
         idNumber = currentMaxID + 1
         
        }
    }
return idNumber
}

const addToShoppingList = (itemName, itemPrice) => {
    const newGroceryItem = {
    id: newID(),
    name: itemName,
    price: itemPrice,
    dateCreated: "June 1, 2021"
}
groceries.push(newGroceryItem)
}
addToShoppingList("Juice", 4)
addToShoppingList("Ice Cream", 4)
addToShoppingList("Detergent",6)
addToShoppingList("New Pan",16)
addToShoppingList("Watermelon",4)
console.log(groceries)