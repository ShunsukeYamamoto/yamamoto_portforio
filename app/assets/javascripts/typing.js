$(function(){
  $('.lastname').delay(3100).queue(function(){
    $(this).css('opacity','1')
  })

  $('.top_scroll').on('click',function(){
    $("html,body").animate({scrollTop:0});
  })

  $('.about_scroll').on('click',function(){
    $("html,body").animate({scrollTop:$('.second_wrapper').position().top});
  })

  $('.works_scroll').on('click',function(){
    $("html,body").animate({scrollTop:$('.third_wrapper').position().top});
  })

  $('.footer_scroll').on('click',function(){
    $("html,body").animate({scrollTop:$('.footer').position().top});
  })

  var mySwiper = new Swiper('.swiper-container', {
    autoHeight: false,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  var works_infos = $(document).find('.works_info');
  $(works_infos[0]).css('display','block')

  $('.swiper-button-prev').on('click',function(){
    $(works_infos).each(function(index,element){
      if($(element).css('display') === 'block'){
        $(this).css('display','none')
      }else{
        $(this).css('display','block')
      }
    })
  })

  $('.swiper-button-next').on('click',function(){
    $(works_infos).each(function(index,element){
      if($(element).css('display') === 'block'){
        $(this).css('display','none')
      }else{
        $(this).css('display','block')
      }
    })
  })

  
})

$(document).on('scroll',function(){
  var currentScroll = $(window).scrollTop();
  if(currentScroll < 40){
    $('.second_wrapper').animate({'opacity':1},{'duration':1000})
  }

  if(currentScroll >= $('.third_wrapper').position().top){
    $('.third_wrapper').animate({'opacity':1},{'duration':1000})
  }

  if(currentScroll >= $('.footer').position().top){
    $('.footer').animate({'opacity':1},{'duration':1000})
  }

})







