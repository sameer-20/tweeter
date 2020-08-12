/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Sample Data
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
];


const renderTweets = function(tweets) {
  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
  $('.old-tweet-container').empty();
  for (let tweet of tweets) {
    console.log(tweet);
    $('.old-tweet-container').append(createTweetElement(tweet));
  }
};


/* Code for creating the tweet element */

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

  
  renderTweets(data);

});