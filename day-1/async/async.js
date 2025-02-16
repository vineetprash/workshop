// WORKING WITH ASYNC FUNCTIONS
// CALLBACKS

function waitAndExecute(operation) {
    // Simulating file read/write, database query etc
    console.log('Waiting 2 seconds')
    setTimeout(operation, 2000)
  }
  function waitMoreAndExecute(operation) {
    // Simulating file read/write, database query etc
    console.log('Waiting 4 seconds')
    setTimeout(operation, 4000)
  } 
  function task() {
    console.log('Task completed')
  }
  
  waitAndExecute(task)
  // waitAndExecute(() => waitMoreAndExecute(task)) // CHAINING OF TASKS
  
  
// PROMISES
  
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