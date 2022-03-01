window.addEventListener('scroll', function() {
  var scroll = document.querySelector('.scrollTop');
  scroll.classList.toggle("active", window.scrollY > 500)
})

function scrollToTop() {
  window.scrollTo({
    top:0,
    behavior: 'smooth'
  })
}

$(window).scroll(function() {
    if($(window).scrollTop()) {
        $("nav").addClass("whity");
    } else {
     $("nav").removeClass("whity");

    }
});


$('.menu__list li a').click(function() {
    $('html, body').animate({
        scrollTop: $('#' + $(this).data('value')).offset().top -80
    },1000)
});
$('.logoclick img').click(function() {
  $('html, body').animate({
        scrollTop: $('#' + $(this).data('value')).offset().top 
    },1000)
});




//START Projects
const sliderContainer = document.querySelector(".slider-container");
const slideRight = document.querySelector(".right-slide");
const slideLeft = document.querySelector(".left-slide");
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");
const slidesLength = slideRight.querySelectorAll("div").length;

let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

upButton.addEventListener("click", () => changeSlide("up"));
downButton.addEventListener("click", () => changeSlide("down"));

const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight;
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesLength - 1;
    }
  }

  slideRight.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`;
  slideLeft.style.transform = `translateY(${
    activeSlideIndex * sliderHeight
  }px)`;
};


$(document).ready(function () {

    
    $('.logo-area').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        infinite: true,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
             breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});


// about

const box3 = document.querySelector('.box-animate4');

setInterval(setBorderRadius3, 900);

function setBorderRadius3() {
	box3.style.setProperty('--br-blobby', generateBorderRadiusValue3());
	box3.style.setProperty('--br-blobby-after', generateBorderRadiusValue3());
	box3.style.setProperty('--br-blobby-before', generateBorderRadiusValue3());
}

function generateBorderRadiusValue3() {
	return `${getRandomValue3()}% ${getRandomValue3()}% ${getRandomValue3()}% ${getRandomValue3()}% / ${getRandomValue3()}% ${getRandomValue3()}% ${getRandomValue3()}%`;
}
	
function getRandomValue3() {
	return Math.floor(Math.random() * 50) + 50;
}


