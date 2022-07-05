$(function(){
    // ハンバーガ―メニュー
    $('.humburger').on('click', function() {
      humburger();
    });
    $('#navi a').on('click', function() {
      humburger();
    });
  
    // スムーススクロール
    $('a[href^="#"]').click(function(){
      let href= $(this).attr("href");
      let target = $(href == "#" || href == "" ? 'html' : href);
      let position = target.offset().top;
      $("html, body").animate({scrollTop:position}, 600, "swing");
      return false;
    });
  
    // フェード表示
    $(".inview").on("inview", function (event,view) {
      if (view) {
        $(this).stop().addClass("show");
      }
      else {
        $(this).stop().removeClass("show");
      }
    });
 
    // スクロール時のイベント
    $(window).scroll(function() {
      let scroll = $(window).scrollTop();

    //   メインビジュアルの拡大・縮小
      mv_scale(scroll);
  
      //ロゴ、ハンバーガーメニューの表示
      if (scroll > 520) {
        $('.logo').fadeIn(500);
        $('.humburger').fadeIn(500);
      } else {
        $('.logo').fadeOut(500);
        $('.humburger').fadeOut(500);
      }
  
      //サイドボタンを表示
      let gallery_position = $('#gallery').offset().top - $(window).height();
      let access_position = $('#access').offset().top - $(window).height();
  
      if (window.innerWidth > 900) {
        if(scroll > gallery_position){
          if(scroll < access_position){
            $('#side-btn').css({
              'transform': 'rotate(-90deg) translateY(0)'
            });
          } else {
            $('#side-btn').css({
              'transform': 'rotate(-90deg) translateY(60px)'
            });
          }
        } else {
          $('#side-btn').css({
            'transform': 'rotate(-90deg) translateY(60px)'
          });
        }
      }
  
      // Accessの背景画像を表示
      let contact_position = $('#contact').offset().top - $(window).height();
      if(scroll > access_position){
        if(scroll < contact_position){
          $('.bg').fadeIn(500);
        } else {
          $('.bg').fadeOut(500);
        }
      } else {
        $('.bg').fadeOut(500);
      }
    });
  
    // 画面読み込み時と画面幅変更時のイベント
    $(window).on('load resize', function() {
      let scroll = $(window).scrollTop();

      //メインビジュアルの拡大・縮小
      mv_scale(scroll);
    });
  });
  
  //ハンバーガ―メニュー（共通処理）
  function humburger() {
    $('.humburger').toggleClass('active');
    if ($('.humburger').hasClass('active')) {
      $('#navi').addClass('active');
    } else {
      $('#navi').removeClass('active');
    }
  }
  
  //メインビジュアルの拡大・縮小（共通処理）
  function mv_scale(scroll) {
    if (window.innerWidth > 900) {
      $('#mainvisual img').css({
        'width': 100/3 + scroll/10  + '%'
      });
    } else {
      $('#mainvisual img').css({
        'width': 100 - scroll/10  + '%'
      });
    }
  }