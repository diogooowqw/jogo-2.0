let valor_tempo=0//apenas para mudar o valor do tempo
let valor_pontos=0//apenas para mudar o valor dos pontos
let tempo = document.getElementById('tempo');//placar de tempo
let pontos = document.getElementById('pontos')//placar de pontos
const personagem = document.querySelector('.personagem');//personagem principal
const obstaculo =document.querySelector('.obstaculo')//objeto de obstáculo
let perdeu = document.getElementById('perdeu');//texto de perder
let inicir = document.getElementById('iniciar')
let comecar = false;//recomeçar o jogo
perdeu.style.display = 'none';//não aparecer o GAME OVER

function func_comecar(tecla)
{
    if (comecar===false && tecla.key === 'Enter')//se o jogo nao tiver começado e apertar enter
        {
            iniciar.style.display = 'none'//display do comeco obs: era so usar innerHTML no perdeu
            comecar=true//o jogo comecou
            perdeu.style.display = 'none';//não aparecer o GAME OVER
            obstaculo.classList.add('move_obstaculo');//movimentação obstáculo
        }
}

function jump (){//func para de pular
    personagem.classList.add('jump');//adicinar pulo

    setTimeout(() => {
    personagem.classList.remove('jump');//resetar pulo
},800);          
}


 // Tempo do jogo 
 setInterval(function func_tempo ()
{   
    valor_tempo+=1
    tempo.innerHTML= "Tempo: "+ valor_tempo+"s";
},2000)


setInterval(function func_pontos ()
{   
    
    pontos.innerHTML= "Pontos: "+ valor_pontos;
},1000)

setInterval(function GameOver()
{

    
    let valores_CSS_obstaculo = window.getComputedStyle(obstaculo);//pegar valores computados
    let valores_CSS_personagem = window.getComputedStyle(personagem);//pegar valores computados
    let personagem_posicao = parseFloat(valores_CSS_personagem.bottom); //tranformar px em decimal
    let obstaculo_posicao = parseFloat(valores_CSS_obstaculo.left);//transformar px em decimal
    
    if ((personagem_posicao >= 0 && personagem_posicao <= 40) && (obstaculo_posicao >= 10 && obstaculo_posicao <=90))//margem de erro
        {
            obstaculo.classList.remove('move_obstaculo');//parar a move do obstaculo
            perdeu.style.display = 'inline';//aparecer GAME OVER
            comecar = false;//para reiniciar
        }
},10)



document.addEventListener('keydown', func_comecar);
document.addEventListener('keydown',jump)
