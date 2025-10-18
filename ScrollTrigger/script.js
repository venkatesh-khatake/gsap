gsap.from('.page-1 .box',{
    scale:0,
    duration:2,
    delay:1,
    rotate:360,
    borderRadius:"50%",
    scrollTrigger:{
        trigger:'.box-1',
        markers:true,
        start:"top 80%"
    }
})