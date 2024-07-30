const carousel = document.querySelector(".carousel");
const indicatorDots = document.querySelectorAll(".indicator-dot");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function updateIndicator() {
	indicatorDots.forEach((dot, index) => {
		if (index === currentIndex) {
			dot.classList.add("active");
		} else {
	          dot.classList.remove("active");
	        }
	      });
	    }function scrollToSlide(index) {
			const offset = index * -310;
			carousel.style.transform = `translateX(${offset}px)`;
		}
	    prevButton.addEventListener("click", () => {
	      if (currentIndex > 0) {
	        currentIndex--;
	        scrollToSlide(currentIndex);
	        updateIndicator();
	      }
	    });
	    nextButton.addEventListener("click", () => {
	      if (currentIndex < totalSlides - 1) {
	        currentIndex++;
	        scrollToSlide(currentIndex);
	        updateIndicator();
	      }
	    });
	    indicatorDots.forEach((dot, index) => {
	      dot.addEventListener("click", () => {
	        currentIndex = index;
	        scrollToSlide(currentIndex);
	        updateIndicator();
	      });
	    });

carousel.addEventListener("wheel", (event) => {
  event.preventDefault();
  const delta = event.deltaY;
  if (delta > 0 && currentIndex < totalSlides - 1) {
    currentIndex++;
    scrollToSlide(currentIndex);
    updateIndicator();
  } else if (delta < 0 && currentIndex > 0) {
    currentIndex--;
    scrollToSlide(currentIndex);
    updateIndicator();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  updateIndicator();
});


const secondCarousel = document.querySelector(".second-carousel");
const secondIndicatorDots = document.querySelectorAll(".second-indicator-dot");
const secondPrevButton = document.querySelector(".second-prev-button");
const secondNextButton = document.querySelector(".second-next-button");
let secondCurrentIndex = 0;
const secondSlides = document.querySelectorAll(".second-slide");
const secondTotalSlides = secondSlides.length;

function updateSecondIndicator() {
  secondIndicatorDots.forEach((dot, index) => {
    if (index === secondCurrentIndex) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

function scrollToSecondSlide(index) {
  const offset = index * -260;
  secondCarousel.style.transform = `translateX(${offset}px)`;
}

secondPrevButton.addEventListener("click", () => {
  if (secondCurrentIndex > 0) {
    secondCurrentIndex--;
    scrollToSecondSlide(secondCurrentIndex);
    updateSecondIndicator();
  }
});

secondNextButton.addEventListener("click", () => {
  if (secondCurrentIndex < secondTotalSlides - 1) {
    secondCurrentIndex++;
    scrollToSecondSlide(secondCurrentIndex);
    updateSecondIndicator();
  }
});

secondIndicatorDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    secondCurrentIndex = index;
    scrollToSecondSlide(secondCurrentIndex);
    updateSecondIndicator();
  });
});

secondCarousel.addEventListener("wheel", (event) => {
  event.preventDefault();
  const delta = event.deltaY;
  if (delta > 0 && secondCurrentIndex < secondTotalSlides - 1) {
    secondCurrentIndex++;
    scrollToSecondSlide(secondCurrentIndex);
    updateSecondIndicator();
  } else if (delta < 0 && secondCurrentIndex > 0) {
    secondCurrentIndex--;
    scrollToSecondSlide(secondCurrentIndex);
    updateSecondIndicator();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  updateSecondIndicator();
});

const thirdCarousel = document.querySelector(".third-carousel");
const thirdIndicatorDots = document.querySelectorAll(".third-indicator-dot");
const thirdPrevButton = document.querySelector(".third-prev-button");
const thirdNextButton = document.querySelector(".third-next-button");
let thirdCurrentIndex = 0;
const thirdSlides = document.querySelectorAll(".third-slide");
const thirdTotalSlides = thirdSlides.length;

function updateThirdIndicator() {
  thirdIndicatorDots.forEach((dot, index) => {
    if (index === thirdCurrentIndex) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

function scrollToThirdSlide(index) {
  const offset = index * -245;
  thirdCarousel.style.transform = `translateX(${offset}px)`;
}

thirdPrevButton.addEventListener("click", () => {
  if (thirdCurrentIndex > 0) {
    thirdCurrentIndex--;
    scrollToThirdSlide(thirdCurrentIndex);
    updateThirdIndicator();
  }
});

thirdNextButton.addEventListener("click", () => {
  if (thirdCurrentIndex < thirdTotalSlides - 1) {
    thirdCurrentIndex++;
    scrollToThirdSlide(thirdCurrentIndex);
    updateThirdIndicator();
  }
});

thirdIndicatorDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    thirdCurrentIndex = index;
    scrollToThirdSlide(thirdCurrentIndex);
    updateThirdIndicator();
  });
});

