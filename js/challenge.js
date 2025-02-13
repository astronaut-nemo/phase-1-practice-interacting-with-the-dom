
document.addEventListener('DOMContentLoaded', () => {
    // 1. See the timer increment every second once the page has loaded.
    let counter = document.getElementById('counter');
    let interval = setInterval(() => {++counter.textContent}, 1000); /* Increase counter every one second */

    // 2. Manually increment and decrement the counter using the plus and minus buttons.
    // Minus button
    let minusBtn = document.getElementById('minus');
    minusBtn.addEventListener('click', () => --counter.textContent)
    // Plus button
    let plusBtn = document.getElementById('plus');
    plusBtn.addEventListener('click', () => ++counter.textContent)

    // 3. "Like" an individual number of the counter. I should see the count of the number of "likes" associated with that number displayed.
    let likeBtn = document.getElementById('heart');

    likeBtn.addEventListener('click', () => {
        let likedNumber = counter.innerText;
        let likesList = document.querySelector('.likes')
        createChildItem('li', `${likedNumber} was liked!`, '.likes')
        // let likesList = Array.from(document.querySelector('.likes').childNodes);
        // createListItem('li', 'hello', '.likes')


        // likesList.forEach((like, i) => {
        //     // If the number is already inside the html collection, then update it's paragraph <span> element
        //     if(likesList[i] === likedNumber){
        //         likesList[i].textContent = 'I\'ve changed'
        //     }
        //     // else create a new list item
        //     // if(likesList[i])
        //     return console.log(likesList[i])
        
    })

    // 4. Pause the counter
    let pauseBtn = document.getElementById('pause');
    let isPaused = false;

    pauseBtn.addEventListener('click', () => {
        if(!isPaused){
            clearInterval(interval)
            isPaused = true;
            pauseBtn.textContent = 'resume';
            
            // Disable all buttons except pause/resume
            let buttons = document.getElementsByTagName('button');
            for(let i = 0; i<buttons.length; i++){
                if(buttons[i] === pauseBtn){
                } else {
                    buttons[i].setAttribute('disabled', 'true')
                }  
            }
        }
        else if(isPaused){
            interval = setInterval(() => {++counter.textContent}, 1000);
            isPaused = false;
            pauseBtn.textContent = 'pause';
            // Enable all buttons
            let buttons = document.getElementsByTagName('button');
            for(let i = 0; i<buttons.length; i++){
                buttons[i].removeAttribute('disabled')
            }
        }
    })

    // 5. Leave comments on my gameplay, such as: "Wow, what a fun game this is."
    let commentForm = document.getElementById('comment-form')
    commentForm.addEventListener('submit', () => {
        event.preventDefault();
        let commentText = document.getElementById('comment-input').value
        createChildItem('p', `${commentText}`, '#list');
        commentForm.reset();
    })
})

function createChildItem(itemType, itemText, selector){
    item = document.createElement(itemType);
    item.textContent = itemText;

    document.querySelector(selector).appendChild(item);
}

// let currentNumber = counter.innerText;
// let likes = 1;
// if(currentNumber === counter.textContent){
//     console.log(`${currentNumber} was liked ${likes} times!`)
//     ++likes;
// }
// else{
//     console.log('its different') 
//     currentNumber = counter.innerText;
// }