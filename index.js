// 1.
// Напиши скрипт, який, для об'єкта user, послідовно:
// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user в форматі ключ:значення
// використовуючи Object.keys() і for...of

const user = {
    hobby: 'music',
    premium: true,
};
function userFunc(userFuncParams) {
    userFuncParams.mood = 'happy';
    userFuncParams.hobby = 'skydiving';
    userFuncParams.premium = false;
    // const arrUserKeys = Object.keys(userFuncParams);
    // const arrUserValues = Object.values(userFuncParams);
    const arrUser = Object.entries(userFuncParams);
    for (const props of arrUser) {
        console.log(...props);
    };
};
userFunc(user);

// 2.
// Напиши функцію countProps(obj), яка рахує кількість властивостей
// в об'єкті. Функція повертає число — кількість властивостей.

const object = {
    name: 'Poly',
    age: 34,
};
function countProps(obj) {
    const props = Object.keys(obj);
    console.log(props.length);
};
countProps(object);

// 3.
// Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників
// і повертає ім'я найпродуктивнішого (який виконав більше всіх задач). Співробітники
// і кількість виконаних завдань містяться як властивості об'єкта в форматі "ім'я":"кількість задач".

function findBestEmployee(employees) {
    let bestWorker = '';
    let maxTasks = 0;
    const names = Object.keys(employees);
    for (const name of names) {
        console.log(employees[name]);
        if (employees[name] > maxTasks) {
            maxTasks = employees[name];
            bestWorker = name;
        };
    };
    return bestWorker;
};
console.log(
    findBestEmployee(
        {
            Poly: 30,
            Mango: 45,
            Ajax: 20,
            Kiwi: 35,
        },
    ),
);

// 4.
// Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. Функція рахує загальну суму
// зарплати працівників і повертає її. Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".

function countTotalSalary(employees) {
    const countTotalSalaryArr = Object.values(employees);
    let sum = 0;
    for (let i = 0; i < countTotalSalaryArr.length; i++) {
        sum += countTotalSalaryArr[i];
    };
    return sum;
};
console.log(
    countTotalSalary({
        mango: 100,
        poly: 150,
        alfred: 80,
    }),
);

// 5.
// Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів і ім'я властивості.
// Повертає масив значень певної властивості prop з кожного об'єкта в масиві.

const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроїд', price: 400, quantity: 7 },
    { name: 'Захоплення', price: 1200, quantity: 2 },
];
function getAllPropValues(arr, prop) {
    for (const product of arr) {
        console.log(product[prop]);
    };
};
getAllPropValues(products, 'price');

// 6.
// Напиши функцію calculateTotalPrice(allProdcuts, productName), яка отримує масив об'єктів та
// ім'я продукту (значення властивості name). Повертає загальну вартість продукту (ціна * кількість).
// Викличи функції для перевірки працездатності твоєї реалізації.

function calculateTotalPrice(allProducts, productName) {
    let totalPrice = 0;
    for (const product of allProducts) {
        if (product.name === productName) {
            totalPrice = product.price * product.quantity;
        };
    };
    return totalPrice
};
console.log(calculateTotalPrice(products, 'Дроїд'));