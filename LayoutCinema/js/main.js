/**
 * Ngày 16-11-2018
 * Người tạo : Lạc Vĩnh Phát
 * Nội dung : xử lý tính năng giao diện
 */

$(document).ready(()=>{
    //Xử lý hiệu ứng nút search
    $(".searchBox").hide();
    $(".header__nav-btnSearch").on('click',()=>{
        $(".searchBox").slideToggle();
        if($(".header__nav-list").hasClass("active-list")){
            $(".header__nav-list").toggleClass("active-list");
            $(".header__nav-btnNav").toggleClass("active-fa");
        }
    })

    var a = true;
    //Xử lý responsive menu
    $(".header__nav-btnNav").on('click',()=>{
        if(a==true){
            $("body").addClass("active-body");
            $(".header__nav-list").addClass("active-list");
            $(".header__nav-btnNav").addClass("active-fa");
            $(".searchBox").fadeOut();
            a=false;
        }else{
            $("body").removeClass("active-body");
            $(".header__nav-list").removeClass("active-list");
            $(".header__nav-btnNav").removeClass("active-fa");
            a=true;
        }
    })
})