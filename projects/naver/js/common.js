// 헤더 스크롤 이벤트

$(function () {
    let $header = $(".header");
    let headerHeight = $header.outerHeight();

    $(window).on("scroll", function () {
        let windowTop = $(this).scrollTop();
        if (windowTop >= headerHeight) {
            $header.addClass("fixed");
        } else {
            $header.removeClass("fixed");
        }
    });
});

// $(function () {
//     let header = document.querySelector(".header");
//     let headerHeight = header.offsetHeight;

//     window.onscroll = function () {
//         let windowTop = window.scrollY;
//         if (windowTop >= headerHeight) {
//             header.classList.add("fixed");
//         } else {
//             header.classList.remove("fixed");
//         }
//     };
// });


// 탑버튼 이벤트
$(function() {
    $(".btn_up").click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 400); // 400ms 동안 상단으로 이동
        return false; // 기본 동작 방지
    });
});