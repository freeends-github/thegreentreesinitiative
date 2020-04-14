//Animated counter

const counters = document.querySelectorAll('.counter');
const speed = 200;

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;

    const inc = target / speed;

    if(count < target) {
      counter.innerText =Math.ceil(count + inc);
      setTimeout(updateCount, 1);
    } else {
      count.innerText = target;
    }
  }

  updateCount();
})






//Filter (news)
(function($) {

  'use strict';

  var $filters = $('.filteri [data-filter]'),
    $boxes = $('.content [data-category]');
  

  $filters.on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    
    $filters.removeClass('active');
    $this.addClass('active');

    var $filterColor = $this.attr('data-filter');

    if ($filterColor == 'all') {
      $boxes.removeClass('is-animated')
        .fadeOut().finish().promise().done(function() {
          $boxes.each(function(i) {
            $(this).addClass('is-animated').delay((i++) * 200).fadeIn();
          });
        });
    } else {
      $boxes.removeClass('is-animated')
        .fadeOut().finish().promise().done(function() {
          $boxes.filter('[data-category *= "' + $filterColor + '"]').each(function(i) {
            $(this).addClass('is-animated').delay((i++) * 200).fadeIn();
          });
        });
    }
  });

})(jQuery);



$(document).ready(function(){
  $("#hide").click(function(){
    $(".viewall").hide();
  });
  $("#show").click(function(){
    $(".viewall").show();
  });

});