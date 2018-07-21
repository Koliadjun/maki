$('.icon-menu').click(function(){
     $(this).toggleClass('icon-menu-close');
     $('.header__menu').toggleClass('active');
})   
$('.sidebar li').click(function(){
  $(this).children().closest('ul').toggleClass('active');
})
$('.product-preview').each(function(){
  $('.product-preview__big-image', this).eq(0).addClass('active');
})
$('[data-img-thumb]').on('click', function(){
  console.log('cliked')
  var imgIndex = $(this).data('img-thumb');
  var colectionIndex = $(this).data('colection')
  $('[data-img][data-colection="'+colectionIndex+'"]').removeClass('active');
  $('[data-img="'+imgIndex+'"][data-colection="'+colectionIndex+'"]').addClass('active');
})
$(document).ready(function(){
  $('.product-preview__big-image img')
    .wrap('<span style="display:inline-block"></span>')
    .css('display', 'block')
    .parent()
    .zoom();
});

$('.search-box__button').on('click', function(e){
  document.querySelector('.search-box__input').classList.add('selected');
  document.getElementsByTagName('input')[0].focus();
})
$(document).on('click',function(e){
  if (e.toElement.localName == 'button' || e.toElement.localName == 'input' || e.toElement.className == 'search-box__button' ){
   return false;
  }else{
    document.querySelector('.search-box__input').classList.remove('selected');
  }
})
$('.catalog__filter-button').on('click',function(){
  $('.catalog').toggleClass("catalog_with-filter");
  $('.col-desktop-1-4').toggleClass("col-desktop-1-4_with-filter");
  $('.catalog__filter').toggleClass("catalog__filter_filtered");
  $('.col-tablet-1-3').toggleClass("col-tablet-1-3_with-filter");
})
var scrollPos = 0;
window.addEventListener('scroll', throttle(callback, 10));

function throttle(fn, wait) {
  var time = Date.now();
  return function() {
    if ((time + wait - Date.now()) < 0) {
      fn();
      time = Date.now();
    }
  }
}

function callback() {
  var windowScroled = window.scrollY;
  var bottom = window.innerHeight;
  var catalogOffset = $('.catalog').offset().top;
  var filterHeight = document.getElementsByClassName('catalog__filter')[0].clientHeight;
  var catalogHeight = document.getElementsByClassName('catalog')[0].clientHeight;
  filterScrollY=windowScroled-catalogOffset;
  if ((document.body.getBoundingClientRect()).top > scrollPos){
    if (windowScroled+bottom<catalogHeight+catalogOffset){
     filterScrollY=windowScroled+bottom-catalogOffset-filterHeight-43; 
    }
    if (windowScroled+bottom>catalogHeight+catalogOffset){
     filterScrollY=catalogHeight-filterHeight-43; 
    }
    if (filterScrollY<0){
     filterScrollY=0; 
    }
    $('.catalog__filter').css("top", filterScrollY+'px');
  }
  else
    if (filterScrollY>catalogHeight-filterHeight){
     filterScrollY=catalogHeight-filterHeight; 
    }
    if (filterScrollY<0){
     filterScrollY=0; 
    }
    $('.catalog__filter').css("top", filterScrollY+'px');
  scrollPos = (document.body.getBoundingClientRect()).top;
}
  $( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
  } );
 

