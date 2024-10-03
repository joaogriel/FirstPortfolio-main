window.sr = ScrollReveal({reset:true});

var slideUp = {
    distance: '150%',
    origin: 'bottom',
    opacity: null
};

var rotation = {
    rotate:{x:0,y:80,z:0}
}

var spotlight = {
    distance: '0px',
    opacity: 0.8
}

var time = {duration:1500}

sr.reveal('.area-1',spotlight,time)

sr.reveal('.area-2',rotation,time)

sr.reveal('.area-3',rotation,time)

sr.reveal('.area-4',time)