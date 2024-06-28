//PERSONAGEM E OBSTÁCULO
const personagem = document.querySelector('.personagem');//personagem principal
const obstaculo = document.querySelector('.obstaculo')//objeto de obstáculo
let move_obstaculo = document.querySelector('.move_obstaculo')//movimentação obstáculo
//PERSONAGEM E OBSTÁCULO

//TEMPO
let valor_tempo = 0//apenas para mudar o valor do tempo
let tempo = document.getElementById('tempo');//placar de tempo
//TEMPO

//MENUS
let DIV_iniciar = document.getElementById('DIV_iniciar')//div do menu
let GameOver_menu = document.getElementById('GameOver_menu');
let jogarDeNovo=document.getElementById("jogarDeNovo");//botão do jogar de novo
let play = document.getElementById("play");//botao para iniciar o jogo
let botao1 = document.getElementById('botao1');
let botao2 = document.getElementById('botao2');
//MENUS

//OUTROS
let escolheu_personagem = false;//já escolheu um personagem
let pulando = false;//está ou não pulando
let comecar= '';//variável que trava tudo se não começar
//OUTROS

//DISPLAYS
jogarDeNovo.style.display='none';//botao do jogar de novo
menu.style.display='none';//sumir com menu
GameOver_menu.style.display='none';//sumir com o GameOver de começo
personagem.style.display = 'none';
//DISPLAYS

alterarBoneco.style.display='none';
jogarDeNovo.style.display='none';//botao do jogar de novo

//VALORES COMPUTADOS
let valores_CSS_obstaculo = window.getComputedStyle(obstaculo);//pegar valores computados
let valores_CSS_personagem = window.getComputedStyle(personagem);//pegar valores computados
let personagem_posicao = parseFloat(valores_CSS_personagem.bottom); //tranformar px em decimal
let obstaculo_posicao = parseFloat(valores_CSS_obstaculo.left);//transformar px em decimal
//VALORES COMPUTADOS


// Função começar jogo 
function func_comecar()
{
    comecar = true
    if (comecar === true && escolheu_personagem===true)//se o jogo nao tiver começado
    {   
        play.style.display='none'//botão para iniciar
        DIV_iniciar.style.display = 'none'//menu do começo
        valor_tempo = 0;//zerar o tempo
        obstaculo.classList.add('move_obstaculo');//movimentação obstáculo
    }
}


// Função  de gameOver
setInterval(function GameOver()
{
    valores_CSS_obstaculo = window.getComputedStyle(obstaculo);//pegar valores computados
    valores_CSS_personagem = window.getComputedStyle(personagem);//pegar valores computados
    personagem_posicao = parseFloat(valores_CSS_personagem.bottom); //tranformar px em decimal
    obstaculo_posicao = parseFloat(valores_CSS_obstaculo.left);//transformar px em decimal
    
    if ((personagem_posicao >= 0 && personagem_posicao <= 40) && (obstaculo_posicao >= 10 && obstaculo_posicao <=90))//margem de erro
    {
        comecar=false
        obstaculo.classList.remove('move_obstaculo');//parar a move do obstaculo
        GameOver_menu.style.display='inline';//aparecer o GameOver
        jogarDeNovo.style.display='inline';//sla pq mas ta ai
        menu.style.display='inline';
    }  
},10)

//Recomeçar jogo depois de gameoverde
function recomecar ()
{
    GameOver_menu.style.display = 'none';//sumir com menu de GameOver
    func_comecar();//chamar a func_comecar de novo
}

//fuFção do menu caso , usuário 
function mudarPersonagem ()
{

    GameOver_menu.style.display='none'//sumir game over
    play.style.display = 'inline';
    DIV_iniciar.style.display='inline';//aparecer os personagens
    escolheu_personagem = false;
}

// Função para de finir 
setInterval(function func_tempo ()
{   
     if(comecar==true && escolheu_personagem===true)
    {
        valor_tempo+=1;//aumentar tempo
        tempo.innerHTML= "Tempo: "+ valor_tempo+"s";
    }
},1000)



function jump ()
{
    if(comecar===true && pulando===false)
    {
        personagem.classList.add('jump');//adicinar pulo
        pulando = true//o personagem está pulando 

        setTimeout(() => {
            personagem.classList.remove('jump');//resetar pulo
            pulando=false;//parou de pular
        },800)
    };          
}



function escolher_personagem_1()
{
    botao1.classList.add('animacao_botao');//animação de escolha
    personagem.style.display = 'inline';//aparecer personagem após escolha
    setTimeout(() => {
        personagem.src = 'mario.gif'//mudar sprite
        botao1.classList.remove('animacao_botao');//animação de escolha
        escolheu_personagem = true;
    },700)
}

function escolher_personagem_2()
{
    botao2.classList.add('animacao_botao');//animação de escolha
    personagem.style.display = 'inline';//aparecer personagem após escolha
    setTimeout(() => {
        personagem.src = 'jose.gif'//mudar sprite
        botao2.classList.remove('animacao_botao');//animação de escolha
        escolheu_personagem = true;
    },700)
}

botao1.addEventListener('click', escolher_personagem_1);
botao2.addEventListener('click', escolher_personagem_2);
play.addEventListener('click', func_comecar);
jogarDeNovo.addEventListener('click', recomecar);
menu.addEventListener('click', mudarPersonagem);
alterarBoneco.addEventListener('click',recomecar);
document.addEventListener("keydown",jump);




