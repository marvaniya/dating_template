$(".toggle_btn").click(function(){
    $(".header_menu").css("left","0")
})
$(".close_menu").click(function(){
    $(".header_menu").css("left","-100%")
})

function startCount() {
    $('.count_box h3').each(function () {
        let $this = $(this);
        let original = $this.text();       
        let num = parseFloat(original);       
        let suffix = original.replace(num, ""); 
        
        $({ countNum: 0 }).animate(
            { countNum: num },
            {
                duration: 2000,
                easing: "swing",
                step: function () {
                    $this.text(Math.floor(this.countNum) + suffix);
                },
                complete: function () {
                    $this.text(num + suffix);
                }
            }
        );
    });
}

let counted = false;

$(window).on('scroll', function () {
    let sectionTop = $('.index_eleventh_section').offset().top - window.innerHeight;

    if (!counted && $(window).scrollTop() > sectionTop) {
        startCount();
        counted = true; 
    }
});



