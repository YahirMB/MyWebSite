//containers
let container = $('.projects-list')
let infoContainer = $('.info-project-container');
let titleProject = $('#title-project');

//children
let projectsList = container.children();
let projectsCarousel = $('.projects-carousel-container').children();
let infosProjects = infoContainer.children();

//counters
let counter = 0;
let projects = 0;

const titles = ['World-shoes','Daily-plan','Cafe-uta']

$('.carousel-small-previos').on('click', { d: "p" }, changeProject)
$('.carousel-small-next').on('click', { d: "n" }, changeProject)

function changeProject(e) {
    if (e.data.d == "n") {
        counter -= 250;
        projects += 1;
    }

    if (e.data.d == "p") {
        counter += 250;
        projects -= 1;
    }

    titleProject.text(titles[projects])


    //elemina la clase a todas los elementos
    infosProjects.each(function () {
        $(this).removeClass('info-active');
    })

    //le agrega el que esta activo
    $(infosProjects[projects]).addClass('info-active');

    projectsCarousel.each(function () {
        $(this).removeClass('active-carousel');
    })

    //le agrega el que esta activo
    $(projectsCarousel[projects]).addClass('active-carousel');


    if (projects == 0) {
        $('.carousel-small-previos').css({ "display": "none" })
    } else if (projects == projectsList.length - 1) {
        $('.carousel-small-next').css({ "display": "none" })
    } else {
        $('.carousel-small-previos').css({ "display": "flex" })
        $('.carousel-small-next').css({ "display": "flex" })
    }

    container.css({
        "transform": "translateX(" + counter + "px)",
        "transition-timing-function": "ease-in",
        "transition-duration": ".5s",
    });
}


//big carousel
let carousel = $(".carousel"),
    currdeg = 0;

$(".next").on("click", { d: "n" }, rotate);
$(".prev").on("click", { d: "p" }, rotate);

function rotate(e) {
    if (e.data.d == "n") {
        currdeg = currdeg - 60;
    }
    if (e.data.d == "p") {
        currdeg = currdeg + 60;
    }
    carousel.css({
        "-webkit-transform": "rotateY(" + currdeg + "deg)",
        "-moz-transform": "rotateY(" + currdeg + "deg)",
        "-o-transform": "rotateY(" + currdeg + "deg)",
        "transform": "rotateY(" + currdeg + "deg)"
    });
}