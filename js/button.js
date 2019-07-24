$(document).ready(function() {
  $('.button').click(function(e) {
    e.preventDefault();
  });

  $('.checkbox_bank').change(function() {
    if ($(this).is(':checked')) {
      $('#buttonBank').addClass('button_active');
    } else {
      $('#buttonBank').removeClass('button_active');
    }
  });

  $('.checkbox_paypal').change(function() {
    if ($(this).is(':checked')) {
      $('#buttonPayPal').addClass('button_active');
    } else {
      $('#buttonPayPal').removeClass('button_active');
    }
  });
});
