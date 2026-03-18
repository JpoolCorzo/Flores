// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Uy, qué buena que estás, babe", time: 0 },
  { text: "Labios rojos supreme 💋", time: 3 },
  { text: "Ese culo grandote, lo vuelvo a repetir", time: 7 },
  { text: "Bebita linda, me estoy prendiendo 🔥", time: 11 },
  { text: "No hay peor error que no quedarnos solos.", time: 16 },
  { text: "Mami (mami)", time: 18 },
  { text: "Vente que te necesito y", time: 20 },
  { text: "Tal vez (tal vez)", time: 22 },
  { text: "Te ruege por un besito 😘", time: 25 },
  { text: "Ay, no me complico", time: 27 },
  { text: "Me tienes en tu red", time: 29 },
  { text: "Si quieres me das un ratito", time: 32 },
  { text: "My love, te tengo fe (yeh-yeh)", time: 34 },
  { text: "Mami, tomemos un traguito de cerveza 🍸", time: 36 },
  { text: "O como tus prefieras", time: 38 },
  { text: "Un café por el mall y contamos estrellas ✨", time: 41 },
  { text: "También es buena idea", time: 43 },
  { text: "Lo que te gusta tu pide, servido en la mesa", time: 45 },
  { text: "A su merced de lo que diga, mi reina 👑", time: 48 },
  { text: "'Ta cita tú y yo vamos a romperla", time: 50 },
  { text: "Los que se gustan cantan a capella", time: 52 },
  { text: "Qué fácil", time: 53 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 5
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);