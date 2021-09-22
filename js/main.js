/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {
    var menu = $(".f_menu");
    var menudis = $(".f_menu").offset().top;

    $(window).on("scroll", function () {
        var sr_dis = $(this).scrollTop();
        if (sr_dis > menudis) {
            menu.addClass("sticky_menu");
        } else {
            menu.removeClass("sticky_menu");
        }
    });
});
