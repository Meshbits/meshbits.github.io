$(document).ready(function () {
  var menuLink = $('.menu');
  var scrollLink = $('.scroll');
  // Smooth scrolling
  scrollLink.click(function (e) {
    e.preventDefault();
    $('#myNavbar').removeClass('responsive');
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000);
  });

  menuLink.click(function (e) {
    e.preventDefault();
    if ($("#myNavbar").hasClass("responsive")) {
      $('#myNavbar').removeClass('responsive');
    } else {
      $('#myNavbar').addClass('responsive');
    }
  });
  $("#form").submit(function (e) {

    e.preventDefault();
    this.reset();
    showMsg();
  });


});

function showMsg() {
  $(".form-alert").show(300).delay(2000).hide(500);
}

// Meshbits.io contact us form
$("#staticform").submit(function(event) {
  event.preventDefault();
  $.ajax({
    url: 'https://api.staticforms.xyz/submit', // url where to submit the request
    type: "POST", // type of action POST || GET
    dataType: 'json', // data type
    data: $("#staticform").serialize(), // post data || get data
    success: function(result) {
      // you can see the result from the console
      // tab of the developer tools
      alert(JSON.parse(result));
    },
    error: function(xhr, resp, text) {
      alert(xhr, resp, text);
    }
  })
});