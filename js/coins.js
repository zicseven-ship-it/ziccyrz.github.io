function createCoin() {
  const coin = document.createElement("img");
  coin.src = "https://s2.coinmarketcap.com/static/img/coins/128x128/1.png"; // logo BTC
  coin.classList.add("coin");

  // posisi random di layar (horizontal)
  coin.style.left = Math.random() * window.innerWidth + "px";

  document.body.appendChild(coin);

  // hapus setelah animasi selesai (10 detik biar gak numpuk)
  setTimeout(() => {
    coin.remove();
  }, 10000);
}

function coinRain() {
  // bikin 50 coin sekaligus
  for (let i = 0; i < 50; i++) {
    setTimeout(createCoin, i * 200); // jeda antar coin biar ga barengan banget
  }
}

// jalankan pertama kali
coinRain();

// ulangi setiap 30 detik
setInterval(coinRain, 30000);
