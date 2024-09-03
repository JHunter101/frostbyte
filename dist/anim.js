"use strict";
function flipCard(axis, times, imgParam, srcA, srcB, callback) {
    const img = typeof imgParam === 'string'
        ? document.getElementById(imgParam)
        : imgParam;
    let flipCounter = 0;
    function flipNext() {
        if (flipCounter < times) {
            img.classList.add('anim-flip-' + axis.toLowerCase());
            // Toggle the image source
            setTimeout(() => {
                img.src = img.src.endsWith(srcA) ? srcB : srcA;
            }, 125);
            // Remove the flip class after the animation is done
            setTimeout(() => {
                img.classList.remove('anim-flip-' + axis.toLowerCase());
                // Add a short delay before the next flip starts
                setTimeout(() => {
                    flipCounter++;
                    flipNext(); // Start the next flip after the delay
                }, 50); // Adjust this delay as needed (200ms in this case)
            }, 250); // Time for the flip animation to complete
        }
        else if (callback) {
            callback(); // Call the callback after all flips are done
        }
    }
    flipNext(); // Start the first flip
}
