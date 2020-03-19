
let showLetter = () => {
    document.getElementById("letter").innerHTML=event.key;
}

document.addEventListener("keydown",showLetter);
