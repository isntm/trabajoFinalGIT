// parcial de programación 1 - junio 2024
// En un juego de rol, diez personajes comienzan con 100 puntos de vida cada uno
// Se auto ejecuta un duelo en el que en cada turno un personaje es atacado al azar y 
// pierde entre 10 y 20 puntos de vida
// El duelo termina cuando uno de los personajes pierde todos sus puntos de vida

const personajes = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100];

function ataque() {
        const indice = Math.floor(Math.random() * (personajes.length));
        const golpeAleatorio = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
        personajes[indice] = personajes[indice] - golpeAleatorio
}

function duelo() {
    perdio = false;
    console.log("Comienza el duelo entre los personajes.");
    console.log("Cada personaje comienza con 100 puntos de vida.");
    console.log("");
      
while (perdio != true){
    ataque();
  for (i=0; i<personajes.length; i++)      
    if (personajes[i] <= 0) {
        perdio = true;
        console.log("El personaje " + (i + 1) + " ha perdido.");
        console.log("");
        console.log("Los jugadores quedaron así:");
        personajes[i] = 0;
        for (let j = 0; j < personajes.length; j++) {
            console.log("Personaje " + (j + 1) + ": " + personajes[j] + " puntos de vida");
        }
        
    }
 }
}


duelo();