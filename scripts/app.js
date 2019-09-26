
document.addEventListener('DOMContentLoaded', () => {
  const width = 20
  const grid = document.querySelector('.grid')
  const cells = []
  
  let snake = 0
  let snakeDirection = 'right'
  // const gameOver = 
  // console.log(gameOver)




  function initGame() {
    for (let i = 0; i < width * width; i++) {
      const cell = document.createElement('div')
      grid.appendChild(cell)
      cells.push(cell)
    }
  }

  function checkWall() {
    const wallArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 39, 40, 59, 60, 79, 80, 99, 100, 119, 120, 139, 140, 159, 160, 179, 180, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199]
    
    for (let i = 0; i < wallArray.length; i++) {
      if (snake === wallArray[i]) {
        console.log('lost')
      }  
    }
  } 
  
  
  
  function bringTheFood() {
    let randomFood = Math.floor(Math.random() * cells.length)
    while (cells[randomFood].classList.contains('snake')) {  
      randomFood = Math.floor(Math.random() * 400)
    }
    cells[randomFood].classList.add('food') 
    
  }
  

  
  
  
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

    cells[snake].classList.add('snake')
    checkWall()
    
  }

  const moveAuto = setInterval(moveSnake, 500)

  
  
  initGame()
  
  moveSnake()
  
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
  bringTheFood()
  
  
})


// const moveAuto = setInterval(moveSnakeAuto, 1000)
// clearInterval(moveAuto)
//start interval. direction picked by user.  
// e.keycode



// function snakeDirection() {
//  if (snake[0] % width === 0 && snakeDirection === 'left') {
//     return gameOver
//   } else if (snake[0] % width === width - 1 && snakeDirection === 'right') {
//     return gameOver
//   } else if (snake[0] - width < 0 && snakeDirection === 'up') {
//     return gameOver
//   } else if (snake[0] >= width * (width - 1) && snakeDirection === 'down') {
//     return gameOver
//   }
// }




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