let musica ;

function preload(){
  musica = loadSond("fundo.mp3");
}

function setup(){
  musica.play();<musica.mp3="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Edu+AU+VIC+WA+NT+Pre:wght@400..700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Sour+Gummy:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
  musica.loop();
}

const avança = document.querSelectorAll(".proximo");
avança.forEach(button => {
  button.addEventListener('click', function(){
    const atual = document.querySelector('.ativo');
    const proximoPasso = 'passo-' + this.getAttribute('data-proximo');
    atual.classList.remove('ativo');
document.getElementeById(proximoPasso).classList.add('ativo'); 
    
  })
})