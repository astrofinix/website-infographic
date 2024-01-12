gsap.registerPlugin(ScrollTrigger);
// BLOCK QUESTION

 let question_bg = document.querySelector(".block_question");
 let text_1 = document.querySelector(".text_1");
 let text_2 = document.querySelector(".text_2");
 let text_3 = document.querySelector(".text_3");
 let text_4 = document.querySelector(".text_4");

 let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".block_question",
      start: "center center",
      end: "+=100%",
      scrub: true,
      pin: true,
      opacity: 1,
      zIndex:100,
      pinSpacing: false,
    },
  });
 
  tl2.to(text_1, {
    display: "block",
  });
  
  tl2.to(question_bg, {
    backgroundColor: "#d6f0ff",
  }).to(text_1, {
    opacity: 0,
  }).to(text_2, {
    opacity: 1,
    scale: 1.1,
    display: "block",
  });

  tl2.to(question_bg, {
    backgroundColor: "#d6f0ff",
  }).to(text_2, {
    scale: 1,
    display: "none",
    opacity:0,
  }).to(text_3, {
    opacity: 1,
    scale: 1.1,
    display: "block",
  });

  tl2.to(question_bg, {
    backgroundColor: "#ddf6e6",
  }).to(text_3, {
    scale: 1,
    display: "none",
    opacity:0,
  }).to(text_4, {
    opacity: 1,
    scale: 1.5,
    display: "block",
  });

  let uline = document.querySelector(".uline");
  let lline = document.querySelector(".lline");
  let ch1 = document.querySelector(".ch1");
  let ch1desc = document.querySelector(".ch1-desc");

  let tl3 = gsap.timeline({
     scrollTrigger: {
       trigger: ".ch-intro",
       start: "center center",
       end: "+=150%",
       scrub: true,
       pin: true,
       opacity: 1,
       zIndex:100,
       pinSpacing: false,
     },
   });
  
   tl3.to(uline, {
    opacity: 1,
    y: +10,
  }).to(lline, {
    opacity: 1,
    y: -15,
  }).to(ch1, {
    opacity: 1,
    y: -15,
  }).to(ch1desc, {
    opacity: 1,
    y: -15,
  });

  let uline2 = document.querySelector(".uline2");
  let lline2 = document.querySelector(".lline2");
  let ch2 = document.querySelector(".ch2");
  let ch2desc = document.querySelector(".ch2-desc");

  let tl4 = gsap.timeline({
     scrollTrigger: {
       trigger: ".ch-intro2",
       start: "center center",
       end: "+=150%",
       scrub: true,
       pin: true,
       opacity: 1,
       zIndex:100,
       pinSpacing: false,
     },
   });
  
   tl4.to(uline2, {
    opacity: 1,
    y: +10,
  }).to(lline2, {
    opacity: 1,
    y: -15,
  }).to(ch2, {
    opacity: 1,
    y: -15,
  }).to(ch2desc, {
    opacity: 1,
    y: -15,
  });
  let uline3 = document.querySelector(".uline3");
  let lline3 = document.querySelector(".lline3");
  let ch3 = document.querySelector(".ch3");
  let ch3desc = document.querySelector(".ch3-desc");

  let tl5 = gsap.timeline({
     scrollTrigger: {
       trigger: ".ch-intro3",
       start: "center center",
       end: "+=150%",
       scrub: true,
       pin: true,
       opacity: 1,
       zIndex:100,
       pinSpacing: false,
     },
   });
  
   tl5.to(uline3, {
    opacity: 1,
    y: +10,
  }).to(lline3, {
    opacity: 1,
    y: -15,
  }).to(ch3, {
    opacity: 1,
    y: -15,
  }).to(ch3desc, {
    opacity: 1,
    y: -15,
  });


  let content_container = document.querySelector(".content-container");
  let dynamic_intro = document.querySelector(".dynamic-intro");
  
    let tl6 = gsap.timeline({
       scrollTrigger: {
         trigger: ".image-container",
         start: "center center",
         end: "+=200%",
         scrub: true,
         pin: false,
         opacity: 1,
         zIndex:100,
         pinSpacing: false,
       },
     });
  tl6.add('start')

  .to(content_container, {
    y: "+15vh",
    delay: 0,
  }, 'start')
  .to(dynamic_intro, {
    y: "-15vh",
    delay: 0,
  }, 'start');
