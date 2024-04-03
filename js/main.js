$(window).on("load", function () {
  $("#preloader").length &&
    $("#preloader")
      .delay(100)
      .fadeOut("slow", function () {
        $(this).remove();
      });
}),
  $(document).ready(function () {
    function e() {
      $(window).scrollTop() > 1
        ? $("header").addClass("sticky")
        : $("header").removeClass("sticky");
    }
    $("#copyright_year").html(new Date().getFullYear()),
      e(),
      $(window).scroll(function () {
        e();
      }),
      $(window).scroll(function () {
        $(this).scrollTop() > 100
          ? $(".backtotop").fadeIn(100)
          : $(".backtotop").fadeOut(100);
      }),
      $(".backtotop").click(function () {
        return $("html, body").animate({ scrollTop: 0 }, 100), !1;
      }),
      $(".navbar-nav").length &&
        $(".navbar-nav a[href^='#']").on("click", function (e) {
          e.preventDefault();
          var r = $(this);
          $("html, body")
            .stop()
            .animate({ scrollTop: $(r.attr("href")).offset().top - 71 }, 500);
        }),
      $(".navbar-nav a").on("click", function () {
        $(".navbar-collapse").collapse("hide");
      }),
      $(".parallax").length && $(".parallax").jarallax(),
      $("#order-form").length &&
        $("#order-form").validate({
          errorPlacement: function (e, r) {
            return !0;
          },
          rules: {
            first_name: { required: !0, minlength: 3 },
            email: { required: !0, email: !0 },
            company_name: { required: !0 },
            billing_address: { required: !0 },
            city: { required: !0 },
            state: { required: !0 },
            country: { required: !0 },
            zip: { required: !0 },
          },
          submitHandler: function (e) {
            var r = $("#order-form").serialize();
            $.ajax({
              type: "POST",
              url: "assets/php/order-form.php",
              dataType: "json",
              data: r,
              success: function (r) {
                r.success
                  ? ($(".form-status").addClass("alert alert-success"),
                    $(".form-status").text(
                      "Your Message Has been Sent Successfully"
                    ),
                    e.submit(),
                    $(".form-status").slideDown().delay(3e3).slideUp(),
                    $("#order-form").trigger("reset"))
                  : ($(".form-status").addClass("alert alert-danger"),
                    $(".form-status").text("Error Occurred, Please Try Again"),
                    $(".form-status").slideDown().delay(3e3).slideUp());
              },
              error: function (e, r, a) {
                $(".form-status").addClass("alert alert-danger"),
                  $(".form-status").text("Something Went Wrong"),
                  $(".form-status").slideDown().delay(3e3).slideUp();
              },
            });
          },
        });
  });
