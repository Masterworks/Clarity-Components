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
$(function () {
    var $select = $('.input-box'),
        $label = $('.input-label');

    $select.on('change', function () {
        //$images.removeClass('is-selected');
        $(this).next().addClass('is-selected');
    })
});

// ezdz drop zone

$('[type="file"]').ezdz({
    text: '<i></i>Drag to Upload or <a href="">Choose File</a>',
    previewImage: false,
    //    validators: {
    //        maxWidth: 600,
    //        maxHeight: 400
    //    },
    reject: function (file, errors) {
        if (errors.mimeType) {
            alert(file.name + ' must be an image.');
        }

        if (errors.maxWidth) {
            alert(file.name + ' must be width:600px max.');
        }

        if (errors.maxHeight) {
            alert(file.name + ' must be height:400px max.');
        }
    }
});
