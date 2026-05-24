const weddingDate = new Date("Feb 12, 2027 11:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML =
    days + " يوم | " + hours + " ساعة | " + minutes + " دقيقة | " + seconds + " ثانية";

  if (distance < 0) {
    document.getElementById("countdown").innerHTML = "💍 اليوم الكبير وصل 💍";
  }
}, 1000);
