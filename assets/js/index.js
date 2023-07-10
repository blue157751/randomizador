const form = document.querySelector('#form');
form.addEventListener('submit',function(evento) {
    evento.preventDefault();

    const texto = document.querySelector('#palavras');

    const palavras = texto.value;

    const palavrasArray = palavras.split(',');

    const palavrasSemEspacos = palavrasArray.map(function(palavra) {
        return palavra.trim();
    });

    const indiceAleatorio = Math.floor(Math.random() * palavrasSemEspacos.length);

    const palavraSorteada = palavrasSemEspacos[indiceAleatorio];

    const paragrafo = document.querySelector('#palavraSorteada');

    paragrafo.textContent = palavraSorteada;
    
    paragrafo.style.visibility = 'hidden';

    setTimeout(function() {
        paragrafo.style.visibility = 'visible';
      }, 500);

});