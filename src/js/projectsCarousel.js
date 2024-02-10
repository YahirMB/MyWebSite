import { projectsListData } from "./data";

//containers
let container = $('.projects-list')

let titleProject = $('#title-project');

//children
let projectsList = container.children();
let itemsCarrusel = $('.projects-carousel-container .carousel').children();


//counters
let counter = 0;
let projects = 0;






//big carousel
let carousel = $(".carousel"),
    currdeg = 0;

$(".next").on("click", { d: "n" },(e) => rotateScreenshot(e.data.d));
$(".prev").on("click", { d: "p" }, (e) => rotateScreenshot(e.data.d));

function rotateScreenshot(direction) {
    if (direction == "n") {
        currdeg = currdeg - 60;
    }
    if (direction == "p") {
        currdeg = currdeg + 60;
    }
    carousel.css({
        "-webkit-transform": "rotateY(" + currdeg + "deg)",
        "-moz-transform": "rotateY(" + currdeg + "deg)",
        "-o-transform": "rotateY(" + currdeg + "deg)",
        "transform": "rotateY(" + currdeg + "deg)"
    });
}


//SmallCarrucel

const smallCarrucelContainer = $('#smallCarruselProjects');
const infoProjectSmall = $('#infoProjectSmall');


$.each(projectsListData, (index, project) => {
    const card = $(`<div class="card" data-index=${index}>
                    <p class="small-card-title">${project.name}</p>
                    <img src="${project.logoUrl}" alt="icono-worldShoes" />
                </div>`);

    smallCarrucelContainer.append(card);

    //projects' info
    const info = $(`
    <div class="info-project text ${index == 0 && 'info-active'}"> 
        <span>Fecha del proyecto: ${project.startDate} a ${project.endDate}</span>
        <p class="project-paragraph">${project.description}</p>
        ${project.linkVideo &&
        `<a href="${project.linkVideo}">Clic para ver video</a>`
        }
    </div>`)

    infoProjectSmall.append(info);
})

let infoContainer = $('#infoProjectSmall');
let infosProjects = infoContainer.children()
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

    titleProject.text(projectsListData[projects].name)


    //elemina la clase a todas los elementos
    infosProjects.each(function () {
        $(this).removeClass('info-active');
    })

    //le agrega el que esta activo
    $(infosProjects[projects]).addClass('info-active');


    if (projects == 0) {
        $('.carousel-small-previos').css({ "display": "none" })
    } else if (projects == projectsListData.length - 1) {
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


    changeScreenshotsOfProject(projectsListData[projects].screenshotList)
}



const changeScreenshotsOfProject = (screenshotsList) => {

    console.log(screenshotsList)

    if (screenshotsList.length === 0) {
        console.log('no hay imagenes estará pronto')
        $('#empty-carrucel').css({ "display": "block" });
        $('.projects-carousel-container').css({ "display": "none" });
        $('.prev').addClass('hidden');
        $('.next').addClass('hidden');

    } else {

        $('#empty-carrucel').css({ "display": "none" });
        $('.projects-carousel-container').css({ "display": "block" });
        $('.prev').removeClass('hidden');
        $('.next').removeClass('hidden');

        $.each(screenshotsList, (index, project) => {
            $(itemsCarrusel[index]).find('img').attr('src', project)
        })
    }
}

//move carousel with touch
let touchstart;
let touchmove = 0;;

carousel.on('touchstart', (e) => {
    touchstart = e.touches[0].clientX
})

carousel.on('touchmove', (e) => {
    touchmove = e.touches[0].clientX
})

carousel.on('touchend', (e) => {
   
    if (touchmove == 0) return;

    if (touchmove < touchstart) {
        rotateScreenshot('n');
        touchmove = 0;
    } else {
        rotateScreenshot('p');
        touchmove = 0;
    }
});