//   
  
//    tl5.to(uline3, {
//     opacity: 1,
//     y: +10,
//   }).to(lline3, {
//     opacity: 1,
//     y: -15,
//   }).to(ch3, {
//     opacity: 1,
//     y: -15,
//   }).to(ch3desc, {
//     opacity: 1,
//     y: -15,
//   });

let person1 = document.querySelector(".person1");
let person2 = document.querySelector(".person2");
let falling = document.querySelector(".falling");

  let tl7 = gsap.timeline({
     scrollTrigger: {
       trigger: ".falling",
       start: "top center",
       end: "+=150%",
       scrub: true,
       pin: false,
       opacity: 1,
       zIndex:100,
       pinSpacing: false,
     },
   });
tl7.add('start')
.to(person1, {
  y: "+45vh",
  delay: 0,
  rotation: 30,
}, 'start')
.to(person2, {
  y: "+45vh",
  rotation: 30,
  delay: 0,
}, 'start');
tl7.add('end')
.to(person1, {
  y: "+65vh",
  delay: 0,
  rotation: 30,
  opacity: 0,
}, 'end')
.to(person2, {
  y: "+65vh",
  rotation: 30,
  delay: 0,
  opacity: 0,
}, 'end');

let circle1 = document.querySelector(".circle1");
let img1 = document.querySelector(".img1");

  let tl8 = gsap.timeline({
     scrollTrigger: {
       trigger: ".circle1",
       start: "top center",
       end: "+=200%",
       scrub: true,
       pin: false,
       opacity: 1,
       zIndex:100,
       pinSpacing: false,
     },
   });
tl8.add('start1')

.to(circle1, {
  scale: 0.4,
  delay: 0,
}, 'start1')
.to(img1, {
  rotation: -10,
  delay: 0,
}, 'start1');
let scroller1 = document.querySelector(".scroller1");
let circle_scroll_left1 = document.querySelector(".circle_scroll_left1");
let arrow1 = document.querySelector(".arrow1");
let arrow2 = document.querySelector(".arrow2");
let arrow3 = document.querySelector(".arrow3");
let arrow4 = document.querySelector(".arrow4");
let scroll_img1 = document.querySelector(".scroll_img1");
let scroll_img2 = document.querySelector(".scroll_img2");
let scroll_img3 = document.querySelector(".scroll_img3");
let scroll_img4 = document.querySelector(".scroll_img4");

let tl22 = gsap.timeline({
  scrollTrigger: {
    trigger: ".scroller1",
    start: "center center",
    end: "+=100%",
    scrub: true,
    pin: true,
    opacity: 1,
    zIndex: 1000,
    pinSpacing: false,
  },
});
tl22.to(arrow1, {
  display: "block",
  opacity:  1,
});


tl22.add('stage2')

.to(scroll_img1, {
  y: "-100vh",
}, 'stage2')
.to(scroll_img2, {
  y: "-75vh",
}, 'stage2')
.to(circle_scroll_left1, {
  backgroundColor: "rgb(253,190,15)",
}, 'stage2')
.to(scroller1, {
  backgroundColor: "#fff5e3",
}, 'stage2')
.to(arrow2, {
  display: "block",
  opacity:  1,
}, 'stage2');

tl22.add('stage3')

.to(scroll_img2, {
  y: "-200vh",
}, 'stage3')
.to(scroll_img3, {
  y: "-75vh",
}, 'stage3')
.to(circle_scroll_left1, {
  backgroundColor: "#004542",
}, 'stage3')
.to(scroller1, {
  backgroundColor: "#ddf6e6",
}, 'stage3')
.to(arrow3, {
  display: "block",
  opacity:  1,
}, 'stage3');

tl22.add('stage4')

.to(scroll_img3, {
  y: "-200vh",
}, 'stage4')
.to(scroll_img4, {
  y: "-75vh",
}, 'stage4')
.to(circle_scroll_left1, {
  backgroundColor: "#5c47a0",
}, 'stage4')
.to(scroller1, {
  backgroundColor: "#deddff",
}, 'stage4')
.to(arrow4, {
  display: "block",
  opacity:  1,
}, 'stage4');

