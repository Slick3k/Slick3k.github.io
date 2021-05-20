$('.burger').click(function() {
  $('.burger-menu, .burger').toggleClass('active');
});


$("[data-scroll-to]").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $($(this).data('scroll-to')).offset().top
    }, 1000);
});
