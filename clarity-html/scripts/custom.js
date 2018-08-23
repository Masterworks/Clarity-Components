//notification start
// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
// }

// // Close the dropdown menu if the user clicks outside of it
// window.onclick = function (event) {
//     if (!event.target.matches('.btn-notifications')) {

//         var dropdowns = document.getElementsByClassName("dropdown-content");
//         var i;
//         for (i = 0; i < dropdowns.length; i++) {
//             var openDropdown = dropdowns[i];
//             if (openDropdown.classList.contains('show')) {
//                 openDropdown.classList.remove('show');
//             }
//         }
//     }
// }
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
function myFunction2() {
    //console.log('Clicked', document.querySelector('#myDropdown2'));
    document.querySelector('#myDropdown2').classList.toggle("show");
    //document.getElementById("myDropdown2").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    //console.log(event.target);
    if (!event.target.matches('.c-btn-notifications')) {

        var dropdowns = document.getElementsByClassName("c-dropdown-content");
        //var i;
        //for (i = 0; i < dropdowns.length; i++) {
        //    var openDropdown = dropdowns[i];
        //    if (openDropdown.classList.contains('show')) {
        //        openDropdown.classList.remove('show');
        //    }
        //}
        if (document.getElementById("myDropdown").classList.contains('show')) {
            document.getElementById("myDropdown").classList.remove('show');
        }
    }
    if (!event.target.matches('.myClass')) {
        if (document.getElementById("myDropdown2").classList.contains('show')) {
            document.getElementById("myDropdown2").classList.remove('show');
        }
    }
}


//notification end

$(".btn-user-account").click(function () {
    $(".js-signout").toggleClass("active");
});
// edit text field
$('#editButton').click(function () {
  $('.edit_text').removeAttr('readonly');
})
// select box
$(function () {
    var $select = $('.c-input-wrap__box'),
        $label = $('.c-input-wrap__label');

    $select.on('change', function () {
        //$images.removeClass('is-selected');
        $(this).next().addClass('is-selected');
    })
});

$(function () {
    var $select = $('.cinput-box'),
        $label = $('.input-label');

    $select.on('change', function () {
        //$images.removeClass('is-selected');
        $(this).next().addClass('is-selected');
    })
});

// ezdz drop zone

//$('[type="file"]').ezdz({
//    text: '<i></i>Drag to Upload or <a href="">Choose File</a>',
//    previewImage: false,
//    reject: function (file, errors) {
//        if (errors.mimeType) {
//            alert(file.name + ' must be an image.');
//        }
//
//        if (errors.maxWidth) {
//            alert(file.name + ' must be width:600px max.');
//        }
//
//        if (errors.maxHeight) {
//            alert(file.name + ' must be height:400px max.');
//        }
//    }
//});


// Check for inputs that have value and apply class to handle label
// styling so that text isn't covered by label. Commented out
// because I found a way to do this with CSS, but maybe this could
// resolve bugs related to browser and password manager autofill
// work in progress.

// $('input[type="text"], input[type="email"]').each(function() {
//     if($(this).val().length != 0) {
//         $(this).siblings('label').addClass('input-has-text');
//     } else {
//         $(this).siblings('label').removeClass('input-has-text');
//     }
// });


// Check for Selects that have an option selected already and 
// apply class to handle label styling

$('select').find(':selected').each(function () {
    if ($(this).val() != '') {
        console.log($(this));
        $(this).parents('.c-select').addClass('input-has-text');
    }
});
// Svg img conversion
$('.svg-img').each(function (i) {
    var path = $(this).attr('src'),
        self = $(this);
    $.get(path, function (data) {
        var svg_data = data.childNodes;
        //console.log(svg_data);
        self.parent().html(svg_data);
    });
});

// Check textarea value 
var elementExit = document.getElementsByClassName('.c-textarea-wrap__box');
if(elementExit.length) {
    document.querySelector('.c-textarea-wrap__box').addEventListener('keyup', function(){
        var content = this.value;
        if(content.length<1) {
            document.querySelector('.c-textarea-wrap').classList.remove('js-has-value');
            return false;
        } else {
            //alert('hhh');
            document.querySelector('.c-textarea-wrap').classList.add('js-has-value');
            return false;
       }
    });
}


// create a tooltips
(function(){
        
  function createTip(ev){
        var title = this.title;
        this.title = '';
        this.setAttribute("tooltip", title);
        //creates div
        var tooltipWrap = document.createElement("div"); 
        //adds class
        tooltipWrap.className = 'c-tooltip'; 
        //add the text node to the newly created div.
        tooltipWrap.appendChild(document.createTextNode(title)); 
    
        //gets the first elem after body
        var newElement = document.getElementsByClassName('c-tooltip__container')[0];
        //console.log(newElement);

        var parentDiv = newElement.parentNode;
        //console.log(parentDiv);
        newElement.appendChild(tooltipWrap);

        //parentDiv.insertBefore(tooltipWrap, newElement.nextSibling); //adds tt before elem 
        var padding = 8;
        var linkProps = this.getBoundingClientRect();
        var tooltipProps = tooltipWrap.getBoundingClientRect(); 
        console.log(linkProps, tooltipProps);

        var topPos = (tooltipProps.height + linkProps.height) - 5;
        tooltipWrap.setAttribute('style','bottom:-'+topPos+'px;'+'right:-10px;');
    }
    function cancelTip(ev){
        var title = this.getAttribute("tooltip");
        this.title = title;
        this.removeAttribute("tooltip");
        document.querySelector(".c-tooltip").remove();
    }
    var links = document.links;
    for(var i=0; i < links.length; i++){
        var a = links[i];
        if(a.title !== ''){
        a.addEventListener('mouseover',createTip);
        a.addEventListener('mouseout',cancelTip);
        }
        //  console.log(a);
    } 
})()