var tl = new TimelineMax();
var t2 = new TimelineMax();
var t3 = new TimelineMax();
var t4 = new TimelineMax();
var t5 = new TimelineMax();
var t6 = new TimelineMax();
// var TweenMax=new TweenMax();
const controller = new ScrollMagic.Controller();

tl.from("#first-2", 0.5, { x: 200, opacity: 0 });

t2.from("#second-1", 1, { x: -100, opacity: 0 }, "=-1");

t3.from("#three-1", 0.5, { x: 200, opacity: 0 });
t4.from("#four-2", 1, { x: -100, opacity: 0 }, "=-1");
t5.from("#fifth-2", 0.5, { x: 200, opacity: 0 });
// t5.from(".p-c", 0.5, { x: -200, opacity: 0 });
TweenMax.from(".p-c", 1, {
  delay: 0.5,
  opacity: 0,

  x: -100,
  ease: Expo.easeInOut
});
TweenMax.from(".img-con", 1, {
  delay: 0.7,
  opacity: 0,

  x: 200,
  ease: Expo.easeInOut
});

const scene = new ScrollMagic.Scene({
  triggerElement: ".conatainer",
  triggerHook: "onLeave",
  duration: "100%"
})

  .setTween(tl)
  .addTo(controller);

const scene2 = new ScrollMagic.Scene({
  triggerElement: "#first",
  triggerHook: "onLeave",
  duration: "80%"
})

  .setTween(t2)
  .addTo(controller);

const scene3 = new ScrollMagic.Scene({
  triggerElement: "#second",
  triggerHook: "onLeave",
  duration: "80%"
})

  .setTween(t3)
  .addTo(controller);
const scene4 = new ScrollMagic.Scene({
  triggerElement: "#three",
  triggerHook: "onLeave",
  duration: "80%"
})

  .setTween(t4)
  .addTo(controller);

const scene5 = new ScrollMagic.Scene({
  triggerElement: "#four",
  triggerHook: "onLeave",
  duration: "80%"
})

  .setTween(t5)
  .addTo(controller);
