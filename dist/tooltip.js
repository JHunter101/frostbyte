"use strict";
window.onload = function () {
    adjustTooltipPosition();
};
window.addEventListener('resize', adjustTooltipPosition);
function adjustTooltipPosition() {
    const tooltips = document.querySelectorAll('.tooltip');
    tooltips.forEach((tooltip) => {
        // Temporarily make the tooltip visible
        tooltip.style.visibility = 'hidden';
        tooltip.style.display = 'block';
        // Get the tooltip's bounding rectangle
        const rect = tooltip.getBoundingClientRect();
        // Restore tooltip's visibility
        tooltip.style.display = '';
        tooltip.style.visibility = '';
        console.log(rect.left, window.innerWidth / 2);
        if (rect.left < window.innerWidth / 2) {
            tooltip.classList.remove('tooltip--grow-left');
            tooltip.classList.add('tooltip--grow-right');
        }
        else {
            tooltip.classList.remove('tooltip--grow-right');
            tooltip.classList.add('tooltip--grow-left');
        }
    });
}
