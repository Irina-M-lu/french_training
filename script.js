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
    "motRus": "папа",
    "motFrance": "אבא"
  },
  {
    "motRus": "сказка",
    "motFrance": "אגדה"
  },
  {
    "motRus": "рыба",
    "motFrance": "דג"
  },
  {
    "motRus": "любовь",
    "motFrance": "אהבה"
  },
  {
    "motRus": "это",
    "motFrance": "זה"
  },
  {
    "motRus": "хорошо, хороший",
    "motFrance": "טוב"
  },
  {
    "motRus": "рука",
    "motFrance": "יד"
  },
  {
    "motRus": "как, каким образом?",
    "motFrance": "איך"
  },
  {
    "motRus": "мальчик",
    "motFrance": "ילד"
  },
  {
    "motRus": "день",
    "motFrance": "יום"
  },
  {
    "motRus": "солнце",
    "motFrance": "שמש"
  },
  {
    "motRus": "семья",
    "motFrance": "משפחה"
  },
  {
    "motRus": "квартира",
    "motFrance": "דירה"
  },
  {
    "motRus": "много",
    "motFrance": "הרבה"
  },

  {
    "motRus": "кухня",
    "motFrance": "מטבח"
  },
  {
    "motRus": "маленький",
    "motFrance": "קטן"
  },
  {
    "motRus": "красиво, красивый",
    "motFrance": "יפה"
  },
  {
    "motRus": "рядом, около",
    "motFrance": "על-יד"
  },
  {
    "motRus": "утро",
    "motFrance": "בוקר"
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
  frontCheck.innerText = "Идем дальше?"
  setMessage(`Правильно!`, 'blue');
  setTimeout(setMessage, 6000);
}

function fillInput() {
  setMessage('Напишите слово на иврите', 'red')
  setTimeout(setMessage, 6000);
}

function checkLength() {
  setMessage(`Здесь есть лишние буквы`, 'darkviolet');
};

function correctInput() {
  let correctWord = arr[rand].motFrance.split('');
  let wrongWord = francesInput.value.split('');
  let wrongLetter = [];
  for (let n = 0; n < correctWord.length; n++) {
    if (wrongWord.length < correctWord.length) {
      console.log(123);
      setMessage(`Здесь не хватает букв`, 'orange');
      setTimeout(setMessage, 6000);
    } else if (wrongWord[n] !== correctWord[n]) {
      wrongLetter.push(wrongWord[n]);
      setMessage(`Ошибка в буквах: ${wrongLetter}`, 'red');
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
  if (frontCheck.innerText === "Проверить") {
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
