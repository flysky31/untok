$(document).ready(function () {
    //메인슬라이드 1
    var mvsw = new Swiper(".mvsw", {
        loop:true,
        navigation: {
            nextEl: ".mvsw-next",
            prevEl: ".mvsw-prev",
          },
        slidesPerView: "auto",
        centeredSlides: true,
        speed:1000,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
    });
    //메인슬라이드 2
    // var teacherSw = new Swiper(".teacherSw", {     
    //     slidesPerView: 5,
    //           spaceBetween: 20,   
    //     navigation: {
    //         nextEl: ".teacher-next",
    //         prevEl: ".teacher-prev",
    //       },
    //     breakpoints: {
    //         640: {
    //           slidesPerView: 4,
    //           spaceBetween: 20,
    //         },
    //         480: {
    //             slidesPerView: 3,
    //             spaceBetween: 20,
    //           },
    //       },
    //     //speed:1000,
    // });
    //메인 후기 드롭다운

   /* $('.review-cont').slideUp();

    $('.review').click(function(){
        
        $('.review-cont').stop().slideUp();
        $(this).parents().siblings('.review-cont').stop().slideToggle();
        $(this).find('i').toggleClass('active');
    });*/


    //select 텍스트 가운데 정렬
    $('select').css('text-align', 'center');
    

    //상세 상담사 배너 하트 
    $("#detail_area .icon").click(function(e){
        e.preventDefault();
        $(this).toggleClass("on");
    })
    //상세 좋아요
    $(".border_line .num").click(function(e){
        e.preventDefault();
        $(this).toggleClass("on");
    })


     // 모달 열기 버튼 클릭 시 이벤트 핸들러
     $('.declaration').click(function() {
        $('#myModal').addClass('show');
      });

      /*$('.declaration2').click(function() {
        $('#myModal').addClass('show');
      });*/

  

      
      /*$('.review_btn').click(function() {
        $('#review_Modal').addClass('show');
      });*/
      $('.last a').click(function() {
        $('#calculate').addClass('show');
      });
    
      $('.agree_box a').click(function() {
        $('#terms_modal').addClass('show');
      });

      /*$('.auto_choice .deps02 ol li > .myCheckbox').click(function() {
        $('#alarm_modal').addClass('show');
      });*/

      //퀵바 상담/예약 팝업
      /*$('.quick_bar a:first-child').click(function() {
        $('#Consultus').addClass('show');
      });
      $('.quick_bar a:last-child').click(function() {
        $('#reservation').addClass('show');
      });*/

      $('#list .teacher .close').click(function() {
        $('#connexion_modal').addClass('show');
      });

      //상담후기 페이지 정책
      $('#cs_review_list .member_edite').click(function() {
        $('#poricy_modal').addClass('show');
      });

      //상담후기 자세히보기
      $('.more').click(function() {
        $('#rev_more').addClass('show');
        //상담문의
        $('#inquiry_more').addClass('show');
        //상담내역
        $('#history_more').addClass('show');
      });
      //회원탈퇴
      $('.secession .btn').click(function() {
        $('#alarm_modal').addClass('show');       
      });
      //회원정보수정팝업
     /* $('#member_modify').click(function() {
        $('#alarm_modal2').addClass('show');       
      });*/
      /*//예약취소팝업
      $('.booking_canel').click(function() {
        $('#booking_myModal').addClass('show');       
      });*/

      //발신요금안내
      $('#use_tab_wrap .usebtn a').click(function() {
        $('#sent_more').addClass('show');       
      });
      
      /*//상담사페이지 - 답변달기
      $('.inqurity .answer_btn, .inqurity .correction_btn, .best_area .answer_btn').click(function() {
        $('#answer_more').addClass('show');       
        $('#correction_more').addClass('show');       
      });
      //상담사 후기 - 수정하기
      $('.best_area .modi_btn').click(function() {
        $('#modify_more').addClass('show');       
           
      });*/




      // 내용 입력 모달의 확인 버튼 클릭 시 이벤트 핸들러
      /*$('#confirmBtn').click(function() {
        var content = $('#contentInput').val();
        if (content !== '') {
          $('#myModal').removeClass('show');
          $('#successModal').addClass('show');
         }
      });*/
    
      $('#re_confirmBtn').click(function() {
        var content = $('#contentValue').val();
        if (content !== '') {
          $('#guideModal').addClass('show');
        }
      });

    
      $('#myModal #confirmBtn').click(function() {
        var content = $('#contentValue').val();
        if (content !== '') {
          $('#successModal').addClass('show');
        }
      });


   

      // 내용 입력 모달의 취소 버튼 클릭 시 이벤트 핸들러
      $('#cancelBtn').click(function() {
        $('#myModal').removeClass('show');
        $('#review_Modal').removeClass('show');
        $('#alarm_modal').removeClass('show');
        $('#booking_myModal').removeClass('show');
        $('#reservation').removeClass('show');
        $('#reservation').removeClass('show');
        $('#inquiry_more').removeClass('show');
      });

      $('#re_cancelBtn').click(function() {     
        $('#review_Modal').removeClass('show');
      });
    
      $('#myModal .cancelBtn').click(function() {     
        $('#myModal').removeClass('show');
      });
    
      $('#alarm_confirmBtn').click(function() {     
        $('#alarm_modal').removeClass('show');
      
      });
      $('#myModal #cancelBtn').click(function() {     
        $('#myModal').removeClass('show');
      
      });
    

      // 닫기 버튼 클릭 시 모달 닫기
      $('.close').click(function() {
        $(this).closest('.modal').removeClass('show');
      });
    /*$(document).on('click', '#calc_confirmBtn, #Consultus_Btn, #rev_cancelBtn, #alarm_confirmBtn', function() {*/
    $(document).on('click', '#Consultus_Btn, #rev_cancelBtn, #alarm_confirmBtn', function() {
      //$('#calc_confirmBtn, #Consultus_Btn, #rev_cancelBtn, #alarm_confirmBtn').click(function() {
        $(this).closest('.modal').removeClass('show');
      });
      

      //예약관리 완료 팝업      
      $('#bo_confirmBtn').click(function() {     
        $('#booking_myModal').removeClass('show');
        $('#non_members_Modal').addClass('show');
      
      });


      
    
      //input 클릭 시 부모 클래스 추가
     /* $('.myCheckbox').click(function() {
        $(this).closest('li').toggleClass('active'); 
       
      });*/


      //동의 체크온오프
      $('#auto_result .onoff').click(function() {
        $(this).toggleClass('on');    
      
        if($(".onoff").hasClass("on")){
            $("#mySpan").text("ON");    
            $("#myAgree").text("동의");    
             
        } else{
            $("#mySpan").text("OFF");  
            $("#myAgree").text("미동의");  
            
        }
      });

      //동의 체크온오프
      $('.reception_box .onoff').click(function() {
        $(this).toggleClass('on');    
      
        if($(".ag1 .onoff").hasClass("on")){            
            $("#myAgree1").text("동의");
            $("#reg_mb_sms").prop("checked",true);
            $("#myAgree1").css("color","#76A6D0");                
        } else{           
            $("#myAgree1").text("미동의");
            $("#reg_mb_sms").prop("checked",false);
            $("#myAgree1").css("color","#888");       
        }

        if($(".ag2 .onoff").hasClass("on")){            
            $("#myAgree2").text("동의");
            $("#reg_mb_mailling").prop("checked",true);
            $("#myAgree2").css("color","#76A6D0");                    
        } else{           
            $("#myAgree2").text("미동의");
            $("#reg_mb_mailling").prop("checked",false);
            $("#myAgree2").css("color","#888");              
        }

        if($(".ag3 .onoff").hasClass("on")){            
            $("#myAgree3").text("동의");
            $("#reg_mb_kakao").prop("checked",true);
            $("#myAgree3").css("color","#76A6D0");        
        } else{           
            $("#myAgree3").text("미동의");
            $("#reg_mb_kakao").prop("checked", false);
            $("#myAgree3").css("color","#888");              
        }      
      });


      $('.pay_way .onoff').click(function() {
        $(this).toggleClass('on');    
      
        if($(".ag4 .onoff").hasClass("on")){            
            $("#myAgree4").text("동의");
            $("#auto_flag").prop("checked",true);
            $("#myAgree4").css("color","#76A6D0");                  
        } else{           
            $("#myAgree4").text("미동의");
            $("#auto_flag").prop("checked",false);
            $("#myAgree4").css("color","#888");
        }
       
      });

      //상담사 마이페이지 상담가능불가능
      $('#num_cases .onoff').click(function() {
        $(this).toggleClass('on');    
      
        if($(".onoff").hasClass("on")){            
            $("#myAgree").text("상담가능");    
            $("#myAgree").css("color","#F29544");                  
        } else{           
            $("#myAgree").text("상담불가");             
            $("#myAgree").css("color","#888");
        }


      });



      //tab active
      $("#auto_result .menu_area ul li").click(function(){
            $(this).toggleClass('active');  
            $("#auto_result .menu_area ul li").not(this).removeClass("active");   
      })

      $("#consultation_list ul li").click(function(){
        $(this).toggleClass('active');  
        $("#consultation_list ul li").not(this).removeClass("active");   
    })

    $("#pay_detail_list ul li").click(function(){
        $(this).toggleClass('active');  
        $("#pay_detail_list ul li").not(this).removeClass("active");   
    })

    $("#booking_list ul li").click(function(){
        $(this).toggleClass('active');  
        $("#booking_list ul li").not(this).removeClass("active");   
    })


    $("#reward_list ul li").click(function(){
        $(this).toggleClass('active');  
        $("#reward_list ul li").not(this).removeClass("active");   
    })

    $("#cs_inquiry_list ul li").click(function(){
        $(this).toggleClass('active');  
        $("#cs_inquiry_list ul li").not(this).removeClass("active");   
    })
    $("#cs_review_list ul li").click(function(){
        $(this).toggleClass('active');  
        $("#cs_review_list ul li").not(this).removeClass("active");   
    })
    
    /*$(".time_choice ul li").click(function(){
        $(this).toggleClass('active');  
        $(".time_choice ul li").not(this).removeClass("active");   
    })
    
    $(".timer ul li").click(function(){
        $(this).toggleClass('active');  
        $(".timer ul li").not(this).removeClass("active");   
    })*/

    //상담후기 더보기 드롭다운
    // $("#dropdownButton").click(function(){
    //    $("#dropdownContent").toggleClass("on");
    // })
    // $("#dropdownButton2").click(function(){
    //     $("#dropdownContent2").toggleClass("on"); 
    //  })
     
    $(".show-more-button").click(function() {
        $(".hidden-content").toggle();
        var buttonText = $(this).text();
        $(this).text(buttonText === "더 보기" ? "닫기" : "더 보기");
        $(this).toggleClass("showing");
    });
    $(".show-more-button2").click(function() {
        $(".hidden-content2").toggle();
        var buttonText = $(this).text();
        $(this).text(buttonText === "더 보기" ? "닫기" : "더 보기");
        $(this).toggleClass("showing");
    });
    

    $(".show-more-button3").click(function() {
        $(".hidden-content3").toggle();               
        $(this).toggleClass("showing");
    });


});





