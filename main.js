'use strict'

const imagens = [
   {
    nome: 'Highway to Hell - AC-DC!!',
    url: './img/acdc.jpg'
   },

   {
    nome: 'AM - Arctic Monkeys!!',
    url: './img/arctic_monkeys.jpg'
   },
   {
    nome: 'David Bowie!!',
    url:'./img/bowie.jpg'
   },
   {
    nome:'Hey Jude - Beatles!!',
    url:'./img/hey_jude.jpg'
   },
   {
    nome: 'Kiss!!',
    url:'./img/kiss.jpg'
   },
   {
    nome: 'Maneskin!!',
    url:'./img/maneskin.jpg'
   },
   {
    nome: 'Silver Springs - Stevie Nicks!!',
    url:'./img/silver_springs.jpg'
   }, 
   {
    nome: 'Under Pressure - Queen ft Bowie!!', 
    url:'./img/under_pressure.jpg'
   }

]

function criarImagem (srcImagem){
const galeria = document.getElementById('galeria')
const imagem = document.createElement('img')

const info = document.createElement('div')
const texto = document.createElement('span')

imagem.src = srcImagem.url
texto.textContent = srcImagem.nome

galeria.appendChild(imagem)
galeria.appendChild(info)
info.appendChild(texto)

}

function carregarImagens (){
  

    // criando a galeria por um while

    // let contador = 0
    // const limite = imagens.length - 1
    // while (contador <= limite){
    //     const imagem = document.createElement('img')
    //     imagem.src = imagens [contador] 
    //     galeria.appendChild(imagem)
    //     contador ++
    // }

    imagens.forEach(criarImagem)
   
}
carregarImagens()