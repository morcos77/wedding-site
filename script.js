
const weddingDate = new Date("Feb 27, 2027 11:00:00").getTime();

let envelopeOpened = false;


/* =========================
   OPEN ENVELOPE
========================= */

function openEnvelope(event) {

    if (envelopeOpened) return;

    envelopeOpened = true;

    event.stopPropagation();

    const envelope = document.getElementById("envelope");
    const screen = document.getElementById("envelope-screen");

    envelope.classList.add("open");

    setTimeout(() => {

        screen.classList.add("hidden");

        window.scrollTo(0, 0);

        confetti({
            particleCount: 120,
            spread: 80,
            origin: {
                y: 0.6
            }
        });

    }, 1600);
}


/* =========================
   QR CODE
========================= */

function triggerConfetti() {

    confetti({
        particleCount: 150,
        spread: 70,
        origin: {
            y: 0.6
        }
    });

    document.getElementById("qr-popup").style.display = "flex";
}


function closeQR() {

    document.getElementById("qr-popup").style.display = "none";
}


/* =========================
   COUNTDOWN
========================= */

function updateCountdown() {

    const distance = weddingDate - Date.now();

    if (distance <= 0) {

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("mins").textContent = "00";

        return;
    }

    const days = Math.floor(distance / 86400000);

    const hours = Math.floor(
        (distance % 86400000) / 3600000
    );

    const mins = Math.floor(
        (distance % 3600000) / 60000
    );

    document.getElementById("days").textContent = days;

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("mins").textContent =
        String(mins).padStart(2, "0");
}


updateCountdown();

setInterval(updateCountdown, 1000);

