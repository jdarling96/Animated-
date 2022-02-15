function randomRgb() {
    const r = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const g = 0;

    return `rgb(${r}, ${b}, ${g})`
};



const letters = document.querySelectorAll(".letter");
const intervalId = setInterval(function(){
    for(let letter of letters){
        letter.style.color = randomRgb();
    }



}, 1000)