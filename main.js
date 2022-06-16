
//Obtiene los id de los elemntos utilizados en HTML
const dysplayOption =  document.getElementById('option')
const dysplayComputer =  document.getElementById('img-computer')
const btnPlayAganin = document.getElementById('btn-play-again')
const optionGame = document.getElementById('option-user')
const optionComputer = document.getElementById('option-computer')
const rockBtn = document.getElementById('rock')
const paperBtn = document.getElementById('paper')
const scissorsBtn = document.getElementById('scissors')
const pntUser = document.getElementById('ptj-user')
const pntPc = document.getElementById('ptj-pc')
const loading = document.getElementById('loading')
const result = document.getElementById('txt-result')

//Variables de puntajes y opciones
let ptjUser = 0
let ptjPc = 0
let option

//Función para recargar la página
function reload(){
    window.location.reload()
}

//Función para obtener elementos random de un array
function randomOptions(option)
{ 
return option[Math.floor(Math.random()*option.length)];     
}

//Array con opciones del juego para la computadora
const optionPC = ['rock', 'paper', 'scissors']

//Función para ejecutar el juego
function game(user, pc) {

    //Todas las opciones para un empate dentro del juego
    if (user == 'rock' && pc =='rock' || user == 'paper' && pc =='paper'  || user == 'scissors' && pc =='scissors'){

        //Se suma un punto a cada user
        ptjUser = (ptjUser + 1)
        ptjPc = (ptjPc + 1)

        //Modifica y muestra en pantalla el nuevo resultado
        pntUser.innerHTML = `Usuario: ${ptjUser}`
        pntPc.innerHTML = `Computadora: ${ptjPc}`
        
        //Muestra el resultado final del juego
        result.innerHTML = '¡Empate!'

        //Reinicia la imagen de carga a 0, para volverla a cargar cuando el usuario presione una opción
        loading.src = ''

    //Todas las opciones para una derrota dentro del juego
    }else if (user == 'rock' && pc == 'paper' || user == 'paper' && pc =='scissors' || user == 'scissors' && pc =='rock') {

        //Se suma un punto a la computadora
        ptjPc = (ptjPc + 1)

        //Modifica y muestra en pantalla el nuevo resultado
        pntPc.innerHTML = `Computadora: ${ptjPc}`
        
        //Muestra el resultado final del juego
        result.innerHTML = '¡Perdiste!'

        //Reinicia la imagen de carga a 0, para volverla a cargar cuando el usuario presione una opción
        loading.src = ''


    //Todas las opciones para una victoria dentro del juego
    }else if (user == 'rock' && pc == 'scissors' || user == 'paper' && pc =='rock' || user == 'scissors' && pc =='paper') {

        //Se suma un punto al usuario
        ptjUser = (ptjUser + 1)

        //Modifica y muestra en pantalla el nuevo resultado
        pntUser.innerHTML = `Usuario: ${ptjUser}`
        
        //Muestra el resultado final del juego
        result.innerHTML = '¡Ganaste!'

        //Reinicia la imagen de carga a 0, para volverla a cargar cuando el usuario presione una opción
        loading.src = ''
    }

}

