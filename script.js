
/* ENVELOPE */

function openInvitation() {

    const envelope =
        document.querySelector(".envelope");

    envelope.classList.add("open");

    setTimeout(() => {

        document
            .getElementById("envelope-screen")
            .classList.add("hide");

        document
            .getElementById("website")
            .classList.add("show");

        startConfetti();

    }, 1200);
}


/* COUNTDOWN */

const wedding =
    new Date("February 27, 2027 11:00:00").getTime();

function countdown() {

    const distance =
        wedding - Date.now();

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

    document.getElementById("days").textContent =
        String(days).padStart(2,"0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2,"0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2,"0");
}

countdown();
setInterval(countdown,60000);


/* CONFETTI */

function startConfetti() {

    if (typeof confetti === "undefined")
        return;

    confetti({
        particleCount:100,
        spread:80,
        origin:{y:.6}
    });
}

function celebrate() {

    if (typeof confetti === "undefined")
        return;

    confetti({
        particleCount:180,
        spread:120,
        origin:{y:.6}
    });
}


/* QR */

function openQR() {

    document
        .getElementById("qr-popup")
        .classList.add("active");

    startConfetti();
}

function closeQR() {

    document
        .getElementById("qr-popup")
        .classList.remove("active");
}


/* SHARE */

async function shareWedding() {

    const data = {
        title:"M ♡ E | Our Wedding",
        text:"Join us on 27 February 2027 ❤️",
        url:location.href
    };

    if (navigator.share) {

        try {
            await navigator.share(data);
        } catch {}

    } else {

        await navigator.clipboard.writeText(
            location.href
        );

        alert("Invitation link copied ❤️");
    }
}


/* SCROLL ANIMATION */

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting)
                    entry.target.classList.add("visible");

            });

        },
        {threshold:.15}
    );

document
    .querySelectorAll(".reveal")
    .forEach(el => observer.observe(el));


/* TOP BUTTON */

window.addEventListener("scroll",() => {

    document
        .getElementById("top")
        .classList.toggle(
            "show",
            scrollY > 500
        );

});

function topPage() {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
}


/* MUSIC */

function toggleMusic() {

    const music =
        document.getElementById("music");

    if (!music.src) {

        alert(
            "Add images/music.mp3 if you want background music."
        );

        return;
    }

    if (music.paused)
        music.play();
    else
        music.pause();
}

