// const arrayObj = [
//     {
//         name: 'Vasya',
//         age: 20,
//         isMarried: false,
//         gender: 'male'
//     },
//     {
//         name: 'Petr',
//         age: 29,
//         isMarried: true,
//         gender: 'male'
//     },
//     {
//         name: 'Volodya',
//         age: 25,
//         isMarried: true,
//         gender: 'male'
//     },
//     {
//         name: 'Lera',
//         age: 20,
//         isMarried: false,
//         gender: 'female'
//     },
//     {
//         name: 'Nikita',
//         age: 30,
//         isMarried: false,
//         gender: 'male'
//     }
// ]
//
//
// console.log(arrayObj.filter(name => name.age > 24 && name.isMarried ));
// console.log(arrayObj.filter(name => name.gender === 'female'))
// console.log(arrayObj.filter(name => name.age < 24 && !name.isMarried))


// const a = [1, 2, 3]
// console.log(a.reverse())

// const a = [0, 1, false, 2, undefined, '', 3, null]
// console.log(a.filter(el => el))

// let a =  [1, 2, 3, 1, 2, 5]
// console.log(a.filter((el , index) => a.indexOf(el) ===  index))

// let a = ['a', 'b', 'c']
// let b = [1, 2, 3]
// console.log([...a , ...b])

// function arrayPlusArgiment  (arr , n1, n2, n3){
//     return ([...arr, n1 ,n2, n3])
// }
// console.log(arrayPlusArgiment( [1,2,3] ,4,5,6))

// function arrayPlusArgiment  (arr , n1, n2, n3){
//     return ([n1 ,n2, n3 ,...arr])
// }
// console.log(arrayPlusArgiment( [1,2,3] ,4,5,6))

// function arraySplise (arr) {
//     return [...arr.splice(0 ,1), ...arr.splice(2)]
// }
// console.log(arraySplise([1, 2, 3, 4, 5]))


// const array = {
//     js:'test',
//     jq: 'hello',
//     css: 'world'
// }
// console.log(Object.keys(array))

// function toString ( str){
//     return str.join()
// }
// console.log(toString(['Капуста', 'Репа', 'Редиска', 'Морковка']))


// function upLovercase (str) {
//  return str.split('').map((el, index) => el.toUpperCase() === el ? el.toLowerCase() : el.toUpperCase()).join('').split()
// }
// console.log(upLovercase('КаЖдЫй ОхОтНиК'))

// const cars = [
//     {
//         make: "Ford",
//         model: "Mustang",
//         year: 1969,
//         color: "red",
//         price: 25000
//     },
//     {
//         make: "Ford",
//         model: "F-150",
//         year: 2017,
//         color: "blue",
//         price: 30000
//     },
//     {
//         make: "Tesla",
//         model: "Model S",
//         year: 2018,
//         color: "black",
//         price: 120000
//     },
//     {
//         make: "Chevrolet",
//         model: "Camaro",
//         year: 1970,
//         color: "orange",
//         price: 50000
//     },
//     {
//         make: "Dodge",
//         model: "Challenger",
//         year: 2019,
//         color: "red",
//         price: 35000
//     },
//     {
//         make: "Chevrolet",
//         model: "Corvette",
//         year: 2019,
//         color: "blue",
//         price: 90000
//     },
//     {
//         make: "Tesla",
//         model: "Model 3",
//         year: 2019,
//         color: "white",
//         price: 40000
//     },
//     {
//         make: "Mercedes",
//         model: "C-Class",
//         year: 2019,
//         color: "black",
//         price: 55000
//     }
// ]
// console.log(cars.filter(el => el.price >= 40000 && el.price <= 60000 && el.year <= 2019))
// console.log(cars.filter(el => el.make === 'Mercedes'))