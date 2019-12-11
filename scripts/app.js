
document.addEventListener('DOMContentLoaded', () => {
  const width = 20
  const grid = document.querySelector('.grid')
  const cells = []
  let snake = 132

  
  const loserSign = document.querySelector('#loser')
  // const pressPLay = document.querySelector('#press-space')
  let snakeDirection = 'right'
  const startButton = document.querySelector('#start')
  const stopButton = document.querySelector('#stop')
  // let gameLoaded = false

  
  function initGame() {
    for (let i = 0; i < width * width; i++) {
      const cell = document.createElement('div')
      grid.appendChild(cell)
      cells.push(cell)
    }
    moveSnake()
    bringTheFood()
    
    snakeEats()
    
    stopButton.style.display = 'flex'
    startButton.style.display = 'none'
    // gameLoaded = true
  }

  // if (gameLoaded === false) initGame()

  // pause button
  stopButton.addEventListener('click', () => {
    // setTimeout(() => {
    clearInterval(moveAuto)
    // }, 50)
      
  })

  // resume button
  startButton.addEventListener('click', () => {
    setInterval(() => {
      // moveSnake()
      initGame()
    }, 300)
    console.log('proceed')
    setInterval(moveSnake, 300)
    
  })



  // Game over
  function gameOver() {
    clearInterval(moveAuto)
    console.log('you lose')
    grid.style.display = 'none'
    loserSign.innerHTML = 'You lose!  Press Start to go again!'
    stopButton.style.display = 'none'
    startButton.style.display = 'flex'
      
  } 
    
    
    
  function bringTheFood() {
    let randomFood = Math.floor(Math.random() * cells.length)
    while (cells[randomFood].classList.contains(snake)) {  
      randomFood = Math.floor(Math.random() * 400)
    }
    cells[randomFood].classList.add('food') 
    
  }
  

  
  function snakeEats() {
    let snakePosition = cells[snake].classList.contains('snake')
    if (cells[snakePosition].classList.contains('food')) {
      // cells[snake].classList.remove('food')
      console.log('snake eats') 
      bringTheFood()
    } 
  }
    
  
    

  // hit wall function /game over
  // hitting top wall - if the snake index goes below zero, game over.
 
  // hitting the botton wall - if the snake index is greater than 399, game over
  // hitting the left wall - if the snake index is greater than the width,  
  
  
  // when the move snake is invoked, firstly the class of snake is removed.
  // Next, the switch statement of snake direction is invoked.  It goes down the list in order of directions.  Left first.
  // If the left hasnt been pressed, up is checked and then right and so on. 
  // If any are satisfied, the action command is carried. E.g / minuus width from the snake index.
  // the next statement in the function will be tested.  will the new snake index satisfy the new if statement within the function?
  // Does the next step (direction)  

  function moveSnake() {  
    cells[snake].classList.remove('snake')
    console.log(snake)
     
    switch (snakeDirection) {
      case 'left': snake = snake - 1
        break  
      case 'up': snake = snake - width
        break
      case 'right': snake = snake + 1
        break
      case 'down': snake = snake + width
        break   
    }

    // if (snake < 0) {
    //   gameOver()
    // } else if (snake > 399) {
    //   gameOver()
    // } else if (snake % width === width - 1) {
    //   gameOver()
    // } else if (snake % width === width + 1) {
    //   gameOver()
    // } else {
    //   cells[snake].classList.add('snake')
      
    // }


    if (snake < 0) {
      gameOver()
    } else if (snake > 399) {
      gameOver()
    } else if (snake % width === width - 1) {
      gameOver()
    } else if (snake % width === width + 1) {
      gameOver()
    } else {
      cells[snake].classList.add('snake')
      
    }
    // deleteSnake()
    // displaySnake()
    
  }

  const moveAuto = setInterval(moveSnake, 500)

  
  
  
  
  document.addEventListener('keydown', e => {
    switch (e.keyCode) {
      case 37: snakeDirection = 'left'
        break  
      case 38: snakeDirection = 'up'
        break
      case 39: snakeDirection = 'right'
        break
      case 40: snakeDirection = 'down'
        break   
    }
    
  })
  
  
  
  initGame()


})




