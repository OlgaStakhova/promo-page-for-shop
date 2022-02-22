import './scss/main.scss';
import $ from 'jquery';
import 'slick-carousel';
import MicroModal from 'micromodal';

MicroModal.init();

const buttonFeedbackRef = document.querySelector('#buttonFeedback')

if (buttonFeedbackRef) {
  buttonFeedbackRef.addEventListener('click', handlerShowModal);
}

function handlerShowModal() {
  MicroModal.show('modal-1');
}

$(document).ready(function () {
  $('.slider-show').slick({
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
