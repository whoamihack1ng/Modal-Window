"use strict";

const btn = document.querySelectorAll('button')
const span = document.querySelector('span')
const modal = document.querySelector('.modal')
const text = document.querySelector('.text')

btn.forEach(function(item){
    item.addEventListener('click',function(){
        modal.classList.add('active')
    })
})
span.addEventListener('click',function(){
    modal.classList.remove('active')
})

modal.addEventListener('click',function make(){
    modal.classList.remove('active')
})

document.addEventListener('keyup',function(e){
    if(e.key === 'Enter'){
        modal.classList.add('active')
    }
})

document.addEventListener('keyup',function(e){
    if(e.key === 'Escape'){
        modal.classList.remove('active')
    }
})