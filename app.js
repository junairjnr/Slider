let nextButton = document.querySelector(".next");
let prevButton = document.querySelector(".prev");

let slider = document.querySelector(".slider");
let sliderList = document.querySelector(".slider .list");
let thumbnail = document.querySelector(".thumbnail");
let thumbnailItems = thumbnail.querySelectorAll(".item");

thumbnail.appendChild(thumbnailItems[0]);

// finction for next button

nextButton.onclick = function () {
  moveSlider("next");
};
//function for prev button
prevButton.onclick = function () {
  moveSlider("prev");
};
function moveSlider(direction) {
  let sliderItems = sliderList.querySelectorAll('.item');
  let thumbnailItems = document.querySelectorAll('.thumbnail .item ')

  if (direction === "next") {
    sliderList.appendChild(sliderItems[0]);
    thumbnail.appendChild(thumbnailItems[0]);
    slider.classList.add("next");
  } else {
    sliderList.prepend(sliderItems[sliderItems.length - 1]);
    thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
    slider.classList.add("prev");
  }

  slider.addEventListener("animationend", function () {
    if (direction === "next") {
      slider.classList.remove("next");
    } else {
      slider.classList.remove("prev");
    }
  },{once:true});//remove eventListener after its triggered 
}
