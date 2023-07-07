'use strict';

//Selecting Elements
const message = document.createElement('div');
const header = document.querySelector('.header');
const nav = document.querySelector('.nav');
const btnScrollTo = document.querySelector('.btn--scroll-to');

const allSections = document.querySelectorAll('.section');
const section1 = document.getElementById('section--1');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const tabs = document.querySelectorAll('.operations__tab');
const tabContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

/////////////////////////////
// Sticky Navigation: Intersection Observer API
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const navHeight = nav.getBoundingClientRect().height;
// console.log(navHeight);

const obeserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  //add a +/- margin that the observer element height will increase/ decrease
  rootMargin: `-${navHeight}px`, //unit can be only "px", and be careful with "-" or "+"
});
obeserver.observe(header);

/////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => {
  btn.addEventListener('click', openModal);
});

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//////////////////////////////////////////////
//Cookie message
message.classList.add('cookie-message');
message.innerHTML = `We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>`;
header.append(message);
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
    //old way:
    // message.parentElement.removeChild(message);
  });
message.style.backgroundColor = '#37383d';
message.style.width = '120%';
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

//////////////////////////////////////////////
//Button Scrolling

btnScrollTo.addEventListener('click', function (e) {
  section1.scrollIntoView({ behavior: 'smooth' });
});

//////////////////////////////////////////////
//Reveal section

//Reveal Section function
const revealSection = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const secObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(section => {
  section.classList.add('section--hidden');
  secObserver.observe(section);
});
//////////////////////////////////////////////
//Page Navigation

// querySelectorAll returns a NodeList, NodeList is not an Array , it is possible to iterate over it with forEach() . It can also be converted to a real Array using Array.
// document.querySelectorAll('.nav__link').forEach(el =>
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   })
// );

//Use event delegation for simplify(putting the eventListener on a common parent of all the elements that we are interested in)

