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

  
  
