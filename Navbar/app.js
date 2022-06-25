// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const linkShow = document.querySelector(".links");
const cross = document.getElementById("crossIcon")
navToggle.addEventListener('click', function () {

    linkShow.classList.toggle('show-links');
    if (linkShow.classList.contains("show-links")) {

        cross.className = "fas fa-times";
    }
    else {
        cross.className = "fas fa-bars"
    }

});