/* 상세 페이지 텝메뉴 */
// 초기화 시 첫 번째 탭을 활성화
// 초기화 시 첫 번째 탭을 활성화
//document.getElementById('section1').style.display = 'block';
//텝메뉴
// function openTab(event, tabId) {
//     event.preventDefault();
//     var i, tabContent, tabLinks;

//     // 모든 탭 내용 숨김 처리
//     tabContent = document.getElementsByClassName('content');
//     for (i = 0; i < tabContent.length; i++) {
//         tabContent[i].style.display = 'none';
//     }

//     // 모든 탭 링크에 'active' 클래스 제거
//     tabLinks = document.getElementsByClassName('tab-link');
//     for (i = 0; i < tabLinks.length; i++) {
//         tabLinks[i].className = tabLinks[i].className.replace(' active', '');
//     }

//     // 선택된 탭 내용 보이도록 처리
//     document.getElementById(tabId).style.display = 'block';


//     // 선택된 탭 링크에 'active' 클래스 추가
//     event.currentTarget.className += ' active';


//       // 모든 탭 링크에 'active' 클래스 제거
//     tabLinks = document.getElementsByClassName('tab-link');
//     for (i = 0; i < tabLinks.length; i++) {
//         tabLinks[i].classList.remove('active');
//     }

