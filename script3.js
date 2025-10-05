// 🎵 Restaurar música desde localStorage
const player = document.getElementById("player");

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

  // ❤️ Generar corazones CSS dinámicos
  const heartsContainer = document.querySelector(".hearts");
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("span");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 5 + 5 + "s";
    heart.style.animationDelay = Math.random() * 5 + "s";
    heart.style.background = "#ff4b8b";
    heartsContainer.appendChild(heart);
  }
});

// 💘 Botones
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

// 😆 Botón "No" que huye del cursor
noBtn.addEventListener("mouseenter", () => {
  const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
  const y = Math.random() * (window.innerHeight - noBtn.clientHeight);
  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

// 💖 Botón "Sí" que avanza a la siguiente página
yesBtn.addEventListener("click", () => {
  // Guardar el estado actual de la música antes de cambiar
  localStorage.setItem("currentSong", player.src);
  localStorage.setItem("currentTime", player.currentTime);
  localStorage.setItem("isPlaying", !player.paused);

  window.location.href = "index4.html";
});