thirdCarousel.addEventListener("wheel", (event) => {
  event.preventDefault();
  const delta = event.deltaY;
  if (delta > 0 && thirdCurrentIndex < thirdTotalSlides - 1) {
    thirdCurrentIndex++;
    scrollToThirdSlide(thirdCurrentIndex);
    updateThirdIndicator();
  } else if (delta < 0 && thirdCurrentIndex > 0) {
    thirdCurrentIndex--;
    scrollToThirdSlide(thirdCurrentIndex);
    updateThirdIndicator();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  updateThirdIndicator();
});

$(function(){
	$(".burger").click(function(e){
		e.preventDefault();
		$("body").toggleClass("open");
		$(".burger").toggleClass("open");
	});
});

const fourthCarousel = document.querySelector(".fourth-carousel");
const fourthIndicatorDots = document.querySelectorAll(".fourth-indicator-dot");
const fourthPrevButton = document.querySelector(".fourth-prev-button");
const fourthNextButton = document.querySelector(".fourth-next-button");
let fourthCurrentIndex = 0;
const fourthSlides = document.querySelectorAll(".fourth-slide");
const fourthTotalSlides = fourthSlides.length;

function updateFourthIndicator() {
  fourthIndicatorDots.forEach((dot, index) => {
    if (index === fourthCurrentIndex) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

function scrollToFourthSlide(index) {
  const offset = index * -470;
  fourthCarousel.style.transform = `translateX(${offset}px)`;
}

fourthPrevButton.addEventListener("click", () => {
  if (fourthCurrentIndex > 0) {
    fourthCurrentIndex--;
    scrollToFourthSlide(fourthCurrentIndex);
    updateFourthIndicator();
  }
});

fourthNextButton.addEventListener("click", () => {
  if (fourthCurrentIndex < fourthTotalSlides - 1) {
    fourthCurrentIndex++;
    scrollToFourthSlide(fourthCurrentIndex);
    updateFourthIndicator();
  }
});

fourthIndicatorDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    fourthCurrentIndex = index;
    scrollToFourthSlide(fourthCurrentIndex);
    updateFourthIndicator();
  });
});

