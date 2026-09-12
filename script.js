
function openInvitation() {
    const screen = document.getElementById("envelope-screen");
    const envelope = document.querySelector(".envelope");
    const website = document.getElementById("website");

    if (!screen || !envelope || !website) return;

    envelope.classList.add("open");

    setTimeout(() => {
        screen.classList.add("hide");
        website.classList.add("show");
        document.body.classList.remove("locked");

        if (typeof startConfetti === "function") {
            startConfetti();
        }
    }, 1400);
}


// COUNTDOWN
const wedding = new Date("February 27, 2027 11:00:00").getTime();

function countdown() {
    const distance = wedding - Date.now();

    if (distance <= 0) return;

    document.getElementById("days").textContent =
        String(Math.floor(distance / 86400000)).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(Math.floor((distance % 86400000) / 3600000)).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(Math.floor((distance % 3600000) / 60000)).padStart(2, "0");
}

countdown();
setInterval(countdown, 60000);


// CONFETTI
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


// QR POPUP
function openQR() {
    const popup = document.getElementById("qr-popup");

    if (popup) {
        popup.classList.add("active");
        startConfetti();
    }
}

function closeQR() {
    const popup = document.getElementById("qr-popup");

    if (popup) {
        popup.classList.remove("active");
    }
}


// SHARE
async function shareWedding() {
    const data = {
        title: "M ♡ E | Our Wedding",
        text: "Join us on 27 February 2027 ❤️",
        url: window.location.href
    };

    if (navigator.share) {
        try {
            await navigator.share(data);
        } catch (e) {}
        return;
    }

    try {
        await navigator.clipboard.writeText(window.location.href);
        alert("Invitation link copied ❤️");
    } catch (e) {
        alert(window.location.href);
    }
}


// SCROLL REVEAL
const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    },
    { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach(element => {
    observer.observe(element);
});


// BACK TO TOP
window.addEventListener("scroll", () => {
    const button = document.getElementById("top");

    if (button) {
        button.classList.toggle("show", window.scrollY > 500);
    }
});

function topPage() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// MUSIC
function toggleMusic() {
    const music = document.getElementById("music");

    if (!music || !music.src) {
        alert("Add images/music.mp3 if you want background music.");
        return;
    }

    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

