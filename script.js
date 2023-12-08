gsap.to('.page2 img',{
  width:'100%',
  duration:1,
  scrollTrigger:{
    trigger:'.page2',
    scroller:'body',
    markers:true,
    start:'top 0%',
    scrub:2,
    end:'top -100%',
    pin:true
  }
})

gsap.to('.page4 h1',{
  transform:"translateX(-110%)",
  scrollTrigger:{
    trigger:'.page4',
    scroller:'body',
    scrub:2,
    markers:true,
    pin:true,
    start:'top 0%',
    end:'top -100%'
  }
})