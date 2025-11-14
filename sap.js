gsap.from(".nav *",{
    duration:3,
    delay:2,
    opacity:0,
    x:40,
    y:30,
    stagger:0.5,
    repeat:-1,
})
gsap.from(".logo *",{
    duration:2,
    delay:1,
    opacity:0,
    x:40,
    y:30,
    stagger:0.5,
    repeat:-1,
})
gsap.from(".logos *",{
    duration:3,
    delay:2,
    opacity:0,
    x:40,
    y:30,
    stagger:0.5,
    repeat:-1,
})
gsap.from(".pic *",{
    duration:3,
    delay:2,
    opacity:0,
    x:40,
    y:30,
    stagger:0.5,
})  
gsap.from(".parent",{
    duration:3,
    delay:2,
    x:40,
    opacity:0,
    scale:0.5,
    scrollTrigger:".box",   
})

gsap.from(".box",{
    x:400,
    duration:2,
    delay:1,
    opacity:0,
    scale:0.5,
    scrollTrigger:".box",
    
})