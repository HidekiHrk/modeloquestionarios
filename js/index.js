$(() => {
    var mainNavBar = $("#mainNavBar");
    // mainNavBar.css({
    //     "background-color":"transparent",
    //     "box-shadow":"none"
    // });
    $(window).on('scroll', (e) => {
        let ths = $(e.currentTarget);
        let scrollValue = ths.scrollTop();
        if(scrollValue > 80){
            mainNavBar.css({
                "background-color":"#333",
                "box-shadow":"0 5px 3px #0003",
            });
        }
        else{
            mainNavBar.css({
                "background-color":"transparent",
                "box-shadow":"none"
            });
        }
    })
})