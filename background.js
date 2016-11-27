var search;


//var search = "cats";

var randomNumber = ()=>{
  return Math.floor((Math.random() * 100));
}



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
