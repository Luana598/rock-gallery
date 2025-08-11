'use strict'

const imagens = [
    "./img/acdc.jpg",
    "./img/arctic_monkeys.jpg",
    "./img/bowie.jpg",
    "./img/hey_jude.jpg",
    "./img/kiss.jpg",
    "./img/maneskin.jpg",
    "./img/silver_springs.jpg", 
    "./img/under_pressure.jpg"   
]

function carregarImagens (){
    const galeria = document.getElementById('galeria')
    galeria.textContent = "teste de JS!"
}
carregarImagens()