contador = 0
let card_1 = document.querySelector("div.card_1")
let card_2 = document.querySelector("div.card_2")
let card_3 = document.querySelector("div.card_3")
let ballons = document.querySelector("p.text")

function trocar() {
    if(contador == 0) {
        card_1.style.display = 'none';
        card_2.style.display = 'flex';
        ballons.innerHTML = 'Olá Henryck, de que mundo você é?'
    } else if(contador == 1) {
            card_2.style.display = 'none';
            card_3.style.display = 'flex';
    }
    contador++;
}
