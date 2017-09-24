 'use strict'
  $(document).ready(function() {
    let scrollOverflow = true;
    if ($(window).width()<768 ) {
      scrollOverflow = false;
    }
    else {
      scrollOverflow = true;
    }
    $('#fullpage').fullpage({
      anchors:['main', 'about', 'cities'],
      scrollOverflow: scrollOverflow,
      navigation: true,
      responsive: 768,
      navigationPosition: 'right',
      navigationTooltips: ['Main', 'About', 'Cities'],
      afterLoad: function(anchorLink, index){
        const loadedSection = $(this);
        if(index == 1){
          $('.mark').addClass('animated bounceInDown');
          $('.right').find('h1').addClass('animated fadeInRight');
          $('.right').find('h3').addClass('animated fadeInRight');
          $('.right').find('ul').find('li').addClass('animated fadeInRight');
        }
      },
      onLeave: function(index, nextIndex, direction){
        const loadedSection = $(this);
        if (index == 1 && direction == 'down') {
          $('.leftText').find('h1').addClass('animated fadeInDown');
          $('.leftText').find('hr').addClass('animated fadeIn');
          $('.leftText').find('p').addClass('animated fadeInDown');
          $('.leftText').find('nav').find('a').addClass('animated fadeIn');
        }
        if (index == 2 && direction == 'down') {
          $('.img-h3').find('h3').addClass('animated fadeInDown');
        }
      }
    });

$('.mouseScroll').click(function(e){
  e.preventDefault();
  $.fn.fullpage.moveSectionDown();
});
$('.cl-effect-10').find('a').click(function(e){
  e.preventDefault();
  $.fn.fullpage.moveSectionDown();
});
});