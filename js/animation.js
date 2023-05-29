// Create a canvas element
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

// Set canvas size to match the window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Create objects
var objects = [];
var objectCount = 10;
var colors = ['#25426D', '#AB7BD0', '#F1BB30', '#FAFF12', '#787932', '#715AB4'];

for (var i = 0; i < objectCount; i++) {
  var shape = getRandomShape();
  var rotation = getRandomNumber(0, Math.PI * 2); // Random rotation angle
  var object = {
    x: getRandomNumber(0, canvas.width),
    y: getRandomNumber(0, canvas.height),
    size: getRandomNumber(10, 25), // Adjusted maximum size
    color: colors[Math.floor(Math.random() * colors.length)],
    speedX: getRandomSpeed(-0.00005, 0.09),
    speedY: getRandomSpeed(-0.0004, 0.2),
    shape: shape,
    rotation: rotation
  };
  objects.push(object);
}

// Render loop
function animate() {
  requestAnimationFrame(animate);

  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Update object positions
  objects.forEach(function(object) {
    object.x += object.speedX;
    object.y += object.speedY;

    // Check boundaries
    if (object.x < 0 || object.x + object.size > canvas.width) {
      object.speedX = -object.speedX;
    }
    if (object.y < 0 || object.y + object.size > canvas.height) {
      object.speedY = -object.speedY;
    }

    // Draw object based on shape
    ctx.save();
    ctx.fillStyle = object.color;
    ctx.translate(object.x, object.y);
    ctx.rotate(object.rotation);

    if (object.shape === 'circle') {
      ctx.beginPath();
      ctx.arc(0, 0, object.size / 2, 0, Math.PI * 2);
      ctx.fill();
    } else if (object.shape === 'triangle') {
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(object.size, 0);
      ctx.lineTo(object.size / 2, object.size);
      ctx.closePath();
      ctx.fill();
    } else if (object.shape === 'square') {
      ctx.fillRect(-object.size / 2, -object.size / 2, object.size, object.size);
    }

    ctx.restore();
  });
}

animate();

// Utility functions
function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomSpeed(minSpeed, maxSpeed) {
  return Math.random() * (maxSpeed - minSpeed) + minSpeed;
}

function getRandomShape() {
  var shapes = ['circle', 'triangle', 'square'];
  return shapes[Math.floor(Math.random() * shapes.length)];
}
