$(document).ready(function() {

  var searchUrl = 'http://api.giphy.com/v1/gifs/search?q=cats&api_key=dc6zaTOxFJmzC&limit=100';

  $.get(searchUrl, (result)=>{
    var image = result.data[0].images.downsized.url;

    $('*').each(function(){

        if ($(this).is('img')) {
            $(this).attr('src',image);
        }

    });

  });


});
