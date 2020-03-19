// showLetter sets the key value to letter div 
let showLetter = () => {
    document.getElementById("letter").innerText=event.key;
}
// enable event listener with event keydown
document.addEventListener("keydown",showLetter);
