contador = 0
let card_1 = document.querySelector("div.card_1")
let card_2 = document.querySelector("div.card_2")
let card_3 = document.querySelector("div.card_3")

let chat = document.querySelector("div.chat")
let text = document.querySelector("p.text")

let bot = document.querySelector("div.bot")

let user = document.querySelector("div.user")

let escolha_1 = document.getElementsByName("human")

document.querySelector("p.textBot").innerHTML = "Olá Henryck, de que planeta você é?"

function trocar() {
    if(contador == 0) {
        var value = document.querySelector("#world").value
        addBalonUser();

        card_1.style.display = 'none';
        card_2.style.display = 'flex';

        var takeLastText = document.querySelectorAll(".textUser")
        var lastText = takeLastText[takeLastText.length - 1]
        lastText.innerHTML = `Sou do planeta ${value}.`

        addBalonBot();
        var takeLastText = document.querySelectorAll(".textBot")
        var lastText = takeLastText[takeLastText.length - 1]
        lastText.innerHTML = "Ohhh! Eu não conhecia esse planeta!" 

        addBalonBot();
        var takeLastText = document.querySelectorAll(".textBot")
        var lastText = takeLastText[takeLastText.length - 1]
        lastText.innerHTML = "Mas você é humano? Ou é de outra raça?" 

    } else if(contador == 1) {
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
            addBalonBot();
            var takeLastText = document.querySelectorAll(".textBot")
            var lastText = takeLastText[takeLastText.length - 1]
            lastText.innerHTML = "Um dia vou conhecer vocês pessoalmente"
        } else {
            addBalonBot();
            var takeLastText = document.querySelectorAll(".textBot")
            var lastText = takeLastText[takeLastText.length - 1]
            lastText.innerHTML = "Provavelmente você não conhece a minha também."
        }

        addBalonBot();
        var takeLastText = document.querySelectorAll(".textBot")
        var lastText = takeLastText[takeLastText.length - 1]
        lastText.innerHTML = "É verdade que você gosta de café ?"

        updateScroll()

    }else if(contador == 2) {
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

            addBalonBot();
            var takeLastText = document.querySelectorAll(".textBot")
            var lastText = takeLastText[takeLastText.length - 1]
            lastText.innerHTML = "No meu mundo não temos sorvete :("
        } else if (values.length == 1 && values[0] == "café") {
            addBalonUser();
            var takeLastText = document.querySelectorAll(".textUser")
            var lastText = takeLastText[takeLastText.length - 1]
            lastText.innerHTML = `Amo café, sou proga-<br>mador né`

            addBalonUser();
            var takeLastText = document.querySelectorAll(".textUser")
            var lastText = takeLastText[takeLastText.length - 1]
            lastText.innerHTML = `Se não fosse pelo café você nem existiria...`

            addBalonBot();
            var takeLastText = document.querySelectorAll(".textBot")
            var lastText = takeLastText[takeLastText.length - 1]
            lastText.innerHTML = "Então eu sou apenas um bot?"

            addBalonBot();
            var takeLastText = document.querySelectorAll(".textBot")
            var lastText = takeLastText[takeLastText.length - 1]
            lastText.innerHTML = "Preferia não ter sido criado!"
        } else if(values.length == 1 && values[0] == "dormir") {
            addBalonUser();
            var takeLastText = document.querySelectorAll(".textUser")
            var lastText = takeLastText[takeLastText.length - 1]
            lastText.innerHTML = `Na verdade prefiro ${values[0]}`

            addBalonBot();
            var takeLastText = document.querySelectorAll(".textBot")
            var lastText = takeLastText[takeLastText.length - 1]
            lastText.innerHTML = "Prefiro madrugar, dormir não dá XP"
        } else if(values.length == 2) {
            addBalonUser();
            var takeLastText = document.querySelectorAll(".textUser")
            var lastText = takeLastText[takeLastText.length - 1]
            lastText.innerHTML = `Eu gosto de ${values[0]} e ${values[1]}`

            addBalonBot();
            var takeLastText = document.querySelectorAll(".textBot")
            var lastText = takeLastText[takeLastText.length - 1]
            lastText.innerHTML = `Amo ${values[0]} e ${values[1]} também`

        } else if(values.length == 3) {
            addBalonUser();
            var takeLastText = document.querySelectorAll(".textUser")
            var lastText = takeLastText[takeLastText.length - 1]
            lastText.innerHTML = `Eu gosto de ${values[0]}, ${values[1]} e ${values[2]}`

            addBalonBot();
            var takeLastText = document.querySelectorAll(".textBot")
            var lastText = takeLastText[takeLastText.length - 1]
            lastText.innerHTML = `Catapimbas, você gosta de tudo`
        }
    }
    contador++;
    updateScroll()
}

function addBalonUser() {
    let userClone = user.cloneNode(true)
    chat.appendChild(userClone);
    userClone.style.display = "flex";
    var div = document.createElement('div');
    div.setAttribute('class', 'line_5');
    chat.appendChild(div);
}

function addBalonBot() {
    let botClone = bot.cloneNode(true)
    chat.appendChild(botClone);
    var div = document.createElement('div');
    div.setAttribute('class', 'line_4');
    chat.appendChild(div);
}

function updateScroll() {
    chat.scrollTop = chat.scrollHeight
}



