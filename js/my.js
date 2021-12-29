jQuery.validator.addMethod("usPhoneFormat", function(value, element) {
return this.optional(element) || /\d{1} [\(]\d{3}[\)] \d{3}[\-]\d{2}[\-]\d{2}/.test(value);
}, "Enter a valid phone number.");
$(window).on('load resize',function(){
    var pagew = $(window).outerWidth()
    var c_width = $('.intro_section .container').outerWidth() - 40
    
    $('.fullw').css('width','calc(100% + '+((pagew - c_width)/2)+'px)')
})
$(window).on('load scroll',function(){
    if($(window).scrollTop() > 50){
        $('header').addClass('fixMe')
    }else {
        $('header').removeClass('fixMe')
    }
    
    var parallaxElement = $(".parallax_scroll"),
      parallaxQuantity = parallaxElement.length;
    window.requestAnimationFrame(function() {
      for (var i = 0; i < parallaxQuantity; i++) {
        var currentElement = parallaxElement.eq(i),
          windowTop = $(window).scrollTop(),
          elementTop = currentElement.offset().top - 400,
          elementHeight = currentElement.height(),
          viewPortHeight = window.innerHeight * 0.5 - elementHeight * 0.5,
          scrolled = windowTop - elementTop + viewPortHeight;
          currentElement.css({
            transform: "translate3d(0," + scrolled * (-0.005 - i*0.1) + "px, 0)"
          });
      }
    });
})
 $(window).load(function(){
     
     setTimeout(function(){
         var qul_img = '';
     if($(window).outerWidth() > 1250){
         qul_img = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAFA3PEY8MlBGQUZaVVBfeMiCeG5uePWvuZHI////////////////////////////////////////////////////2wBDAVVaWnhpeOuCguv/////////////////////////////////////////////////////////////////////////wAARCAC1AmkDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AIgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/2Q=='
     }else {
         if($(window).outerWidth() < 1250 && $(window).outerWidth() >  991){
             qul_img = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAFA3PEY8MlBGQUZaVVBfeMiCeG5uePWvuZHI////////////////////////////////////////////////////2wBDAVVaWnhpeOuCguv/////////////////////////////////////////////////////////////////////////wAARCAC1AeADASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AIgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/2Q=='
         }else {
             qul_img = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAFA3PEY8MlBGQUZaVVBfeMiCeG5uePWvuZHI////////////////////////////////////////////////////2wBDAVVaWnhpeOuCguv/////////////////////////////////////////////////////////////////////////wAARCAC1AUADASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AIgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/2Q=='
         }
     }
     
    if ($("#canvas").length) {
   var url = 'img/bg_color.jpg';
   var url2 = 'img/grass_draw.jpg';
var canvas = document.getElementById('canvas');
var canvas2 = document.getElementById('canvas2');
var header = document.getElementById('header');
var container = document.getElementById('container');
var ctx = canvas.getContext('2d');
        
var img = new Image();
img.src = url;
img.onload = function () {
  var width = Math.min(500, img.width);
  var height = img.height * (width / img.width);
  var headerWidth = $(".header").innerWidth(),
  headerHeight = $(".header").innerHeight();
    
    $("#box").addClass("box_bg");

  canvas.width = headerWidth;
  canvas.height = headerHeight;
ctx.fillStyle = "#F4F4F4";
ctx.fillRect(0, 0, headerWidth, headerHeight);
    
};

var isPress = false;
var old = null;
canvas2.addEventListener('mousemove', function (e){
  isPress = true;
  old = {x: e.offsetX, y: e.offsetY};
});
        function checker(){
          var quality = 0.1;
            console.log(canvas.toDataURL('image/jpeg', quality))
          if(canvas.toDataURL('image/jpeg', quality) == qul_img){
              if(!$('.draw_wrp').hasClass('drawd')){
                  $('#sale').modal('toggle')
                  $('.sale_get').show()
              }
              $('.draw_wrp').addClass('drawd')
      
      }
      
        }

        
canvas2.addEventListener('mousemove', function (e){
  if (isPress) {
    var x = e.offsetX;
    var y = e.offsetY;
    ctx.globalCompositeOperation = 'destination-out';

    ctx.beginPath();
    ctx.arc(x, y, 50, 0, 2 * Math.PI);
    ctx.fill();
    old = {x: x, y: y};    
  }
});
        
        
    canvas2.addEventListener("touchmove", function (e) {
         e.preventDefault();
  var touch = e.touches[0] || e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
  var mouseEvent = new MouseEvent("mousemove", {
    clientX: touch.clientX,
    clientY: touch.clientY
  });
  canvas2.dispatchEvent(mouseEvent);
}, false);
        
    if(!$(window).outerWidth()<768){
        setTimeout(function(){
        setInterval(function(){
        checker()
    },200)
    },4500)
    }
canvas2.addEventListener('mouseup', function (e){
  isPress = false;
}); 
    
    $(window).on('resize',function() {
    if( window.innerWidth > 1220 ){
        var width = Math.min(500, img.width);
  var height = img.height * (width / img.width);
    var headerWidth = $(".header").innerWidth(),
        headerHeight = $(".header").innerHeight();
    
  $("#box").addClass("box_bg");

  canvas.width = headerWidth;
  canvas.height = headerHeight;
  ctx.drawImage(img, 0, 0, headerWidth, headerHeight);
    }
});
        
setTimeout(function(){
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(0, 150, 50, 0, 2 * Math.PI);
    ctx.arc(50, 150, 50, 0, 2 * Math.PI);
    ctx.arc(100, 150, 50, 0, 2 * Math.PI);
    ctx.arc(150, 150, 50, 0, 2 * Math.PI);
    ctx.fill();
    
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(400, 0, 50, 0, 2 * Math.PI);
    ctx.arc(450, 50, 50, 0, 2 * Math.PI);
    ctx.arc(500, 100, 50, 0, 2 * Math.PI);
    ctx.fill();
    
},500)
        
$(window).trigger('resize');
    
    }
     },1400)
     setTimeout(function(){
        $('.intro_section').addClass('vis')
    },200)
     
     
    const case_slider = new Swiper('.case_slider', {
  loop: true,
autoHeight:true,
  navigation: {
    nextEl: '.go_next',
    prevEl: '.go_prev',
  },
    pagination: {
    el: '.swiper-pagination',
    clickable:true
  },
    lazy: true,
    autoplay: {
   delay: 6000,
    disableOnInteraction:false
 },
});
     
    const about_img2_slider = new Swiper('.about_img2_slider', {
  loop: false,
autoHeight:false,
    pagination: {
    el: '.swiper-pagination',
    clickable:true
  },
    lazy: true,
    autoplay: {
   delay: 3500,
    disableOnInteraction:false
 },
});

     
var complexSlider = new Swiper('.complex-slider', {
            slidesPerView: 4,
			spaceBetween: 100,
			loop: true,
			breakpoints: {
				320: {
      slidesPerView: 2,
      spaceBetween: 14
    },
                767: {
      slidesPerView: 2,
      spaceBetween: 40
    },992: {
      slidesPerView: 4,
      spaceBetween: 100
    },
			  },
            lazy: true,
			on: {
				slideChangeTransitionStart: function() {
					$('.icon-slide').removeClass('active');
				},
				slideChangeTransitionEnd: function() {
					$('.icon-slide').addClass('active');
				}
			}
        });
     
     
     
     $('.fix_figure').stick_in_parent({
    offset_top:100
});

    

     
     function make_calc(){
         var price = 0;
         
         function inRange(n, nStart, nEnd){if(n>=nStart && n<=nEnd) return true;else return false;}
         
         var current_type = $('.check_wrp').find('.active').text()
         $('.type_object').val(current_type)
         
         var object_square = $('#slider').find('.noUi-tooltip').text().replace(/\s/g, '');
         $('.square_object').val(object_square)
         
         var object_square_formated = parseFloat(object_square)
         
         if($('.more_than_70').hasClass('active')){
            price = 30;
            $('.price_area li:nth-child(1)').slideUp()
         }else {
             if(inRange(object_square,500,1000)){
             price = 60
         }
         if(inRange(object_square,1000,3000)){
             price = 50
         }
         if(inRange(object_square,3001,10000)){
             price = 45
         }
         if(inRange(object_square,10001,30000)){
             price = 40
         }
         if(inRange(object_square,30001,70000)){
             price = 35
         }
         $('.price_area li:nth-child(1)').slideDown()
         }
         
         $('.koef_price').text(price)
         
         var price = price*object_square_formated;
         var moneyFormat = wNumb({thousand: ' '});
         moneyFormat.to(price)
         if(!$('.more_than_70').hasClass('active')){
         $('.total_price').text(moneyFormat.to(price))
         $('.calculated_price').val(moneyFormat.to(price))
         }else {
             $('.calculated_price').val('Выбрано более 70к м2')
         }
         
     }
     
     
    var slider = document.getElementById('slider');
noUiSlider.create(slider, {
    start: 25000,
    step:50,
    connect: 'lower',
    range: {
        'min': 500,
        'max': 70000
    },
    tooltips: true,
    format: wNumb({
        decimals: 0,
        thousand: ' ',
    }),
    
    
});
     slider.noUiSlider.on('slide', function( values, handle ) {
    make_calc()
});
     
     
     $('.check_wrp div').click(function(){
    $('.check_wrp div').removeClass('active')
    $(this).addClass('active')
         make_calc()
})
$('.more_than_70').click(function(){
    $(this).toggleClass('active')
    make_calc()
})
make_calc() 
     
     
    
});
$(window).on('load scroll',function(){
    if(($(window).scrollTop() > $('.scroll_block1').offset().top) && ($(window).scrollTop() < $('.scroll_block2').offset().top - 350)){
        $('.fix_figure').attr('class','fix_figure fix_fig1_show')
    }
    
    if(($(window).scrollTop() > $('.scroll_block2').offset().top - 350) && ($(window).scrollTop() < $('.scroll_block3').offset().top - 350)){
        $('.fix_figure').attr('class','fix_figure fix_fig2_show')
    }
    
    if(($(window).scrollTop() > $('.scroll_block3').offset().top - 350) && ($(window).scrollTop() < $('.auto_poliv').offset().top)){
        $('.fix_figure').attr('class','fix_figure fix_fig3_show')
    }

    
})
$(window).on('load scroll',function(){
    if(($(window).scrollTop() > $('.scroll_block4').offset().top) && ($(window).scrollTop() < $('.scroll_block5').offset().top - 350)){
        $('.fix_figure').attr('class','fix_figure fix_fig4_show')
    }
    
    if(($(window).scrollTop() > $('.scroll_block5').offset().top - 350) && ($(window).scrollTop() < $('.scroll_block6').offset().top - 350)){
        $('.fix_figure').attr('class','fix_figure fix_fig5_show')
    }
    
    if(($(window).scrollTop() > $('.scroll_block6').offset().top - 350) && ($(window).scrollTop() < $('.auto_poliv2').offset().top)){
        $('.fix_figure').attr('class','fix_figure fix_fig6_show')
    }

    
})
$(document).ready(function() {
$("input[name='phone']").mask("+0 (000) 000-00-00");
$("input[name='phone']").keypress(function(e){
    if (e.which === 56 || e.which === 104) {
        if($(this).val()==''){
            e.preventDefault();
            $(this).val('+7')
        }
    }else {
        if($(this).val()==''){
            $(this).val('+7')
        }
    }
})
$('a[href^="#"]').click(function( event ) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top - 110}, 500);
});

    
for(var x = 1;x<100;x++){
    $('.line_float1').not('.text2').append('<span>Вы в одном шаге от дома мечты</span><span>новый дом за 4 месяца</span><span>Вы в одном шаге от дома мечты</span><span>новый дом за 4 месяца</span><span>Вы в одном шаге от дома мечты</span><span>новый дом за 4 месяца</span>')
    $('.line_float2').not('.text2').append('<span>Вы в одном шаге от дома мечты</span><span>новый дом за 4 месяца</span><span>Вы в одном шаге от дома мечты</span><span>новый дом за 4 месяца</span><span>Вы в одном шаге от дома мечты</span><span>новый дом за 4 месяца</span>')

    $('.line_float3.text2').append('<span>Бесплатная 3D визуализация</span><span>Бесплатная 3D визуализация</span><span>Бесплатная 3D визуализация</span><span>Бесплатная 3D визуализация</span><span>Бесплатная 3D визуализация</span><span>Бесплатная 3D визуализация</span>')
    $('.line_float4.text2').append('<span>Бесплатная 3D визуализация</span><span>Бесплатная 3D визуализация</span><span>Бесплатная 3D визуализация</span><span>Бесплатная 3D визуализация</span><span>Бесплатная 3D визуализация</span><span>Бесплатная 3D визуализация</span>')
        
    $('.line_float1.text2').append('<span>Гарантия <i>на</i> Фасад 5 лет</span><span>Гарантия <i>на</i> Фасад 5 лет</span><span>Гарантия <i>на</i> Фасад 5 лет</span>')
    $('.line_float2.text2').append('<span>Гарантия <i>на</i> Фасад 5 лет</span><span>Гарантия <i>на</i> Фасад 5 лет</span><span>Гарантия <i>на</i> Фасад 5 лет</span>')
}


