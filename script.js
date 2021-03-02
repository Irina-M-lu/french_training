const moscow = document.querySelector('.russes'),
  paris = document.querySelector('.frances'),
  Btn = document.querySelector('.btn'),
  frontSide = document.querySelector('.front-side'),
  backSide = document.querySelector('.back-side'),
  btnDict = document.querySelector('#btn-dict');


const btnCheck = document.getElementById('btn-check'),
  frontCheck = document.querySelector('.check-front-side'),
  backCheck = document.querySelector('.check-back-side'),
  message = document.querySelector('.message');

let francesAnswer = document.getElementById('frances2');
let francesInput = document.querySelector('input');


let arr = [
  {
    "motRus": "сообщество",
    "motFrance": "la communauté"
  },
  {
    "motRus": "написание книги",
    "motFrance": "l'écriture du livre"
  },
  {
    "motRus": "скоро",
    "motFrance": "bientôt"
  },
  {
    "motRus": "арахис",
    "motFrance": "cacahuètes"
  },
  {
    "motRus": "покупать",
    "motFrance": "acheter"
  },
  {
    "motRus": "заниматься чем-либо",
    "motFrance": "s'occuper de"
  },
  {
    "motRus": "встречаться",
    "motFrance": "rencontrer"
  },
  {
    "motRus": "мнение",
    "motFrance": "avis"
  },
  {
    "motRus": "ложиться спать",
    "motFrance": "se coucher"
  },
  {
    "motRus": "зрелость",
    "motFrance": "maturité"
  },
  {
    "motRus": "мучиться",
    "motFrance": "tourmenter se"
  },
  {
    "motRus": "гром",
    "motFrance": "tonnerre"
  },
  {
    "motRus": "ставить, помещать",
    "motFrance": "poser"
  },
  {
    "motRus": "большой, крупный",
    "motFrance": "gros"
  },

];

clearInput();

let rand = Math.floor(Math.random() * arr.length);

function getWord() {
  frontSide.style.display = "none";
  backSide.outerHTML = arr[rand].motRus;
  moscow.style.display = 'none';
  paris.style.display = 'none';
  btnCheck.style.display = 'block';
}

function okey() {
  frontCheck.innerText = "On continue?"
  setMessage(`C'est correct!`, 'blue');
  setTimeout(setMessage, 6000);
}

function fillInput() {
  setMessage('Ecrire le mot en français', 'red')
  setTimeout(setMessage, 6000);
}

function checkLength() {
  setMessage(`Il y a des lettres supplémentaires`, 'darkviolet');
};

function correctInput() {
  let correctWord = arr[rand].motFrance.split('');
  let wrongWord = francesInput.value.split('');
  let wrongLetter = [];
  for (let n = 0; n < correctWord.length; n++) {
    if (wrongWord.length < correctWord.length) {
      console.log(123);
      setMessage(`Il manque des lettres au mot`, 'orange');
      setTimeout(setMessage, 6000);
    } else if (wrongWord[n] !== correctWord[n]) {
      wrongLetter.push(wrongWord[n]);
      setMessage(`Notez les lettres incorrect: ${wrongLetter}`, 'red');
      setTimeout(setMessage, 6000);
    }
  }
};

function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}

function restart() {
  window.location.reload();
  francesInput.value = "";
  moscow.style.display = 'initial';
  paris.style.display = 'initial';
}

function check() {
  if (francesInput.value === arr[rand].motFrance) {
    okey();
  } else if (francesInput.value == '') {
    fillInput();
  } else if (francesInput.value.length > arr[rand].motFrance.length) {
    checkLength();
  } else {
    correctInput();
  };
};

function clearInput() {
  if (frontSide.style.display = "block") {
    francesInput.value = "";
  }
}


Btn.addEventListener('click', () =>
  getWord());

btnCheck.addEventListener('click', function () {
  if (frontCheck.innerText === "Vérification") {
    check();
  } else {
    restart();
  };
});




//DRAG-N-DROP


function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));

}
