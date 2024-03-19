import { projectsListData } from "./data";

//containers
let $titleProject = $('#title-project');

//children
let itemsCarrusel = $('.projects-carousel-container .carousel').children();

const elementesIdDicionary = {
    projectsContainer : '#smallCarruselProjects',
    projectParagraphContainer:'#projectParagraph'
}

//counters
let counter = 0;
let projects = 0;


//big carousel
let carousel = $(".carousel"),
    currdeg = 0;

$(".next").on("click", { d: "n" }, (e) => rotateScreenshot(e.data.d));
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

const smallCarrucelContainer = $(elementesIdDicionary.projectsContainer);
const $projectParagraph = $(elementesIdDicionary.projectParagraphContainer);

projectsListData.forEach(
    (project, index) => {
        const card = $(`<div class="card ${index ==  0 ? "project-selected":''}" data-index=${project.id}>
        <p class="small-card-title">${project.name}</p>
        <img class="project-logo" src="${project.logoUrl}" alt="icono-worldShoes" />
        <img class="project-monologo" src="${project.monologoUrl}" alt="icono-worldShoes" />
        </div>`);

        smallCarrucelContainer.append(card);

        let technologyListElemets = '' ;
        
        project.technologiesUsed.forEach(
            techno => {
                technologyListElemets += `<span class="tecnology-pill">${techno}</span>`
            }
        )
        

        //projects' info
        const info = $(`
            <div class="info-project text ${index == 0 && 'info-active'}"> 
            <span>Fecha del proyecto: ${project.startDate} a ${project.endDate}</span>
            <p class="project-paragraph">${project.description}
            ${project.linkVideo &&
                `<a href="${project.linkVideo}">Clic para ver video</a>`
            }
            </p>
            <div class="pills-container">
            ${technologyListElemets}
            </div>
           
            </div>`)

        // infoProjectSmall.append(info);
    }
)


$('.card').each(
    (index,card) => $(card).on('click',(e) => {
        const $element = $(e.target.closest('.card'));
        const $projectSelectedOld = $('.project-selected');

        $projectSelectedOld.removeClass('project-selected');
        $element.addClass('project-selected');

        changeProject($element.data('index'));

    })
)


// $('.carousel-small-previos').on('click', { d: "p" }, changeProject)
// $('.carousel-small-next').on('click', { d: "n" }, changeProject)


const changeProject = (projectId) =>  {
    const project = projectsListData.find(project => project.id === projectId);

    changeScreenshotsOfProject(project.screenshotList);
    changeProjectInfo(project)
}


/**
 * 
 * @param {project} project 
 */

const changeProjectInfo = (project) => {
    $titleProject.text(project.name);
    $projectParagraph.text(project.description)

}

/**
 * 
 * @param {Array<Url>} screenshotsList 
 */

const changeScreenshotsOfProject = (screenshotsList) => {
    if (screenshotsList.length === 0) {
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



