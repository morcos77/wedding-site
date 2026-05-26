// Data impostata al 27 Febbraio 2027
const weddingDate = new Date("Feb 27, 2027 11:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  const d = Math.floor(distance / (1000*60*60*24));
  const h = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
  const m = Math.floor((distance%(1000*60*60))/(1000*60));
  const s = Math.floor((distance%(1000*60))/1000);

  const countdownEl = document.getElementById("countdown");
  if(countdownEl) {
      countdownEl.innerHTML = d + " يوم | " + h + " س | " + m + " د | " + s + " ث";
  }

  if(distance < 0){
    document.getElementById("countdown").innerHTML = "💍 اليوم الكبير";
  }
}, 1000);
