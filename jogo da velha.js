let x = document.querySelector('.x');
let o = document.querySelector('.o');
let boxes = document.querySelectorAll('.box');
let buttons = document.querySelectorAll('#buttons-container button');
let messageContainer = document.querySelector('#message');
let messageText = document.querySelector('#message p');
let container = document.getElementById('container');
let secondPlayer;


//contador de jogadas
let player1 = 0;
let player2 = 0;

// adicionando o evento de click aos boxes
for (let i = 0; i < boxes.length; i++){

    //quando alguem clica na caixa
    boxes[i].addEventListener("click", function() {

        let el = checkEl(player1, player2);

        //verifica se ja tem x ou o
        if(this.childNodes.length == 0){

            let clonel = el.cloneNode(true);

            this.appendChild(clonel);
    
            //computar jogada
            if(player1 == player2){
                player1++;


                if(secondPlayer == 'ai-player'){
                    //funcao para executar a logica
                    jogadaComputador();
                    player2++;  
    
                }
            }else{
                player2++;
            }

            //checa quem venceu
            checaquemganhou();

            


        }

     
    });
} 


//evento para saber se eh 2 jogadores ou IA
for(let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener("click", function() {

        secondPlayer = this.getAttribute("id");

        for(let j = 0; j < buttons.length; j++){
            buttons[j].style.display = 'none';
        }

        setTimeout(function(){
            container.classList.remove('hide');
        }, 100 )
    });

   
}


//ve quem vai jogar
function checkEl(player1, player2){
    if(player1 == player2){
        //x
        el = x;
    }else{
        //o
        el = o;
    }
    return el; 
}




//ve quem ganhou
function checaquemganhou(){
    let b1 = document.getElementById("b1");
    let b2 = document.getElementById("b2");
    let b3 = document.getElementById("b3");
    let b4 = document.getElementById("b4");
    let b5 = document.getElementById("b5");
    let b6 = document.getElementById("b6");
    let b7 = document.getElementById("b7");
    let b8 = document.getElementById("b8");
    let b9 = document.getElementById("b9");

    //horizontal
    if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0 ){

        let b1Child = b1.childNodes[0].className;
        let b2Child = b2.childNodes[0].className;
        let b3Child = b3.childNodes[0].className;

        //verificando se todos os blocos tem um x
        if(b1Child  == 'x' && b2Child == 'x' && b3Child == 'x'){
            //x venceu
            declararVencedor('x');
        }else if(b1Child  == 'o' && b2Child == 'o' && b3Child == 'o'){
            //o venceu
            declararVencedor('o');
        }
    }

     //horizontal 2
     if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0 ){

        let b4Child = b4.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;

        //verificando se todos os blocos tem um x
        if(b4Child  == 'x' && b5Child == 'x' && b6Child == 'x'){
            //x venceu
            declararVencedor('x');
        }else if(b4Child  == 'o' && b5Child == 'o' && b6Child == 'o'){
            //o venceu
            declararVencedor('o');
        }
    }

    //horizontal 3
    if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0 ){

        let b7Child = b7.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        //verificando se todos os blocos tem um x
        if(b7Child  == 'x' && b8Child == 'x' && b9Child == 'x'){
            //x venceu
            declararVencedor('x');
        }else if(b7Child  == 'o' && b8Child == 'o' && b9Child == 'o'){
            //o venceu
            declararVencedor('o');
        }
    }

    //vertical 1
    if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0 ){

        let b1Child = b1.childNodes[0].className;
        let b4Child = b4.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        //verificando se todos os blocos tem um x
        if(b1Child  == 'x' && b4Child == 'x' && b7Child == 'x'){
            //x venceu
            declararVencedor('x');
        }else if(b1Child  == 'o' && b4Child == 'o' && b7Child == 'o'){
            //o venceu
            declararVencedor('o');
        }
    }

    //vertical 2
    if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0 ){

        let b2Child = b2.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;

        //verificando se todos os blocos tem um x
        if(b2Child  == 'x' && b5Child == 'x' && b8Child == 'x'){
            //x venceu
            declararVencedor('x');
        }else if(b2Child  == 'o' && b5Child == 'o' && b8Child == 'o'){
            //o venceu
            declararVencedor('o');
        }
    }

    //vertical 3
    if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0 ){

        let b3Child = b3.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        //verificando se todos os blocos tem um x
        if(b3Child  == 'x' && b6Child == 'x' && b9Child == 'x'){
            //x venceu
            declararVencedor('x');
        }else if(b3Child  == 'o' && b6Child == 'o' && b9Child == 'o'){
            //o venceu
            declararVencedor('o');
        }
    }

    //diagonal 1
    if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0 ){

        let b1Child = b1.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        //verificando se todos os blocos tem um x
        if(b1Child  == 'x' && b5Child == 'x' && b9Child == 'x'){
            //x venceu
            declararVencedor('x');
        }else if(b1Child  == 'o' && b5Child == 'o' && b9Child == 'o'){
            //o venceu
            declararVencedor('o'); 
        }
    }


      //diagonal 2
      if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0 ){

        let b3Child = b3.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        //verificando se todos os blocos tem um x
        if(b3Child  == 'x' && b5Child == 'x' && b7Child == 'x'){
            //x venceu
            declararVencedor('x');
        }else if(b3Child  == 'o' && b5Child == 'o' && b7Child == 'o'){
            //o venceu
            declararVencedor('o');
        }
    }


      //deu velha
      if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0 && b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0 && b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0){

        let b1Child = b1.childNodes[0].className;
        let b2Child = b2.childNodes[0].className;
        let b3Child = b3.childNodes[0].className;
        let b4Child = b4.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        //verificando se todos os blocos tem um x
        if(b1Child  == 'x' || b1Child  == 'o' && b2Child == 'x' || b2Child  == 'o' && b3Child == 'x' || b3Child  == 'o' && b4Child == 'x' || b4Child  == 'o' && b5Child == 'x' || b5Child  == 'o' && b6Child == 'x' || b6Child  == 'o' && b7Child == 'x' || b7Child  == 'o' && b8Child == 'x' || b8Child  == 'o' && b9Child == 'x' || b1Child  == 'o'){
            //mesagem de deu velha
            declararVencedor();
          
        
    }

    
}

}

