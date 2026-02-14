setInterval(() => {
  const heart = document.createElement("div");
  heart.innerHTML = "❤";
  heart.style.position = "fixed";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.top = "100vh";
  heart.style.fontSize = Math.random() * 15 + 12 + "px";
  heart.style.opacity = "0.4";
  heart.style.animation = "float 10s linear";
  heart.style.color = "#e1bee7";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 10000);
}, 1200);

const style = document.createElement("style");
style.innerHTML = `
@keyframes float {
  to {
    transform: translateY(-120vh);
    opacity: 0;
  }
}`;
document.head.appendChild(style);
