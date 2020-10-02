console.log("Connected");
$(".buttonclass").click(function()
{
  console.log("clicked");
  $.getJSON("https://meme-api.herokuapp.com/gimme",function(data)
  {
    console.log(data);
    var image = data.url;
    console.log(image);
    $(".imageclass").attr('src',image);
    $(".download_class").attr('href',image);
    var title= data.title;

    $('.details').text(title);
  });


});