// const tl12 = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".cards2",
//     pin: true,
//     start: "top 10%",
//     end: "bottom+=1000 bottom",
//     scrub: true
//   }
// });


// let question_bg1 = document.querySelector(".block_question1");
// let text_1_2 = document.querySelector(".text_1_2");
// let text_2_2 = document.querySelector(".text_2_2");


// let tl13 = gsap.timeline({
//    scrollTrigger: {
//      trigger: ".block_question1",
//      start: "center center",
//      end: "+=100%",
//      scrub: true,
//      pin: true,
//      opacity: 1,
//      zIndex:100,
//      pinSpacing: false,
//    },
//  });

//  tl2.to(text_1_2, {
//    display: "block",
//  });
 
//  tl2.to(question_bg1, {
//    backgroundColor: "#d6f0ff",
//  }).to(text_1_2, {
//    opacity: 0,
//  }).to(text_2_2, {
//    opacity: 1,
//    scale: 1.1,
//    display: "block",
//  });

//  tl2.to(question_bg1, {
//    backgroundColor: "#d6f0ff",
//  }).to(text_2_2, {
//    scale: 1,
//    display: "none",
//    opacity:0,
//  });
// tl12.to(".third2", {
//   y: "90vh",
//   delay: -0.2
// }).to(".second2", {
//   y: "85vh",
//   delay: -0.2
// }).to(".cards2 .second2, .cards2 .third2", {
//   opacity: 0,
//   duration: 1,
//   delay: -0.2,
//   onComplete: () => {
//     document.querySelector('.cards2').style.display = 'none';
//   }
// });
// (function($) {

//   "use strict"

//   $(function() {
//       function scrollBanner() {
//           $(document).scroll(function() {
//               var scrollPos = $(this).scrollTop();
//               $('#banner-text').css({
//                   'top': (scrollPos / 2) + 'px',
//               });
//               $('#banner').css({
//                   'background-position': 'center ' + (-scrollPos / 3) + 'px'
//               });
//           });
//       }
//       scrollBanner();

//   });

// })(jQuery);
// let tl14 = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".carousel",
//     start: "center center",
//     end: "+=300%",
//     scrub: true,
//     pin: true,
//     opacity: 1,
//     zIndex:100,
//     pinSpacing: false,
//   },
// });
// This was built using aat.js: https://github.com/TahaSh/aat

// const { ScrollObserver, valueAtPercentage } = aat

// const cardsContainer = document.querySelector('.cards')
// const cards = document.querySelectorAll('.card')
// cardsContainer.style.setProperty('--cards-count', cards.length)
// cardsContainer.style.setProperty(
//   '--card-height',
//   `${cards[0].clientHeight}px`
// )
// Array.from(cards).forEach((card, index) => {
//   const offsetTop = 20 + index * 20
//   card.style.paddingTop = `${offsetTop}px`
//   if (index === cards.length - 1) {
//     return
//   }
//   const toScale = 1 - (cards.length - 1 - index) * 0.1
//   const nextCard = cards[index + 1]
//   const cardInner = card.querySelector('.card__inner')
//   ScrollObserver.Element(nextCard, {
//     offsetTop,
//     offsetBottom: window.innerHeight - card.clientHeight
//   }).onScroll(({ percentageY }) => {
//     cardInner.style.scale = valueAtPercentage({
//       from: 1,
//       to: toScale,
//       percentage: percentageY
//     })
//     cardInner.style.filter = `brightness(${valueAtPercentage({
//       from: 1,
//       to: 0.6,
//       percentage: percentageY
//     })})`
//   })
// })

var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 100 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};

let hand = document.querySelector(".overlay-image");
let liked = document.querySelector(".liked");

  let tl9 = gsap.timeline({
     scrollTrigger: {
       trigger: ".dialogue",
       start: "center center",
       end: "+=25%",
       scrub: true,
       pin: true,
       opacity: 1,
       zIndex:100,
       pinSpacing: false,
     },
   });
tl9.add('start')

.to(hand, {
  x: "+130vw",
  delay: 0,
}, 'start')
.to(liked, {
  x: "+72vw",
  delay: 0,
}, 'start');

var vwWidth = window.innerWidth;

var controller = new ScrollMagic.Controller();

//scene 1
//for parallax scroll
var parallaxScrolling = new TimelineMax()
  .to(".div1", 1, {y: 100, ease: Power1.easeOut})

