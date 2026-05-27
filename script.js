const weddingDate = new Date("Feb 27, 2027 11:00:00").getTime();
setInterval(() => {
    const distance = weddingDate - new Date().getTime();
    const d = Math.floor(distance / (1000*60*60*24));
    const h = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
    const m = Math.floor((distance%(1000*60*60))/(1000*60));
    const s = Math.floor((distance%(1000*60))/1000);
    document.getElementById("countdown").innerHTML = `${d}d | ${h}h | ${m}m | ${s}s`;
}, 1000);

function openQR() { document.getElementById("qr-popup").style.display = "flex"; }
function closeQR() { document.getElementById("qr-popup").style.display = "none"; }
function checkFileCount() {
    const input = document.getElementById('file-input');
    if (input.files.length > 10) { alert("Max 10 images!"); input.value = ""; }
    document.getElementById('file-count').innerHTML = input.files.length + "/10 selected";
}
