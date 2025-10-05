const heart = document.getElementById("heart");
const envelope = document.getElementById("envelope");
const player = document.getElementById("player");
const messageEl = document.getElementById("message");
const nextBtn = document.getElementById("nextBtn");

// 🎵 Restaurar música desde localStorage
window.addEventListener("load", () => {
  const song = localStorage.getItem("currentSong");
  const time = localStorage.getItem("currentTime");
  const wasPlaying = localStorage.getItem("isPlaying") === "true";

  if (song) {
    player.src = song;
    player.addEventListener("loadedmetadata", () => {
      player.currentTime = time ? parseFloat(time) : 0;
      if (wasPlaying) {
        player.play();
      }
    });
  }
});

// 💌 Mensaje de amor
const mensaje = `Llegaste justo cuando ya no creia en los milagros,
y asi entendi que lo esencial no necesita llegar primero.
Tu existencia es el regalo más hermoso que me han dado.
Cuando no estas te extraño más de lo que te puedo admitir,
todo lo que hago tiene un pedazo de ti, y me siento a medias,
y cuando te tengo cerca de mi, entre mis brazos, con tus labios
rosando los mios, "siento paz" siento que volvi a casa,
y quiero quedarme aquí, porque eres tú lo más especial que tengo,
lo unico que necesito.`;

// ✍️ Efecto máquina de escribir
function typeWriter(text, element, speed = 60, callback) {
  let i = 0;
  function escribir() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(escribir, speed);
    } else if (callback) {
      callback();
    }
  }
  escribir();
}

// 💖 Animación corazón → carta
heart.addEventListener("click", () => {
  heart.style.display = "none";
  envelope.classList.add("open");

  setTimeout(() => {
    typeWriter(mensaje, messageEl, 50, () => {
      nextBtn.style.display = "inline-block"; // Mostrar botón al terminar
    });
  }, 1200);
});

// ⏩ Ir a la siguiente página
nextBtn.addEventListener("click", () => {
  // Guardar el estado de la música antes de pasar al index3
  localStorage.setItem("currentSong", player.src);
  localStorage.setItem("currentTime", player.currentTime);
  localStorage.setItem("isPlaying", !player.paused);

  window.location.href = "index3.html";
});
