
document.addEventListener('DOMContentLoaded', () => {
    // 1. See the timer increment every second once the page has loaded.
    let counter = document.getElementById('counter');
    setInterval(() => {++counter.textContent}, 1000); /* Increase counter every one second */

})
