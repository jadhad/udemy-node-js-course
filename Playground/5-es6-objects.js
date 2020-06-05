// object property shorthand

const name = 'aaa'
const userAge = 23

const user = {
    name,
    age: userAge,
    location: 'Tel-Aviv'
}

console.log(user)

// object destructuring

const product = {
    label: 'red',
    price: 3,
    stock: 201,
    salePrice: undefined
}

// const label = product.label
// const stock = product.stock

// const {label:productLabel, stock, rating = 5} = product
//
// console.log(productLabel)
// console.log(stock)
// console.log(rating)

const transaction = (type, { label, stock = 0 } = {}) => {
    console.log(type, label, stock)
}

transaction('order', product)