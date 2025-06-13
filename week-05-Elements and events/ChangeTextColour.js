document.addEventListener("DOMContentLoaded", function () {
    // Add event listener to the "Make Red" button
    document.getElementById("buttonRed").addEventListener("click", function () {
      // Apply the 'red' class to change the text color to red
      document.getElementById("colorText").className = "red";
    });
  
    // Add event listener to the "Make Blue" button
    document.getElementById("buttonBlue").addEventListener("click", function () {
      // Apply the 'blue' class to change the text color to blue
      document.getElementById("colorText").className = "blue";
    });
  });
  