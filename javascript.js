let count = 1;
// document.getElementById("radio1").checked = true;

setInterval (function(){
    nextImage();
}, 5000)

function nextImage(){
    count++;
    if(count>4){
        count = 1;
    }
    document.getElementById("radio"+count).checked = true;
}

// seleciona os elementos do carousel
const carousel = document.querySelector(".carousel");
const images = carousel.querySelectorAll("img");

// cria os botões de navegação
const dotsContainer = document.querySelector(".carousel-dots");
for (let i = 0; i < images.length; i++) {
  const dot = document.createElement("button");
  dot.addEventListener("click", () => {
    changeImage(i);
  });
  dotsContainer.appendChild(dot);
}

// define a imagem ativa inicial
let activeIndex = 0;
images[activeIndex].classList.add("active");
dotsContainer.children[activeIndex].classList.add("active");

// função para mudar a imagem ativa
function changeImage(index) {
  images[activeIndex].classList.remove("active");
  dotsContainer.children[activeIndex].classList.remove("active");
  images[index].classList.add("active");
  dotsContainer.children[index].classList.add("active");
  activeIndex = index;
}

// configura a transição automática
let timer = setInterval(() => {
  let nextIndex = activeIndex + 1;
  if (nextIndex >= images.length) {
    nextIndex = 0;
  }
  changeImage(nextIndex);
}, 5000);
