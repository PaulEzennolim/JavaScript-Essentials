document.addEventListener("DOMContentLoaded", function () {
    // Get the canvas element
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
  
    // Draw the white background
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  
    // Outline the square in blue
    ctx.strokeStyle = "blue";
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
  
    // Draw the blue diagonal cross touching the opposite corner
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 1;
  
    // Draw the horizontal line
    ctx.beginPath();
    ctx.moveTo(0, canvas.height);
    ctx.lineTo(canvas.width, 0);
    ctx.stroke();
  
    // Draw the vertical line
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(canvas.width, canvas.height);
    ctx.stroke();
  });
  
      