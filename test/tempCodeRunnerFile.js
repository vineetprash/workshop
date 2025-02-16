function waitPromise() {
    // Promise constructor: must receive a function that accepts resolve as an argument
    return new Promise((resolve) => {
        console.log('Waiting 2 seconds')
        setTimeout(resolve, 2000) // terminate successfully after 2 seconds
    })
}
function waitMorePromise() {
    return new Promise((resolve) => {
        console.log('Waiting 4 seconds')
        setTimeout(resolve, 4000)
    })
}

function task() {
    console.log('task completed')
}
// waitPromise().then(task)
// waitPromise().then(waitMorePromise).then(task) // CHAINING OF TASKS

// ASYNC AWAIT

async function main() {
    await waitPromise()
    await waitMorePromise()
    task()
}
main()