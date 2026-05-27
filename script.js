const weddingDate = new Date("Feb 27, 2027 11:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = weddingDate - now;
  const d = Math.floor(distance / (1000*60*60*24));
  const h = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
  const m = Math.floor((distance%(1000*60*60))/(1000*60));
  const s = Math.floor((distance%(1000*60))/1000);

  const countdownEl = document.getElementById("countdown");
  if(countdownEl) countdownEl.innerHTML = `${d} Days | ${h}h | ${m}m | ${s}s`;
}, 1000);

function openQR() { document.getElementById("qr-popup").style.display = "flex"; }
function closeQR() { document.getElementById("qr-popup").style.display = "none"; }
