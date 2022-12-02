
document.addEventListener('DOMContentLoaded', () => {
    // 1. See the timer increment every second once the page has loaded.
    let counter = document.getElementById('counter');
    setInterval(() => {++counter.textContent}, 1000); /* Increase counter every one second */

    // 2. Manually increment and decrement the counter using the plus and minus buttons.
    // Minus button
    let minusBtn = document.getElementById('minus');
    minusBtn.addEventListener('click', () => {
        --counter.textContent
    })
    // Plus button
    let plusBtn = document.getElementById('plus');
    plusBtn.addEventListener('click', () => {
        ++counter.textContent
    })
})
