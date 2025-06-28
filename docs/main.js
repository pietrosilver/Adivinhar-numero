const number = document.getElementById("input");
const subtitle = document.getElementById("subtitle");
const randomNumber = Math.floor(Math.random(1) *101);
const button = document.getElementById("submit-button");
const container = document.getElementById("container"); 
const tryed = document.getElementById('value');
const restart = `<button id="recarregar">Recomeçar</button>`;
let tries = 0;

function awnser() {
console.log(randomNumber);
    return number.value;
}


button.addEventListener("click", () =>{ 
    tries++;
    tryed.innerText = tries;


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
        return;
    })
}
});
