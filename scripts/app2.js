// ************> Board Setup <*************
function initGame(){
  const width = 20 
  const grid = document.querySelector('.grid')
  const cells = []
  const snake = [132,133,134]
  let direction
  let timer
  const loserSign = document.querySelector('#loser')
  const startButton = document.querySelector('#start')
  const stopButton = document.querySelector('#stop')
  const pressLeft = document.querySelector('#press-left')
  const pressLeftt = document.querySelector('#press-leftt')


  // const walls = [0,1,2,3,4,5,6,7,8,9,
  //   10,11,12,13,14,15,16,17,18,19,
  //   20,39,40,59,60,79,80,99,100,119,
  //   120,139,140,159,160,179,180,199,200,219,
  //   220,239,240,259,260,279,280,299,300,319,
  //   320,339,340,359,360,379,380,381,382,383,
  //   384,385,386,387,388,389,390,391,392,393,
  //   394,395,396,397,398,399,
  //   92,94,95,115,155,244,264,304,306,307]
 



  // const walls = function wallCheck() {

  //   if (cells[snake[0]] < 0) {
  //     gameOver()
  //   } else if (cells[snake[0]] > 399) {
  //     gameOver()
  //   } else if (cells[snake[0]] % width === width - 1) {
  //     gameOver()
  //   } else if (cells[snake[0]] % width === width + 1) {
  //     gameOver()
  //   } else {
  //     cells[snake].classList.add('snake')
    
  //   }
  // }

   
  let snakeSpeed = 300  
  // const restartButton = document.querySelector('#start')
  // const stopButton = document.querySelector('#stop')
  let hasLoaded = false
  
  stopButton.style.display = 'none'
  startButton.style.display = 'none'




  function setupGame() {
    
    grid.innerHTML = ''
    for (let i = 0; i < width ** 2; i++) {
      const cell = document.createElement('DIV')
      grid.appendChild(cell)
      cells.push(cell)
      
    }
    pressLeft.innerHTML = 'Aim of the game:  Use the arrows to navigate around the grid and hit the food.  Avoid hitting the walls of the grid and don\'t touch the snake\'s body.  Have fun!'
    hasLoaded = true
    pressLeftt.innerHTML = 'Press the left key to begin the game!'
  }

  
  
  if (hasLoaded === false) setupGame()

  startButton.addEventListener('click', () => {
    // setInterval(() => {
    //   // moveSnake()
      
    // }, 300)
    console.log('proceed')
    // setInterval(moveSnake, 300)
    // setupGame()
    initGame()
    // moveSnakeUp()
    // moveSnakeDown()
    // moveSnakeLeft()
    // moveSnakeRight()
    
    // deleteSnake()
  })

  
  // snake movement //

  function displaySnake() {
    snake.forEach(index => cells[index].classList.add('snake')) 
  }
  displaySnake()
  function deleteSnake() {
    snake.forEach(index => cells[index].classList.remove('snake'))
  }


  //  Food Display //
  function food() {
    let randomFood = Math.floor(Math.random() * cells.length)
    while (cells[randomFood].classList.contains( snake )) {
      randomFood = Math.floor(Math.random() * cells.length)
    }
    cells[randomFood].classList.add('food')
  }


  //  Snake eats //
  function snakeEats() {
    if (cells[snake[0]].classList.contains('food')) {
      cells[snake[0]].classList.remove('food')
      snakeSpeed -= 8 
      snake.unshift(snake[0])    
      food()
    } 
  }
    
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

  // ==========> Snake automatic movement <===============================
  
  function moveSnake() {
    timer = setTimeout(moveSnake, snakeSpeed)
    switch (direction){
      case 'right': moveSnakeRight()
        break
      case 'left': moveSnakeLeft()
        break
      case 'up': moveSnakeUp()
        break
      case 'down': moveSnakeDown()
    }
    snakeEats()
    
  }
  // =============> UP DOWN RIGHT LEFT Movement ==========================
  
  function moveSnakeDown() {
    deleteSnake()
    snake.pop()
    snake.unshift(snake[0] + width)
    displaySnake()
    snakeDies()
    snakeEats()
  }
  function moveSnakeUp() {
    deleteSnake()
    snake.pop()
    snake.unshift(snake[0] - width)
    displaySnake()
    snakeDies()
    snakeEats()
  }
  function moveSnakeLeft() {
    deleteSnake()
    snake.pop()
    snake.unshift(snake[0] - 1)
    displaySnake()
    snakeDies()
    snakeEats()
  }
  function moveSnakeRight() {
    deleteSnake()
    snake.pop()
    snake.unshift(snake[0] + 1)
    displaySnake()
    snakeDies()
    snakeEats()
    // boardSound.play()
  }
  document.addEventListener('keydown', (e) => {
    e.preventDefault()
    switch (e.keyCode) {
      case 37: if (direction !== 'right') direction = 'left'
        break
      case 38: if (direction !== 'down') direction = 'up'
        break
      case 39: if (direction !== 'left') direction = 'right'
        break
      case 40: if (direction !== 'up') direction = 'down'
        break
    }      
  }) 
  moveSnake()
  food() 
}
document.addEventListener('DOMContentLoaded', initGame)
