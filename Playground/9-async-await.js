const add = (a,b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a < 0 || b < 0) {
                return reject('Numbers must be non-negative')
            }
            resolve(a+b)
        },2000)
    })
}

const doWork = async () => {
    // throw new Error('Something want wrong!')
    // return "aaaa"

    const sum = await add(1, 2)
    const sum2 = await add(sum, 5)
    const sum3 = await add(sum2, -7)
    return sum3
}

doWork().then((result) => {
    console.log('result', result)
}).catch((error) => {
    console.log('error', error)
})