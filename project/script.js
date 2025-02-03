 
function page1Animation(){
    var tl = gsap.timeline()
    

    tl.from("nav h1, nav h4, nav button ",{
       y:-40,
       duration:0.8,
       delay:1,
       opacity:0,
       stagger:0.3
    })
   

    tl.from(".center .part1 h1",{
       x:-300,
       duration:1,
       opacity:0,
       stagger:0.4
    })
   
    tl.from(".center .part1 p, .center .part1 button",{
       x:-300,
       duration:1,
       opacity:0,
       stagger:0.4,
    })
   
    tl.from(".center .part3",{
       x:300,
       duration:0.6,
       opacity:0
    },"-=0.8")
   
    tl.from(".section1bottom img",{
       opacity:0,
       y:30,
       duration:0.6,
       stagger:0.3
    })    
}

page1Animation()

function page2Animation(){
    var tl2 = gsap.timeline({
        scrollTrigger:{
            trigger:".section2",
            scroller:"body",
            // markers:true,
            start:"top 50%",
            end: "top 0",
            scrub:2
        }
    })
    
    tl2.from(".service ",{
        y:30,
        opacity:0,
        duration:0.8, 
    })
    
    tl2.from(".elem.left1",{
        x:-300,
        opacity:0,
        duration:0.6
    },"sukdeb")
    
    tl2.from(".elem.right1",{
        x:300,
        opacity:0,
        duration:0.6
    },"sukdeb")
    
    tl2.from(".elem.left2",{
        x:-300,
        opacity:0,
        duration:0.6
    },"rajkumar")
    
    tl2.from(".elem.right2",{
        x:300,
        opacity:0,
        duration:0.6
    },"rajkumar")

}

page2Animation()


var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:".section3",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end: "top 0",
        scrub:2
    }
})

tl3.from(".map ",{
    y:70,
    opacity:0,
    duration:0.8
},"joydip")

tl3.from(".map-img ",{
    y:-70,
    opacity:0,
    duration:0.8
},"joydip")



var tl4 = gsap.timeline({
    scrollTrigger:{
        trigger:".section4",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end: "top 0",
        scrub:2
    }
})

tl4.from(".call ",{
    x:300,
    opacity:0,
    duration:0.6
},"ayan")

tl4.from(".call1 ",{
    x:-300,
    opacity:0,
    duration:0.6
},"ayan")

