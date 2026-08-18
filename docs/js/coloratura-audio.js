(function () {
  var btn = document.getElementById("coloratura-play");
  var audio = document.getElementById("coloratura-audio");
  if (!btn || !audio) return;

  var playIcon = btn.querySelector(".ct-audio-bar__icon--play");
  var pauseIcon = btn.querySelector(".ct-audio-bar__icon--pause");

  function setPlaying(playing) {
    btn.classList.toggle("is-playing", playing);
    btn.setAttribute("aria-pressed", playing ? "true" : "false");
    btn.setAttribute("aria-label", playing ? "Pausar Coloratura" : "Reproducir Coloratura");
    if (playIcon) playIcon.hidden = playing;
    if (pauseIcon) pauseIcon.hidden = !playing;
  }

  btn.addEventListener("click", function () {
    if (audio.paused) {
      var playPromise = audio.play();
      if (playPromise && typeof playPromise.then === "function") {
        playPromise.then(function () {
          setPlaying(true);
        }).catch(function () {
          setPlaying(false);
        });
      } else {
        setPlaying(true);
      }
    } else {
      audio.pause();
      setPlaying(false);
    }
  });

  audio.addEventListener("ended", function () {
    setPlaying(false);
  });

  audio.addEventListener("pause", function () {
    if (audio.ended) return;
    setPlaying(false);
  });

  audio.addEventListener("play", function () {
    setPlaying(true);
  });
})();
