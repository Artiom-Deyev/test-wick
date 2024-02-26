//1й пункт

function filtering(arr) {
    const res = arr.filter((el) => 
    typeof el === 'number')

    return res;
}

const array = [1, '1', 2, 'four']

filtering(array)


//2й пункт
function accum(arr) {

    let res = Array
    .from(arr, (n, i) => n.toUpperCase() + n.toLowerCase().repeat(i))
    .join('-')

    return res;
}

const first = 'abcd'
const second = 'RqaEzty'
const third = 'cwAt'

accum(first)
accum(second)
accum(third)


//3й пункт
function calculateProfit(arr) {

    let res = arr.reduce((total, product) => {
        total += product.price * product.quantity;
        return total
        }, 0)

    return res;
}

const products = [
    { name: 'Футболка', price: 20, quantity: 2 },
    { name: 'Джинсы', price: 50, quantity: 1 },
    { name: 'Носки', price: 5, quantity: 10 },
    { name: 'Штаны', price: 30, quantity: 1 }
    ];

calculateProfit(products)