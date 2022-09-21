function play(key) {
  console.log(key);
  const audio = document.querySelector(`audio[data-key="${key}"]`);
  audio.currentTime = 0;
  audio.play();
}

const keys = document.querySelector(".sounds");
keys.addEventListener("click", (e) => {
  play(e.target.getAttribute("data-key"));
});
document.addEventListener("keydown", (e) => {
  play(e.key);
});
