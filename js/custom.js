$(function(){
   $('.quick-menu ul li').click(function(){
        $('.quick-menu ul li').removeClass('on');
        $(this).addClass('on');
    })
        
    $('.tab li').on('click', function () {
        // 모든 탭 버튼의 'active' 클래스 제거
        $('.tab li').removeClass('on');
        // 클릭한 탭 버튼에 'active' 클래스 추가
        $(this).addClass('on');
    
        // 모든 탭 콘텐츠 숨김
        $('.tab-panel').removeClass('on');
        // 클릭한 탭 버튼과 연결된 콘텐츠 표시
        const target = $(this).data('tab');
        $('#' + target).addClass('on');
      });
  });

    $(function(){
        $('.review-cont').slideUp();                
        $('.review').click(function(){                
            $('.review-cont').stop().slideUp();
            $(this).parents().siblings('.review-cont').stop().slideToggle();
            $(this).find('i').toggleClass('active');
        });
    })


    //메인슬라이드 2
   var teacherSw = new Swiper(".teacherSw", {     
       slidesPerView: 5,
       spaceBetween: 20,   
       navigation: {
           nextEl: ".teacher-next",
           prevEl: ".teacher-prev",
       },
       breakpoints: {
           640: {
           slidesPerView: 5,
           spaceBetween: 20,
           },
           480: {
               slidesPerView: 4,
               spaceBetween: 20,
           },
       },
       //speed:1000,
   });