//1. add event listener to common parent element
//2. Determine what element originated the event by using e.target
document.querySelector('.nav__links').addEventListener('click', function (e) {
  //Always use preventDefault
  e.preventDefault();

  //* Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//////////////////////////////////////////////
//Tabbed component

// tabs.forEach(t =>
//   t.addEventListener('click', () => {
//     console.log('tab');
//   })
// );
tabContainer.addEventListener('click', function (e) {
  //Important to use closest
  const clicked = e.target.closest('.operations__tab');

  //Guard clause
  if (!clicked) return;

  //Remove active class
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  //Active tab
  clicked.classList.add('operations__tab--active');

  //Active Content Area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//////////////////////////////////////////////
//Menu fading animation

const handleHover = function (e) {
  //Matching
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

//mouseenter & mouseleave don't bubble up
//mouseover & mouseout does bubble up

//Passing "argument" into handler(usually a handler only have 1 argument)
nav.addEventListener('mouseover', handleHover.bind(0.5)); //pass an array or object for multiple values
nav.addEventListener('mouseout', handleHover.bind(1));

//Another way to do it:
/* const handleHover = function (e, opacity) {
  //Matching
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = opacity;
    });
    logo.style.opacity = opacity;
  }
}; */
/* nav.addEventListener('mouseover', function (e) {
  handleHover(e, 0.5);
  //Matching
  // if (e.target.classList.contains('nav__link')) {
  //   const link = e.target;
  //   const siblings = link.closest('.nav').querySelectorAll('.nav__link');
  //   const logo = link.closest('.nav').querySelector('img');
  //   siblings.forEach(el => {
  //     if (el !== link) el.style.opacity = 0.5;
  //   });
  //   logo.style.opacity = 0.5;
  // }
}); */

/* nav.addEventListener('mouseout', function (e) {
  handleHover(e, 1);
  // if (e.target.classList.contains('nav__link')) {
  //   const link = e.target;
  //   const siblings = link.closest('.nav').querySelectorAll('.nav__link');
  //   const logo = link.closest('.nav').querySelector('img');
  //   siblings.forEach(el => {
  //     if (el !== link) el.style.opacity = 1;
  //   });
  //   logo.style.opacity = 1;
  // }
}); */

////////////////////////////////////////////////
/////----Selecting, Creating, and Deleting Elements-----/////

/* //Selecting Elements
//Wrong:
// console.log(document);
//Right:
console.log(document.documentElement); //Entire HTML
console.log(document.head);
console.log(document.body);

console.log(document.querySelector('.header'));
const allSections = document.querySelectorAll('.section');
//Returns a NodeList
console.log(allSections);

document.getElementById('section--1');

//Return a HTML collection(live-collection)
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);
console.log(document.getElementsByClassName('btn')); */

//Creating and inserting elements
// * .insertAdjacentHTML

// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.textContent =
//   'We use cookies for improved functionality and analytics.';
// message.innerHTML = `We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>`;

// const header = document.querySelector('.header');

//DOM element can be only placed in one place
// header.prepend(message);
// header.append(message);

// Insert multiple copies for the same element
// header.prepend(message);
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

// Deleting elements

// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     message.remove();
//     //old way:
//     // message.parentElement.removeChild(message);
//   });

////////////////////////////////////////////////
/////----Style, Attributes and Classes-----/////

//Styles (inline-style)
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

/* //read style
//Only works for inline style that we set ourselves using style property
console.log(message.style.backgroundColor);

//Nothing will show here:
console.log(message.style.height);
console.log(message.style.color);

//Get the style we want
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height); */

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

/* 
//Work with CSS variables (custom properties)
document.documentElement.style.setProperty('--color-primary', 'orangered');

//Attributes
//img--src,alt, className, id...

//Read Attributes:
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src); //Absolute URL
console.log(logo.className);

//Non-standard property:
console.log(logo.designer); //(undefined)
console.log(logo.getAttribute('designer'));

//Set Attributes:
logo.alt = 'Beautiful minimalist logo';
logo.setAttribute('compamy', 'Bankist');

//Get Attributes (img, a...)
console.log(logo.src); //Absolute URL
console.log(logo.getAttribute('src')); //Relative URL

const link = document.querySelector('.nav__link--btn');
console.log(link.href); //Absolute URL
console.log(link.getAttribute('href')); //Relative URL

//Data Attributes
console.log(logo.dataset.versionNumber);

//Classes
logo.classList.add('m');
logo.classList.remove('m');
logo.classList.toggle('m');
logo.classList.contains('m');
logo.classList.replace('m', 'o');
//Don't use this method below:
logo.className = 'momo'; //only can put 1 class name in an element and overwrite the whole classes
 */

////////////////////////////////////////////////
/////----Implementing Smooth Scrolling-----/////

// const btnScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.getElementById('section--1');

// btnScrollTo.addEventListener('click', function (e) {
//   //get the coordinates（坐标） of the element that we want to scroll to (relative to the visiable viewpoint)
//   const s1Coords = section1.getBoundingClientRect();
// console.log(s1Coords);
// console.log(e.target.getBoundingClientRect());

//Get current value of how much we scrolled
// console.log('current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

//Read the height and width of the view point
// console.log(
//   'height/width of viewport',
//   document.documentElement.clientHeight,
//   document.documentElement.clientWidth
// );

//Scrolling
//1> Old way:
// window.scrollTo({
//   left: s1Coords.left + window.pageXOffset,
//   top: s1Coords.top + window.pageYOffset,
//   behavior: 'smooth',
// });

//2> Modern Way:
//   section1.scrollIntoView({ behavior: 'smooth' });
// });

////////////////////////////////////////////////
/////----Types of Events and Event Handlers-----/////
/* 
//1 way of handling events:
//addEventListener(why is better: 1> can add multiple event listeners on the same element; 2> easy to remove the event.)
// const h1 = document.querySelector('h1');

// h1.addEventListener('mouseenter', function (e) {
//   alert('addEventListener: Great! You are reading the heading :D');
// });

//--Remove the event listener
// Seperate the function and give a variable name to the function
// const alertH1 = function (e) {
//   alert('addEventListener: Great! You are reading the heading :D');
//   // h1.removeEventListener('mouseenter', alertH1);
// };
// h1.addEventListener('mouseenter', alertH1);

// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

//2 way of handling events:
//On - event property directly on the element(old - school: )
// h1.onmouseenter = function (e) {
//   alert('addEventListener: Great! You are reading the heading :D');
// };

//3 way of handling events:
//Using HTML Attributes(should not be used)
//Check index.html line 46
 */

////////////////////////////////////////////////
/////----Event Propagation in Practice-----/////
/* 
const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const randomColor = () =>
  `rgb(${randomNumber(0, 255)}, ${randomNumber(0, 255)}, ${randomNumber(
    0,
    255
  )})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('Where the click first happened', e.target, e.currentTarget);
  console.log(e.currentTarget === this); //True

  //Stop propagation(not a good practice)
  // e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('Where the click first happened', e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log('Where the click first happened', e.target, e.currentTarget);
  }
  //How to catch event in Capturing Phase
  // set the third parameter to "true", by default it's false.
);
 */

////////////////////////////////////////////////
/////----Event Delegation: Implementing Page Navigation-----/////
//line 68

//////////////////////////////////
/////----DOM Traversing-----/////

// const h1 = document.querySelector('h1');
/* //Going downwards: child
// //It can go no matter how deep it is
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);

//Get direct children
console.log(h1.children);
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered'; */

//Going upwards: find parent element
// console.log(h1.parentNode);
// console.log(h1.parentElement);

/* // closest --It can go no matter how deep it is
h1.closest('.header').style.background = 'var(--gradient-primary)';

h1.closest('h1').style.background = 'var(--gradient-secondary)';

//Going sideway: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

///Get all the siblings
console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(el => {
  if (el !== h1) el.style.transform = 'scale(0.5)';
}); */

//////////////////////////////////////////////
/////----Building a Tabbed Component-----/////
//line 100

//////////////////////////////////////////////////////
/////----Passing Arguments to Event Handlers-----/////
//line 149

//////////////////////////////////////////////
/////----Implementing a Sticky Navigation: The Scroll Event -----/////
//Not a great way for sticky navigation:
/* 
const section1Coords = section1.getBoundingClientRect();

window.addEventListener('scroll', function () {
  if (this.window.scrollY > section1Coords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
}); */

//////////////////////////////////////////////
/////----A Better Way: The Intersection Observer API-----/////
/* const obsCallback = function (entries, observer) {
  entries.forEach(entry => console.log(entry));
};
const obsOption = {
  root: null, //set "null"--whole viewpoint
  threshold: [0, 0.2, 1],
};

const observer = new IntersectionObserver(obsCallback, obsOption);
observer.observe(section1); */
//line 19 practice

//////////////////////////////////////////////
/////----Revealing Elements on scroll-----////
