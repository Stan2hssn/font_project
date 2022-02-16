window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".logo",
        start: "center center",
        end: "300px center",
        scrub: true,
        markers: false
    }
});
tl.to(".L", {
    transform: "matrix(1, 0, 0, 1, 0, 0)", transform: "scale(1)", ease:
    Power0.linear, duration: 1
})

////////////////////////////////// SEPARATOR //////////////////////////////////

let tlSecond = gsap.timeline({
    scrollTrigger: {
        trigger: ".logo",
        start: "30vh center",
        end: "400vh center",
        scrub: true,
        markers: false
    }
});

tlSecond.to(".U", {
    transform: "matrix(1, 0, 0, 1, 0, 0)", transform: "scale(1)", ease:
    Power0.linear, duration: 1
})

////////////////////////////////// SEPARATOR //////////////////////////////////

let tlThird = gsap.timeline({
    scrollTrigger: {
        trigger: ".logo",
        start: "300vh center",
        end: "500vh center",
        scrub: true,
        markers: false
    }
});

tlThird.to(".O", {
    transform: "matrix(1, 0, 0, 1, 0, 0)", transform: "scale(1)", ease:
    Power0.linear, duration: 1
})

////////////////////////////////// SEPARATOR //////////////////////////////////

let tlFourth = gsap.timeline({
    scrollTrigger: {
        trigger: ".logo",
        start: "400vh center",
        end: "600vh center",
        scrub: true,
        markers: false
    }
});

tlFourth.to(".M", {
    transform: "matrix(1, 0, 0, 1, 0, 0)", transform: "scale(1)", ease:
    Power0.linear, duration: 2
})

////////////////////////////////// SEPARATOR //////////////////////////////////

let tlFifth = gsap.timeline({
    scrollTrigger: {
        trigger: ".logo",
        start: "500vh center",
        end: "650vh center",
        scrub: true,
        markers: false
    }
});

tlFifth.to(".U-2", {
    transform: "matrix(1, 0, 0, 1, 0, 0)", transform: "scale(1)", ease:
    Power0.linear, duration: 3
})

////////////////////////////////// SEPARATOR //////////////////////////////////

let logo = gsap.timeline({
    scrollTrigger: {
        trigger: ".logo",
        start: "650vh center",
        end: "900vh center",
        scrub: true,
        markers: false
    }
});

logo.to(".logo", {
    top: "45px", left: "-67px", transform: "scale(0.5)", ease:
    Circ.easeInOut, duration: 1
})

////////////////////////////////// SEPARATOR //////////////////////////////////

let preHeader = gsap.timeline({
    scrollTrigger: {
        trigger: ".logo",
        start: "900vh center",
        end: "900vh center",
        scrub: true,
        markers: false
    }
});

preHeader.to("a", {
    display: "flex", duration: 1
})

////////////////////////////////// SEPARATOR //////////////////////////////////

let header = gsap.timeline({
    scrollTrigger: {
        trigger: ".logo",
        start: "900vh center",
        end: "901vh center",
        scrub: true,
        markers: false
    }
});


header.to(".intro", {
    display: "flex",
    position: "fixed",
    height: "max-content",
    flexFlow: "row nowrap",
    justifyContent: "space-between",
    alignItems: "center",
    width: "92vw",
    padding: "60px 16px"
})

header.to(".logo", {
    transform: "scale(1)", width: `${331.195*0.5}`, display: "flex", position: "relative", top: "0", left: "0"
})

header.to("a", {
   opacity: 1, duration: 3
})



////////////////////////////////// SEPARATOR //////////////////////////////////
