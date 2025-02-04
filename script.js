const colorBox = document.querySelector('[data-testid="colorBox"]');
const colorOptions = document.querySelector('.color-options');
const gameStatus = document.querySelector('[data-testid="gameStatus"]');
const scoreElement = document.querySelector('[data-testid="score"]');
const newGameButton = document.querySelector('[data-testid="newGameButton"]');

let score = 0;
let targetColor;

const colors = [
  "#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#A133FF", "#33FFF5",
  "#FFC300", "#C70039", "#900C3F", "#581845", "#1A5276", "#17A589",
  "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#00FFFF", "#FF00FF",
  "#FF4500", "#FF8C00", "#FFD700", "#ADFF2F", "#32CD32", "#00FA9A",
  "#40E0D0", "#1E90FF", "#8A2BE2", "#DA70D6", "#FF69B4", "#FF1493",
  "#FF6347", "#FFA07A", "#FFDAB9", "#EEE8AA", "#F0E68C", "#BDB76B",
  "#9ACD32", "#6B8E23", "#556B2F", "#66CDAA", "#8FBC8B", "#20B2AA",
  "#00CED1", "#4682B4", "#5F9EA0", "#B0C4DE", "#ADD8E6", "#87CEEB",
  "#87CEFA", "#6495ED", "#7B68EE", "#9370DB", "#BA55D3", "#DDA0DD",
  "#C71585", "#DB7093", "#FF7F50", "#FFA500", "#FFD700", "#DAA520",
  "#B8860B", "#BC8F8F", "#CD5C5C", "#8B4513", "#A0522D", "#D2691E",
  "#F4A460", "#DEB887", "#D2B48C", "#F5DEB3", "#FAFAD2", "#FFFACD",
  "#FFF8DC", "#FFE4B5", "#FFE4C4", "#FFEBCD", "#FFDEAD", "#F5F5DC",
  "#FDF5E6", "#FAEBD7", "#FFEFD5", "#FFE4E1", "#FFF0F5", "#FAF0E6",
  "#F0FFF0", "#F5FFFA", "#F0FFFF", "#E0FFFF", "#AFEEEE", "#00FFFF",
  "#7FFFD4", "#40E0D0", "#48D1CC", "#00CED1", "#5F9EA0", "#4682B4",
  "#B0E0E6", "#ADD8E6", "#87CEEB", "#87CEFA", "#6495ED", "#7B68EE",
  "#9370DB", "#BA55D3", "#DDA0DD", "#EE82EE", "#DA70D6", "#FF69B4",
  "#FF1493", "#C71585", "#DB7093", "#FF7F50", "#FFA500", "#FFD700",
  "#DAA520", "#B8860B", "#BC8F8F", "#CD5C5C", "#8B4513", "#A0522D",
  "#D2691E", "#F4A460", "#DEB887", "#D2B48C", "#F5DEB3", "#FAFAD2",
  "#FFFACD", "#FFF8DC", "#FFE4B5", "#FFE4C4", "#FFEBCD", "#FFDEAD",
  "#F5F5DC", "#FDF5E6", "#FAEBD7", "#FFEFD5", "#FFE4E1", "#FFF0F5",
  "#FAF0E6", "#F0FFF0", "#F5FFFA", "#F0FFFF", "#E0FFFF", "#AFEEEE"
];

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function initGame() {
  targetColor = getRandomColor();
  colorBox.style.backgroundColor = targetColor;

  colorOptions.innerHTML = '';

  const options = [targetColor];
  while (options.length < 6) {
    const randomColor = getRandomColor();
    if (!options.includes(randomColor)) {
      options.push(randomColor);
    }
  }

  options.sort(() => Math.random() - 0.5);

  options.forEach(color => {
    const button = document.createElement('button');
    button.style.backgroundColor = color;
    button.addEventListener('click', () => checkGuess(color));
    colorOptions.appendChild(button);
  });

  gameStatus.textContent = '';
}

function checkGuess(guess) {
  if (guess === targetColor) {
    gameStatus.textContent = "Correct! 🎉";
    gameStatus.style.color = 'green';
    score++;
    scoreElement.textContent = `Score: ${score}`;
    setTimeout(initGame, 1500);
  } else {
    gameStatus.textContent = "Wrong! Try again. 😢";
    gameStatus.style.color = 'red';
  }
}

newGameButton.addEventListener('click', () => {
  score = 0;
  scoreElement.textContent = `Score: ${score}`;
  initGame();
});

initGame();