var value = 0;
setInterval(function(){
    value=value-1;
    $('.line_float1').css('transform','rotate(7.25deg) translatex('+value+'px)')
},1400/60)  
    
var value2 = 0;
setInterval(function(){
    value2=value2+1;
    $('.line_float2').css('transform','rotate(1.5deg) translatex('+value2+'px)')
},1800/60)  

var value = 0;
setInterval(function(){
    value=value-1;
    $('.line_float3').css('transform','rotate(7.25deg) translatex('+value+'px)')
},1400/60)  
    
var value2 = 0;
setInterval(function(){
    value2=value2+1;
    $('.line_float4').css('transform','rotate(1.5deg) translatex('+value2+'px)')
},1800/60)  


   

    
$('.type_item').click(function(){
    $('.type_item').removeClass('active')
    $(this).addClass('active')
})
var counter = 1;
    
function chosen(){
    var chosen_type = $('.type_checker').find('.active .type_ttle').text()
    var square_vl = $('.square_posev').val()
    $('.quiz_type').val(chosen_type)
    $('.quiz_square').val(square_vl)
}
    
function move(direction){
    if(direction=='prev'){
        counter--;
        $('.step_item').slideUp(300)
        setTimeout(function(){
            $('.step'+counter+'').slideDown(300)
        },300)
    }else {
        counter++;
        $('.step_item').slideUp(300)
        setTimeout(function(){
            $('.step'+counter+'').slideDown(300)
        },300)
    }             
}
$('.quiz_prev').click(function(e){
    e.preventDefault()
    if(counter!=1){
        move('prev')
        $('.quiz_header h2').html('Рассчитайте примерную стоимость гидропосева <br>для вашего объекта <i>Ответьте на вопросы и мы подберем для вас нужный проект </i>')
    }
    $('.quiz_next').show()
    $('.send_quiz').hide()
    chosen()
}) 
$('.quiz_next').click(function(e){
    e.preventDefault()
    if(counter==1){
        move('next')
        $('.quiz_header h2').html('Рассчитайте примерную стоимость гидропосева <br>для вашего объекта <i>Ответьте на вопросы и мы подберем для вас нужный проект </i>')
    }else {
        if(counter == 2){
            if($('.square_posev').val() == ''){
                alert('Необходимо ввести площадь посева')
            }else {
                move('next')
            }
            $('.quiz_header h2').html('Укажите свои контактные данные <br>для связи с вами')
            $('.quiz_next').hide()
            $('.send_quiz').show()
        }else {
            if(counter == 3){
                
            }
        }
    }
    
    chosen()
})
$('.send_quiz').click(function(){
    $('.quiz_form').submit()
})
    function scrollbarWidth() {
    var block = $('<div>').css({'height':'50px','width':'50px'}),
        indicator = $('<div>').css({'height':'200px'});

    $('body').append(block.append(indicator));
    var w1 = $('div', block).innerWidth();    
    block.css('overflow-y', 'scroll');
    var w2 = $('div', block).innerWidth();
    $(block).remove();
    return (w1 - w2);
}
    $('.modal').on('shown.bs.modal', function (e) {
  $('body').css('padding-right',''+scrollbarWidth()+'px')
    $('header').css('width','calc(100% - '+scrollbarWidth()+'px)')
})
$('[data-toggle="modal"]').click(function(){
	$('header').css('width','calc(100% - '+scrollbarWidth()+'px)')
})
$('.modal').on('hidden.bs.modal', function (e) {
  $('body').css('padding-right','0px')
    $('header').css('width','100%')
})
$('.tarif_item .order_but').click(function(){
    var txt = $(this).attr('data-item')
    $('#order .ordered_item').val(txt)
})
$('.pressing span').click(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('#politika').modal('toggle')
})
    
