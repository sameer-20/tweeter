/* */

const $maxLength = 140;

$(document).ready(function() {

    $('#tweet-text').keyup(function() {
      const $textLength = $(this).val().length;
      const $counter = $(this).siblings('.tweet-submit').children('.counter');
      const $currentCount = $maxLength - $textLength;
      $counter.text($currentCount);

      $currentCount < 0 ? $counter.css('color', 'red') : $counter.css('color', '#444444');
	  	
    });
});

