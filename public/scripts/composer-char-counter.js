/* */

const $maxLength = 140;

$(document).ready(function() {
    //$('#tweet-text').on('keypress', clickHandler);

    $('#tweet-text').keypress(function() {
      const $textLength = $(this).val().length;
      const $counter = $(this).siblings('.tweet-submit').children('.counter');
      const $currentCount = $maxLength - $textLength;
      $counter.text($currentCount);

      $currentCount < 0 ? $counter.css('color', 'red') : $counter.css('color', '#444444');
	  	

    });
});



/* const clickHandler = function (event) {
  let length = $(this).val().length;
  length = maxLength-length;
  if (length >= 0) {
    $('.counter').text(length);
  } else {
    $('.counter').text(length).css({"color" : "red"});
  }
  
  //console.log(this.parent);
  //$('this').children();
  //$(this).parent().children().
   
}; */