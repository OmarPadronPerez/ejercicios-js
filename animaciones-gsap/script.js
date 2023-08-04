console.log("en js")

const ancho_pantalla=document.getElementById("principal").clientWidth;

gsap.to(".carro", {
    x:  (ancho_pantalla)-(document.getElementById("carro").clientWidth+10),
    duration: 2,

});



gsap.to(".box", {
    rotation: 27,
    x: 200,
    duration: 1
});

gsap.to("#cuadro1", {//se mueve a 
    rotation: 360,
    x: 200,
    duration: 1,
});

gsap.from("#cuadro2", {//se mueve desde, hasta 
    rotation: 360,
    x: 250,
    duration: 1
});

gsap.fromTo("#cuadro3",//va desde a 
    { x: -100 },
    {
        rotation: 360,
        x: 100,
        duration: 1
    }
);
gsap.to("#cuadro4", {//se mueve a 
    rotation: 360,
    x: 200,
    duration: 1,
    repeat: 10,
    yoyo: true
});

const tl = gsap.timeline({});
tl.from("#regresar1", {//se mueve desde, hasta 
    rotation: 360,
    x: -700,
    y:700,
    duration: 0.5
});
tl.from("#regresar2", {//se mueve desde, hasta 
    rotation: 360,
    x: -700,
    y:700,
    duration: 0.5
});
tl.from("#regresar3", {//se mueve desde, hasta 
    rotation: 360,
    x: -700,
    y:700,
    duration: 0.5
});
tl.from("#regresar4", {//se mueve desde, hasta 
    rotation: 360,
    x: -700, 
    y:700,
    duration: 0.5
});


