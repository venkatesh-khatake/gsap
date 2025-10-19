let cursor = document.querySelector('.cursor');
let body = document.querySelector('body');
let main = document.querySelector('.main')

body.addEventListener('mousemove',(event)=>{
    gsap.to(cursor,{
        x:event.x,
        y:event.y, 
    })
})

main.addEventListener('mouseenter',()=>{
    gsap.to(cursor,{
        scale:2
    })
})

main.addEventListener('mouseleave',()=>{
    gsap.to(cursor,{
        scale:1
    })
})


