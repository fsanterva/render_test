<!DOCTYPE html>
<html>
<head>
  <title>Snake Game</title>
  <style>
    canvas {
      background: black;
      display: block;
      margin: auto;
    }
  </style>
</head>
<body>
<canvas id="game" width="400" height="400"></canvas>

<script>
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let snake = [{x: 200, y: 200}];
let direction = "RIGHT";
let food = {x: 100, y: 100};

document.addEventListener("keydown", e => {
  if (e.key === "ArrowUp") direction = "UP";
  if (e.key === "ArrowDown") direction = "DOWN";
  if (e.key === "ArrowLeft") direction = "LEFT";
  if (e.key === "ArrowRight") direction = "RIGHT";
});

function draw() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, 400, 400);

  ctx.fillStyle = "red";
  ctx.fillRect(food.x, food.y, 10, 10);

  ctx.fillStyle = "lime";
  snake.forEach(part => {
    ctx.fillRect(part.x, part.y, 10, 10);
  });
}

function update() {
  let head = {...snake[0]};

  if (direction === "RIGHT") head.x += 10;
  if (direction === "LEFT") head.x -= 10;
  if (direction === "UP") head.y -= 10;
  if (direction === "DOWN") head.y += 10;

  snake.unshift(head);

  if (head.x === food.x && head.y === food.y) {
    food.x = Math.floor(Math.random() * 40) * 10;
    food.y = Math.floor(Math.random() * 40) * 10;
  } else {
    snake.pop();
  }
}

function loop() {
  update();
  draw();
}

setInterval(loop, 100);
</script>
</body>
</html>
