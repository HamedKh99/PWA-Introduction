var btnOne = document.getElementById("btn-1");
var btnTwo = document.getElementById("btn-2");
var btnThree = document.getElementById("btn-3");

var text = document.getElementById("text");

btnOne.addEventListener('click', () => {
    text.innerText = "Loading..."
    fetch('https://httpbin.org/status/200')
    .then((res) => text.innerText = "Success")
    .catch((err) => text.innerText = "Failed!")
})

btnTwo.addEventListener('click', () => {
    text.innerText = "Loading..."
    fetch('https://httpbin.org/status/200')
    .then((res) => text.innerText = "Success")
    .catch((err) => text.innerText = "Failed!")
})

btnThree.addEventListener('click', () => {
    text.innerText = "Loading..."
    fetch('https://bdsfasfas.com')
    .then((res) => text.innerText = "Success")
    .catch((err) => text.innerText = "Failed!")
})