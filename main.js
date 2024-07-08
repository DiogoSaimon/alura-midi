const buttons = document.querySelectorAll(".tecla");

function playSong(selectorAudio) {
  const audio = document.querySelector(selectorAudio);

  if (audio && audio.localName === "audio") {
    audio.play();
  } else {
    console.log("Elemento não encontrado ou seletor inválido");
  }
}

for (let i = 0; i < buttons.length; i++) {
  const keyboard = buttons[i];
  const instrumentID = keyboard.classList[1];
  const idAudio = `#som_${instrumentID}`;

  keyboard.onclick = function () {
    playSong(idAudio);
  };

  keyboard.onkeydown = function (event) {
    if (event.code === "Space" || event.code === "Enter") {
      keyboard.classList.add("ativa");
    }
  };

  keyboard.onkeyup = function () {
    keyboard.classList.remove("ativa");
  };
}