//Función para el resultado final final, si el usuario llega a 10 puntos o la computadora
function endGame(pointUser, pointPc) {

    //Arrays con imagenes a mostrar al final del juego
    const win = ['img/win.gif', 'img/win2.gif']
    const lost = ['img/lost.gif', 'img/lost2.gif']

    //Función para modificar el CSS, y acomodar imagenes al final del juego
    function StyleDysplay(){
        rockBtn.style.display = 'none';
        paperBtn.style.display = 'none';
        scissorsBtn.style.display = 'none';
        dysplayOption.style.display = 'none';
        dysplayComputer.style.display = 'none';
        btnPlayAganin.style.display = 'block'
        loading.style.width = '30%';
        loading.style.height = '30%';
        loading.style.marginTop = '20%';
        loading.style.border = 'solid 2px black';
    }

    //Condición para la victoria del usuario
    if (pointUser == 10 && pointUser > pointPc) {

        //Llama la función y modifica el CC
        StyleDysplay()

        //Se modifica la nueva ruta de la imagen y se agrega un de victoria
        loading.src = randomOptions(win)

        //Se modifica el resultdo y se muestra el mensaje final
        result.innerHTML = 'Ganaste el juego, llegaste a 10 puntos'

    //Condición para la derrota del usuario
    } else if (pointPc == 10 && pointPc > pointUser) {

        //Llama la función y modifica el CC
        StyleDysplay()

        //Se modifica la nueva ruta de la imagen y se agrega un de victoria
        loading.src = randomOptions(lost)

        //Se modifica el resultdo y se muestra el mensaje final
        result.innerHTML = 'Perdiste el juego, la computadora llegó a 10 puntos'

    //Condición para un empate del usuario
    } else if (pointPc == 10 && pointUser == 10) {

        //Se modifica el resultdo y se muestra el mensaje final
        result.innerHTML = 'Hubo un empate, se reinician los puntos a 5, sólo puede ganar uno !'

        //Se resetean los puntajes a 5, para volver a calcular un ganador
        ptjUser = 5
        ptjPc = 5

        //Se modifica el resultdo y se muestra el mensaje final
        pntUser.innerHTML = `Usuario: ${ptjUser}`
        pntPc.innerHTML = `Computadora: ${ptjPc}`
    }

}

//Si el usuario presiona el btn roca
rockBtn.addEventListener('click', () => {

    //Se resetea la imagen de carga y se agregan las nuevas imagenes a mostrar
    result.innerHTML = ''
    optionGame.src = 'img/tuercas.gif'
    optionComputer.src = 'img/tuercas.gif'
    loading.src = 'img/tuercas.gif'

    //Se llama la función para esperar 2 segundo a ajecutar el código
    setTimeout(() => {

    //Se modifica la ruta y se agrega la imagen correspondiente al botón que seleccionó el usuario
    optionGame.src = 'img/rock.png'

    //Se genera una opción random, escogida por la computadora
    option = randomOptions(optionPC)

    //Se agrega  la imagen correspondiente a la opción escogida por la computadora
    optionComputer.src = `img/${option}.png`

    //Se llama la función del juego y se le pasan las opciones escogidas para procesar el resultado
    game('rock', option)

    //Se llama la función que verifica la finalicació del juego
    endGame(ptjUser, ptjPc)

    }, 2000)

})

paperBtn.addEventListener('click', () => {

    //Se resetea la imagen de carga y se agregan las nuevas imagenes a mostrar
    result.innerHTML = ''
    optionGame.src = 'img/tuercas.gif'
    loading.src = 'img/tuercas.gif'
    optionComputer.src = 'img/tuercas.gif'
    
    //Se llama la función para esperar 2 segundo a ajecutar el código
    setTimeout(() => {

    //Se modifica la ruta y se agrega la imagen correspondiente al botón que seleccionó el usuario
    optionGame.src = 'img/paper.png'
    
    //Se genera una opción random, escogida por la computadora
    option = randomOptions(optionPC)

    //Se agrega  la imagen correspondiente a la opción escogida por la computadora
    optionComputer.src = `img/${option}.png`

    //Se llama la función del juego y se le pasan las opciones escogidas para procesar el resultado
    game('paper', option)

    //Se llama la función que verifica la finalicació del juego
    endGame(ptjUser, ptjPc)

    }, 2000)

})

scissorsBtn.addEventListener('click', () => {

    //Se resetea la imagen de carga y se agregan las nuevas imagenes a mostrar
    result.innerHTML = ''
    optionGame.src = 'img/tuercas.gif'
    loading.src = 'img/tuercas.gif'
    optionComputer.src = 'img/tuercas.gif'

    //Se llama la función para esperar 2 segundo a ajecutar el código
    setTimeout(() => {

    //Se modifica la ruta y se agrega la imagen correspondiente al botón que seleccionó el usuario
    optionGame.src = 'img/scissors.png'
    
    //Se genera una opción random, escogida por la computadora
    option = randomOptions(optionPC)

    //Se agrega  la imagen correspondiente a la opción escogida por la computadora
    optionComputer.src = `img/${option}.png`

    //Se llama la función del juego y se le pasan las opciones escogidas para procesar el resultado
    game('scissors', option)

    //Se llama la función que verifica la finalicació del juego
    endGame(ptjUser, ptjPc)

    }, 2000)

})





