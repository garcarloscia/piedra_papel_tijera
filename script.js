/* contadores para los resultados de la ronda*/

        // buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

        // we use the .forEach method to iterate through each button
buttons.forEach((button) => {
        
          // and for each one we add a 'click' listener
button.addEventListener('click', (e) => {
            juegaRonda(e.target.value);
          });
        });

let cuentaEmpate=0;
let cuentaGanasTu=0;
let cuentaGanoYo=0;

/* contador de partidas de la ronda de 5*/
/* for (let i=1; i<=5; i++){

    console.log(`Partida ${i} de 5`); */

/*imput del jugador y condiciones para que sea piedra, papel o tijera*/
   /*  let playerChoice=window.prompt("¿Piedra, papel o tijera?").toLowerCase();

    if (playerChoice !=="piedra" && playerChoice !== "papel" && playerChoice !== "tijera"){
        alert("Vuelve a jugar y esta vez escribe bien");
        i--;

    }else { */
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
        console.log("Yo elijo " + setComputerChoice);
        

        if (playerChoice === setComputerChoice){
            cuentaEmpate++; 

            console.log(`Los dos hemos elegido ${setComputerChoice}. Hay empate, sigue jugando para desempatar`);
        }

        else if ( (setComputerChoice==="papel" && playerChoice==="piedra") || (setComputerChoice==="piedra" && playerChoice==="tijera" )|| (setComputerChoice==="tijera" && playerChoice==="papel")){
            cuentaGanoYo++;
            console.log(`${setComputerChoice.charAt(0).toUpperCase() + setComputerChoice.slice(1)} gana a ${playerChoice}.Yo gano, has perdido`);
        }
        else {
            cuentaGanasTu++;
            console.log(`${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)} gana a ${setComputerChoice}.Tu ganas. Enhorabuena!`);
        }

   /*  } */
    /*resultado de la ronda*/
    console.log(`Empate: ${cuentaEmpate} Yo gano: ${cuentaGanoYo} Tu ganas:${cuentaGanasTu}`);
}
/* juegaRonda('piedra'); */



/* } */
