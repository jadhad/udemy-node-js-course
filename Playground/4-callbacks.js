// setTimeout(() => {
//     console.log('two seconds are up')
// }, 2000)
//
// const names = ['AAA', 'BBB', 'CCC']
// const shortNames = names.filter((name) => {
//     return name.length <= 4
// })
//
// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longitude: 0
//         }
//
//         callback(data)
//     }, 2000)
// }
//
// geocode('Address', (data) => {
//     console.log(data)
// })
//
// const add = (num1, num2, callback) => {
//     setTimeout(() => {
//         callback(num1+num2)
//     }, 2000)
// }
//
// add(1, 4, (sum) => {
//     console.log(sum) // Should print: 5
// })


// callback example
const doWorkCallback = (callback) => {
    setTimeout(() => {
        //callback('This is my error!', undefined)
        callback(undefined, [1, 4, 7])
    }, 2000)
}

doWorkCallback((error, result) => {
    if (error) {
        return console.log(error)
    }

    console.log(result)
})