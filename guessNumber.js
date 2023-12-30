let secretNumber = generateRandomNumber();

function generateRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

function checkGuess() {
  // Local variable
  let userGuess = parseInt(document.getElementById("userGuess").value);
  let resultElement = document.getElementById("result");

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
    resultElement.innerText = 'Please enter a valid number between 1 and 10.';
  } else {
    if (userGuess === secretNumber) {
      resultElement.innerText = 'Congratulations! You guessed the correct number!';
      showImageAndPlaySound('picture2.jpeg', 'music2.mp3');
      secretNumber = generateRandomNumber();
    } else {
      resultElement.innerText = 'Sorry, try again!';
      showImageAndPlaySound('picture1.jpeg', 'music1.mp3');
    }
  }

  document.getElementById("userGuess").value = "";
}

function showImageAndPlaySound(imageSource, soundSource) {
  let imageElement = new Image();
  imageElement.src = imageSource;

  let soundElement = new Audio();
  soundElement.src = soundSource;
  soundElement.play();

  let resultContainer = document.getElementById("result");
  resultContainer.innerHTML = "";
  resultContainer.appendChild(imageElement);

  setTimeout(function () {
    resultContainer.appendChild(soundElement);
  }, 1000);
}