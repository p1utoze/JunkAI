const curry = f => (...args) =>
args.length >= f.length ? f(...args) : curry(f.bind(f, ...args));

const compose = (f, g) => x => f(g(x));
const composeN = (...fns) => (...args) =>
fns.reverse().reduce((x, f) => f.apply(f, [].concat(x)), args);

// FOR CREATING A NAV ICON HIGHLIGHT IF SCROLLED

// let section = document.querySelectorAll('section');
// let menu = document.querySelectorAll('header nav a');
// window.onscroll = () => {
//   section.forEach(i => {
//     let top = window.scrollY;
//     let offset = i.offsetTop - 150;
//     let height = i.offsetHeight;
//     let id = i.getAttribute('id');
//     if (top >= offset && top < offset + height) {
//       menu.forEach(link => {
//         link.classList.remove('active');
//         document.querySelector('header nav a[href*=' + id + ']')
//           .classList.add('active');
//       });
//     }
//   });
// };

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 60;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
    /**
   * Back to top button
   */

  window.addEventListener("scroll", reveal);