const src = [
  "resources/spartan.svg",
  "resources/castle.svg",
  "resources/da-vinci.svg",
  "resources/airplane.svg",
];

const dates = [
  "-3300 | 476",
  "476 | 1492",
  "1492 | 1792",
  "1792 | AJD",
]

ScrollTrigger.create({
  //scrollTrigger will be triggered when we hit sections
  trigger: ".sections",
  //pin tooltip div with scrollTrigger
  pin: '.tooltip',
  //trigger scroller - pinned tooltip will be affected by scroll start and end point
  start: "top 40%",
  end: "bottom 55%",
  // markers: true
})

const sections = document.querySelectorAll(".section");

sections.forEach((section, index) => {
  // console.log(index)
  ScrollTrigger.create({
    trigger: section,
    start: "top center",
    end: "bottom center",
    // markers: true,
    onEnter: () => {
      gsap.set(".tooltip-img", {
        attr: { src: src[index] }
      })
      gsap.set(".tooltip p", {
        innerText: dates[index]
      })
    },
    onEnterBack: () => {
      gsap.set(".tooltip-img", {
        attr: { src: src[index] }
      })
      gsap.set(".tooltip p", {
        innerText: dates[index]
      })
    }
  })
})