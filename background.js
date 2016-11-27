var search;


//var search = "cats";

var randomNumber = ()=>{
  return Math.floor((Math.random() * 100));
}

var sendMsg = ()=>{
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
    alert(response.farewell);
  });
});
};

$(document).ready(function() {
  chrome.storage.sync.get("data", function(items) {
    if(items){
      search = items.data;
    }else{
      search = "cats";
    }
  });

  console.log("work");

  var searchUrl = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&limit=100`;

    $('*').each(function(){

      number = randomNumber();
      var image = result.data[number].images.downsized.url;

        if ($(this).is('img')) {
            $(this).attr('src',image);
        }

    });

  });
