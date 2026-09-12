
/* =========================================================
   WEDDING DATE
========================================================= */

const weddingDate =
    new Date("February 27, 2027 11:00:00").getTime();


/* =========================================================
   PAGE LOADER
========================================================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        const loader =
            document.getElementById("loader");

        loader.classList.add("hide");

    }, 1200);

});


/* =========================================================
   COUNTDOWN
========================================================= */

let previousValues = {
    days: "",
    hours: "",
    mins: "",
    seconds: ""
};


function animateNumber(element, value) {

    const formatted =
        String(value).padStart(2, "0");

    if (element.innerHTML !== formatted) {

        element.style.transform = "translateY(-8px)";
        element.style.opacity = "0";

        setTimeout(() => {

            element.innerHTML = formatted;

            element.style.transform = "translateY(0)";
            element.style.opacity = "1";

        }, 120);

    }
}


function updateCountdown() {

    const now =
        new Date().getTime();

    const distance =
        weddingDate - now;


    if (distance <= 0) {

        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("mins").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";

        return;
    }


    const days =
        Math.floor(
            distance /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (distance %
                (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );


    const mins =
        Math.floor(
            (distance %
                (1000 * 60 * 60)) /
            (1000 * 60)
        );


    const seconds =
        Math.floor(
            (distance %
                (1000 * 60)) /
            1000
        );


    animateNumber(
        document.getElementById("days"),
        days
    );

    animateNumber(
        document.getElementById("hours"),
        hours
    );

    animateNumber(
        document.getElementById("mins"),
        mins
    );

    animateNumber(
        document.getElementById("seconds"),
        seconds
    );
}


updateCountdown();

setInterval(
    updateCountdown,
    1000
);


/* =========================================================
   QR CODE
========================================================= */

function openQR() {

    const popup =
        document.getElementById("qr-popup");

    popup.classList.add("active");

    document.body.style.overflow = "hidden";

    celebrateSmall();
}


function closeQR() {

    const popup =
        document.getElementById("qr-popup");

    popup.classList.remove("active");

    document.body.style.overflow = "";
}


/* =========================================================
   CONFETTI
========================================================= */

function celebrateSmall() {

    if (typeof confetti !== "undefined") {

        confetti({
            particleCount: 80,
            spread: 70,
            origin: {
                y: 0.6
            }
        });

    }
}


function celebrate() {

    if (typeof confetti === "undefined") {
        return;
    }


    const duration =
        3000;

    const animationEnd =
        Date.now() + duration;


    const interval =
        setInterval(() => {

            const timeLeft =
                animationEnd - Date.now();


            if (timeLeft <= 0) {

                clearInterval(interval);

                return;
            }


            const particleCount =
                40 *
                (timeLeft / duration);


            confetti({

                particleCount:
                    Math.floor(particleCount),

                startVelocity: 30,

                spread: 360,

                ticks: 60,

                origin: {
                    x: Math.random(),
                    y:
                        Math.random() * 0.5
                }

            });

        }, 250);

}


/* =========================================================
   FLOATING PETALS / HEARTS
========================================================= */

const particleSymbols = [
    "♡",
    "♥",
    "✦",
    "✧",
    "❀",
    "🌸"
];


function createParticle() {

    const particle =
        document.createElement("div");

    particle.className =
        "particle";


    particle.innerHTML =
        particleSymbols[
            Math.floor(
                Math.random() *
                particleSymbols.length
            )
        ];


    particle.style.left =
        Math.random() * 100 + "vw";


    particle.style.fontSize =
        (10 + Math.random() * 16) + "px";


    particle.style.opacity =
        0.3 + Math.random() * 0.6;


    const duration =
        7 + Math.random() * 8;


    particle.style.animationDuration =
        duration + "s";


    document.body.appendChild(
        particle
    );


    setTimeout(() => {

        particle.remove();

    }, duration * 1000);

}


/*
   Create particles continuously.
*/

setInterval(
    createParticle,
    700
);


/* =========================================================
   SCROLL REVEAL
========================================================= */

const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                    }

                }
            );

        },
        {
            threshold: 0.15
        }
    );


