$(window).scroll(function() {
  if ($(document).scrollTop() > 450) {
    $('.navbar').addClass('navbar-scroll');
  } else {
      $('.navbar').removeClass('navbar-scroll')
  }
});
function castSmoothScroll() {
  $.srSmoothscroll({
    step: 80,
    speed: 100,
    ease: 'linear'
  });
}
