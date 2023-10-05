'use strict';
//texto
const switcher = document.querySelector('.mode');
//imagem do gato
const catImage = document.querySelector('.cat-img');
const criatividadeImage = document.querySelector('.skill1');
const comunicacaoImage = document.querySelector('.skill2');
const liderancaImage = document.querySelector('.skill3');
const responsabilidadeImage = document.querySelector('.skill4');
const blocoImage= document.querySelector('.block');
const blocoBg= document.querySelector('.cat-img');
const detalhes1= document.querySelector('.img-perfil');
const detalhes2= document.querySelector('.bg-text');
const detalhes3= document.querySelector('.hard-check');
const detalhes4= document.querySelector('.soft-check');
const detalhes5= document.querySelector('.projects-contaner');
const detalhes6= document.querySelector('.contact-contaner');
const patas= document.querySelector('.contact-box');


switcher.addEventListener('click', function() {
  // Alterna o tema do corpo da página.
  document.body.classList.toggle('light-theme');

  // Obtém o nome da classe atual do corpo da página.
  const className = document.body.className;

  // Altera o texto do botão dependendo do tema atual.
  //Alterna a imagem (gato) ao alterar o tema.
  // Alterna efeitos decorativos do portfolio

  if (className === 'dark-theme') {
    this.textContent = 'Dark';
    catImage.src = './img/catDark.png';
    criatividadeImage.src= './img/pincelDark.png';
    comunicacaoImage.src= './img/balaoDark.png';
    liderancaImage.src= './img/liderDark.png';
    responsabilidadeImage.src= './img/relogioDark.png';
    blocoImage.src= './img/detalheDark.png';
    blocoBg.style.backgroundImage = 'url(./img/detalheDark.png)';
    detalhes1.style.backgroundImage = 'url(./img/detalhes1D.png)';
    detalhes2.style.backgroundImage = 'url(./img/detalhes2D.png)';
    detalhes3.style.backgroundImage = 'url(./img/detalhes3D.png)';
    detalhes4.style.backgroundImage = 'url(./img/detalhes4D.png)';
    detalhes5.style.backgroundImage = 'url(./img/detalhes5D.png)';
    detalhes6.style.backgroundImage = 'url(./img/detalhes6D.png)';
    patas.style.backgroundImage = 'url(./img/patasContatoD.png)';
    

  } else {
    this.textContent = 'Light';
    catImage.src = './img/catLight.png';
    criatividadeImage.src= './img/pincelLight.png';
    comunicacaoImage.src= './img/balaoLight.png';
    liderancaImage.src= './img/liderLight.png';
    responsabilidadeImage.src= './img/relogioLight.png';
    blocoImage.src= './img/detalheLight.png';
    blocoBg.style.backgroundImage = 'url(./img/detalheLight.png)';
    detalhes1.style.backgroundImage = 'url(./img/detalhes1L.png)';
    detalhes2.style.backgroundImage = 'url(./img/detalhes2L.png)';
    detalhes3.style.backgroundImage = 'url(./img/detalhes3L.png)';
    detalhes4.style.backgroundImage = 'url(./img/detalhes4L.png)';
    detalhes5.style.backgroundImage = 'url(./img/detalhes5L.png)';
    detalhes6.style.backgroundImage = 'url(./img/detalhes6L.png)';
    patas.style.backgroundImage = 'url(./img/patasContatoL.png)';



  }

  // Imprime o nome da classe atual no console.
  console.log('current class name: ' + className);
});



function btnFunction1() {
    // Alterna a propriedade `display` do `p` com a classe `btn-show1`
    document.querySelectorAll(".btn-show1").forEach(function(p) {
      p.style.display = p.style.display === "block" ? "none" : "block";
    });
  }
  
  function btnFunction2() {
    // Alterna a propriedade `display` do `p` com a classe `btn-show2`
    document.querySelectorAll(".btn-show2").forEach(function(p) {
      p.style.display = p.style.display === "block" ? "none" : "block";
    });
  }
  
  function btnFunction3() {
    // Alterna a propriedade `display` do `p` com a classe `btn-show3`
    document.querySelectorAll(".btn-show3").forEach(function(p) {
      p.style.display = p.style.display === "block" ? "none" : "block";
    });
  }
  
  function btnFunction4() {
    // Alterne a propriedade `display` do `p` com a classe `btn-show3`
    document.querySelectorAll(".btn-show4").forEach(function(p) {
      p.style.display = p.style.display === "block" ? "none" : "block";
    });
  }

