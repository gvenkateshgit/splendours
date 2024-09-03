let instorebtn = document.getElementById('link-instore');
let managementbtn = document.getElementById('link-management');
let instorepage = document.getElementById('InstoreCompanion');
let managementpage = document.getElementById('management');
let myacademybtn=document.getElementById('link-myacademy');
let myacademypage=document.getElementById('myAcademy');
let contactusbtn=document.getElementById('link-contactus');
let contactuspage=document.getElementById('contactUs');
let faqsbtn=document.getElementById('link-faqs');
let faqspage=document.getElementById('faqs');

document.addEventListener('DOMContentLoaded', function() {
  // JavaScript to handle the display logic by ID
  instorebtn.addEventListener('click', function(e) {
    e.preventDefault(); 
    instorepage.style.display = 'block';
    managementpage.style.display = 'none';
    myacademypage.style.display='none';
    contactuspage.style.display='none';
    faqspage.style.display="none";
  });

  managementbtn.addEventListener('click', function(e) {
    e.preventDefault();
    instorepage.style.display = 'none';
    myacademypage.style.display='none';
    managementpage.style.display = 'block';
    contactuspage.style.display='none';
    faqspage.style.display="none";
  });
  myacademybtn.addEventListener('click',function(e){
    e.preventDefault();
    myacademypage.style.display='block';
    managementpage.style.display="none";
    instorepage.style.display = 'none';
    contactuspage.style.display='none';
    faqspage.style.display="none";
  })
  contactusbtn.addEventListener('click',function(e){
    e.preventDefault();
    myacademypage.style.display='none';
    managementpage.style.display="none";
    instorepage.style.display = 'none';
    contactuspage.style.display='block'
    faqspage.style.display="none";
  })
  faqsbtn.addEventListener('click',function(e){
    e.preventDefault();
    myacademypage.style.display='none';
    managementpage.style.display="none";
    instorepage.style.display = 'none';
    contactuspage.style.display='none';
    faqspage.style.display="block";
  })
});





const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));






















// (function () {
//     'use strict';
  
//     // A class for building sliders from it
//     class Slider {
//       constructor(id, mediaQueries) {
//         // Get HTML elements
//         this.slider = document.querySelector(`#${id}`);
//         this.sliderList = this.slider.querySelector('.slider-list');
//         this.sliderItems = this.slider.querySelectorAll('.slider-item');
//         this.sliderNext = this.slider.querySelector('.slider-arrow-next');
//         this.sliderPrev = this.slider.querySelector('.slider-arrow-prev');
  
//         // Get media queries
//         this.mediaQueryList = [window.matchMedia(`screen and (max-width:${mediaQueries[0] - 1}px)`)];
//         mediaQueries.forEach((mediaQuery) => {
//           this.mediaQueryList.push(window.matchMedia(`screen and (min-width:${mediaQuery}px)`));
//         });
  
//         // Define global variables
//         this.numberOfVisibleItems = null;
//         this.currentItemIndex = null;
//         this.sliderItemsLength = this.sliderItems.length;
//         this.mediaQueryLength = this.mediaQueryList.length;
  
//         // Add event listener: to call the run function again when screen resized
//         this.mediaQueryList.forEach((mediaQuery) => {
//           mediaQuery.addEventListener('change', () => {
//             this.run();
//           });
//         });
  
//         // Add event listener: to go to next slide
//         this.sliderNext.addEventListener('click', () => {
//           if (this.currentItemIndex < this.sliderItemsLength - this.numberOfVisibleItems) {
//             this.currentItemIndex++;
//             this.shiftSlides();
//           }
//         });
  
//         // Add event listener: to go to previous slide
//         this.sliderPrev.addEventListener('click', () => {
//           if (this.currentItemIndex > 0) {
//             this.currentItemIndex--;
//             this.shiftSlides();
//           }
//         });
  
//         // Disable focus on all slides links
//         this.sliderItems.forEach((item) => {
//           const elements = item.querySelectorAll('a');
//           elements.forEach((element) => {
//             element.tabIndex = '-1';
//           });
//         });
  
//         // Add event listener: to scroll down to slider when previous arrow focused
//         this.sliderPrev.addEventListener('focusin', () => {
//           this.slider.scrollIntoView();
//         });
  
//         // Add event listener: to scroll down to slider when next arrow focused
//         this.sliderNext.addEventListener('focusin', () => {
//           this.slider.scrollIntoView();
//         });
//       }
  
//       // Run the slider
//       run() {
//         let index = this.mediaQueryLength - 1;
//         while (index >= 0) {
//           if (this.mediaQueryList[index].matches) {
//             // Set number of visible slides
//             this.numberOfVisibleItems = index + 1;
  
//             // Reset the slider
//             this.currentItemIndex = 0;
//             this.sliderList.style.transform = 'translateX(0%)';
  
//             // Set slider list width
//             this.sliderList.style.width = `calc(${(100 / this.numberOfVisibleItems) * this.sliderItemsLength}% + ${(this.sliderItemsLength / this.numberOfVisibleItems) * 16}px)`;
  
//             // Set slides width
//             this.sliderItems.forEach((item) => {
//               item.style.width = `${100 / this.numberOfVisibleItems}%`;
//             });
  
//             // Exit the loop
//             break;
//           }
//           index--;
//         }
//       }
  
//       // A function to shift slides left and right
//       shiftSlides() {
//         this.sliderList.style.transform = `translateX(-${(100 / this.sliderItemsLength) * this.currentItemIndex}%)`;
//       }
//     }
  
//     /* 
//     Note about creating new slider:
//     First parameter is the id of the HTML slider-container element of each slider.
//     Second parameter is an array of the media queries (breaking points) where the number of slides increases.
//     */
  
//     // Create a new slider and run it
//     new Slider('new-products', [576, 992]).run();
  
//     // Create a new slider and run it
//     new Slider('featured-products', [576, 768, 992]).run();
//   })();
  
// let aboutus = document.getElementById("Aboutus");
// let carouselImg = document.getElementById("carouselImages");

// aboutus.onclick = function(){
//     carouselImg.style.display = "none";
// }