import $ from "jquery";
import "../css/navbar.css";



$(window).scroll(function() {     
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
        $("#nav-target").addClass("add-shadow").removeClass("add-transition");
    }
    else {
        $("#nav-target").removeClass("add-shadow").addClass("add-transition");
    }
    
});
