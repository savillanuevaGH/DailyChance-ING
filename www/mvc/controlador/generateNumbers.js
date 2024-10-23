// Generate today's numbers on page load
window.onload = function () {
  generateTodayNumbers();
};
const winNumbers = [];
const myWinNumbers = [];

function generateTodayNumbers() {
  const grid = document.getElementById("todayNumbers");
  grid.innerHTML = "";
  const numbers = generateRandomNumbers(10, 0, 99);

  numbers.forEach((num) => {
    const circle = document.createElement("div");
    circle.className = "number-circle number-animation";
    if (num <= 9) {
      circle.textContent = "0" + num;
    } else {
      circle.textContent = num;
    }
    winNumbers.push(circle.textContent);
    grid.appendChild(circle);
  });
}

function generateMyNumbers() {
  const generateMyNumbersBtn = document.querySelector('.generate-btn')
  const container = document.getElementById("myNumbers");
  container.innerHTML = "";
  const numbers = generateRandomNumbers(3, 0, 99);

  numbers.forEach((num) => {
    const circle = document.createElement("div");
    circle.className = "number-circle number-animation";
    if (num <= 9) {
      circle.textContent = "0" + num;
      myWinNumbers.push(circle.textContent);
    } else {
      circle.textContent = num;
      myWinNumbers.push(circle.textContent);
    }
    container.appendChild(circle);
    generateMyNumbersBtn.style.display = "none";
  });

  checkWin();
  guardarIntento();
}

function generateRandomNumbers(count, min, max) {
  const numbers = [];
  while (numbers.length < count) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!numbers.includes(num)) {
      numbers.push(num);
    }
  }
  return numbers;
}

function checkWin() {
  const coincidence = myWinNumbers.filter((num) => winNumbers.includes(num));
  const message = document.createElement('p');
  
  if (coincidence.length === 3) {
    message.textContent = '¡Felicidades, has ganado!';
    message.style.color = 'green';
    document.body.appendChild(message);
    console.log("Ganaste");
  } else {
    message.textContent = 'Intentalo de nuevo mañana';
    message.style.color = 'red';
    document.body.appendChild(message);
    console.log("Perdiste");
  }
}

console.log(winNumbers);
console.log(myWinNumbers);

// Función para guardar el intento del usuario
function guardarIntento() {
  const fechaActual = new Date();
  const fechaIntento = fechaActual.getTime();
  localStorage.setItem('fechaIntento', fechaIntento);
  localStorage.setItem("misNumeros", myWinNumbers);
  localStorage.setItem("numbers", winNumbers);
}

// Función para verificar si el usuario ha intentado antes
function verificarIntento() {
  const fechaIntento = localStorage.getItem('fechaIntento');
  if (fechaIntento) {
    const fechaActual = new Date();
    const diferencia = fechaActual.getTime() - fechaIntento;
    const horas = Math.floor(diferencia / (1000 * 60 * 60));
    if (horas < 24) {
      alert('No puedes intentar de nuevo hasta mañana');
      return false;
    }
  }
  return true;
}

// Ejemplo de uso
if (verificarIntento()) {
  // Código para ejecutar si el usuario no ha intentado antes
  console.log('Puedes intentar de nuevo');
} else {
  const misNumeros = localStorage.getItem('misNumeros');
  const numeros = localStorage.getItem('numbers');
  const generateMyNumbersBtn = document.querySelector('.generate-btn')
  const message = document.createElement('p');

  // Código para ejecutar si el usuario ha intentado antes
  console.log('No puedes intentar de nuevo hasta mañana');
  generateMyNumbersBtn.style.display = "none";
  message.textContent = 'Intentalo de nuevo mañana';
  message.style.color = 'red';
  document.body.appendChild(message);

  // Convertir el string a un array
  const misNumerosArray = misNumeros.split(',');
  const numerosArray = numeros.split(',');

    numerosArray.forEach((num) => {
      const grid = document.querySelector('.numbers-grid');
      const circle = document.createElement("div");
      circle.className = "number-circle number-animation";
      if (num <= 9) {
        circle.textContent = "0" + num;
      } else {
        circle.textContent = num;
      }
      winNumbers.push(circle.textContent);
      grid.appendChild(circle);
    });

  misNumerosArray.forEach((num) => {
    const container = document.querySelector('.my-numbers');
    const circle = document.createElement("div");
    circle.className = "number-circle number-animation";
    if (num <= 9) {
      circle.textContent = num;
      myWinNumbers.push(circle.textContent);
    } else {
      circle.textContent = num;
      myWinNumbers.push(circle.textContent);
    }
    container.appendChild(circle);
  });
}