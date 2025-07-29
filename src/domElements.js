const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const gameLevelContainer = document.getElementById('gameLevel');
const ratio = window.devicePixelRatio || 1;
const resetText =document.createElement("span")
const resetBtn = document.createElement("button");
const resetContainer =document.createElement("div");
const scoreText = document.createElement('div');
const root = document.getElementById('root');
const startModal  =document.createElement('div');
const startText = document.createElement('span')
startText.textContent = 'Use the arrow keys (↑ ↓ ← →) to begin your adventure!'
startModal.appendChild(startText)
startText.classList.add('startText')
startModal.classList.add('startModal')
const gridSize = 30;
const totalCols = 30;
const totalRows = 20;
const width = totalCols * gridSize;
const height = totalRows * gridSize;
canvas.width = width * ratio;
canvas.height = height * ratio;
canvas.style.width = `${width}px`;
canvas.style.height = `${height}px`;
ctx.scale(ratio, ratio);
resetContainer.id ='resetDiv'
resetText.classList.add('resetText')
resetBtn.id='resetBtn'
resetBtn.innerText = 'Reset';
root.appendChild(scoreText);
root.appendChild(startModal)




