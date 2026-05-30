const weddingDate = new Date("Feb 27, 2027 11:00:00").getTime();

function triggerConfetti() {
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
    document.getElementById("qr-popup").style.display = "flex";
}

function closeQR() { document.getElementById("qr-popup").style.display = "none"; }

function checkFileCount() {
    const input = document.getElementById('file-input');
    if (input.files.length > 10) { alert("Max 10 images!"); input.value = ""; }
    document.getElementById('file-count').innerHTML = input.files.length + "/10 selected";
}

setInterval(() => {
    const now = new Date().getTime();
    const dist = weddingDate - now;
    if (dist > 0) {
        document.getElementById("days").innerHTML = Math.floor(dist / (1000*60*60*24));
        document.getElementById("hours").innerHTML = Math.floor((dist % (1000*60*60*24)) / (1000*60*60));
        document.getElementById("mins").innerHTML = Math.floor((dist % (1000*60*60)) / (1000*60));
    }
}, 1000);