fourthCarousel.addEventListener("wheel", (event) => {
  event.preventDefault();
  const delta = event.deltaY;
  if (delta > 0 && fourthCurrentIndex < fourthTotalSlides - 1) {
    fourthCurrentIndex++;
    scrollToFourthSlide(fourthCurrentIndex);
    updateFourthIndicator();
  } else if (delta < 0 && fourthCurrentIndex > 0) {
    fourthCurrentIndex--;
    scrollToFourthSlide(fourthCurrentIndex);
    updateFourthIndicator();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  updateFourthIndicator();
});


const fifthCarousel = document.querySelector(".fifth-carousel");
const fifthIndicatorDots = document.querySelectorAll(".fifth-indicator-dot");
const fifthPrevButton = document.querySelector(".fifth-prev-button");
const fifthNextButton = document.querySelector(".fifth-next-button");
let fifthCurrentIndex = 0;
const fifthSlides = document.querySelectorAll(".fifth-slide");
const fifthTotalSlides = fifthSlides.length;

function updateFifthIndicator() {
  fifthIndicatorDots.forEach((dot, index) => {
    if (index === fifthCurrentIndex) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

function scrollToFifthSlide(index) {
  const offset = index * -305;
  fifthCarousel.style.transform = `translateX(${offset}px)`;
}

fifthPrevButton.addEventListener("click", () => {
  if (fifthCurrentIndex > 0) {
    fifthCurrentIndex--;
    scrollToFifthSlide(fifthCurrentIndex);
    updateFifthIndicator();
  }
});

fifthNextButton.addEventListener("click", () => {
  if (fifthCurrentIndex < fifthTotalSlides - 1) {
    fifthCurrentIndex++;
    scrollToFifthSlide(fifthCurrentIndex);
    updateFifthIndicator();
  }
});

fifthIndicatorDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    fifthCurrentIndex = index;
    scrollToFifthSlide(fifthCurrentIndex);
    updateFifthIndicator();
  });
});

fifthCarousel.addEventListener("wheel", (event) => {
  event.preventDefault();
  const delta = event.deltaY;
  if (delta > 0 && fifthCurrentIndex < fifthTotalSlides - 1) {
    fifthCurrentIndex++;
    scrollToFifthSlide(fifthCurrentIndex);
    updateFifthIndicator();
  } else if (delta < 0 && fifthCurrentIndex > 0) {
    fifthCurrentIndex--;
    scrollToFifthSlide(fifthCurrentIndex);
    updateFifthIndicator();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  updateFifthIndicator();
});

const sixthCarousel = document.querySelector(".sixth-carousel");
const sixthIndicatorDots = document.querySelectorAll(".sixth-indicator-dot");
const sixthPrevButton = document.querySelector(".sixth-prev-button");
const sixthNextButton = document.querySelector(".sixth-next-button");
let sixthCurrentIndex = 0;
const sixthSlides = document.querySelectorAll(".sixth-slide");
const sixthTotalSlides = sixthSlides.length;

function updateSixthIndicator() {
  sixthIndicatorDots.forEach((dot, index) => {
    if (index === sixthCurrentIndex) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

function scrollToSixthSlide(index) {
  const offset = index * -255;
  sixthCarousel.style.transform = `translateX(${offset}px)`;
}

sixthPrevButton.addEventListener("click", () => {
  if (sixthCurrentIndex > 0) {
    sixthCurrentIndex--;
    scrollToSixthSlide(sixthCurrentIndex);
    updateSixthIndicator();
  }
});

sixthNextButton.addEventListener("click", () => {
  if (sixthCurrentIndex < sixthTotalSlides - 1) {
    sixthCurrentIndex++;
    scrollToSixthSlide(sixthCurrentIndex);
    updateSixthIndicator();
  }
});

sixthIndicatorDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    sixthCurrentIndex = index;
    scrollToSixthSlide(sixthCurrentIndex);
    updateSixthIndicator();
  });
});

sixthCarousel.addEventListener("wheel", (event) => {
  event.preventDefault();
  const delta = event.deltaY;
  if (delta > 0 && sixthCurrentIndex < sixthTotalSlides - 1) {
    sixthCurrentIndex++;
    scrollToSixthSlide(sixthCurrentIndex);
    updateSixthIndicator();
  } else if (delta < 0 && sixthCurrentIndex > 0) {
    sixthCurrentIndex--;
    scrollToSixthSlide(sixthCurrentIndex);
    updateSixthIndicator();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  updateSixthIndicator();
});

const formulario = document.getElementById('formulario').addEventListener('submit', function(event){
  event.preventDefault();
})

$(function(){
  setTimeout(function(){
      $(".s1-header-animation").addClass("s1-header-animation-after"); 
      $(".s1-main-animation").addClass("s1-main-animation-after");
  }, 800);
});
