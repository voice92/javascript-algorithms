/*
 * Задача 11: «Пересечения массивов»
 *
 * Напишите функцию intersection(arr1, arr2). Она должна принимать
 * на вход два массива целых чисел. Функция должна вернуть новый
 * массив чисел, содержащихся в обоих исходных массивах.
 * 
*/

function intersection(arr1, arr2) {
    const result = []
    let higherArray = arr1.length > arr2.length ? arr1 : arr2
    let lowerArray = arr1.length < arr2.length ? arr1 : arr2

    for (let item of higherArray) {
        if (lowerArray.includes(item)) result.push(item)
    }

    return Array.from(new Set(result))
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])); // [4, 1]
console.log(intersection([1, 5, 4, 2], [7, 12])); // []