new ScrollMagic.Scene({
  triggerElement: ".div1",
  duration: "100%",
  offset: 0,
  triggerHook: 0
})
.setTween(parallaxScrolling)
.addTo(controller)

//scene 2 with horizontal scroll
//for horizontal scrolling
var horizontalSlide = new TimelineMax()
  .to(".div2", 0.2,   {x: 0, ease: Power1.easeOut}, )
  .to(".div2", 1,   {x: -vwWidth, ease: Power1.easeOut}, )	
  .to(".div2", 0.2,   {x: -vwWidth, ease: Power1.easeOut}, )
  .to(".div2", 1,   {x: -2*vwWidth, ease: Power1.easeOut}, )
  .to(".div2", 0.2,   {x: -2*vwWidth, ease: Power1.easeOut}, )

new ScrollMagic.Scene({
  triggerElement: ".div2",
  duration: "160%",
  offset: 0,
  triggerHook: -0.02
})
.setPin('.div2')
.setTween(horizontalSlide)
.addTo(controller)

let question_bg2 = document.querySelector(".block_question2");
let text_1_2 = document.querySelector(".text_1_2");
let text_2_2 = document.querySelector(".text_2_2");
let text_3_2 = document.querySelector(".text_3_2");
let text_4_2 = document.querySelector(".text_4_2");

let tl10 = gsap.timeline({
   scrollTrigger: {
     trigger: ".block_question2",
     start: "center center",
     end: "+=100%",
     scrub: true,
     pin: true,
     opacity: 1,
     zIndex:100,
     pinSpacing: false,
   },
 });

 tl10.to(text_1_2, {
   display: "block",
 });
 
 tl10.to(question_bg2, {
   backgroundColor: "#d4809b",
 }).to(text_1_2, {
   opacity: 0,
 }).to(text_2_2, {
   opacity: 1,
   scale: 1.1,
   display: "block",
 });

 tl10.to(question_bg2, {
   backgroundColor: "#d4809b",
 }).to(text_2_2, {
   scale: 1,
   display: "none",
   opacity:0,
 }).to(text_3_2, {
   opacity: 1,
   scale: 1.1,
   display: "block",
 });

 tl10.to(question_bg2, {
   backgroundColor: "#d4809b",
 }).to(text_3_2, {
   scale: 1,
   display: "none",
   opacity:0,
 }).to(text_4_2, {
   opacity: 1,
   scale: 1.5,
   display: "block",
 });

 let question_bg3 = document.querySelector(".block_question3");
let text_1_3 = document.querySelector(".text_1_3");
let text_2_3 = document.querySelector(".text_2_3");
let text_3_3 = document.querySelector(".text_3_3");
let text_4_3 = document.querySelector(".text_4_3");
let text_5_3 = document.querySelector(".text_5_3");

let tl11 = gsap.timeline({
   scrollTrigger: {
     trigger: ".block_question3",
     start: "center center",
     end: "+=100%",
     scrub: true,
     pin: true,
     opacity: 1,
     zIndex:100,
     pinSpacing: false,
   },
 });

 tl11.to(text_1_3, {
   display: "block",
 });
 
 tl11.to(question_bg3, {
   backgroundColor: "#ddf6e6",
 }).to(text_1_3, {
   opacity: 0,
 }).to(text_2_3, {
   opacity: 1,
   scale: 1.1,
   display: "block",
 });

 tl11.to(question_bg3, {
   backgroundColor: "#ddf6e6",
 }).to(text_2_3, {
   scale: 1,
   display: "none",
   opacity:0,
 }).to(text_3_3, {
   opacity: 1,
   scale: 1.1,
   display: "block",
 });

 tl11.to(question_bg3, {
   backgroundColor: "#ddf6e6",
 }).to(text_3_3, {
   scale: 1,
   display: "none",
   opacity:0,
 }).to(text_4_3, {
   opacity: 1,
   scale: 0.8,
   display: "block",
 });

 tl11.to(question_bg3, {
  backgroundColor: "#ddf6e6",
}).to(text_4_3, {
  scale: 1,
  display: "none",
  opacity:0,
}).to(text_5_3, {
  opacity: 1,
  scale: 0.8,
  display: "block",
});