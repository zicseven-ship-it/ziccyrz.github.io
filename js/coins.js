// coins.js
function createCoin() {
  const coin = document.createElement("img");
  coin.src = "https://s2.coinmarketcap.com/static/img/coins/128x128/1.png"; // logo BTC
  coin.className = "falling-coin";

  // posisi random
  coin.style.left = Math.random() * window.innerWidth + "px";
  coin.style.top = "-50px";
  coin.style.width = "30px";

  document.body.appendChild(coin);

  // jatuh
  let speed = 2 + Math.random() * 3;
  let angle = Math.random() * 360;

  function fall() {
    let top = parseFloat(coin.style.top);
    if (top < window.innerHeight) {
      coin.style.top = top + speed + "px";
      coin.style.transform = `rotate(${angle}deg)`;
      angle += 5;
      requestAnimationFrame(fall);
    } else {
      coin.remove();
    }
  }
  fall();
}

// bikin banyak koin tiap 30 detik
setInterval(() => {
  for (let i = 0; i < 50; i++) {
    setTimeout(createCoin, i * 200); // delay biar nggak jatuh barengan
  }
}, 30000);

// pas load pertama langsung jatuh juga
for (let i = 0; i < 50; i++) {
  setTimeout(createCoin, i * 200);
}
