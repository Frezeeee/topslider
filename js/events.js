const cursor = document.querySelector(".cursor");
(mouseX = 0), (mouseY = 0), (posX = 0), (posY = 0);

document.addEventListener("mousemove", (e) => {
  cursor.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});

/*
const wrapper = document.querySelector(".wrapper");
const slider = document.querySelector(".main__slider");
const sliderParent = document.querySelector('.slider__image-wrapper');

function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            slider.classList.add("slider-active");
            wrapper.style.cssText = "overflow: hidden;";
            slider.classList.remove("hidden");
            sliderParent.classList.remove("hidden");

            var activeSlide = document.querySelector('.swiper-slide-active');
            var background = activeSlide.getAttribute('data-background');
            slider.style.cssText = "background-color: " + background + ";"
            
            var active = document.querySelector('.swiper-slide-active');
            var slides = [...document.querySelectorAll('.slider__image')];
            var index = slides.indexOf(active);

            let list = document.querySelectorAll('.list__el');
            for (let i = 0; i < list.length; i++) {
                const el = list[i];
                el.classList.remove("active-el");
            }
            list[index].classList.add("active-el");

            let hash = document.getElementById('firstSlide');
            let firstEl = slides.indexOf(hash);
            var lastEl = slides.length;
            if (slider.classList.contains("slider-active")) {
                if(lastEl === index + 1 || firstEl === index) {
                    //slider.classList.add("hidden");
                    wrapper.style.cssText = "overflow: auto; overflow-x: hidden;";
                    //sliderParent.classList.add("hidden");
                }
            }
        } else {
            slider.classList.remove("slider-active");
            slider.classList.add("hidden");
            sliderParent.classList.add("hidden");
            //wrapper.style.cssText = "overflow: auto; overflow-x: hidden;";
        }
    });
}
*/

const wrapper = document.querySelector(".wrapper");
const slider = document.querySelector(".main__slider");
const sliderParent = document.querySelector(".slider__image-wrapper");

var activeSlide = document.querySelector(".swiper-slide-active");
var background = activeSlide.getAttribute("data-background");

var active = document.querySelector(".swiper-slide-active");
var slides = [...document.querySelectorAll(".slider__image")];
var index = slides.indexOf(active);

const list = document.querySelectorAll(".list__el");

function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      slider.classList.remove("hidden");
      slider.style.cssText = "aling-items: center;";

      var activeSlide = document.querySelector(".swiper-slide-active");
      var background = activeSlide.getAttribute("data-background");
      slider.style.cssText = "background-color: " + background + ";";
      for (let i = 0; i < list.length; i++) {
        const el = list[i];
        el.classList.remove("active-el");
      }
      var active = document.querySelector(".swiper-slide-active");
      var slides = [...document.querySelectorAll(".slider__image")];
      var index = slides.indexOf(active);
      list[index].classList.add("active-el");

      if (slider.classList.contains("slider-active")) {
        wrapper.style.cssText = "overflow: hidden;";
      }

      let hash = document.getElementById("firstSlide");
      let firstEl = slides.indexOf(hash);
      var lastEl = slides.length;
      console.log(firstEl, index);

      if (index !== 0) {
          slider.scrollIntoView({block: "center", behavior: "smooth"})
      }

      if (index == 5) {
          slider.scrollIntoView({block: "center", behavior: "smooth"})
      }

      if (firstEl === index || lastEl === index + 1) {
        console.log("Work!");
        wrapper.style.cssText = "overflow: auto; overflow-x: hidden;";
        slider.classList.remove("slider-active");
        slider.classList.remove("hidden");
      }
    }
  });
}

let options = {
  threshold: 0,
};

let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(".slider__image");
for (let elm of elements) {
  observer.observe(elm);
}
