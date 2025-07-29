(() => {
    for (let i = 0; i < 3; i++) {
        const container = document.createElement('div');
        container.classList.add('containerInput');

        const el = document.createElement('input');
        el.type = 'checkbox';
        el.value = levelVariants[i].value;
        el.classList.add("input");
        el.checked = levelVariants[i].value === gameLevel;

        const label = document.createElement('label');
        label.classList.add("label");
        label.textContent = levelVariants[i].label;

        container.append(label, el);
        gameLevelContainer.appendChild(container);
    }
})();
function changeLevel(event){
    gameLevel = event.target.value;
    const target = event.target;
    if(target.type === 'checkbox' )
        for (const cb of inputs) {
            if (cb !== target) {
                cb.checked = false;
            }
        }

}
gameLevelContainer.addEventListener('click', changeLevel)
resetBtn.addEventListener('click',Reset)
const inputs =   gameLevelContainer.querySelectorAll('.input')

function resetSnakeCoordinate(){
    snake = [snakeInitialCoordinates]
}
function getRandomGridCoordinate() {
    const randomRow = Math.floor(Math.random() * totalRows);
    const randomCol = Math.floor(Math.random() * totalCols);
    return [randomCol * gridSize, randomRow * gridSize];
}
scoreText.id = 'score'
scoreText.innerText = 'Score : 0 ';

function drawBall(){
    if(ballIntervalId){
        clearInterval(ballIntervalId)
    }
    ballIntervalId = setInterval(drawBall,5000)
    if(ballX!==undefined && ballY !==undefined){
        ctx.clearRect(ballX,ballY,gridSize,gridSize);
    }
    [ballX,ballY] = getRandomGridCoordinate()
    ctx.fillStyle='#06f106'
    ctx.fillRect(ballX,ballY,gridSize-5,gridSize-5);
}
function drawSnake(isEaten){
    const [tailX,tailY]  = snake[snake.length-1]
    const [headX,headY] = snake[0]
    if(!isEaten){
        ctx.clearRect(tailX-1.5,tailY-1.5,gridSize+2,gridSize+2);

        snake.pop()
    }
    ctx.fillStyle ='blueviolet'
    ctx.strokeStyle='red'
    ctx.fillRect(headX,headY,gridSize,gridSize);
    ctx.strokeRect(headX,headY,gridSize,gridSize);
}
function checkIsGameOver(){
    if(width < snake[0][0] || snake[0][0]<0 || snake[0][1]>height || snake[0][1] <0 ){
        isGameOver=true
        return
    }
    for(let i = 1;i<snake.length;i++){
        console.log(snake[0][0],snake[i][0] ,snake[0][1] ,snake[i][1] )
        if(snake[0][0] === snake[i][0] && snake[0][1] === snake[i][1]){
            console.log(1)
            isGameOver = true
            return;
        }
    }
}
function moveToUp(){
        if(prev!== down){
            snake.unshift([snake[0][0],snake[0][1]-step])
            prev= up
        }
        }
function moveToLeft(){
    if(prev!==right){
        snake.unshift([snake[0][0]-step,snake[0][1]])
        prev  = left
    }
}
function moveToRight( ) {
    if (prev !== left) {
        snake.unshift([snake[0][0] + step, snake[0][1]])
        prev = right
    }
}
function moveToDown( ) {
        if (prev !== up) {
            snake.unshift([snake[0][0], snake[0][1] + step])
            prev = down
        }
    }
function moveSnake(dir){
    if(snakeIntervalId)clearInterval(snakeIntervalId);
    snakeIntervalId = setInterval(Update,gameLevel)
    const  direction = dir || prev
    switch (direction){
       case left:
           moveToLeft()
           break
       case right:
           moveToRight()
           break
       case up:
           moveToUp()
           break
       case down:
           moveToDown()
           break;
   }
    const [snakeX,snakeY] = snake[0]
    const isFoodAndSnakeSamePlace = snakeX === ballX && snakeY === ballY
    if(isFoodAndSnakeSamePlace){
        score++
        scoreText.innerText = `Score : ${score}`
        drawSnake(isFoodAndSnakeSamePlace)
    }else{
        drawSnake(isFoodAndSnakeSamePlace)
    }

}
function Update(){
    checkIsGameOver()
    if(isGameOver){
        document.removeEventListener('keydown', onMove)
        clearInterval(snakeIntervalId);
        clearInterval(ballIntervalId);
        ballIntervalId = null
        resetText.innerText = `Only ${score} score? You can do better — go for a new high score! `
        resetContainer.append(resetText,resetBtn)
        root.appendChild(resetContainer)
        inputs.forEach(elem => elem.removeAttribute('disabled'))
        return
    }
    moveSnake()
}
function onMove(e){
    let key = e?.key
    if (![up,left,right,down].includes(key)) return
    if(key === prev || deffDir[key] === prev) return
    if(key && !prev){
        root.removeChild(startModal)
    }
    if(!prev){
        inputs.forEach(elem => {
           elem.setAttribute('disabled','true')
        })
    }
    if(snakeIntervalId){
        clearInterval(snakeIntervalId)
    }
    setTimeout(()=>{moveSnake(key)})
    if(!ballIntervalId) {
        drawBall()
    }

}
function Reset(){
    isGameOver = false
    resetSnakeCoordinate()
    ctx.clearRect(0 ,0, canvas.width ,canvas.height )
    root.removeChild(resetContainer)
    score= 0
    scoreText.innerText = `Score : ${score}`
    prev =null
    root.appendChild(startModal)
    document.addEventListener('keydown', onMove)
}

document.addEventListener('keydown',onMove)



