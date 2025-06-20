const number = document.getElementById("input");
const subtitle = document.getElementById("subtitle");
const randomNumber = Math.floor(Math.random(1) *101);
const button = document.getElementById("submit-button");
const container = document.getElementById("container"); 
const restart = `<button id="recarregar">Recomeçar</button>`


function awnser() {
console.log(randomNumber);
    return number.value;
}


function check() {
if(awnser() < randomNumber) {
subtitle.innerText = "O número é maior que este";
}else if(awnser() > randomNumber) {
    subtitle.innerText = "O número é menor que este";
} 
if(awnser() == randomNumber) {
    button.style.display = "none";
    subtitle.innerText = "Você acertou";
    container.insertAdjacentHTML ("beforeend", restart);
    document.getElementById("recarregar").addEventListener("click", function(){
        location.reload();
    })
}
}