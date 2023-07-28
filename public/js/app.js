//jQuery
// $(document).ready(function () {
// });
// $(window).ready(function () {
// });


// // datepicker options
// $(".datepicker").datepicker({
// // $.datepicker.setDefaults({
// // 	regional: 'ko',
// 	dateFormat: "YYYY-MM-DD", // 텍스트 필드에 입력되는 날짜 형식.
// 	// dateFormat: "yymmdd", // 텍스트 필드에 입력되는 날짜 형식.
// 	showOn: "both", // 아이콘과 텍스트 필드 모두 캘린더를 보이기. 아이콘으로 캘린더 선택가능하게 하기
// 	buttonImage: "../../public/img/icons/icon_date.png", // 버튼 이미지
//  buttonText: "Select date"	// 아이콘 툴팁
// 	buttonImageOnly: true, // 아이콘만 표시한다. 
// 	changeMonth: true, // 월을 바꿀수 있는 셀렉트 박스를 표시한다. (기본값 false)
// 	changeYear: true, // 년을 바꿀 수 있는 셀렉트 박스를 표시한다. (기본값 false)
// 	minDate: '-100y', // 현재날짜로부터 100년이전까지 년을 표시한다.
// 	nextText: '다음 달', // 마우스 오버시 next 아이콘의 툴팁.
// 	prevText: '이전 달', // 마우스 오버시 prev 아이콘의 툴팁.
// 	numberOfMonths: [1,1], // 한번에 얼마나 많은 월을 표시할것인가. [2,3] 일 경우, 2(행) x 3(열) = 6개의 월을 표시한다.
// 	stepMonths: 3, // next, prev 버튼을 클릭했을때 얼마나 많은 월을 이동하여 표시하는가. 
// 	yearRange: 'c-100:c+10', // 년도 선택 셀렉트박스를 현재 년도에서 이전, 이후로 얼마의 범위를 표시할것인가.
// 	showButtonPanel: true, // 캘린더 하단에 버튼 패널을 표시한다. 오늘로 가는 버튼과 달력 닫기 버튼 보기 옵션 
// 	currentText: '오늘 날짜' , // 오늘 날짜로 이동하는 버튼 패널
// 	closeText: '닫기',  // 닫기 버튼 패널
// 	showAnim: "slide", //애니메이션을 적용한다.
// 	showMonthAfterYear: true , // 월, 년순의 셀렉트 박스를 년,월 순으로 바꿔준다. 
// 	dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'], // 요일의 한글 형식.
// 	// dayNamesMin: ['월', '화', '수', '목', '금', '토','일'], // 요일의 한글 형식.
// 	monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'], // 월의 한글 형식.
// 	monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],  
// 	// yearRange: "2010:2013", //연도 범위
// // yearSuffix: '년',
// // monthSuffix: '월',
// // daySuffix: '일',

// daterangepicker timezone ?
// daterange picker options
//  $(document).ready(function () {
//             $.datepicker.setDefaults($.datepicker.regional['ko']); 
//             $( "#startDate" ).datepicker({
//                  changeMonth: true, 
//                  changeYear: true,
//                  nextText: '다음 달',
//                  prevText: '이전 달', 
//                  dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
//                  dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'], 
//                  monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
//                  monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
//                  dateFormat: "yymmdd",
//                  maxDate: 0,                       // 선택할수있는 최소날짜, ( 0 : 오늘 이후 날짜 선택 불가)
//                  onClose: function( selectedDate ) {    
//                       //시작일(startDate) datepicker가 닫힐때
//                       //종료일(endDate)의 선택할수있는 최소 날짜(minDate)를 선택한 시작일로 지정
//                      $("#endDate").datepicker( "option", "minDate", selectedDate );
//                  }    

//             });
//             $( "#endDate" ).datepicker({
//                  changeMonth: true, 
//                  changeYear: true,
//                  nextText: '다음 달',
//                  prevText: '이전 달', 
//                  dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
//                  dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'], 
//                  monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
//                  monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
//                  dateFormat: "yymmdd",
//                  maxDate: 0,                       // 선택할수있는 최대날짜, ( 0 : 오늘 이후 날짜 선택 불가)
//                  onClose: function( selectedDate ) {    
//                      // 종료일(endDate) datepicker가 닫힐때
//                      // 시작일(startDate)의 선택할수있는 최대 날짜(maxDate)를 선택한 시작일로 지정
//                      $("#startDate").datepicker( "option", "maxDate", selectedDate );
//                  }    

//             });    
//     });


$.datepicker.setDefaults({
    // dateFormat: 'yy년-mm월-dd일',
    dateFormat: "yy-mm-dd",
    prevText: "이전 달",
    nextText: "다음 달",
    monthNames: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
    monthNamesShort: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
    dayNames: ["월", "화", "수", "목", "금", "토", "일"],
    dayNamesShort: ["월", "화", "수", "목", "금", "토", "일"],
    dayNamesMin: ["월", "화", "수", "목", "금", "토", "일"],
    showMonthAfterYear: true,
    yearSuffix: "년",
    showOn: "both",
    buttonImage: "../../public/img/icons/icon_date.png",
    buttonImageOnly: true,
    isRTL: false,
    showMonthAfterYear: true,
});

$(function() {
    $('.datepicker').datepicker();
});


//  popup common

function openPop(type, id) {
    $("#" + id).addClass("open");
    if (type == "layer") {
        $(".popup_layer").fadeOut();
        $("#" + id).fadeIn();
    }
    $(".mask").fadeIn();
    $("body").css({
        overflow: "hidden",
    });
}

function closePop(id) {
    $("#" + id).removeClass("open");
    $(".popup_layer").fadeOut();
    $(".mask").fadeOut();
    $("body").css({
        overflow: "unset",
    });
}

$(document).on("click", ".mask", function() {
    closePop();
});

