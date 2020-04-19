//Animated counter

var counters = document.querySelectorAll('.counter');
var speed = 200;

counters.forEach(function(counter) {
  var updateCount = function() {
    var target = +counter.getAttribute('data-target');
    var count = +counter.innerText;

    var inc = target / speed;

    if(count < target) {
      counter.innerText =Math.ceil(count + inc);
      setTimeout(updateCount, 1);
    } else {
      count.innerText = target;
    }
  }

  updateCount();
})

// Special hover

var ELEMENTS = document.querySelectorAll(".special-hover");
var ELEMENTS_SPAN = [];

ELEMENTS.forEach(function(element,index) {
	var addAnimation = false;

	if (!ELEMENTS_SPAN[index])
		ELEMENTS_SPAN[index] = element.querySelector("span");

	element.addEventListener("mouseover", function(e) {
		ELEMENTS_SPAN[index].style.left = e.pageX - element.offsetLeft + "px";
		ELEMENTS_SPAN[index].style.top = e.pageY - element.offsetTop + "px";

		if (addAnimation) element.classList.add(ANIMATEDCLASSNAME);
	});

	element.addEventListener("mouseout", function(e) {
		ELEMENTS_SPAN[index].style.left = e.pageX - element.offsetLeft + "px";
		ELEMENTS_SPAN[index].style.top = e.pageY - element.offsetTop + "px";
	});
});

// donation form

// var humanity = document.querySelectorAll('.pay-per-humanity');
// var inputRadio = document.querySelectorAll('.input_radio input');

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