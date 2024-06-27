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
			const offset = index * -450;
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