const weddingDate = new Date("Feb 27, 2027 11:00:00").getTime();

// Funzione Confetti
function triggerConfetti() {
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
    // Dopo i confetti, apre il QR (se lo hai ancora nel popup)
    openQR(); 
}

setInterval(() => {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    document.getElementById("days").innerHTML = Math.floor(distance / (1000*60*60*24));
    document.getElementById("hours").innerHTML = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    document.getElementById("mins").innerHTML = Math.floor((distance % (1000*60*60)) / (1000*60));
}, 1000);

function openQR() { document.getElementById("qr-popup").style.display = "flex"; }
function closeQR() { document.getElementById("qr-popup").style.display = "none"; }
