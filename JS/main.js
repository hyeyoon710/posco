$(window).on('scroll', function() {
  if ($(window).scrollTop() > 110) { // 스크롤이 100px 이상 내려가면
    $('header').addClass('fixed');
  } else {
    $('header').removeClass('fixed');
  }
})
let headerBg = $('.dep2').innerHeight() + 50
  $('#gnb .dep1>li').hover(function(){
    $('.dep2').stop().slideDown()
  $('header').append(`<div class='header_bg'></div>`)
  $('.header_bg').stop().animate({'height': headerBg})
},function(){
  $('.dep2').stop().slideUp()
  $('.header_bg').stop().animate({'height': 0}, function() {
    $(this).remove()
  })
})

$('.lang_wrap button').click(function() {
  $('.lang_wrap ul').toggleClass('show')
})

$('.esg_list .btn_1').click(function() {
  $('.env').css('z-index' , 1)
  $('.sc').css('z-index' , 0)
  $('.gov').css('z-index' , 0)
})
$('.esg_list .btn_2').click(function() {
  $('.env').css('z-index' , 0)
  $('.sc').css('z-index' , 1)
  $('.gov').css('z-index' , 0)
})
$('.esg_list .btn_3').click(function() {
  $('.env').css('z-index' , 0)
  $('.sc').css('z-index' , 0)
  $('.gov').css('z-index' , 1)
})

//Swiper
document.addEventListener("DOMContentLoaded", function () {
  const btns = document.querySelectorAll('.master_btns button');
  const contents = document.querySelectorAll('.content_wrap > div');
  let swiper; // Swiper 인스턴스를 전역으로 선언

  // 초기 상태: 첫 번째 콘텐츠만 보이게 설정하고 Swiper 초기화
  contents.forEach((content, index) => {
    if (index === 0) {
      content.style.display = 'block';
      swiper = new Swiper('.contents_1 .main_swiper', {
        autoplay: true,
        loop: true,
      });
    } else {
      content.style.display = 'none';
    }
  });

  // 버튼 클릭 시 해당 콘텐츠만 보이게
  btns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      contents.forEach((content, i) => {
        content.style.display = 'none';
      });

      contents[index].style.display = 'block';

      // Swiper 인스턴스 다시 초기화
      if (swiper) swiper.destroy(true, true); // 기존 Swiper 제거
      swiper = new Swiper(`.contents_${index + 1} .main_swiper`, { // 새로운 Swiper 초기화
        autoplay: true,
        loop: true,
      });

      // 클릭한 버튼에 대한 스타일 조정 (투명도 조절)
      btns.forEach(button => button.style.opacity = 0.5);
      btn.style.opacity = 1;
    });
  });
});

//ScrollTrigger

// let newsLeft = document.querySelector('.news_left')
// let heightNewsLeft = newsLeft.offsetHeight;
// console.log('Height of .news_left:', heightNewsLeft);
// gsap.registerPlugin(ScrollTrigger);

// gsap.to('.news_left', {
//   scrollTrigger: {
//     trigger: '.news_left',
//     start: 'top 110px',
//     // end : 'bottom bottom',
//     end : `${heightNewsLeft}px`,
//     pin: true,
//     scrub: true,
//     markers :true

//   }
// });

window.addEventListener('load', () => {
  let newsRight = document.querySelector('.news_right');
  let heightNewsRight = newsRight.offsetHeight;
  console.log('Height of .news_left:', heightNewsRight);

  gsap.registerPlugin(ScrollTrigger);

  gsap.to('.news_left', {
    scrollTrigger: {
      trigger: '.news_left',
      start: 'top 110px',
      end : `+=${heightNewsRight}`,
      // end : 'bottom top',
      // end: '+=2000',
      pin: true,
      scrub: true,
      // markers: true,
    }
  });
});


// $(document).ready(function() {
//   var imgWidth = $('.news_txt img').width();  // 너비 가져오기
//   var imgHeight = $('.news_txt img').height();  // 높이 가져오기

//   console.log("이미지의 너비: " + imgWidth + "px"); //384.125px
//   console.log("이미지의 높이: " + imgHeight + "px"); //433px
// });