const items = [
    {name: "bike",         price: 100    },
    {name: "tv",           price: 200    },
    {name: "Album",        price: 10     },
    {name: "Book",         price: 5      },
    {name: "Phone",        price: 500    },
    {name: "Computer",     price: 1000   },
    {name: "Keyboard",     price: 25     }
]

const fiteredItems = items.filter((item) =>{
    return item.price <=100
})

console.log(fiteredItems);
// item.price, item.name
const itemNames = items.map((item) =>{
    return item.price
})

console.log(itemNames);

const foundItem = items.find((item) =>{
    return item.name === "Book"
})

console.log(foundItem );
// item.price, item.name
items.forEach((item) =>{
    console.log(item.price);
})

const hasInexpensiveItems = items.some((item) =>{
    return item.price <= 50
})

console.log(hasInexpensiveItems);


const InexpensiveItems = items.every((item) =>{
    return item.price <= 100
})

console.log(InexpensiveItems);

const total = items.reduce((currentTotal, item) =>{
    return item.price + currentTotal
}, 0)

console.log(total);

const items2 = [1, 2, 3, 4, 5]

const includesTwo = items2.includes(5)

console.log(includesTwo)