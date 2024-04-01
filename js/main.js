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
            
          });
    });
    document.getElementById("contactForm").addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent the form from submitting normally
  
      // Get form data
      var formData = new FormData(this);
  
      // Send form data via AJAX
      var xhr = new XMLHttpRequest();
      xhr.open("POST", "send_email.php", true);
      xhr.onreadystatechange = function() {
          if (xhr.readyState === XMLHttpRequest.DONE) {
              if (xhr.status === 200) {
                  alert("Email sent successfully!");
                  // You can perform further actions here upon successful submission
              } else {
                  alert("Failed to send email.");
              }
          }
      };
      xhr.send(formData);
  });
  