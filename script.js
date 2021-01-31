const dina = document.querySelector(".dina");
const background = document.querySelector(".background");
let isjumping = false;
let position = 0;

function handleKeyUp(event) {
    if (event.keyCode === 32) {
        if (!isjumping) {
            jump();
        }
    }
}

function jump() {
    isjumping = true;

    let upInterval = setInterval(() => {
        if (position >= 150) {
            clearInterval(upInterval);

            //descendo
            let downInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downInterval);
                    isjumping = false;
                } else {
                    position -= 20;
                    dina.style.bottom = position + "px";
                }
            }, 20);
        } else {
            //subindo
            position += 20;
            dina.style.bottom = position + "px";
        }
    }, 20);
}

function createcacto() {
    const cacto = document.createElement("div");
    let cactoPosition = 1000;
    let randomTime = Math.random() * 6000;

    cacto.classList.add("cacto");
    cacto.style.left = 1000 + "px";
    background.appendChild(cacto);

    let leftInterval = setInterval(() => {

        if (cactoPosition < -60) {
            clearInterval(leftInterval);
            background.removeChild(cacto);
        } else if (cactoPosition > 0 && cactoPosition < 60 && position < 60) {
            //game over
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>';
        } else {
            cactoPosition -= 10;
            cacto.style.left = cactoPosition + "px";
        }

    }, 20);

    setTimeout(createcacto, randomTime);
}

createcacto();
document.addEventListener("keyup", handleKeyUp);