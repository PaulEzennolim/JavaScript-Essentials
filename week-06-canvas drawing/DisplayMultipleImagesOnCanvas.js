document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    const imageUrls = [
        'https://images.app.goo.gl/hVefqSkQj1xFgAgm9',
        'https://images.app.goo.gl/3V5FmKvKiYyRmo557',
        'https://images.app.goo.gl/z6VmenvuCdbRTsNBA',
        'https://images.app.goo.gl/aPxfEHWsMaTzuBhJA',
        'https://images.app.goo.gl/8Sh4CNQpsCc8srt7A'
    ];

    // Keep track of loaded images
    let loadedImages = 0;

    // Function to draw images on the canvas
    function drawImages() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

        // Draw each image
        for (let i = 0; i < imageUrls.length; i++) {
            const image = new Image();
            image.src = imageUrls[i];

            // Wait for the image to load
            image.onload = function() {
                ctx.drawImage(image, i * 200, 0, 200, 100);
                loadedImages++;

                // Check if all images are loaded
                if (loadedImages === imageUrls.length) {
                    console.log("All images loaded.");
                }
            };
        }
    }

    // Call the function to draw images
    drawImages();
});
