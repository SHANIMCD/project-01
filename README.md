# Snake Game

**Software Engineneering Immersive: Project 1**

Vanilla Javascript project to create the retro snake game (Assigned week 3)


**Built With**
HTML5
CSS
Javascript


# **The Game Itself**
Starting with the grid and a default placement of the snake.  The aim of the game is to grow your snake as much as possible by eating the randomly placed food.  Each time the food is eaten, the snake grows and the speed of the snake's movement increases. If the head of the snake moves outiside of the grid or over itself, then game is over.


<a href="https://imgur.com/FKWoPWj"><img src="https://i.imgur.com/FKWoPWjh.png" title="source: imgur.com" /></a>


# **Challenges and future improvements**
As it was the first project, I felt a sense of pressure as I wanted to see how much I could solve on my own without asking for help.
The most challenging part was the figuring out the conditions for the game over.  At first I created a wall variable with the cell indexes that matched the grids most outer cells and set the rule that if the snake hit any of them, game over.  But I found that during gameplay the food would sometimes be randomly placed there.

My solution was using the grid's cell indexes as a range and determining that anytime the point where the snake goes out of the range then it's game over.
I used the width of the grid as a start point.
Width + 1 would be 1 square too far right, width - 1 would be one square too left.  For the top and bottom of the grid, I used the lowest value cell and highest value.

The greatest benefit of the solution was that my code would still work if I altered the size of the grid as opposed to hard coding the wall and ultimately having to change it if I ever increased or decreased the size.



      // What GAME OVER looks like
        function gameOver() {
          grid.style.display = 'none'
          console.log('Game Over')
          if (timer) clearTimeout(timer) 
          loserSign.innerHTML = 'You lose!  Press Start to go again!'
          stopButton.style.display = 'none'
          startButton.style.display = 'flex'
          pressLeft.style.display = 'none'
          pressLeftt.style.display = 'none'
            
          deleteSnake()
          
        }   
        // Snake dies if it hits a wall or tries to go over itself
        
        function snakeDies() {

          if (snake[0] < 1) {
            gameOver()
          } else if (snake[0] > 398) {
            gameOver()
          } else if (snake[0] % width === width - 1) {
            gameOver()
          } else if (snake[0] % width === width + 1) {
            gameOver()
          } else if (snake.slice(1).includes(snake[0])) {
            gameOver()
          }
            
          
        }  


**To Improve**
I would take the time and refactor the code as I believe there's a high chance that the game can be written with a lesser amount of lines.
Also, I created a start game button but ran out of time before I could work out how to fix it.  So at the moment I refresh the page to start again.


