const step=30
const low = 300
const normal = 130
const fast =70
const easy = 'Easy'
const medium = 'Normal'
const defaultGameLevel = 130
const hard = 'Hard'
const speedLevelVariants =[{label:hard,value:fast},{label:medium,value: normal},{label:easy,value:low}]
const snakeInitialCoordinates = [300,300]
const left = 'ArrowLeft'
const right = 'ArrowRight'
const up='ArrowUp'
const down = 'ArrowDown'
let score = 0
const deffDir = {
    [left]:right,
    [right]:left,
    [up]:down,
    [down]:up
}
let gameLevel = defaultGameLevel
let snake = [snakeInitialCoordinates]
let ballX
let ballY
let snakeIntervalId
let ballIntervalId
let isGameOver = false
let prev