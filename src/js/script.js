
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
  // setting

  $(document).ready(function () {
    $('.accordion-menu-item-btn:first').addClass('accordion-menu-item-btn-onLeft');
    $('.accordion-menu-item-btn:first').addClass('accordion-menu-item-btn-onRight');
    $('.accordion-menu-item-btn:first').siblings('ul').stop().slideDown();
  });

  $('.accordion-menu-item-btn').click(function () {
    $(this).toggleClass('accordion-menu-item-btn-onLeft');
    $(this).toggleClass('accordion-menu-item-btn-onRight');
    $(this).siblings('ul').stop().slideToggle();
  });

  // /setting
});
