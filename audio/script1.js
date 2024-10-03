const txtarea = document.querySelector("textarea"),
  list = document.querySelector("select"),
  startbtn = document.querySelector("#two2");
stopbtn = document.querySelector("#one1");
let synth = speechSynthesis,
  counter = true;
allvoice = [];
allspeech();

synth.addEventListener("voiceschanged", allspeech);
startbtn.addEventListener("click", fun);
stopbtn.addEventListener("click", change);

function allspeech() {
  allvoice = synth.getVoices();
  for (let voice of allvoice) {
    let option = `<option value=${voice.name}>${voice.name} ${voice.lang}</option>`;
    list.insertAdjacentHTML("beforeend", option);
  }
}

function fun() {
  if (txtarea.value !== "") {
    if (!synth.speaking) {
      let utterance = new SpeechSynthesisUtterance(txtarea.value);
      for (let voice of synth.getVoices()) {
        if (voice.name === list.value) {
          utterance.voice = voice;
        }
      }
      synth.speak(utterance);
    }
    check();
  }
}

function check() {
  if (counter) {
    synth.resume();
    counter = false;
    startbtn.innerText = "Pause Speech";
  } else {
    synth.pause();
    counter = true;
    startbtn.innerText = "Resume Speech";
  }
}

function change() {
  speechSynthesis.cancel();
  txtarea.value = "";
  startbtn.innerText = "Convert To Speech";
}
