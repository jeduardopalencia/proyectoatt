let contador = 0;

function hacerPreguntas() {
  for (let i = 0; i < 5; i++) {
    let respuesta;
    
    switch(i) {
        case 0:
            respuesta = prompt("Una persona salva a un pueblo bailando. Esta película se llama: Footloose.\n1. Verdadero.\n2. Falso.");
            if (respuesta === null) {
                return;
            }
            respuesta = parseInt(respuesta);
            if (respuesta == 1) {
                contador++;
                alert("¡La respuesta es correcta!");
            } else if (respuesta == 2) {
                contador--;
                alert("¡Te equivocaste!");
            } else {
                alert("Opción inválida. Inténtalo de nuevo.");
                i--;
            }
        break;
        case 1:
            respuesta = prompt("¿Qué película de Christopher Nolan trata sobre los viajes en el tiempo?\n1. Inception\n2. Interstellar");
            if (respuesta === null) {
                return;
            }
            respuesta = parseInt(respuesta);
            if (respuesta == 2) {
                contador++;
                alert("¡La respuesta es correcta!");
            } else if (respuesta == 1) {
                contador--;
                alert("¡Te equivocaste!");
            } else {
                alert("Opción inválida. Inténtalo de nuevo.");
                i--;
            }
        break;
        case 2:
            respuesta = prompt("Este personaje te aterroriza en los sueños. \n1.Jason\n2. Freddy krueger");
            if (respuesta === null) {
                return;
            }
            respuesta = parseInt(respuesta);
            if (respuesta == 2) {
                contador++;
                alert("¡La respuesta es correcta!");
            } else if (respuesta == 1) {
                contador--;
                alert("¡Te equivocaste!");
            } else {
                alert("Opción inválida. Inténtalo de nuevo.");
                i--;
            }
        break;
        case 3:
            respuesta = prompt("Un cientifico y su amigo viajan en el tiempo. \n1.Viaje al futuro\n2.Hot Tub Time Machine");
            if (respuesta === null) {
                return;
            }
            respuesta = parseInt(respuesta);
            if (respuesta == 1) {
                contador++;
                alert("¡La respuesta es correcta!");
            } else if (respuesta == 2) {
                contador--;
                alert("¡Te equivocaste!");
            } else {
                alert("Opción inválida. Inténtalo de nuevo.");
                i--;
            }
        break;
        case 4:
            respuesta = prompt("Un chico es mordido por un insecto. \n1.Superhero Movie\n2.Hombre Araña");
            if (respuesta === null) {
                return;
            }
            respuesta = parseInt(respuesta);
            if (respuesta == 2) {
                contador++;
                alert("¡La respuesta es correcta!");
            } else if (respuesta == 1) {
                contador--;
                alert("¡Te equivocaste!");
            } else {
                alert("Opción inválida. Inténtalo de nuevo.");
                i--;
            }
        break;
    }
  }
  if(contador > 3){
    alert("Has completado el cuestionario. Felicidades ganaste con: " + contador + " puntos.");
  }else{
    alert("Los siento perdiste con: " + contador + " puntos.");
  }
}

function Anime(){
    for (let i = 0; i < 5; i++) {
        let respuesta;
        
        switch(i) {
            case 0:
                respuesta = prompt("Naruto es huerfano.\n1.Verdadero.\n2.Falso.");
                if (respuesta === null) {
                    return;
                }
                respuesta = parseInt(respuesta);
                if (respuesta == 1) {
                    contador++;
                    alert("¡La respuesta es correcta!");
                } else if (respuesta == 2) {
                    contador--;
                    alert("¡Te equivocaste!");
                } else {
                    alert("Opción inválida. Inténtalo de nuevo.");
                    i--;
                }
            break;
            case 1:
                respuesta = prompt("El protagonista de One Piece se llama Luffy \n1.Verdadero.\n2.Falso.");
                if (respuesta === null) {
                    return;
                }
                respuesta = parseInt(respuesta);
                if (respuesta == 1) {
                    contador++;
                    alert("¡La respuesta es correcta!");
                } else if (respuesta == 2) {
                    contador--;
                    alert("¡Te equivocaste!");
                } else {
                    alert("Opción inválida. Inténtalo de nuevo.");
                    i--;
                }
            break;
            case 2:
                respuesta = prompt("La carta favorita de Kaiba es el Mago Oscuro. \n1.Verdadero.\n2.Falso.");
                if (respuesta === null) {
                    return;
                }
                respuesta = parseInt(respuesta);
                if (respuesta == 2) {
                    contador++;
                    alert("¡La respuesta es correcta!");
                } else if (respuesta == 1) {
                    contador--;
                    alert("¡Te equivocaste!");
                } else {
                    alert("Opción inválida. Inténtalo de nuevo.");
                    i--;
                }
            break;
            case 3:
                respuesta = prompt("Charmander es un poquemon tipo planta. \n1.Verdadero.\n2.Falso.");
                if (respuesta === null) {
                    return;
                }
                respuesta = parseInt(respuesta);
                if (respuesta == 2) {
                    contador++;
                    alert("¡La respuesta es correcta!");
                } else if (respuesta == 1) {
                    contador--;
                    alert("¡Te equivocaste!");
                } else {
                    alert("Opción inválida. Inténtalo de nuevo.");
                    i--;
                }
            break;
            case 4:
                respuesta = prompt("Solo existen 100 especies de digimon. \n1.Verdadero.\n2.Falso.");
                if (respuesta === null) {
                    return;
                }
                respuesta = parseInt(respuesta);
                if (respuesta == 2) {
                    contador++;
                    alert("¡La respuesta es correcta!");
                } else if (respuesta == 1) {
                    contador--;
                    alert("¡Te equivocaste!");
                } else {
                    alert("Opción inválida. Inténtalo de nuevo.");
                    i--;
                }
            break;
        }
      }
    setTimeout(function() {
        if(contador > 3){
            alert("Has completado el cuestionario. Felicidades ganaste con: " + contador + " puntos.");
        }else{
            alert("Los siento perdiste con: " + contador + " puntos.");
        }
    }, 3000);
}

function progra() {
    let respuestas = ["javascript", "api", "console.log", "python", "programación orientada a objetos"];
  
    for (let i = 0; i < respuestas.length; i++) {
      let respuesta = prompt("¿Cuál es la respuesta a la siguiente pregunta?\n" + obtenerPregunta(i));
  
      if (respuesta && respuesta.toLowerCase() == respuestas[i]) {
        contador++;
        alert("¡La respuesta es correcta!");
      } else {
        contador--;
        alert("¡Te equivocaste!");
      }
    }
  
    alert("Has completado el cuestionario.\nTotal de respuestas correctas: " + contador);
  }
  
  function obtenerPregunta(indice) {
    let preguntas = [
      "¿Cuál es el lenguaje de programación más utilizado en desarrollo web?",
      "¿Cuál de los siguientes NO es un lenguaje de programación web?",
      "¿Qué método de JavaScript se usa para imprimir en la consola?",
      "¿Cuál es un lenguaje de programación popular para la creación de inteligencia artificial?",
      "¿Qué significa POO en programación?"
    ];
  
    return preguntas[indice];
  }
  
function respuestas() {
    progra();
    setTimeout(function() {
        if(contador > 3){
            alert("Has completado el cuestionario. Felicidades ganaste con: " + contador + " puntos.");
        }else{
            alert("Los siento perdiste con: " + contador + " puntos.");
        }
    }, 3000);
  }


