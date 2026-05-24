const weddingDate = new Date("Feb 12, 2027 11:00:00").getTime();

/* COUNTDOWN */
setInterval(() => {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  const d = Math.floor(distance / (1000*60*60*24));
  const h = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
  const m = Math.floor((distance%(1000*60*60))/(1000*60));
  const s = Math.floor((distance%(1000*60))/1000);

  document.getElementById("countdown").innerHTML =
    d + " يوم | " + h + " ساعة | " + m + " دقيقة | " + s + " ثانية";

  if(distance < 0){
    document.getElementById("countdown").innerHTML = "💍 اليوم الكبير";
  }
}, 1000);

/* 🌸 FLOWERS */
const flowerContainer = document.getElementById("flowers");

function createFlower() {
  const f = document.createElement("div");
  f.classList.add("flower");
  f.innerHTML = "🌸";

  f.style.left = Math.random() * 100 + "vw";
  f.style.animationDuration = (3 + Math.random() * 5) + "s";
  f.style.fontSize = (10 + Math.random() * 20) + "px";

  flowerContainer.appendChild(f);

  setTimeout(() => f.remove(), 8000);
}

setInterval(createFlower, 300);

/* 🦋 BUTTERFLIES */
const butterflyContainer = document.getElementById("butterflies");

function createButterfly() {
  const b = document.createElement("div");
  b.classList.add("butterfly");
  b.innerHTML = "🦋";

  b.style.top = Math.random() * 80 + "vh";
  b.style.animationDuration = (6 + Math.random() * 4) + "s";

  butterflyContainer.appendChild(b);

  setTimeout(() => b.remove(), 9000);
}

setInterval(createButterfly, 1200);
