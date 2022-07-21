const gd = document.querySelector('.gd');
const muro = document.querySelector('.muro');
const muro2 = document.querySelector('.muro2');
const gameOver = document.querySelector('.gameOver');
const gameOverTxt = document.querySelector('.gameOverTxt');
const gameBoard = document.querySelector('.game-board');
const counter = document.getElementById('counter')

const jump = () => {
    gd.classList.add('jump')
    gd.src = "./imgs/gdJump.png"
    setTimeout(() => {
        gd.classList.remove('jump')
    }, 700)
    setTimeout(() => {
        gd.src = "./imgs/gdGif.gif"
    }, 400)
}

const loop = setInterval(()=> {
    const gdPosition = +window.getComputedStyle(gd).bottom.replace('px',"");
    const muroPosition = muro.offsetLeft;


    if(muroPosition <= 125 && muroPosition > 0  && gdPosition < 15){
        document.removeEventListener('keydown',counterJump)
        document.removeEventListener('click',counterJump)
        document.removeEventListener('keydown',jump)
        document.removeEventListener('click',jump)

        muro.style.animation = "none";
        muro.style.left = `${muroPosition}px`;

        gd.style.animation = "none";
        gd.style.bottom = `${gdPosition}px`;

        gd.src = "./imgs/gdGameOver.png"
        gd.style.width = "200px"
        gd.style.marginBottom = "-5px"
        gd.style.position = "absolosute"
        /* gameOver.style.marginLeft = "33%" */
        gameOver.style.display = "inline"
        /* gameOverTxt.style.marginLeft = "45%" */
        gameOverTxt.style.color = "red"
        gameOverTxt.style.display = 'inline'

        clearInterval(loop);
    }
}, 10)

const counterJump = () => {
    const count = +document.getElementById('counter').innerHTML 
    document.getElementById('counter').innerHTML  = count + 1
    if(count > 9){
        muro.style.width = "45px"
    }
    if(count > 19){
        muro.style.width = "50px"
    }
    if(count > 29){
        muro.style.width = "30px"
    }
    if(count > 39){
        muro.style.width = "45px"
    }
    if(count > 49){
        muro.style.width = "50px"
    }

}

var btn = document.querySelector("#refresh");
btn.addEventListener("click", function() {
    
    location.reload();
});

document.addEventListener('keydown', jump)
document.addEventListener('click', jump)
document.addEventListener('keydown', counterJump)
document.addEventListener('click', counterJump)