document.addEventListener('DOMContentLoaded', function () {
    var mapLink = document.querySelector(".map-link");
    var mapWindow = document.querySelector(".map-modal-window");
    var mapWindowClose = mapWindow.querySelector(".close");
    var formLink = document.querySelector(".form-link");
    var formWindow = document.querySelector(".form-modal-window");
    var formWindowClose = formWindow.querySelector(".close");
    var inputs = formWindow.querySelectorAll(".input");
    var form = formWindow.querySelector("form.write-to-us");
    var productSliderItems = document.querySelectorAll(".product-slader .slade");
    var productSliderControls = document.querySelectorAll(".product-slader .controls");

    if (mapLink) {
        mapLink.addEventListener("click", function (event) {
            event.preventDefault();
            mapWindow.classList.add("open");
        });
    }
    if (mapWindowClose) {
        mapWindowClose.addEventListener("click", function (event) {
            event.preventDefault();
            mapWindow.classList.remove("open");
        });
    }

    if (formLink) {
        formLink.addEventListener("click", function (event) {
            event.preventDefault();
            formWindow.classList.add("open");
        });
    }
    if (formWindowClose) {
        formWindowClose.addEventListener("click", function (event) {
            event.preventDefault();
            formWindow.classList.remove("open");
        });
    }

    for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("blur", function (event) {
            if (!event.target.value) {
                event.target.classList.add("error");
            } else {
                event.target.classList.remove("error");
            }
        });
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        for (var i = 0; i < inputs.length; i++) {
            if (!inputs[i].value) {
                inputs[i].classList.add("error");
            } else {
                inputs[i].classList.remove("error");
            }
        }
    });

    for (i = 0; i < productSliderControls.length; i++) {
        productSliderControls[i].addEventListener("click", function (event) {
            if (event.target.classList.contains("control")) {
                var index = Array.prototype.indexOf.call(this.querySelectorAll(".control"), event.target);
                for (var j = 0; j < inputs.length; j++)
                    productSliderItems[j].classList.remove("active");
                productSliderItems[index].classList.add("active");
            }
        });
    }
});