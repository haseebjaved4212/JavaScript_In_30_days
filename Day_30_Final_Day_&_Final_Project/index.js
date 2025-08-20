

    // Get the canvas element and its 2D rendering context
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    const messageBox = document.getElementById('messageBox');
    const startButton = document.getElementById('startButton');

    // Game state variables
    let gameRunning = false;
    let gameOver = false;
    let animationFrameId;

    // --- OOP Class Definitions ---
    // A class to represent the Ball object
    class Ball {
      constructor() {
        this.radius = 10;
        this.x = canvas.width / 2;
        this.y = canvas.height - 30;
        this.dx = 2; // velocity in x direction
        this.dy = -2; // velocity in y direction
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#ef4444';
        ctx.fill();
        ctx.closePath();
      }

      update() {
        this.x += this.dx;
        this.y += this.dy;
      }
    }

    // A class to represent the Paddle object
    class Paddle {
      constructor() {
        this.height = 10;
        this.width = 75;
        this.x = (canvas.width - this.width) / 2;
      }

      draw() {
        ctx.beginPath();
        ctx.rect(this.x, canvas.height - this.height, this.width, this.height);
        ctx.fillStyle = '#1e293b';
        ctx.fill();
        ctx.closePath();
      }
    }

    // Create instances of our game objects
    const ball = new Ball();
    const paddle = new Paddle();

    // --- Event Handlers for Paddle Movement ---
    let rightPressed = false;
    let leftPressed = false;

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Right' || e.key === 'ArrowRight') {
        rightPressed = true;
      } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
        leftPressed = true;
      }
    });

    document.addEventListener('keyup', (e) => {
      if (e.key === 'Right' || e.key === 'ArrowRight') {
        rightPressed = false;
      } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
        leftPressed = false;
      }
    });

    // Function to handle the game over state
    function handleGameOver() {
      gameOver = true;
      gameRunning = false;  // Add this line
      messageBox.textContent = "Game Over!";
      messageBox.style.color = '#ef4444';
      startButton.textContent = "Restart Game";
      cancelAnimationFrame(animationFrameId);
    }

    // --- Game Logic Functions ---
    function checkCollisions() {
      // Wall collisions (left, right, top)
      if (ball.x + ball.dx > canvas.width - ball.radius || ball.x + ball.dx < ball.radius) {
        ball.dx = -ball.dx;
      }
      if (ball.y + ball.dy < ball.radius) {
        ball.dy = -ball.dy;
      }

      // Paddle collision
      if (ball.y + ball.dy > canvas.height - ball.radius - paddle.height) {
        if (ball.x > paddle.x && ball.x < paddle.x + paddle.width) {
          ball.dy = -ball.dy;
        } else {
          // Game over if ball hits the bottom without hitting the paddle
          handleGameOver();
        }
      }
    }

    function updatePaddlePosition() {
      const paddleSpeed = 7;
      if (rightPressed && paddle.x < canvas.width - paddle.width) {
        paddle.x += paddleSpeed;
      } else if (leftPressed && paddle.x > 0) {
        paddle.x -= paddleSpeed;
      }
    }

    // The main game loop function
    function gameLoop() {
      // Clear the canvas on each frame
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw and update game objects
      ball.draw();
      paddle.draw();
      ball.update();
      updatePaddlePosition();
      checkCollisions();

      if (!gameOver) {
        animationFrameId = requestAnimationFrame(gameLoop);
      }
    }

    // Function to initialize and start the game
    function startGame() {
      // Cancel any existing animation frame
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      
      // Reset game state
      gameRunning = true;
      gameOver = false;
      messageBox.textContent = '';
      startButton.textContent = "Start Game";

      // Reset ball and paddle to initial positions
      ball.x = canvas.width / 2;
      ball.y = canvas.height - 30;
      ball.dx = 2;
      ball.dy = -2;
      paddle.x = (canvas.width - paddle.width) / 2;

      // Start the game loop
      gameLoop();
    }

    // Event listener for the start button
    startButton.addEventListener('click', startGame);

  