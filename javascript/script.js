// criando variaveis

//contagem de pontos

var contUser = 0
var contPC = 0

//elementos da aplicação
const imgUser = document.getElementById("user")
const imgPC = document.getElementById("pc")
const playing = document.getElementById("playing")
const contador = document.getElementById("contador")
const winner = document.getElementById("winner")
const loser = document.getElementById("loser")

//sons//

const audioWin = new Audio('sound_effects/mario_game_won.mp3')
const audioLose = new Audio('sound_effects/mario_game_over.mp3')
const audioRWin = new Audio('sound_effects/sonic_coin_win.mp3')
const audioRLose = new Audio('sound_effects/disappearing_lose.mp3')
const audioDraw = new Audio('sound_effects/draw.mp3')

//variaveis de elemento//

var player1 =""
var player2 =""

playing.addEventListener("click",() => {
    reset()
    playPC()
})

function reset(){
    player1 = document.querySelector('input[name="play"]:checked').value
    imgUser.innerHTML = "<img src='img/"+player1 + ".png'>"
    imgPC.innerHTML =""
}

function playPC(){
    let opt = ['botao-pedra','botao-papel','botao-tesoura']
    let num = Math.floor(Math.random() * (2-0 + 1)) + 0;
    //declara uma variável numerica e atribui um valor aleatório
    //entre 0 e 2, arredondado para o inteiro mais proximo

    player2 = opt[num]
    imgPC.innerHTML = "<img src='img/" + player2 + ".png'>"
    Analyse()
}

function Analyse(){

    playing.disabled = true
    let win = "0"

       //  0 - EMPATE
       //  1 - VITORIA
       // -1 - DERROTA

    if (player1 == player2){

    }

    else if (player1 == "botao-pedra")
        {
            win = player2 == 'botao-tesoura' ? 1 : -1
        }  

    else if (player1 == "botao-papel")
        {
            win = player2 == 'botao-pedra' ? 1 : -1
        }

    else if (player1 == "botao-tesoura")
        {
            win = player2 == 'botao-papel' ? 1 : -1
        }
        
    if (win == 0)
        {
            audioDraw.play()
        }

    else if (win > 0){
        contUser = contUser + 1
        audioRWin.play()
    }
    else{
        contPC = contPC + 1
        audioRLose.play()
    }

    contador.innerHTML = contUser + ":" + contPC

    if (contUser >= 5)
    {
        winner.classList.remove('none')
        winner.classList.add('center')
        audioWin.play()
    }

    if (contPC >= 5)
    {
        loser.classList.remove('none')
        loser.classList.add('center')
        audioLose.play()
    }

    setTimeout(() => {
        playing.disabled = false
        clear();
    },1000)

}

function clear(){
    imgPC.innerHTML=""
    imgUser.innerHTML=""
}

function newGame(){
    contador.innerHTML = "0:0"
    contPC = 0
    contUser = 0
    reset()
    winner.classList.add('none')
    winner.classList.remove('center')
    loser.classList.add('none')
    loser.classList.remove('center')
}