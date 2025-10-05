const player = document.getElementById("player");
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const songs = document.querySelectorAll(".song");
const nextPageBtn = document.getElementById("nextPageBtn");

let currentSongIndex = 0;
let isPlaying = false;

// Selección de canción
songs.forEach((song, index) => {
  song.addEventListener("click", () => {
    songs.forEach(s => s.classList.remove("active"));
    song.classList.add("active");
    currentSongIndex = index;
    player.src = song.getAttribute("data-song");
    document.body.style.backgroundImage = `url('${song.getAttribute("data-bg")}')`;
    player.play();
    isPlaying = true;
  });
});

// Controles
playBtn.addEventListener("click", () => {
  if (player.src) {
    player.play();
    isPlaying = true;
  }
});

pauseBtn.addEventListener("click", () => {
  player.pause();
  isPlaying = false;
});

nextBtn.addEventListener("click", () => {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  songs.forEach(s => s.classList.remove("active"));
  songs[currentSongIndex].classList.add("active");
  player.src = songs[currentSongIndex].getAttribute("data-song");
  document.body.style.backgroundImage = `url('${songs[currentSongIndex].getAttribute("data-bg")}')`;
  player.play();
  isPlaying = true;
});

prevBtn.addEventListener("click", () => {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  songs.forEach(s => s.classList.remove("active"));
  songs[currentSongIndex].classList.add("active");
  player.src = songs[currentSongIndex].getAttribute("data-song");
  document.body.style.backgroundImage = `url('${songs[currentSongIndex].getAttribute("data-bg")}')`;
  player.play();
  isPlaying = true;
});

// Guardar estado antes de ir a la siguiente página
nextPageBtn.addEventListener("click", () => {
  localStorage.setItem("currentSong", player.src);
  localStorage.setItem("currentTime", player.currentTime);
  localStorage.setItem("isPlaying", isPlaying);
  window.location.href = "pagina2.html";
});
