//notification start
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.btn-notifications')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
//notification end

$(".btn-user-account").click(function () {
    $(".js-signout").toggleClass("active");
});

// select box
//$(function () {
//    var $select = $('.input-box'),
//        $images = $('.input-label');
//
//    $select.on('change', function () {
//        var value = '.' + $(this).val();
//        //$images.show().not(value).hide();
//        $images.addClass('is-selected');
//    });
//});
