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


// donation form

// const humanity = document.querySelectorAll('.pay-per-humanity');
// const inputRadio = document.querySelectorAll('.input_radio input');

// inputRadio.forEach(input => {
//   if (input.length > 0) {
//     input.parentElement.parentElement.style.backgroundColor = '#354463';
//   }
// })




//Filter (news) njomeza
// (function($) {

//   'use strict';

//   var $filters = $('#all-entries_filter [data-filter]'),
//     $boxes = $('.card [data-category]');
  

//   $filters.on('click', function(e) {
//     e.preventDefault();
//     var $this = $(this);
    
//     $filters.removeClass('active');
//     $this.addClass('active');

//     var $filterColor = $this.attr('data-filter');

//     if ($filterColor == 'all') {
//       $boxes.removeClass('is-animated')
//         .fadeOut().finish().promise().done(function() {
//           $boxes.each(function(i) {
//             $(this).addClass('is-animated').delay((i++) * 200).fadeIn();
//           });
//         });
//     } else {
//       $boxes.removeClass('is-animated')
//         .fadeOut().finish().promise().done(function() {
//           $boxes.filter('[data-category *= "' + $filterColor + '"]').each(function(i) {
//             $(this).addClass('is-animated').delay((i++) * 200).fadeIn();
//           });
//         });
//     }
//   });

// })(jQuery);



// $(document).ready(function(){
//   $("#hide").click(function(){
//     $(".viewall").hide();
//   });
//   $("#show").click(function(){
//     $(".viewall").show();
//   });

// });

//==============================

//filter news

// (function(){
//   'use strict';

//   var $contents = $('.all-entries_contents');
//   $contents.isotope({
//     itemSelector: '.item',
//     layoutMode: 'fitRows'
//   });

//   $('#all-entries_filter > button').on('click', function(e){
//     e.preventDefault();

//     var filter = $(this).attr('data-filter');

//     $('#all-entries_filter > button').removeClass('active');
//     $(this).addClass('active');

//     $contents.isotope({filter: filter});
//   })

// })(jQuery);