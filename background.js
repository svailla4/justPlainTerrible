
var search = "cats";

var randomNumber = ()=>{
  return Math.floor((Math.random() * 100));
}



$(document).ready(function() {

  var searchUrl = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&limit=100`;

  $.get(searchUrl, (result)=>{

    $('*').each(function(){

      number = randomNumber();
      var image = result.data[number].images.downsized.url;

        if ($(this).is('img')) {
            $(this).attr('src',image);
        }

    });

  });


});
