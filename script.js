
const avanca = document.querySelector('#vai')
const carrossel = document.querySelector('#slider1')
const carrosse2 = document.querySelector('#slider2')
const carrosse3 = document.querySelector('#slider3')
const carrosse4 = document.querySelector('#slider4')
let voltas1 = 0
let voltas2 = 0
let voltas3 = 0
let voltas4 = 0
let  limit = 0

// funções
const swipefront1 = () => {
    if (limit>=0&&limit<=6){
     console.log('oi')
    voltas1 -= 225 
    carrossel.style.transform= `translateX(${voltas1}px)`  
    limit -- 
    console.log(limit)
    }else{
        console.log('vish')
        limit++
    }
    
          
}
const swipeback1 = () => {
    if (limit>=0&&limit<=6){
     console.log('oi')
    voltas1 += 225
    carrossel.style.transform= `translateX(${voltas1}px)`
    limit ++
    console.log(limit) 
    }else{
        console.log('vish')
        limit--
    }
    
}

const swipefront2 = () => {
    
    console.log('oi')
    voltas2 -= 225 
    carrosse2.style.transform= `translateX(${voltas2}px)`
          
}
const swipeback2 = () => {
    
    console.log('oi')
    voltas2 += 225
    carrosse2.style.transform= `translateX(${voltas2}px)`
    
}
const swipefront3 = () => {
    
    console.log('oi')
    voltas3 -= 225 
    carrosse3.style.transform= `translateX(${voltas3}px)`
          
}
const swipeback3 = () => {
    
    console.log('oi')
    voltas3 += 225
    carrosse3.style.transform= `translateX(${voltas3}px)`
    
}
const swipefront4 = () => {
    
    console.log('oi')
    voltas4 -= 225 
    carrosse4.style.transform= `translateX(${voltas4}px)`
          
}
const swipeback4 = () => {
    
    console.log('oi')
    voltas4 += 225
    carrosse4.style.transform= `translateX(${voltas4}px)`
    
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
})

