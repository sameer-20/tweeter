/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Takes an array of tweet objects and appends each one to the tweets-container

const renderTweets = function(tweets) {
  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
  $('.old-tweet-container').empty();
  for (let tweet of tweets) {
    console.log(tweet);
    $('.old-tweet-container').prepend(createTweetElement(tweet));
  }
};


// Generates the DOM structure for a tweet, given a tweet object.

const createTweetElement = function(tweet) {
  const $tweet = $(`<article class="old-tweet">
      <header class="old-tweet-header">
        <img id="user-image" src='${tweet.user.avatars}'/> 
        <div id="user-name">${tweet.user.name}</div>
        <div id="user-handle">${tweet.user.handle}</div>
      </header>                              
      <em class="old-tweet-text">${tweet.content.text}</em>
      <hr>
      <footer class="old-tweet-footer">
          <small id="tweet-time">${tweet.created_at}</small>
          <div>
          <i id="flag-icon" class="fas fa-flag"></i>
          <i id="retweet-icon" class="fas fa-retweet"></i>
          <i id="heart-icon" class="fas fa-heart"></i>
        </div>
      </footer>
      </article>`);
  return $tweet;
};


$(document).ready(function() {

  // Get tweets from the server
	const loadTweets = function () {
    $.ajax({url: '/tweets', method: 'GET',})
    .then((response) => {
      renderTweets(response);
    });
  };
  

  // Submit a new tweet
  $('#new-tweet-form').submit(function (event) {

    // To prevent the default form submission behaviour
    event.preventDefault();
    
    // Handle error cases when tweet length = 0 or > 140
    if (!$('#tweet-text').val()) {
			$('.message-text').text('Naa! You gotta tweet something.');
		} else if ($('#tweet-text').val().length > 140) {
			$('.message-text').text("Oops! Text length exceeded.");
		} else {
      // Submit if no error
        $.ajax({url: '/tweets', type: 'POST', data: $(this).serialize(),})
        .then(function () {
          loadTweets();
          $('.message-text').text("Yay! Tweet submitted successfully.");
          $('#tweet-text').val('');
        });
    }
	});

});