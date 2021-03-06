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

$('#main>.search-box__button').on('click', function(e){
  document.querySelector('.search-box__input').classList.add('selected');
  document.getElementsByTagName('input')[0].focus();
})
$(document).on('click',function(e){
  if (e.toElement.localName == 'button' || e.toElement.className == 'search-box__button' ){
   return false;
  }else{
    document.querySelector('.search-box__input').classList.remove('selected');
  }
})
$('.catalog__filter-button').on('click',function(){
  var catalog = $('.catalog');
  $(this).toggleClass("active");
  $('.catalog').toggleClass("catalog_with-filter");
  catalog.find('.col-desktop-1-4').toggleClass("col-desktop-1-4_with-filter");
  catalog.find('.catalog__filter').toggleClass("catalog__filter_filtered");
  catalog.find('.col-tablet-1-3').toggleClass("col-tablet-1-3_with-filter");
})
$('.nav-menu>ul>li').on('click',function(){
  $('.nav-menu>ul>li').removeClass("active");
  $(this).addClass("active");
})
$('.menu>ul>li').on('click',function(){
  $('.menu>ul>li').removeClass("active");
  $(this).addClass("active");
})
$('.catalog__page-counter>.button').on('click',function(){
  $('.catalog__page-counter>.button').removeClass("active");
  $(this).addClass("active");
})
var scrollPos = 0;

if($('.catalog__filter').length != 0) {
  window.addEventListener('scroll', throttle(callback, 10));
}

function throttle(fn, wait) {
  var time = Date.now();
  return function() {
    if ((time + wait - Date.now()) < 0) {
      fn();
      time = Date.now();
    }
  }
}
$( window ).resize(function() {
  callback();
});
function callback() {
  if(window.innerWidth>=768){
    console.log('alive');
    var windowScroled = window.scrollY;
    var bottom = window.innerHeight;
    var catalogOffset = $('.catalog').offset().top;
    var filterHeight = document.getElementsByClassName('catalog__filter')[0].clientHeight;
    var catalogHeight = document.getElementsByClassName('catalog')[0].clientHeight;
    filterScrollY=windowScroled-catalogOffset;
    if ((document.body.getBoundingClientRect()).top > scrollPos){
      if (windowScroled+bottom<catalogHeight+catalogOffset){
       filterScrollY=windowScroled+bottom-catalogOffset-filterHeight-50; 
      }
      if (windowScroled+bottom>catalogHeight+catalogOffset){
       filterScrollY=catalogHeight-filterHeight-50; 
      }
      if (filterScrollY<0){
       filterScrollY=0; 
      }
      $('.catalog__filter').css("top", filterScrollY+'px');
    }
    else
      if (filterScrollY>catalogHeight-filterHeight-50){
       filterScrollY=catalogHeight-filterHeight-50; 
      }
      if (filterScrollY<0){
       filterScrollY=0; 
      }
      $('.catalog__filter').css("top", filterScrollY+'px');
    }
    else {
       filterScrollY=0; 
       $('.catalog__filter').css("top", filterScrollY+'px');
    }
  scrollPos = (document.body.getBoundingClientRect()).top;
}
$(document).ready(function () {
    var outputSpanRight = $('#spanOutputRight');
    var outputSpanLeft = $('#spanOutputLeft');
    var sliderDiv = $('#slider');

    sliderDiv.slider({
        range: true,
        min: 1000,
        max: 10000,
        values: [1000, 5000],
        slide: function (event, ui) {
            outputSpanLeft.html(ui.values[0]+' руб.');
            outputSpanRight.html(ui.values[1]+' руб.');
            console.log(outputSpanLeft,outputSpanRight);
        },
        stop: function (event, ui) {
        }
    });

    outputSpanLeft.html(sliderDiv.slider('values', 0)+' руб.');
    outputSpanRight.html(sliderDiv.slider('values', 1)+' руб.');
});

/*$('form').submit(function(e){
  e.preventDefault()
  var data = $(this).serialize()
  alert(data)
})*/
function rateThis(wrapWidth,rateWidth){
  var starWidth = wrapWidth/5;
  console.log(wrapWidth)
  return parseFloat(rateWidth/starWidth).toFixed(1); 
}
$('.rate-input').mousemove(function(e){
  if($(this).is('.done')){
    return false;
  }
  var pos = e.clientX - $(e.target).offset().left;
  $(this).find('div').width(pos)
})
$('.rate-input').mouseleave(function(){
  if($(this).is('.done')){
    return false;
  }
  $(this).find('div').width(0)
})
$('.rate-input').click(function(e){
  $(this).addClass('done')
  var pos = e.clientX - $(e.target).offset().left;
  $(this).find('div').width(pos);
  thisWidth = $(this).width();
  $(this).find('input').val(rateThis($(this).width(),pos))
})

$('.order__count-holder').each(function(){
  $this = this;
  $('.minus', this).on('click',function(){
    count = $('input', $this).val()*1
    count --
    if( count < 1){
      count = 1
    }
    $('input', $this).val(count)
  })
   $('.plus', this).on('click',function(){
    count = $('input', $this).val()*1
    count ++
    if( count > 99){
      count = 99
    }
    $('input', $this).val(count)
  })
})