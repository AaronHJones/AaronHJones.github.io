gsap.registerPlugin(ScrollTrigger);
let tl = gsap.timeline();

tl.from('.content', {
    y: '-30%',
    opacity: 0,
    duration: 2,
    ease: Power4.easeOut
})
tl.from('.stagger1', {
    opacity: 0,
    y: -50,
    stagger: .1,
    ease: Power4.easeOut,
    duration: 1
}, "-=1.5")
tl.from('.splash-design', {
    opacity: 0, y: 50, ease: Power4.easeOut, duration: 2
}, "-=.8")

gsap.from(".square-animate", {
    stagger: .2,
    scale: 0.5,
    duration: 1,
    ease: Back.easeOut.config(1.7)
})

gsap.from(".transition2", {
    scrollTrigger: {
        trigger: '.skills',
        start: "top bottom",
        toggleActions: "restart none restart none"
    },
    y: 50,
    opacity: 0,
    duration: 1.2,
    stagger: .3
})

gsap.from(".transition3", {
    scrollTrigger: {
        trigger: ".portfolio",
        start: "top center",
        toggleActions: "restart none restart none"
    },
    y: 50,
    opacity: 0,
    duration: 1.2,
    stagger: .6
});


$('.nav-link').on('click', function() {
    $('.active-link').removeClass('active-link');
    $(this).addClass('active-link');
});