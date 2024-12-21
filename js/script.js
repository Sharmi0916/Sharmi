var typed = new Typed(".text", {
  strings: ["Programming", "Web Development", "Editing", "Photography", "Videography",],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

// pscss progress circular bar 
let psProgress = document.querySelector(".ps-css"),
  psValue = document.querySelector(".ps-progress");

let psStartValue = 0,
  psEndValue = 60,
  psspeed = 30;

let progressps = setInterval(() => {
  psStartValue++;

  psValue.textContent = `${psStartValue}%`;
  psProgress.style.background = `conic-gradient(#fca61f ${psStartValue * 3.6
    }deg, #ededed 0deg)`;

  if (psStartValue == psEndValue) {
    clearInterval(progressps);
  }
}, psspeed);

// javasript progress circular bar 
let creativityProgress = document.querySelector(".creativity"),
  creativityValue = document.querySelector(".creativity-progress");

let creativityStartValue = 0,
  creativityEndValue = 70,
  jsspeed = 30;

let progressjs = setInterval(() => {
  creativityStartValue++;

  creativityValue.textContent = `${creativityStartValue}%`;
  creativityProgress.style.background = `conic-gradient(#7d2ae8 ${creativityStartValue * 3.6
    }deg, #ededed 0deg)`;

  if (creativityStartValue == creativityEndValue) {
    clearInterval(progressjs);
  }
}, jsspeed);

// communication progress circular bar 
let communicationProgress = document.querySelector(".communication"),
  communicationValue = document.querySelector(".communication-progress");

let communicationStartValue = 0,
  communicationEndValue = 80,
  communicationspeed = 30;

let progresscommunication = setInterval(() => {
  communicationStartValue++;

  communicationValue.textContent = `${communicationStartValue}%`;
  communicationProgress.style.background = `conic-gradient(#20c997 ${communicationStartValue * 3.6
    }deg, #ededed 0deg)`;

  if (communicationStartValue == communicationEndValue) {
    clearInterval(progresscommunication);
  }
}, communicationspeed);

// hw progress circular bar 
let hwProgress = document.querySelector(".hw"),
  hwValue = document.querySelector(".hw-progress");

let hwStartValue = 0,
  hwEndValue = 90,
  rjsspeed = 30;

let progresshw = setInterval(() => {
  hwStartValue++;

  hwValue.textContent = `${hwStartValue}%`;
  hwProgress.style.background = `conic-gradient(#3f396d ${hwStartValue * 3.6
    }deg, #ededed 0deg)`;

  if (hwStartValue == hwEndValue) {
    clearInterval(progresshw);
  }
}, rjsspeed);


// filter using javascript
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post").show("1000");
    } else {
      $(".post")
        .not("." + value)
        .hide("1000");
      $(".post")
        .filter("." + value)
        .show("1000");
    }
  });
});


// javascript for sticky navbar even if u scroll the navbar will be fixed
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      document.getElementById('navbar-top').classList.add('fixed-top');
      // add padding top to show content behind navbar
      navbar_height = document.querySelector('.navbar').offsetHeight;
      document.body.style.paddingTop = navbar_height + 'px';
    } else {
      document.getElementById('navbar-top').classList.remove('fixed-top');
      // remove padding top from body
      document.body.style.paddingTop = '0';
    }
  });
});


// adding funtionality to back to top button 

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
