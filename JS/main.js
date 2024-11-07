let lastScrollTop = 0;
$(window).on('scroll', function() {
  let currentScrollTop = $(this).scrollTop(); // 현재 스크롤 위치

  if (currentScrollTop > 110) {

    if (currentScrollTop > lastScrollTop) {
      // 아래로 스크롤 중이면 헤더 숨기기
      if (!$('header').is(':animated')) { // 애니메이션 중첩 방지
        $('header').removeClass('fixed').slideUp();
      }
    } else {
      // 위로 스크롤 중이면 헤더 보이기
      if (!$('header').is(':animated')) {
        $('header').addClass('fixed').slideDown();
        $('.dep1>li, .header_util').css('color', '#000');
      }
    }
  } else {
    // 스크롤이 110px 이하일 때는 헤더가 보임
    $('header').removeClass('fixed').slideDown();
    $('.dep1>li, .header_util').css('color', '#fff');
  }
  lastScrollTop = currentScrollTop; // 이전 스크롤 위치 업데이트
});

let headerBg = $('.dep2').innerHeight() + 50
$('#gnb .dep1>li').hover(function(){
  $('.dep2').stop().slideDown()
  $('header').css('background' , '#fff')
  $('header #gnb .dep1>li').css('color' , '#000')
  $('header .header_util').css('color' , '#000')
  $('header').append(`<div class='header_bg'></div>`)
  $('.header_bg').stop().animate({'height': headerBg})
},function(){
  $('.dep2').stop().slideUp()
  $('header').css('background' , 'none')
  $('header #gnb .dep1>li').css('color' , '#fff')
  $('header .header_util').css('color' , '#fff')
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

  let newsRight = document.querySelector('.news_right');
  let heightNewsRight = newsRight.offsetHeight;

  gsap.registerPlugin(ScrollTrigger);


ScrollTrigger.matchMedia({

	"(min-width: 1200px)": function() {
    gsap.to('.news_left', {
      scrollTrigger: {
        trigger: '.news_left',
        start: 'top 110px',
        end : `+=${heightNewsRight}`,
        pin: true,
        scrub: true,
      }
    });
  },
});
