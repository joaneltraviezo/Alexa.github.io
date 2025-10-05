// 🎵 Reproductor de música persistente entre páginas

(function() {
  // Si ya existe un reproductor en la página anterior, no crear otro
  if (window.top.musicPlayerInitialized) return;
  window.top.musicPlayerInitialized = true;

  // Crear elemento <audio> invisible
  const audio = document.createElement("audio");
  audio.src = "tu-musica.mp3"; // 🔹 Reemplaza con tu archivo o URL real
  audio.loop = true;
  audio.volume = 0.6;
  audio.style.display = "none";
  document.body.appendChild(audio);

  // Verifica si la música estaba pausada o sonando
  const savedTime = localStorage.getItem("musicTime");
  const wasPlaying = localStorage.getItem("musicPlaying") === "true";

  if (savedTime) audio.currentTime = parseFloat(savedTime);
  if (wasPlaying || wasPlaying === null) {
    audio.play().catch(() => {});
  }

  // Guarda el tiempo y estado actual cada segundo
  setInterval(() => {
    localStorage.setItem("musicTime", audio.currentTime);
    localStorage.setItem("musicPlaying", !audio.paused);
  }, 1000);

  // Detecta si el usuario pausa/reproduce
  window.addEventListener("beforeunload", () => {
    localStorage.setItem("musicTime", audio.currentTime);
    localStorage.setItem("musicPlaying", !audio.paused);
  });

})();
