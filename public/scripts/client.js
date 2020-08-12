/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {




/* Code for creating the tweet element */

const createTweetElement = function(tweet) {
  const $tweet = `<article class="old-tweet">
        <header1 class="old-tweet-header">
          <i id="user-image" src='${tweet.user.avatars}'></i> 
          <div id="user-name">${tweet.user.name}</div>
          <div id="user-handle">${tweet.user.handle}</div>
        </header1>                              
        <em class="old-tweet-text">${escape(tweet.content.text)}</em>
        <hr>
        <footer class="old-tweet-footer">
            <small id="tweet-time">${moment(tweet.created_at).fromNow()}</small>
            <div>
            <i id="flag-icon" class="fas fa-flag"></i>
            <i id="retweet-icon" class="fas fa-retweet"></i>
            <i id="heart-icon" class="fas fa-heart"></i>
          </div>
        </footer>
        </article>`;
  return $tweet;
}



// const $tweet = createTweetElement(tweetData);

// // Test / driver code (temporary)
// console.log($tweet); // to see what it looks like
// // $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.


// renderTweets(data);


});