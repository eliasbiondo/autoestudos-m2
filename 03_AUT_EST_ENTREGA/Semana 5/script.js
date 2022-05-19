$(".professional-experience").each(function(index) {
    $(this).on( "click", function(e) {
        if(!$(this).hasClass("active")) {
            $(this)[0].children[1].style.display = "initial";
            $(this).addClass("active");
            $(this)[0].children[0].children[1].src="./Arrow-Up.svg"
        } else {
            $(this)[0].children[1].style.display = "none";
            $(this).removeClass("active");
            $(this)[0].children[0].children[1].src=="./Arrow-Down.svg"
        }
    });

})