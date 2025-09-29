// js/coins.js
function createCoin() {
  const coin = document.createElement("img");
  coin.src = "https://s2.coinmarketcap.com/static/img/coins/128x128/1.png"; // logo BTC
  coin.className = "coin";

  // posisi horizontal random
  coin.style.left = Math.random() * window.innerWidth + "px";

  // animasi durasi random (biar beda2 kecepatan)
  coin.style.animationDuration = 3 + Math.random() * 3 + "s";

  document.body.appendChild(coin);

  // hapus elemen setelah animasi selesai
  setTimeout(() => {
    coin.remove();
  }, 6000);
}

// bikin hujan coin tiap 30 detik (50 koin sekali turun)
setInterval(() => {
  for (let i = 0; i < 50; i++) {
    setTimeout(createCoin, i * 200); // biar muncul bertahap
  }
}, 30000);

// jalankan langsung di awal juga
for (let i = 0; i < 50; i++) {
  setTimeout(createCoin, i * 200);
}
