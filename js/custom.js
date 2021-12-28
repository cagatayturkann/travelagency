// // sticky navbar js
$(window).scroll(function () {
  console.log($(window).scrollTop())
  if ($(window).scrollTop() > 63) {
    $('.navbar').addClass('navbar-fixed');
  }
  if ($(window).scrollTop() < 64) {
    $('.navbar').removeClass('navbar-fixed');
  }
});

// navbar fade effects js
$(document).ready(function(){
  $(".dropdown").hover(function() { 
    $('.megamenu', this).fadeIn();
      },
      function() { $('.megamenu', this).fadeOut();
  });
});

// turlistesi datepicker js
$(document).ready(function(){
  $('#checkin_date, #checkout_date').datepicker({
   'format': 'm/d/yyyy',
   'autoclose': true
  });
  $('#chooseTourDate').datepicker({
    'format': 'm/d/yyyy',
    'autoclose': true
   });
});

// turdetay person counter js
$(document).ready(function(){
  var quantity = 1;
  $('.quantity-right-plus').click(function(e){
      e.preventDefault();
      var quantity = parseInt($('#quantity').val());
      $('#quantity').val(quantity + 1);
  });
  $('.quantity-left-minus').click(function(e){
      e.preventDefault();
      var quantity = parseInt($('#quantity').val());
      if(quantity > 1){
          $('#quantity').val(quantity - 1);
      }
  });
});

// booking different billing adress js
$(document).ready(function () {
  $('#differentBilling').on('click', function () {
      if($(this).is(':checked')) {
        $('.differentBillingAdress').show();
      } else {
        $('.differentBillingAdress').hide();
      }
  });
});

