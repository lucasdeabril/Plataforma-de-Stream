
const avanca = document.querySelector('#vai')
const carrossel = document.querySelector('#slider1')
const carrosse2 = document.querySelector('#slider2')
const carrosse3 = document.querySelector('#slider3')
const carrosse4 = document.querySelector('#slider4')
const perfil = document.querySelector('.perfil')
const perfilbtn = document.querySelector('.inscreva-se')

let voltas1 = 0
let voltas2 = 0
let voltas3 = 0
let voltas4 = 0
let  limit1 = 6
let  limit2 = 6
let  limit3 = 6
let  limit4 = 6

// funções
// faz as fotos irem para a esquerda
const swipefront1 = () => { 
    if (limit1<12){
     console.log('oi')
    voltas1 -= 225 
    carrossel.style.transform= `translateX(${voltas1}px)`  
    limit1 ++
    console.log(limit)
    }else{
        console.log('vish')
        
    }
}
const swipeback1 = () => {
    if (limit1>6){
     console.log('oi')
    voltas1 += 225
    carrossel.style.transform= `translateX(${voltas1}px)`
    limit1 --
    console.log(limit) 
    }else{
        console.log('vish')
        
    }
    
}

const swipefront2 = () => {
    if (limit2<12){
       console.log('oi')
    voltas2 -= 225 
    carrosse2.style.transform= `translateX(${voltas2}px)` 
    limit2 ++
    }
    
          
}
const swipeback2 = () => {
    if (limit2>6){
        console.log('oi')
    voltas2 += 225
    carrosse2.style.transform= `translateX(${voltas2}px)`
    limit2 --
    }
    
    
}
const swipefront3 = () => {
    if (limit3<12){
       console.log('oi')
    voltas3 -= 225 
    carrosse3.style.transform= `translateX(${voltas3}px)` 
    limit3++
    }
    
          
}
const swipeback3 = () => {
    if (limit3>6){
       console.log('oi')
    voltas3 += 225
    carrosse3.style.transform= `translateX(${voltas3}px)` 
    limit3 --
    }
    
    
}
const swipefront4 = () => {
    if (limit4<12){
        console.log('oi')
    voltas4 -= 225 
    carrosse4.style.transform= `translateX(${voltas4}px)`
    limit4 ++
    }
    
          
}
const swipeback4 = () => {
    if (limit4>6){
     console.log('oi')
    voltas4 += 225
    carrosse4.style.transform= `translateX(${voltas4}px)` 
    limit4  --
    }
    
    
}

// eventos
addEventListener('click', (e) => {
    const targetEl = e.target;
    
    const parentEl = targetEl.closest("div");
    
    if(targetEl.classList.contains('vai1')){
        swipefront1()

    }
    if(targetEl.classList.contains('volta1')){
        swipeback1()

    }
    
    if(targetEl.classList.contains('vai2')){
        swipefront2()

    }
    if(targetEl.classList.contains('volta2')){
        swipeback2()

    }
    if(targetEl.classList.contains('vai3')){
        swipefront3()

    }
    if(targetEl.classList.contains('volta3')){
        swipeback3()

    }
    if(targetEl.classList.contains('vai4')){
        swipefront4()

    }
    if(targetEl.classList.contains('volta4')){
        swipeback4()

    }
    // perfil de usuário

    if(targetEl.classList.contains('icone')){
        perfil.classList.toggle('hidden')
    }

})

addEventListener('mouseover', (e)=>{
    let targetEl = e.target;
    if (targetEl.classList.contains('thumb')){
    targetEl.style.scale = '1.15'
    
    }
    if(targetEl.classList.contains('inscreva-se')){
        perfilbtn.innerHTML=('Mas não hoje')
    }
    
    
})
addEventListener('mouseout', (e)=>{
    let targetEl = e.target;
    if (targetEl.classList.contains('thumb')){
    targetEl.style.scale = '1'
    
    }
    if(targetEl.classList.contains('inscreva-se')){
        perfilbtn.innerHTML=('inscreva-se')
    }
})
