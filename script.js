// Elements

const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");
const title = document.getElementById("letter-title");
const dogImg = document.getElementById("letter-dog");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");
const confettiBtn = document.getElementById("confetti-btn");

if (confettiBtn) {
    confettiBtn.style.display = "none";
}

// Click Envelope

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout( () => {
        document.querySelector(".letter-window").classList.add("open");
    }, 50);
});

// Logic to move the No btn

noBtn.addEventListener("mouseover", () => {
    const min = 200;
    const max = 200;

    const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * Math.PI * 2;
    
    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// Logic to make YES btn grow

// let yesScale = 1;

// yesBtn.style.position = "relative";
// yesBtn.style.transformOrigin = "center center";
// yesBtn.style.transition = "transform 0.3s ease";

// noBtn.addEventListener("click", () => {
//     yesScale += 2;

//     if (yesBtn.style.position !== fixed) {
//         yesBtn.style.position = "fixed";
//         yesBtn.style.top = "50%";
//         yesBtn.style.left = "50%";
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     } else{
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }
// });

// YES is clicked

yesBtn.addEventListener("click", () => {
    title.textContent = "💜💜 I WUFF YOU!!!💜💜";
    dogImg.src = "fig-smile.gif";
    document.querySelector(".letter-window").classList.add("final");
    buttons.style.display = "none";
    finalText.style.display = "block";

    if (confettiBtn) confettiBtn.style.display = "inline-block";
})

    if (confettiBtn) {

        confettiBtn.addEventListener('click', (e) => {
        createConfetti(e.clientX, e.clientY);
    });
}

function createConfetti(x, y) {
    const colors = ["#c8d634ff", "#43fe65ff", "#1a8ee7ff", "#f90154ff", "#db5ee7ff", "#913c9fff"];
    const container = document.getElementById('confetti-container');

    for (let i = 0; i < 60; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.top = `${y}px`;
        confetti.style.left = `${x}px`;

        // Set random direction for the burst
        const xDirection = (Math.random() - 0.5) * 400; // Adjust spread
        const yDirection = (Math.random() - 0.5) * 400;
        confetti.style.setProperty('--x', `${xDirection}px`);
        confetti.style.setProperty('--y', `${yDirection}px`);

        container.appendChild(confetti);

        // Remove the element after animation completes to clean up the DOM
        confetti.addEventListener('animationend', () => {
            confetti.remove();
        });
    }
}