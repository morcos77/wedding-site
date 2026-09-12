
const weddingDate = new Date("Feb 27, 2027 11:00:00").getTime();

const envelope = document.getElementById("envelope");
const screen = document.getElementById("envelope-screen");
const invitation = document.getElementById("invitation");

let opened = false;


/* Open envelope by tapping it */
envelope.addEventListener("click", openEnvelope);
envelope.addEventListener("touchend", e => {
    e.preventDefault();
    openEnvelope();
});

function openEnvelope() {
    if (opened) return;
    opened = true;

    envelope.classList.add("open");

    setTimeout(() => {
        screen.classList.add("hidden");
        invitation.classList.add("visible");

        window.scrollTo({
            top: 0,
            behavior: "instant"
        });

        confetti({
            particleCount: 120,
            spread: 80,
            origin: { y: .6 }
        });
    }, 1900);
}


/* Countdown */
function updateCountdown() {
    const distance = weddingDate - Date.now();

    if (distance <= 0) return;

    document.getElementById("days").textContent =
        Math.floor(distance / 86400000);

    document.getElementById("hours").textContent =
        Math.floor((distance % 86400000) / 3600000);

    document.getElementById("mins").textContent =
        Math.floor((distance % 3600000) / 60000);
}

updateCountdown();
setInterval(updateCountdown, 1000);


/* QR */
function triggerConfetti() {
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: .6 }
    });

    document.getElementById("qr-popup").style.display = "flex";
}

function closeQR() {
    document.getElementById("qr-popup").style.display = "none";
}

