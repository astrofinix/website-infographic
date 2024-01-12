// document.addEventListener("scroll", () => {
//   b = document.body;
// //   console.log(window.scrollY, b.scrollHeight, window.innerHeight);
//   percent = (window.scrollY) / (b.scrollHeight - window.innerHeight);
//   console.log(">>>>>>" + percent)
//   text = document.getElementById("text3");
//   numWords = text.children.length;
//   for (i = 0; i < numWords; i++) {
//     element = text.children[i];
//     element.style.opacity = i < Math.ceil(percent * numWords) ? 1 : 0.25;
//   }
//   // console.log(percent)
// });
// // Get the element with the specified class
// var targetElement = document.querySelector(".ch3-final");

// // Check if the element is found
// if (targetElement) {
//   // Calculate the scroll progress
//   window.addEventListener("scroll", function () {
//     var windowHeight = window.innerHeight;
//     var scrollY = window.scrollY || window.pageYOffset;
//     var elementTop = targetElement.getBoundingClientRect().top + scrollY;
//     var elementHeight = targetElement.offsetHeight;

//     var visibleArea = Math.max(
//       0,
//       Math.min(elementHeight, windowHeight + scrollY - elementTop)
//     );
//     var scrollProgress = (visibleArea / elementHeight) * 100;

//     text = document.getElementById("text3");
//     numWords = text.children.length;
//     for (i = 0; i < numWords; i++) {
//       element = text.children[i];
//       element.style.opacity = i < Math.ceil(scrollProgress * numWords) ? 1 : 0.25;
//     }
//     console.log("Scroll Progress:", scrollProgress);
//   });
// } else {
//   console.error("Element not found");
// }
// gsap.registerPlugin(ScrollTrigger);
// let typeSplit = new SplitType("[animate]", {
//     types: "lines, words, chars",
//     tagName: "span"
//   });
  
//   gsap.registerPlugin(ScrollTrigger);
  
//   gsap.from("[animate] .word", {
//     opacity: 0.2,
//     duration: 0.4,
//     ease: "power3.out",
//     stagger: 0.03,
  
//     scrollTrigger: {
//       trigger: "[animate]",
//       start: "top bottom",
//       scrub: true
//     }
//   });

// Nope... Unless it isn't supported...
import gsap from 'https://cdn.skypack.dev/gsap@3.12.0';
import { ScrollTrigger } from 'https://cdn.skypack.dev/gsap@3.12.0/ScrollTrigger';
if (!CSS.supports('animation-timeline: scroll()') && matchMedia('(prefers-reduced-motion: no-preference)')) {
  gsap.registerPlugin(ScrollTrigger);
  const scrub = 0.5;
  const trigger = 'main';
  gsap.set('p.finexc > span.finexc', {
    '--progress': 0,
    backgroundPositionX: 'calc(-200vmax + (var(--progress) * 200vmax)), calc(-200vmax + (var(--progress) * 200vmax)), 0',
    color: 'transparent'
  });
  gsap.to('p.finexc > span.finexc', {
    '--progress': 1,
    scrollTrigger: {
      trigger,
      scrub,
      start: 'top top',
      end: 'top top-=75%'
    }
  });
  gsap.to('p.finexc > span.finexc', {
    color: 'white',
    scrollTrigger: {
      trigger,
      scrub,
      start: 'top top-=75%',
      end: 'bottom bottom'
    }
  });
}