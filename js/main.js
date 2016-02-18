$(document).ready(function() {
  
  $('.menu-control').click(function(e) {
    e.stopPropagation();
    $(this).closest('.menu').toggleClass('is-open');
  });
  
  $(document).click(function() {
    $('.menu-control').closest('.menu').removeClass('is-open');
  });
});