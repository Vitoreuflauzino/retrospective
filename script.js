let currentSlide = 15;
const totalSlides = 16;
let autoTimeout; 

function showSlide(slideNumber) {
  const slides = document.querySelectorAll(".slide");
  slides.forEach(slide => slide.classList.remove("active"));

  const current = document.getElementById(`slide${slideNumber}`);
  if (current) current.classList.add("active");

  if (autoTimeout) clearTimeout(autoTimeout);

  if (current?.classList.contains("auto")) {
    autoTimeout = setTimeout(() => proximo(), 6000);
  }
}
showSlide(currentSlide);

function startSlideshow() {
  currentSlide = 2;
  document.getElementById("musica").play();
  showSlide(currentSlide);
}

function proximo() {
  currentSlide++;
  if (currentSlide > totalSlides) {
    currentSlide = totalSlides;
    alert("💖 Fim da retrospectiva 💖");
    return;
  }
  showSlide(currentSlide);
}

function abrirCarta() {
  document.getElementById("carta").classList.add("virada");
}

function gerarCoracoes() {
  const coracao = document.createElement('div');
  coracao.classList.add('coracao');
  coracao.innerHTML = '💖';
  coracao.style.left = Math.random() * 100 + 'vw';
  coracao.style.animationDuration = (4 + Math.random() * 3) + 's';
  document.body.appendChild(coracao);
  setTimeout(() => coracao.remove(), 7000);
}

setInterval(gerarCoracoes, 900);

const cartas = document.querySelectorAll(".carta");
const fraseRevelada = document.getElementById("frase-revelada");
const fotoFinal = document.querySelector(".foto-final");

cartas.forEach(carta => {
  carta.addEventListener("click", () => {
    const texto = carta.getAttribute("data-frase");
    fraseRevelada.textContent = texto;

    // Marca a carta como aberta
    carta.style.backgroundColor = "#555";
    carta.style.cursor = "default";
    carta.style.transform = "scale(1)";
    carta.removeEventListener("click", () => {}); // previne múltiplos cliques

    // Se todas as cartas forem reveladas, mostra a foto final
    const abertas = [...cartas].filter(c => c.style.backgroundColor === "rgb(85, 85, 85)");
    if (abertas.length === cartas.length) {
      fotoFinal.style.opacity = 1;
    }
  });
});
