# snake-game

## Controls

| Key     | Action         |
|---------|----------------|
| ↑       | Move Up        |
| ↓       | Move Down      |
| ←       | Move Left      |
| →       | Move Right     |

---


##  Code Structure

- `drawSnake()`: Draws the snake and handles movement/growth.
- `drawBall()`: Draws and refreshes the green food on the board.
- `checkIsGameOver()`: Detects wall or self-collision.
- `moveSnake(dir)`: Moves the snake in the current or selected direction.
- `Reset()`: Clears and resets game state.
- `changeLevel()`: Handles difficulty level switching via checkboxes.
- `onMove()`: Main control loop responding to keyboard input.

---
##  How to Play

- Use Arrow Keys  to control the snake.
- Eat the green square ("food") to gain score and grow.
- Avoid hitting the walls or the snake's own body.
- The game starts once you press any arrow key.
- If the game ends, press **Reset** to start again.

---