$('form').each(function(){
        var forma = $(this)
        $(forma).validate({
			rules: {
                phone: {
          required: true,
            usPhoneFormat: true,
        }
      },
			submitHandler: function(form) {
			$.ajax({
			type: "POST", 
			url: "mail.php", 
			data: $(forma).serialize(), 
			success: function(html)
			{		
				if($('body').find('.modal.in').length > 0){
                    $('.modal').modal('hide');
                    setTimeout(function(){
                        $('#thanks').modal('toggle');
                    },600)
                }else {
                    $('#thanks').modal('toggle');
                }
			} 
			}); 
			return false;
		}
	});
    })
    $('.open_nav').click(function(){
        $('.top_list').slideToggle(300)
    })
    
    $('.pressing').click(function() {
        $(this).toggleClass('pressed')
        $(this).closest('form').find('.orange_but').toggleClass('noActive').prop('disabled', function(i, v) { return !v; });
    })

});


    var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/player_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  var player;
  function onYouTubePlayerAPIReady() {
    player = new YT.Player('ytplayer', {
      videoId: 'qk4bF3wi-c0',
      events: {
            'onStateChange': onPlayerStateChange
          }
    });
    var done = false;
    function onPlayerStateChange(event) {
       if (event.data == YT.PlayerState.PLAYING && !done) {
           setInterval(function(){
               if((player.getCurrentTime() > 0) && (player.getCurrentTime() < 24)){
                   $('.video_links li').removeClass('active')
                   $('.video_links > li:nth-child(1)').addClass('active')
               }else {
                   if((player.getCurrentTime() > 24) && (player.getCurrentTime() < 46)){
                   $('.video_links li').removeClass('active')
                   $('.video_links > li:nth-child(2)').addClass('active')
               }else {
                   if((player.getCurrentTime() > 46) && (player.getCurrentTime() < 63)){
                   $('.video_links li').removeClass('active')
                   $('.video_links > li:nth-child(3)').addClass('active')
               }else {
                   if((player.getCurrentTime() > 63) && (player.getCurrentTime() < 77)){
                   $('.video_links li').removeClass('active')
                   $('.video_links > li:nth-child(4)').addClass('active')
               }else {
                   if((player.getCurrentTime() > 77) && (player.getCurrentTime() < 93)){
                   $('.video_links li').removeClass('active')
                   $('.video_links > li:nth-child(5)').addClass('active')
               }else {
                   if((player.getCurrentTime() > 93)){
                   $('.video_links li').removeClass('active')
                   $('.video_links > li:nth-child(6)').addClass('active')
               }
               }
               }
               }
               }
               }
               
           },1000)
       }
        
    }
      $('.video_links li').click(function(){
          if(player){
              $('.video_links li').removeClass('active')
              $(this).addClass('active')
              player.seekTo(parseFloat($(this).attr('data-time')), true);
              player.play()
    }
      })
  
  }



