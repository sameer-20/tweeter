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
        <img id="user-image" src='${escape(tweet.user.avatars)}'/> 
        <div id="user-name">${escape(tweet.user.name)}</div>
        <div id="user-handle">${escape(tweet.user.handle)}</div>
      </header>                              
      <em class="old-tweet-text">${escape(tweet.content.text)}</em>
      <hr>
      <footer class="old-tweet-footer">
          <small id="tweet-time">${escape(moment(tweet.created_at).fromNow())}</small>
          <div>
          <i id="flag-icon" class="fas fa-flag"></i>
          <i id="retweet-icon" class="fas fa-retweet"></i>
          <i id="heart-icon" class="fas fa-heart"></i>
        </div>
      </footer>
      </article>`);
  return $tweet;
};


// Function to escape some text - to prevent cross-site(XSS) attack
const escape =  function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};


// Fires when DOM is ready
$(document).ready(function() {

  // Get tweets from the server
  const loadTweets = function() {
    $.ajax({url: '/tweets', type: 'GET'})
      .then((response) => {
        renderTweets(response);
      });
  };

    
  // Submit a new tweet
  $('#new-tweet-form').submit(function(event) {

    // To prevent the default form submission behaviour
    event.preventDefault();
    
    // Handle error cases when tweet length = 0 or > 140
    if (!$('#tweet-text').val()) {
      $('.message-text').text('*** Naa! You gotta tweet in something. ***');
    } else if ($('#tweet-text').val().length > 140) {
      $('.message-text').text("*** Oops! Tweet length exceeded. ***");
    } else {
      // Submit if no error
      $.ajax({url: '/tweets', type: 'POST', data: $(this).serialize()})
        .then(function() {
          loadTweets();
          $('.message-text').text("");
          //$('.message-text').text("Yay! Tweet submitted successfully.");
          $('#tweet-text').val('');
          $('.counter').val('140');
        });
    }
  });

});