let pl1 = (parseInt(Math.random() * 10) % 6) + 1;
let pl2 = (parseInt(Math.random() * 10) % 6) + 1;
if (pl1 > pl2) {
  document.querySelector("h1").textContent = "Player 1 Won";
} else {
  document.querySelector("h1").textContent = "Player 2 Won";
}
let pth1 = `images/dice${pl1}.png`;
let pth2 = `images/dice${pl2}.png`;
console.log(pth1);
console.log(pth2);
document.querySelector(".img1").setAttribute("src", pth1);
document.querySelector(".img2").setAttribute("src", pth2);
