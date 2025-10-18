jQuery("#team_carousel").owlCarousel({
  autoplay: true,
  lazyLoad: true,
  loop: true,
  margin: 20,
   /*
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  */
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  dots: false,
  nav: true,
  navText: [
        '<i class="pe-7s-angle-left"></i>',
        '<i class="pe-7s-angle-right"></i>'
    ],
  responsive: {
    0: {
      items: 1
    }
  }
});