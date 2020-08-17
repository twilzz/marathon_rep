setTimeout(() => {
    console.log("Js подключился");
}, 5000);

const firstDiv = document.querySelector('.welcome');
console.log(firstDiv);

firstDiv.addEventListener('click', () => {
    firstDiv.innerHTML = "<p>JS работает</p><img src='img/yes.png'>";
})