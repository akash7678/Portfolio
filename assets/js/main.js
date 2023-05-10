// Change Active
$('.hsr-nav-link').click(function(){
    $('.hsr-nav-link').removeClass('active');
    $(this).addClass('active');
})


// $(document).ready(function(){
//     $(".hsr-card-slider").owlCarousel({
//         autoplay:true,
//         responsiveClass:true,
//         responsive:{
//             0: {
//                 items: 1,
//             },
//             600: {
//                 items: 3,
//             },
//             1000: {
//                 items: 3,
//             }
//         }
//     });
//   });

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        margin:30,
        loop:true,
        nav:true,
        autoplay:true,
        responsiveClass: true,
            responsive: {
                    0: {
                        items: 1,
                    },
                    600: {
                        items: 3,
                    },
                    1000: {
                        items: 3,
                    }
                }
    });
  });