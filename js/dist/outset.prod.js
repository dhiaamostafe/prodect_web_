"use strict";!function(e){e(".image_animation_home_head ").owlCarousel({items:1,loop:!0,margin:10,nav:!0,navText:["<span class='fa fa-angle-left'><span/>","<span class='fa fa-angle-right'><span/>"],autoplay:!0,animateOut:"fadeOut",animateIn:"fadeIn",autoplayTimeout:6e3,smartSpeed:1500,nav_offset_top:!0,autoplayHoverPause:!0,dots:!1}),e(".image_anim_home_cloths").owlCarousel({loop:!0,margin:10,autoplay:!0,autoplayTimeout:2e3,autoplayHoverPause:!0,nav:!0,dots:!1,responsive:{0:{items:1},576:{items:2},768:{items:3},992:{items:4}}}),e(window).on("load",function(){if(e(".loader").fadeOut(),e("#preloder").delay(200).fadeOut("slow"),e(".featured__controls li").on("click",function(){e(".featured__controls li").removeClass("active"),e(this).addClass("active")}),0<e(".featured__filter").length){var a=document.querySelector(".featured__filter");mixitup(a)}}),e(".icon-card").on("click",function(){e(".popup_small_card").fadeIn()}),e(".popup-close").on("click",function(a){a.preventDefault(),e(".popup_small_card").fadeOut()}),e(".nav-sec ul li").on("click",function(){e(".nav-sec li").removeClass("active"),e(this).addClass("active")})}(jQuery);