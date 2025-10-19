gsap.from('.page-1 .box',{
    scale:0,
    duration:2,
    delay:1,
    rotate:360,
    borderRadius:"50%"
    // scrollTrigger:{
    //     trigger:'.box-1',
    //     markers:true,
    //     start:"top 50%"
    // }
})

gsap.from('.page-2 .box',{
     scale:0,
    duration:2,
    delay:1,
    rotate:360,
    borderRadius:"50%",
    scrollTrigger:{
        trigger:'.page-2 .box',
        markers:true,
        start:"top 90%",
        scrub:2

    }
})

gsap.from('.page-3 h1',{
    x:-30,
    opacity:0,
    duration:2,
    delay:1,
    scrollTrigger:{
        trigger:'.page-3 h1'
    }
})

gsap.from('.page-3 p',{
     x:30,
    opacity:0,
    duration:2,
    delay:1,
    scrollTrigger:{
        trigger:'.page-3 p'
    }
})

gsap.to(".page-4 h1",{
    Transform:"translate(-150%)",
    duration:2,
    scrollTrigger:{
        trigger:".page-4",
        scroller:'body',
        start:'top 0%',
        end:'top -100%',
        markers:true,
        scrub:1,
        pin:true

    }
})
