const pergunta = document.querySelector('#pergunta')
const resposta = document.querySelector('#resposta')
const botao = document.querySelector('#botao')
const revelador = document.querySelector('#revelador')
const texto_resposta = document.querySelector('#texto_resposta')

var arcano = 0
botao.addEventListener('click', function (){
  while (arcano == pergunta.innerText) {
    arcano = Math.floor(Math.random() * 22)
    console.log('passou')
  }
  pergunta.innerText = arcano
  revelador.style.display = 'block'
  resposta.style.display = 'none'
  texto_resposta.style.display = 'none'
})

const arcanos = {
  0: 'O louco', 
  1: 'O mago',
  2: 'A Sacerdotisa',
  3: 'A Imperatriz',
  4: 'O Imperador', 
  5: 'O Papa',
  6: 'Os Enamorados',
  7: 'O Carro',
  8: 'A Justiça', 
  9: 'O Eremita',
  10: 'A Roda da Fortuna',
  11: 'A Força',
  12: 'O Enforcado', 
  13: 'A Morte',
  14: 'A Temperança',
  15: 'O Diabo',
  16: 'A Torre', 
  17: 'A Estrela',
  18: 'A Lua',
  19: 'O Sol',
  20: 'O Julgamento', 
  21: 'O Mundo',
}

revelador.addEventListener('click', function() {
  resposta.src = `./cartas/${arcano}.png`
  resposta.alt = arcanos[arcano]
  texto_resposta.innerText = arcanos[arcano]
  texto_resposta.style.display = 'block'
  resposta.style.display = 'block'
})