// setTimeout(gameLoop, 1000 / snakeLength)

// snakeDirection() 
// const x = snake % width
// const y = Math.floor(snake / width)

// switch(e.keyCode) {
//   case 37: if (x > 0) snake -= 1
//     break
//   case 38: if (y > 0) snake -= width
//     break
//   case 39: if (x < width - 1) snake += 1
//     break
//   case 40: if (y < width - 1)snake += width
//     break
// }


// DIFFERENT METHOD WITH BOARD X AND Y VARIABLES
// window.addEventListener('DOMContentLoaded', () => {
  
//   // BOARD variables
//   const board = []
//   const boardWidth = 18
//   const boardHeight = 12
  
//   // SCORE variables
//   // let scoreText
//   // let score = 0
  
//   // SNAKE variables
//   let snakeX = null
//   let snakeY = null
//   let snakeLength = null
//   let snakeDirection = null 
  
//   // function to initialise grid on page
//   function initGame() {
//     const grid = document.querySelector('.grid')
//     for (let y = 0; y < boardHeight; ++y) {
//       const row = []
//       for (let x = 0; x < boardWidth; ++x) {
//         const cell = {}
//         // Create a <div></div> and store it in the cell object
//         cell.element = document.createElement('div')
//         // Add it to the board
//         grid.appendChild(cell.element)
//         // Add to list of all
//         row.push(cell)
//       }
//       // Add this row to the board
//       board.push(row)
//     }
//     startGame()
//     // Start the game loop (it will call itself with timeout)
//     gameLoop()
//   }
  

//   function startGame() {
//     // Default position for the snake in the middle of the board.
//     snakeX = Math.floor(boardWidth / 2)
//     snakeY = Math.floor(boardHeight / 2)
//     snakeLength = 3
//     snakeDirection = 38
//     // Clear the board
//     for (var y = 0; y < boardHeight; ++y) {
//       for (var x = 0; x < boardWidth; ++x) {
//         board[y][x].snake = 0
//       }
//     }
//     // Center of board for snake
//     board[snakeY][snakeX].snake = snakeLength

//   }
//   function gameLoop() {
//     // Update position depending on which direction the snake is moving.
//     switch (snakeDirection) {
//       case 38: snakeY--
//         break
//       case 40: snakeY++
//         break
//       case 37: snakeX--
//         break
//       case 39: snakeX++
//         break
//     }



    
//     // This function call
//     setTimeout(gameLoop, 1000 / snakeLength)
//   }
//   document.body.onkeydown = function enterKey(event) {
//     // Update direction depending on key hit
//     switch (event.key) {
//       case 'ArrowUp': snakeDirection = 'Up'
//         break
//       case 'ArrowDown': snakeDirection = 'Down'
//         break
//       case 'ArrowLeft': snakeDirection = 'Left'
//         break
//       case 'ArrowRight': snakeDirection = 'Right'
//         break
//     }
//     // This prevents the arrow keys from scrolling the window
//     event.preventDefault()
//   }
//   initGame()
// }) 
   

  
// switch (key) {
//   case 37: if (x > 0) snake -= 1
//     break
//   case 38: if (y > 0) snake -= width
//     break
//   case 39: if (x < width - 1) snake += 1
//     break
//   case 40: if (y < width - 1)snake += width
//     break
// }


// switch (key) {
//       case 37: snake = snake - 1
//         break  
//       case 38: snake = snake - width
//         break
//       case 39: snake = snake + 1
//         break
//       case 40: snake = snake + width
//         break   
//     }


// function snakeDirection() {
//   if (snake[0] % width === 0 && snakeDirection === 37) {
//     return ('gameOver')
//   } else if (snake[0] % width === width - 1 && snakeDirection === 39) {
//     return ('gameOver')
//   } else if (snake[0] - width < 0 && snakeDirection === 38) {
//     return ('gameOver')
//   } else if (snake[0] >= width * (width - 1) && snakeDirection === 40) {
//     return ('gameOver')
//   }
// }    