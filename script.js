/*El jugador selecciona de los botones */
const buttons = document.querySelectorAll('button');
 
buttons.forEach((button) => {

    button.addEventListener('click', (e) => {
        juegaRonda(e.target.value);
    });
});

/* contadores para los resultados de la ronda*/
let cuentaEmpate=0;
let cuentaGanasTu=0;
let cuentaGanoYo=0;

function juegaRonda(playerChoice){
    /*elección random del ordenador*/
    function getComputerChoice (){
        const numChoice = Math.round((Math.random()*2));
        let computerChoice ="";

        if (numChoice==0) {computerChoice = "piedra";}
        else if (numChoice==1) {computerChoice = "papel";}
        else {computerChoice = "tijera";}

        return computerChoice;
    }

    /*resultados de la partida*/
    const setComputerChoice=getComputerChoice()
    const mensaje1 = document.querySelector('#mensaje1');
    const mensaje2 = document.querySelector('#mensaje2');

    mensaje1.textContent=`Yo elijo ${setComputerChoice}`;
        
    mensaje1.classList.add('crecer');
    
        

    if (playerChoice === setComputerChoice){
        cuentaEmpate++;
        mensaje2.textContent=`Los dos hemos elegido ${setComputerChoice}. Hay empate, sigue jugando para desempatar`;
        mensaje2.classList.add('crecer');
    }

    else if ( (setComputerChoice==="papel" && playerChoice==="piedra") || (setComputerChoice==="piedra" && playerChoice==="tijera" )|| (setComputerChoice==="tijera" && playerChoice==="papel")){
        cuentaGanoYo++;
        mensaje2.textContent=`${setComputerChoice.charAt(0).toUpperCase() + setComputerChoice.slice(1)} gana a ${playerChoice}.`;
        mensaje2.classList.add('crecer');
        const yoGano = document.createElement('span');
        yoGano.classList.add('gano');
        yoGano.textContent=" Yo gano, has perdido";
        mensaje2.append(yoGano);
    }
        
    else {
        cuentaGanasTu++;
        mensaje2.textContent=`${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)} gana a ${setComputerChoice}. `;
        mensaje2.classList.add('crecer');
        const ganasTu = document.createElement('span');
        ganasTu.classList.add('ganas');
        ganasTu.textContent="Tu ganas ¡Enhorabuena!";
        mensaje2.append(ganasTu);
    }

    ///marcador////

    const marcador = document.createElement('div');
    marcador.classList.add('marcador');
    marcador.textContent=`Marcador: Empate: ${cuentaEmpate} Yo gano: ${cuentaGanoYo} Tu ganas:${cuentaGanasTu}`;
    mensaje2.append(marcador);

}

