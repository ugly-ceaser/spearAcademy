 // Create a canvas element
    var canvas = document.querySelector('canvas');
    var ctx = canvas.getContext('2d');

    // Set canvas size to match the window
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Create objects
    var objects = [];
    var objectCount = 10;

    for (var i = 0; i < objectCount; i++) {
      var object = {
        x: getRandomNumber(0, canvas.width),
        y: getRandomNumber(0, canvas.height),
        radius: getRandomNumber(10, 30),
        color: getRandomColor(),
        speedX: getRandomSpeed(-0.0005, 0.2),
        speedY: getRandomSpeed(-0.0004, 0.3)
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
        if (object.x < 0 || object.x > canvas.width) {
          object.speedX = -object.speedX;
        }
        if (object.y < 0 || object.y > canvas.height) {
          object.speedY = -object.speedY;
        }

        // Draw object
        ctx.beginPath();
        ctx.arc(object.x, object.y, object.radius, 0, Math.PI * 2);
        ctx.fillStyle = object.color;
        ctx.fill();
        ctx.closePath();
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

    function getRandomColor() {
      return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }