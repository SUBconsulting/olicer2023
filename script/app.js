	const currentURL = window.location.href;
	const isIndexFunction = (url) =>{
		const splitURL = url.split("/");
		const last = (splitURL[splitURL.length - 1]);
		let returnValue = false;
		switch(last){
			case '': case 'index': returnValue = true; break;
		}
		return returnValue;
	}





	/*CAROUSEL*/
	// Makes HTMLCollection; use indices to access the images
	const slides = document.getElementsByClassName('mySlides');
	// Use these for event listeners
	const prevIcon = document.querySelector('.prev');
	const nextIcon = document.querySelector('.next');
	// Keep track of current slide index; defaults to 0
	let currentSlide = 0;
	// Preload 1st image by adding 'show' class
	slides[currentSlide].classList.add('show');

	// Removes 'show' and 'active' classes from elements in HTMLCollections
	const resetShow = () => {
	  for (let slide of slides) slide.classList.remove('show');
	}

	// Event Handler for back arrow
	const goBackASlide = () => {
	  resetShow();
	  if (currentSlide === 0) {
	    currentSlide = slides.length-1;    
	    slides[currentSlide].classList.add('show');
	    return;
	  } 
	  currentSlide -= 1;
	  slides[currentSlide].classList.add('show');
	}

	// Event Handler for forward arrow
	const goFwdASlide = () => {
	  resetShow();
	  if (currentSlide === slides.length-1) {
	    currentSlide = 0;    
	    slides[currentSlide].classList.add('show');
	    return;
	  } 
	  currentSlide += 1;
	  slides[currentSlide].classList.add('show');
	}

	// Event Handler for dots
	const advanceWDots = (e) => {
	  resetShow();
	  currentSlide = [...dots].indexOf(e.target); // Get index of clicked dot
	  slides[currentSlide].classList.add('show');
	}

	// Event listeners
	prevIcon.addEventListener('click', goBackASlide);
	nextIcon.addEventListener('click', goFwdASlide);



	const setHeaderIndex = () => {
		const header = document.getElementsByClassName("index")[0];

		const mySlidesimg = document.querySelector(".mySlides img");
		header.style.height = `${mySlidesimg.clientHeight}px`;

		console.log(mySlidesimg);
		console.log(mySlidesimg.clientHeight);
		console.log(header.style);
	}


	window.addEventListener("resize",function(){
		if(isIndex){setHeaderIndex();}
	});






	/*	
		********************************
		+*******************************
			FUNCTIONS INICIALES
		********************************
		+*******************************
	*/
	// const isIndex = isIndexFunction(currentURL);
	// setTimeout(function(){
	// 	if(isIndex){setHeaderIndex();}
	// },1000);
	


