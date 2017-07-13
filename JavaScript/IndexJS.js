$(window).scroll(function() {
  if ($(".navbar").offset().top > 50) {
    $(".navbar-default").addClass("top-nav-collapse");
    $(".menu-btn").addClass("collapse-text");
    $('.navbar-brand img').attr('src', './images/nmlogo.png');
  } else {
    $(".navbar-default").removeClass("top-nav-collapse");
    $(".menu-btn").removeClass("collapse-text");
    $('.navbar-brand img').attr('src', './images/nmlogoW.png');
  }
});
