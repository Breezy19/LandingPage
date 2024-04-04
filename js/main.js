$(window).on("load", function () {
  // Window Load Function
  $("#preloader").length &&
    $("#preloader")
      .delay(100)
      .fadeOut("slow", function () {
        $(this).remove();
      });
}),

$(document).ready(function () {
  // Document Ready Function
  // Set copyright year dynamically
  $("#copyright_year").html(new Date().getFullYear());

  // Function to add sticky class to header based on scroll position
  function e() {
    $(window).scrollTop() > 1
      ? $("header").addClass("sticky")
      : $("header").removeClass("sticky");
  }

  // Call e() function
  e();

  // Attach scroll event listener to window to trigger e() function
  $(window).scroll(function () {
    e();
  });

  // Show/hide "back to top" button based on scroll position
  $(window).scroll(function () {
    $(this).scrollTop() > 100
      ? $(".backtotop").fadeIn(100)
      : $(".backtotop").fadeOut(100);
  });

  // Scroll to top when "back to top" button is clicked
  $(".backtotop").click(function () {
    return $("html, body").animate({ scrollTop: 0 }, 100), !1;
  });

  // Smooth scroll to section when navbar link is clicked
  $(".navbar-nav").length &&
    $(".navbar-nav a[href^='#']").on("click", function (e) {
      e.preventDefault();
      var r = $(this);
      $("html, body")
        .stop()
        .animate({ scrollTop: $(r.attr("href")).offset().top - 71 }, 500);
    });

  // Collapse navbar menu after clicking on a link
  $(".navbar-nav a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });
});
