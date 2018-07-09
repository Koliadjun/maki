$('.product-preview__big-image').each(function(){
  $('img', this).eq(0).addClass('active');
})
$('[data-img-thumb]').on('click', function(){
  var imgIndex = $(this).data('img-thumb');
  var colectionIndex = $(this).data('colection')
  $('[data-img][data-colection="'+colectionIndex+'"]').removeClass('active');
  $('[data-img="'+imgIndex+'"][data-colection="'+colectionIndex+'"]').addClass('active');
})
