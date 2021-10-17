contador = 0
let card_0 = document.querySelector("div.card_0")
let card_1 = document.querySelector("div.card_1")
let card_2 = document.querySelector("div.card_2")
let card_3 = document.querySelector("div.card_3")

let chat = document.querySelector("div.chat")
let text = document.querySelector("p.text")

let line = document.querySelectorAll("div.line_4")
var lastLine = line[line.length - 1]

let bot = document.querySelectorAll("div.bot")
var lastBot = bot[bot.length - 1]

let user = document.querySelector("div.user")

let escolha_1 = document.getElementsByName("human")

function trocar() {
    if(contador == 0) {
        var value = document.querySelector("#name").value

        addBalonBot(0.1);
        var takeLastText = document.querySelectorAll(".textBot")
        var lastText = takeLastText[takeLastText.length - 1]
        lastText.innerHTML = `Olá ${value}, de que planeta você é?`

        card_0.style.display = 'none';
        card_1.style.display = 'flex';

    } else if(contador == 1) {
        var value = document.querySelector("#world").value
        addBalonUser();

        card_1.style.display = 'none';
        card_2.style.display = 'flex';

        var takeLastText = document.querySelectorAll(".textUser")
        var lastText = takeLastText[takeLastText.length - 1]
        lastText.innerHTML = `Sou do planeta ${value}.`

        addBalonBot(1.5);
        var takeLastText = document.querySelectorAll(".textBot")
        var lastText = takeLastText[takeLastText.length - 1]
        lastText.innerHTML = "Ohhh! Eu não conhecia esse planeta!" 

        addBalonBot(3);
        var takeLastText = document.querySelectorAll(".textBot")
        var lastText = takeLastText[takeLastText.length - 1]
        lastText.innerHTML = "Mas você é humano? Ou é de outra raça?" 

    } else if(contador == 2) {
        var escolha;
        
        for(var i = 0; i < escolha_1.length; i++){
            if(escolha_1[i].checked){
                escolha = escolha_1[i].value;
            }
        }

        card_2.style.display = 'none';
        card_3.style.display = 'flex';

        addBalonUser();
        var takeLastText = document.querySelectorAll(".textUser")
        var lastText = takeLastText[takeLastText.length - 1]
        lastText.innerHTML = escolha

        if(escolha == "Sou humano") {
            addBalonBot(1.5);
            var takeLastText = document.querySelectorAll(".textBot")
            var lastText = takeLastText[takeLastText.length - 1]
            lastText.innerHTML = "Um dia vou conhecer vocês pessoalmente"
        } else {
            addBalonBot(1.5);
            var takeLastText = document.querySelectorAll(".textBot")
            var lastText = takeLastText[takeLastText.length - 1]
            lastText.innerHTML = "Provavelmente você não conhece a minha também."
        }

        addBalonBot(3);
        var takeLastText = document.querySelectorAll(".textBot")
        var lastText = takeLastText[takeLastText.length - 1]
        lastText.innerHTML = "É verdade que você gosta de café ?"

        updateScroll()

    }else if(contador == 3) {
        var preference = document.querySelectorAll("[name=preference]:checked")
        var values = []

        for (let i = 0; i < preference.length; i++) {
            values.push(preference[i].value)
        }

        if(values.length == 1 && values[0] == "sorvete") {
            addBalonUser();
            var takeLastText = document.querySelectorAll(".textUser")
            var lastText = takeLastText[takeLastText.length - 1]
            lastText.innerHTML = `Gosto muito de sorvete`

            addBalonBot(1.5);
            var takeLastText = document.querySelectorAll(".textBot")
            var lastText = takeLastText[takeLastText.length - 1]
            lastText.innerHTML = "No meu mundo não temos sorvete :("
        } else if (values.length == 1 && values[0] == "café") {
            var user = document.querySelector("div.user")
            

            addBalonUser();
            var takeLastText = document.querySelectorAll(".textUser")
            var lastText = takeLastText[takeLastText.length - 1]
            lastText.innerHTML = `Amo café, sou proga-<br>mador né`

            user.style.cssText = `animation-delay: 1.5s;`

            addBalonUser(1.5);
            var takeLastText = document.querySelectorAll(".textUser")
            var lastText = takeLastText[takeLastText.length - 1]
            lastText.innerHTML = `Se não fosse pelo café você nem existiria...`

            addBalonBot(3);
            var takeLastText = document.querySelectorAll(".textBot")
            var lastText = takeLastText[takeLastText.length - 1]
            lastText.innerHTML = "Então eu sou apenas um bot?"

            addBalonBot(4);
            var takeLastText = document.querySelectorAll(".textBot")
            var lastText = takeLastText[takeLastText.length - 1]
            lastText.innerHTML = "Preferia não ter sido criado!"
        } else if(values.length == 1 && values[0] == "dormir") {
            addBalonUser();
            var takeLastText = document.querySelectorAll(".textUser")
            var lastText = takeLastText[takeLastText.length - 1]
            lastText.innerHTML = `Na verdade prefiro ${values[0]}`

            addBalonBot(1.5);
            var takeLastText = document.querySelectorAll(".textBot")
            var lastText = takeLastText[takeLastText.length - 1]
            lastText.innerHTML = "Prefiro madrugar, dormir não dá XP"
        } else if(values.length == 2) {
            addBalonUser();
            var takeLastText = document.querySelectorAll(".textUser")
            var lastText = takeLastText[takeLastText.length - 1]
            lastText.innerHTML = `Eu gosto de ${values[0]} e ${values[1]}`

            addBalonBot(1.5);
            var takeLastText = document.querySelectorAll(".textBot")
            var lastText = takeLastText[takeLastText.length - 1]
            lastText.innerHTML = `Amo ${values[0]} e ${values[1]} também`

        } else if(values.length == 3) {
            addBalonUser();
            var takeLastText = document.querySelectorAll(".textUser")
            var lastText = takeLastText[takeLastText.length - 1]
            lastText.innerHTML = `Eu gosto de ${values[0]}, ${values[1]} e ${values[2]}`

            addBalonBot(1.5);
            var takeLastText = document.querySelectorAll(".textBot")
            var lastText = takeLastText[takeLastText.length - 1]
            lastText.innerHTML = `Catapimbas, você gosta de tudo`
        }
    }
    contador++;
    updateScroll()
}

function addBalonUser(delay) {
    let userClone = user.cloneNode(true)
    chat.appendChild(userClone);
    userClone.style.display = "flex";
    
    var div = document.createElement('div');
    div.setAttribute('class', 'line_5');
    div.style.cssText = `animation-delay: ${delay}s;`
    chat.appendChild(div);
}

function addBalonBot(delay) {
    lastBot.style.cssText = `animation-delay: ${delay}s;`
    lastLine.style.cssText = `animation-delay: ${delay}s;`

    let botClone = lastBot.cloneNode(true)
    chat.appendChild(botClone);
    botClone.style.display = "flex"

    let lineClone = lastLine.cloneNode(true)
    chat.appendChild(lineClone);
    lineClone.style.display = "block"
}

function updateScroll() {
    chat.scrollTop = chat.scrollHeight
}



