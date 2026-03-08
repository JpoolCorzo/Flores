// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Admito que es real", time: -3 },
  { text: "Me enseñaste que el amor es infinito y que", time: 1 },
  { text: "Me busque más. Ya no duele nada", time: 5 },
  { text: "Llenas de morfina mi inseguridad", time: 9 },
  { text: "Dulce eternidad", time: 17 },
  { text: "Es verdad", time: 22 },
  { text: "Te amará mi alma", time: 23 },
  { text: "Cuando mi cabeza deje de pensar", time: 27 },
  { text: "Cuando no haya tiempo", time: 29 },
  { text: "Y este corazón deje de palpitar", time: 33 },
  { text: "Deje de palpitar", time: 39 },
  { text: "Yo quiero que me entierren", time: 45 },
  { text: "Junto a ti", time: 47 },
  { text: "Bajo el sauce que sembramos", time: 50 },
  { text: "Que nos junte la raíz", time: 54 },
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