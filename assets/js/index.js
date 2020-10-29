let slideIndex = 1;
const nav = document.querySelectorAll(".navigation");
const slides = document.querySelectorAll(".images");
const nextButton = document.querySelector('#next');
const previousButton = document.querySelector('#previous');
const opac = document.querySelector('#bgopacity');
const opacOutput = document.querySelector('#rangevalue');
const body = document.querySelector('body');

const setOpacity = () => {
    opac.addEventListener('input', () => {
        body.style.backgroundColor = `rgba(0,0,0,${opac.value/100})`;
    })
}

const changeImages = (n) => {
    showSlides(slideIndex += n);
}
  
const specificImage = (n) => {
    showSlides(slideIndex = n);
}

const initButtons = () => {
    nextButton.addEventListener('click', () => {
        changeImages(+1);
    });
    previousButton.addEventListener('click', () => {
        changeImages(-1)
    });

    for(let j = 0; j < nav.length; j++){
        nav[j].addEventListener('click', () => {
            specificImage(j+1);
        })
    }

    opac.addEventListener('change', () => {
        opacOutput.value = opac.value;
    })
}

const showSlides = (n) => {
    if (n > slides.length) {
        slideIndex = 1
    }    
    if (n < 1) {
        slideIndex = slides.length
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (let i = 0; i < nav.length; i++) {
        nav[i].className = nav[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    nav[slideIndex-1].className += " active";
}

  
window.addEventListener('load', initButtons);
window.addEventListener('load', showSlides(slideIndex));
window.addEventListener('load', setOpacity);




