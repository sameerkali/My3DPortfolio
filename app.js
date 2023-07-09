const canvas = document.querySelector(".canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext("2d");
const frameCount = 179;

const currentFrame = (index) => `./best-ball/${(index + 1).toString()}.jpg`;

const images = [];
let ball = { frame: 0 };

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = currentFrame(i);
  console.log(currentFrame(i));
  images.push(img);
}

gsap.to(ball, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
    scrub: true,
    pin: "canvas",
    end: "500%",
  },
  onUpdate: render,
});

gsap.fromTo(
  ".ball-text",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    scrollTrigger: {
      scrub: .7,

      start: "50%",
      end: "55%",
    },
    onComplete: () => {
      gsap.to(".ball-text", { opacity: 0 });
    },
  }
);




gsap.fromTo(
  ".ball-text-upper",
  {
    opacity: 0,
  },
  {
    opacity: .9,
    scrollTrigger: {
      scrub: true,

      start: "0%",
      end: "6%",
    },
    onComplete: () => {
      gsap.to(".ball-text-upper", { opacity: 0 });
    },
  }
);




gsap.fromTo(
  ".ball-text-middle",
  {
    opacity: 0,
  },
  {
    opacity: .9,
    scrollTrigger: {
      scrub: true,

      start: "9%",
      end: "14%",
    },
    onComplete: () => {
      gsap.to(".ball-text-middle", { opacity: 0 });
    },
  }
);




gsap.fromTo(
  ".ball-text-middle2",
  {
    opacity: 0,
  },
  {
    opacity: .9,
    scrollTrigger: {
      scrub: true,

      start: "16%",
      end: "20%",
    },
    onComplete: () => {
      gsap.to(".ball-text-middle2", { opacity: 0 });
    },
  }
);




gsap.fromTo(
  ".ball-text-middle3",
  {
    opacity: 0,
  },
  {
    opacity: .9,
    scrollTrigger: {
      scrub: true,

      start: "22%",
      end: "30%",
    },
    onComplete: () => {
      gsap.to(".ball-text-middle3", { opacity: 0 });
    },
  }
);

gsap.fromTo(
  ".ball-text-bottom",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    scrollTrigger: {
      scrub: true,

      start: "33%",
      end: "40%",
    },
    onComplete: () => {
      gsap.to(".ball-text-bottom", { opacity: 0 });
    },
  }
);



images[0].onload = render;

function render() {
  context.canvas.width = images[0].width;
  context.canvas.height = images[0].height;

  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(images[ball.frame], 0, 0);
}

/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////




$(document).ready(function() {
  "use strict";

  /* Swiper
	-------------------------------------------------------*/
  //initialize swiper when document ready
  var mySwiper = new Swiper(".swiper-container", {
    // Navigation arrows
    nextButton: ".swiper-button-next",
    prevButton: ".swiper-button-prev",
    slidesPerView: 2.7,
    centeredSlides: true,
    breakpoints: {
      1440: {
        slidesPerView: 2.6
      },
      1439: {
        slidesPerView: 1.45
      },
      1024: {
        slidesPerView: 1.45
      },
      1023: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 2
      },
      568: {
        slidesPerView: 1.5,
        spaceBetween: 10
      },
      414: {
        slidesPerView: 1.09,
        spaceBetween: 3
      },
      320: {
        slidesPerView: 1.09,
        spaceBetween: 3
      }
    }
  });

  /* Info Card
	-------------------------------------------------------*/
  var $revealCardContentBtn = $(".sl--card-nav-container"),
    $contentContainer = $(
      ".sl-card-wrapper .sl--content-wrapper .sl--content-container"
    ),
    $navGFX = $(
      ".sl-card-wrapper .sl--content-wrapper .sl--card-nav-container .sl--content-btn .card-nav-gfx"
    );

  $revealCardContentBtn.on("click", function() {
    var parent = $(this).closest(".swiper-slide");

    // IC Container
    parent
      .siblings()
      .find($contentContainer)
      .removeClass("sl--card-reveal");
    parent
      .siblings()
      .find($contentContainer)
      .addClass("sl--card-hide");
    parent.find($contentContainer).toggleClass("sl--card-hide sl--card-reveal");

    // IC Nav wrapper
    parent
      .siblings()
      .find(".sl--content-wrapper")
      .removeClass("sl--content-wrapper-active");
    parent
      .siblings()
      .find(".sl--content-wrapper")
      .addClass("sl--content-wrapper-inactive");
    parent
      .find(".sl--content-wrapper")
      .toggleClass("sl--content-wrapper-inactive sl--content-wrapper-active");

    // IC Nav GFX
    parent
      .siblings()
      .find($navGFX)
      .removeClass("sl--close-card-info");
    parent
      .siblings()
      .find($navGFX)
      .addClass("sl--show-card-info");
    parent.find($navGFX).toggleClass("sl--show-card-info sl--close-card-info");
  });

  /* Hide content on slide change
	-------------------------------------------------------*/
  mySwiper.on("onSlideChangeStart", function() {
    if ($contentContainer.hasClass("sl--card-reveal")) {
      var $CI_ContentWrapper = $(".sl--content-wrapper");

      $contentContainer.removeClass("sl--card-reveal");
      $contentContainer.addClass("sl--card-hide");
      $navGFX.removeClass("sl--close-card-info");
      $navGFX.addClass("sl--show-card-info");
      $CI_ContentWrapper.removeClass("sl--content-wrapper-active");
      $CI_ContentWrapper.addClass("sl--content-wrapper-inactive");
    }
  });
});