// HTML DOM ilə elementlərin seçilməsi

const carouselSlide = document.querySelector('.image-slide');
const carouselImages = document.querySelectorAll('.image-slide img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');


//Neçənci şəkildə olduğumuzu göstərən counter
let counter = 1;
//Şəkilin eni
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';


// Əvvəlki şəkilə qayıt butonu

prevBtn.addEventListener('click', () => {
	if(counter <= 0) return;
	carouselSlide.style.transition = "transform 0.4s ease-in-out";
	counter--;
	carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});
	
// Sonrakı şəkilə keç butonu

nextBtn.addEventListener('click', () => {
	if(counter >= carouselImages.length - 1) return;
	carouselSlide.style.transition = "transform 0.4s ease-in-out";
	counter++;
	carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

// Transition effektini silir

carouselSlide.addEventListener('transitionend', () => {
	if(carouselImages[counter].id === 'lastClone'){
		carouselSlide.style.transition = "none";
		counter = carouselImages.length - 2;
		carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
	}

	if(carouselImages[counter].id === 'firstClone'){
		carouselSlide.style.transition = "none";
		counter = carouselImages.length - counter;
		carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
	}
})

