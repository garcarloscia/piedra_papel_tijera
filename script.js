/*selección del jugador */
        // buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

        // we use the .forEach method to iterate through each button
buttons.forEach((button) => {
        
          // and for each one we add a 'click' listener
button.addEventListener('click', (e) => {
            juegaRonda(e.target.value);
          });
        });

/* contadores para los resultados de la ronda*/
let cuentaEmpate=0;
let cuentaGanasTu=0;
let cuentaGanoYo=0;


        /*elección random del ordenador*/

    function juegaRonda(playerChoice){

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
    
        

        if (playerChoice === setComputerChoice){
            cuentaEmpate++; 
            mensaje2.classList.add('empate');
            mensaje2.textContent=`Los dos hemos elegido ${setComputerChoice}. Hay empate, sigue jugando para desempatar`;
        }

        else if ( (setComputerChoice==="papel" && playerChoice==="piedra") || (setComputerChoice==="piedra" && playerChoice==="tijera" )|| (setComputerChoice==="tijera" && playerChoice==="papel")){
            cuentaGanoYo++;
            mensaje2.classList.add('gano');
            mensaje2.textContent=`${setComputerChoice.charAt(0).toUpperCase() + setComputerChoice.slice(1)} gana a ${playerChoice}.Yo gano, has perdido`;
        }
        else {
            cuentaGanasTu++;
            mensaje2.classList.add('ganas');
            mensaje2.textContent=`${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)} gana a ${setComputerChoice}.Tu ganas. Enhorabuena!`;
        }

    /*resultado de la ronda*/
    console.log(`Empate: ${cuentaEmpate} Yo gano: ${cuentaGanoYo} Tu ganas:${cuentaGanasTu}`);
}

