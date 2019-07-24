$(document).ready(function() {
  $('.tab__item').click(function() {
    var tab_id = $(this).attr('data-tab');

    $('.tab__item').removeClass('tab__item_active');
		$('.tab-content').removeClass('tab-content_active fade');

		$(this).addClass('tab__item_active');

    if ($(this).attr('id') == 'first') {
    $(this).addClass('tab__item_bank_active').removeClass('tab__item_bank');
    $('#second').removeClass('tab__item_interac_active').addClass('tab__item_interac');
    $('#third').removeClass('tab__item_card_active').addClass('tab__item_card');

  } else if ($(this).attr('id') == 'second') {
    $(this).addClass('tab__item_interac_active').removeClass('tab__item_interac');
    $('#first').removeClass('tab__item_bank_active').addClass('tab__item_bank');
    $('#third').removeClass('tab__item_card_active').addClass('tab__item_card');

  } else if ($(this).attr('id') == 'third') {
    $(this).addClass('tab__item_card_active').removeClass('tab__item_card');
    $('#first').removeClass('tab__item_bank_active').addClass('tab__item_bank');
    $('#second').removeClass('tab__item_interac_active').addClass('tab__item_interac');
  }

    $('#' + tab_id).addClass('tab-content_active fade');
  });
});
