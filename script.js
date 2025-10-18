// gsap.to("#box1",{
//     x:500,
//     duration:2,
//     delay:1,
//     backgroundColor:'purple',
//     borderRadius:"50%",
//     rotate:360,
//     repeat: -1,
//     yoyo:true,

// })

// gsap.from("#box2",{
//     x:500,
//     duration:2,
//     delay:1
// })

const tl = gsap.timeline({
  repeat: -1,    // Infinite loop for the whole sequence
  yoyo: true
});

tl.from('.balls', {
  opacity: 0,
  y: 30,
  duration: 0.3,
//   delay: 0,
  stagger: 0.2  // Each ball starts 0.2s after the previous one
});



