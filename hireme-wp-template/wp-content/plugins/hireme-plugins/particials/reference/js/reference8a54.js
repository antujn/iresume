(function($){
  $('#reference-slider').carousel();

  function carousel_navs(){
    var length_items = $("#reference-slider .carousel-inner > .item").length;
    var myList = $('#reference-slider .carousel-indicators');
    var myListItems = '';
    var i = 0;        
    for (i = 0; i < length_items; i++) {  
      myListItems += '<li data-target="#reference-slider" data-slide-to="' + i + '"></li>';  
    }
    myList.html(myListItems).children('li:first-child').addClass('active');

  }

  $('#reference-slider .carousel-inner .item:first-child').addClass('active');
  carousel_navs();
})(jQuery);

    