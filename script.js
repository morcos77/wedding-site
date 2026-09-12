// ===============================
// OPEN INVITATION
// ===============================

let invitationOpened = false;

function openInvitation() {

    if (invitationOpened) return;

    const screen = document.getElementById("envelope-screen");
    const envelope = document.querySelector(".envelope");
    const website = document.getElementById("website");

    if (!screen || !envelope || !website) {
        console.error("Envelope elements not found.");
        return;
    }

    invitationOpened = true;

    // Start envelope animation
    envelope.classList.add("open");

    // Hide envelope and show website
    setTimeout(() => {

        screen.classList.add("hide");
        website.classList.add("show");
        document.body.classList.remove("locked");

        if (typeof startConfetti === "function") {
            startConfetti();
        }

    }, 1500);
}


// ===============================
// MAKE ENVELOPE WORK ON MOBILE
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    const envelopeWrap = document.querySelector(".envelope-wrap");

    if (envelopeWrap) {

        envelopeWrap.addEventListener("pointerup", (event) => {
            event.preventDefault();
            openInvitation();
        });

    }

});


// ===============================
// COUNTDOWN
// ===============================

const wedding =
    new Date("February 27, 2027 11:00:00").getTime();

function countdown() {

    const distance = wedding - Date.now();

    if (distance <= 0) return;

    const days =
        Math.floor(distance / 86400000);

    const hours =
        Math.floor(
            (distance % 86400000) / 3600000
        );

    const minutes =
        Math.floor(
            (distance % 3600000) / 60000
        );

    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");

    if (daysElement)
        daysElement.textContent = String(days).padStart(2, "0");

    if (hoursElement)
        hoursElement.textContent = String(hours).padStart(2, "0");

    if (minutesElement)
        minutesElement.textContent = String(minutes).padStart(2, "0");
}

countdown();
setInterval(countdown, 60000);


// ===============================
// CONFETTI
// ===============================

function startConfetti() {

    if (typeof confetti === "undefined") return;

    confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 }
    });
}

function celebrate() {

    if (typeof confetti === "undefined") return;

    confetti({
        particleCount: 180,
        spread: 120,
        origin: { y: 0.6 }
    });
}


// ===============================
// QR
// ===============================

function openQR() {

    const popup = document.getElementById("qr-popup");

    if (!popup) return;

    popup.classList.add("active");
    startConfetti();
}

function closeQR() {

    const popup = document.getElementById("qr-popup");

    if (!popup) return;

    popup.classList.remove("active");
}


// ===============================
// SHARE
// ===============================

async function shareWedding() {

    const data = {
        title: "M ♡ E | Our Wedding",
        text: "Join us on 27 February 2027 ❤️",
        url: window.location.href
    };

    if (navigator.share) {

        try {
            await navigator.share(data);
        } catch (error) {}

        return;
    }

    try {

        await navigator.clipboard.writeText(window.location.href);
        alert("Invitation link copied ❤️");

    } catch (error) {

        alert(window.location.href);
    }
}


// ===============================
// SCROLL REVEAL
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    const observer = new IntersectionObserver(

        function(entries) {

            entries.forEach(function(entry) {

                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }

            });

        },

        { threshold: 0.15 }
    );

    document
        .querySelectorAll(".reveal")
        .forEach(function(element) {

            observer.observe(element);

        });

});


// ===============================
// BACK TO TOP
// ===============================

window.addEventListener("scroll", function() {

    const button = document.getElementById("top");

    if (!button) return;

    button.classList.toggle(
        "show",
        window.scrollY > 500
    );

});


function topPage() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// ===============================
// MUSIC
// ===============================

function toggleMusic() {

    const music = document.getElementById("music");

    if (!music || !music.src) {

        alert(
            "Add images/music.mp3 if you want background music."
        );

        return;
    }

    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}
