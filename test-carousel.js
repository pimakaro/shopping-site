$(document).ready(function(){
    $(".owl-carousel").owlCarousel(
        {
          loop: true,
          nav: false,
          dots: true,
          items: 1,
          autoplay: true 
        }
    );
});

$(document).ready(function(){
  $(".menu-cate").click(function(){
    $(".list-cate").slideToggle();
  });
});

$(document).ready(function(){
  $("#sp_nav_btn").click(function(){
    $(".sp_nav_li").slideToggle();
  });
});

$(window).load(function(){
  $("#list_img img").click(function(){
    var img_src = $(this).attr("src");
    $("#display_img img").attr("src", img_src);
  });
});