document
    .querySelectorAll(".reveal")
    .forEach(
        element => {

            observer.observe(
                element
            );

        }
    );


/* =========================================================
   BACK TO TOP
========================================================= */

const topButton =
    document.getElementById(
        "topButton"
    );


window.addEventListener(
    "scroll",
    () => {

        if (
            window.scrollY > 500
        ) {

            topButton.classList.add(
                "show"
            );

        } else {

            topButton.classList.remove(
                "show"
            );

        }

    }
);


function scrollToTop() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


/* =========================================================
   MUSIC
========================================================= */

const music =
    document.getElementById(
        "weddingMusic"
    );

const musicButton =
    document.getElementById(
        "musicButton"
    );


let musicPlaying = false;


function toggleMusic() {

    /*
       If you haven't added music yet,
       this function simply does nothing.
    */

    if (!music.src) {

        alert(
            "Add your wedding music as images/music.mp3 first."
        );

        return;
    }


    if (musicPlaying) {

        music.pause();

        musicPlaying = false;

        musicButton.classList.remove(
            "playing"
        );

        musicButton.innerHTML = "♫";

    } else {

        music.play()
            .then(() => {

                musicPlaying = true;

                musicButton.classList.add(
                    "playing"
                );

                musicButton.innerHTML = "🔊";

            })
            .catch(() => {

                alert(
                    "Please tap the music button again to start the music."
                );

            });

    }

}


/* =========================================================
   SHARE
========================================================= */

async function shareWedding() {

    const shareData = {

        title:
            "M ♡ E | Our Wedding",

        text:
            "Join us on 27 February 2027 ❤️",

        url:
            window.location.href

    };


    if (
        navigator.share
    ) {

        try {

            await navigator.share(
                shareData
            );

        } catch (error) {

            console.log(
                "Share cancelled"
            );

        }

    } else {

        try {

            await navigator.clipboard.writeText(
                window.location.href
            );

            alert(
                "Wedding invitation link copied! ❤️"
            );

        } catch (error) {

            alert(
                "Copy this page URL to share the invitation."
            );

        }

    }

}


/* =========================================================
   ADD TO CALENDAR
========================================================= */

function addToCalendar() {

    /*
       Wedding:
       27 February 2027
       11:00

       Change the end time if needed.
    */

    const start =
        "20270227T110000";

    const end =
        "20270227T180000";


    const title =
        encodeURIComponent(
            "M ♡ E — Our Wedding"
        );


    const details =
        encodeURIComponent(
            "Join us for our wedding celebration ❤️"
        );


    const location =
        encodeURIComponent(
            "St. John Church / Almasa Hall"
        );


    const googleCalendarURL =
        "https://calendar.google.com/calendar/render?action=TEMPLATE" +
        "&text=" + title +
        "&dates=" + start +
        "/" + end +
        "&details=" + details +
        "&location=" + location;


    window.open(
        googleCalendarURL,
        "_blank"
    );

}


/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape"
        ) {

            closeQR();

        }

    }
);


/* =========================================================
   CLICK OUTSIDE QR
========================================================= */

document
    .getElementById("qr-popup")
    .addEventListener(
        "click",
        function(event) {

            if (
                event.target === this
            ) {

                closeQR();

            }

        }
    );


/* =========================================================
   SMOOTH CARD INTERACTION
========================================================= */

document
    .querySelectorAll(".glass-card")
    .forEach(card => {

        card.addEventListener(
            "mousemove",
            event => {

                const rect =
                    card.getBoundingClientRect();

                const x =
                    event.clientX -
                    rect.left;

                const y =
                    event.clientY -
                    rect.top;


                const centerX =
                    rect.width / 2;

                const centerY =
                    rect.height / 2;


                const rotateX =
                    (y - centerY) /
                    25;

                const rotateY =
                    (centerX - x) /
                    25;


                card.style.transform =
                    `perspective(800px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-8px)`;

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform =
                    "";

            }
        );

    });


/* =========================================================
   FIRST PARTICLES
========================================================= */

for (
    let i = 0;
    i < 12;
    i++
) {

    setTimeout(
        createParticle,
        i * 250
    );

}

