//1й пункт

//Переменные
const input = document.querySelector('#array-input')
const btn = document.querySelector('#btn')
const firstRes = document.querySelector('#first-result')

//Функция
function showValue() {
    
    let arr = input.value.split(', ')
    let newArr = []

    const numberValidator = str => /^\d+$/.test(str);

    arr.forEach((el) => {
        if (numberValidator(el) === true) {
            newArr.push(el)
        }
    })

    let res = newArr.join(', ')


    firstRes.textContent = res

}

//Событие
btn.addEventListener('click', showValue)


//________
//2й Пункт

//Переменные
const inputLetters = document.querySelector('#letters-input')
const btnLetters = document.querySelector('#btn-letters')
const secondRes = document.querySelector('#second-result')

//Функции
function accum() {

    let res = Array
    .from(inputLetters.value, (n, i) => n.toUpperCase() + n.toLowerCase().repeat(i))
    .join('-')

    secondRes.textContent = res
}

//События
btnLetters.addEventListener('click', accum)


//_______
//4й Пункт

//Переменные
const inputProdName = document.querySelector('#prod-name')
const inputProdPrice = document.querySelector('#prod-price')
const inputProdQ = document.querySelector('#prod-quantity')

const btnAddProd = document.querySelector('#btn-add-product')
const btnSum = document.querySelector('#btn-sum')

const displayProds = document.querySelector('#display-prods')
const profit = document.querySelector('#profit')

let products = []


//Функции
function addProduct() {
    let newProd = {}

    newProd.name = inputProdName.value
    newProd.price = inputProdPrice.value
    newProd.quantity = inputProdQ.value

    products.push(newProd)
    
    let newElem = `
        <div class="product m-2 border border-3 p-2 col-3">
            <h4>'${newProd.name}'</h4>
            <p>'${newProd.price}'</p>
            <p>'${newProd.quantity}'</p>
        </div>
        `;

    displayProds.insertAdjacentHTML('beforeend', newElem)
    }


function calculateProfit() {

    let res = products.reduce((total, product) => {
        total += product.price * product.quantity;
        return total
        }, 0)
        
        profit.textContent = `Общая выручка: ${res}`
}


//События
btnAddProd.addEventListener('click', addProduct)

btnSum.addEventListener('click', calculateProfit)