//limpa o jogo, declara o vencedor e atualiza o placar
function declararVencedor(winner){

    let scoreboardx = document.getElementById('scoreboard-1');
    let scoreboardo = document.getElementById('scoreboard-2');


    if(winner == 'x'){
        scoreboardx.textContent = parseInt(scoreboardx.textContent) + 1;
        msg = 'O jogador 1 Venceu!';
    } else if(winner == 'o'){
        scoreboardo.textContent = parseInt(scoreboardo.textContent) + 1;
        msg = 'O jogador 2 Venceu!';
    } else{
        msg = 'Deu velha!';
    }

    //exibe mensagem na tela
    messageText.innerHTML = msg;
    messageContainer.classList.remove("hide");

    setTimeout(function(){
        messageContainer.classList.add("hide");
    }, 3000)

    
    player1 = 0;
    player2 = 0;

    let boxesRemove = document.querySelectorAll('.box div')
      
        for(let i = 0; i < boxesRemove.length; i++){
            boxesRemove[i].parentNode.removeChild(boxesRemove[i]);
        }
    }


    function jogadaComputador(){
        let cloneO = o.cloneNode(true);
        counter = 0;
        filled = 0;


        for(let i = 0; i < boxes.length; i++){

            let numeroAleatorio = Math.floor(Math.random()*5);

            //so preencher se o filho estiver vazio
            if(boxes[i].childNodes[0] == undefined){
                if(numeroAleatorio >=1){
                    boxes[i].appendChild(cloneO);
                    counter++;
                    break;
                }
            //checagem de quantas estao vazias
            }else{
                filled++;
            }
        }

        if(counter == 0 && filled < 9 ){
            jogadaComputador();
        }

    }
   

 