//     // 선택된 탭 내용 보이도록 처리
//     document.getElementById(tabId).style.display = 'block';

//     // 선택된 탭 링크에 'active' 클래스 추가
//     event.currentTarget.classList.add('active');

//     // 선택된 탭 내용으로 스무스하게 스크롤
//     var selectedTab = document.getElementById(tabId);
//     selectedTab.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
// }





// window.addEventListener('scroll', function(event) {
//     var menu = document.getElementById('patners_m'); 
//     var parent = menu.parentNode; // 부모 요소 가져오기
//     var tab_menu = document.getElementById('tab_box'); 
//     var patners = document.getElementById('patners'); 

//     var menuPosition = menu.getBoundingClientRect().top;
//     var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
    
//     if (menuPosition <= 0) {
//       menu.classList.add('fixed-menu');
//       tab_menu.classList.add('fixed-menu');
//       parent.classList.add('fixed-menu-parent'); 
 
//     } else {
//       menu.classList.remove('fixed-menu');
//       tab_menu.classList.remove('fixed-menu');
//       parent.classList.remove('fixed-menu-parent');
//     }
//   });




//상담후기 더보기 드롭다운
// $(document).ready(function() {
//     $("#dropdownButton").click(function(){
//        $("#dropdownContent").toggleClass("on")  
//     })
//     $("#dropdownButton2").click(function(){
//         $("#dropdownContent2").toggleClass("on")  
//      })
     
// });


//상담후기 페이지 내 하단 리뷰 탭메뉴
document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.tab-button');
    var tabs = document.querySelectorAll('.tab');

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            var target = this.getAttribute('data-target');

            // 모든 탭과 버튼 비활성화
            tabs.forEach(function(tab) {
                tab.classList.remove('active');
            });
            buttons.forEach(function(button) {
                button.classList.remove('active');
            });

            // 선택된 탭 활성화
            document.getElementById(target).classList.add('active');
            this.classList.add('active');
        });
    });
});




  


//totop
//window.onscroll = function() {
   // scrollFunction();
 // };
  
  /*function scrollFunction() {
    var toTopBtn = document.getElementById("toTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      toTopBtn.style.display = "block";
    } else {
      toTopBtn.style.display = "none";
    }
  }
  
  function scrollToTop() {
    var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentPosition > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, currentPosition - currentPosition / 8);
    }
  }*/
function scrollToTop() {
    $("html, body").animate({scrollTop:0}, '500');
    return false;
}




  function goBack() {
    window.history.back();
        history.go(-1);
    // if (document.addEventListener) {
    //     window.addEventListener('pageshow', function (event) {
    //         if (event.persisted || window.performance && window.performance.navigation.type == 2) {
    //             location.reload();
    //         }
    //     }, false);
    // }
  }
  
