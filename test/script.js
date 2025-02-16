const jsonText = document.getElementById("jsonText");
const button = document.getElementById("nextjson");

async function fetchjson() {

  // same code using promise.then syntax
  // fetch('https://jsonplaceholder.typicode.com/todos/1')
  //     .then(response => response.json())
  //     .then(json => console.log(json))
  //     .catch(error => console.error(error));
  const randomNumber = Math.floor(Math.random()*9) + 1
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${randomNumber}`);
  const data = await response.json(); // parsing JSON is an asynchronous function hence we need to wait until it returns value

  console.log(data)
  console.log(response)
  
  // jsonText.textContent = data.id + " " + data.userId + "\n" + data.title + "\n" + data.completed + "\n" 
  jsonText.innerHTML = `ID: ${data.id}  <br> USER: ${data.userId} <br> \n TITLE: ${data.title}`;
  
}

button.addEventListener("click", fetchjson);

