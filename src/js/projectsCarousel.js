import { projectsListData } from "./data";
// import "./slick"

//containers
let $titleProject = $('#title-project');

//children
let itemsCarrusel = $('.projects-carousel-container .carousel').children();

const elementesIdDicionary = {
    projectsContainer: '#projects-list',
    projectParagraphContainer: '#projectParagraph'
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

const $projectsContainer = $(elementesIdDicionary.projectsContainer);
const $projectParagraph = $(elementesIdDicionary.projectParagraphContainer);

const windowWidth = $(window).width() <= 425 ? "200px" : "100%" ;

projectsListData.forEach(
    (project, index) => {

        let technologyListElemets = '';
        let imgsList = '';

        project.technologiesUsed.forEach(
            techno => {
                technologyListElemets += `<span class="tecnology-pill">${techno}</span>`
            }
        )


        project.screenshotList.forEach(
            ({deviceSize,imageUrl}) => {
                imgsList += `<img class="project-img" src="${imageUrl}" alt="img" />`
            }
        )

        const card = $(`
        <div class="project-card">
            <div class="project-card-border"></div>
            <div class="project-card-contect"></div>
            <div style="z-index: 1;">
                <div class="project-carousel" style="width:${project.multiplatform  === "desktop" ? windowWidth:"100px"}">
                    ${imgsList}
                </div>
                <hr class="project-card-line" />
                <div class="project-card-body">
                <div style="display:flex;align-items:center">
                    <h2 class="project-title">${project.name}</h2>

                    ${project.linkVideo ? 
                        `<div class="wrapper">
                            <div class="icon youtube">
                                <span class="tooltip">Video</span>

                                <a href="${project.linkVideo}" target="_blank">
                                    <img src="./resources/icons/youtube.svg" />
                                </a>
                            </div>
                        </div>` : ''
                    }
                </div>
                    <p class="project-paragraph ">${project.description}</p>

                    <div class="pills-container">
                        ${technologyListElemets}
                    </div>
                </div>
            </div>
        </div>
        `);

        $projectsContainer.append(card);

    }
)


document.addEventListener('DOMContentLoaded', () => {
    $('.project-carousel').slick(
        {
            // adaptiveHeight:true,
            // centerMode: true,
            // dots: true,
            // dots: true,
            // fade: true,
            // variableWidth:true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            cssEase: 'linear',
            infinite: true,
            pauseOnFocus:false,
            pauseOnHover:false,
            slidesToScroll: 1,
            slidesToShow: 1,
            speed: 500,
            
            responsive:[{
                breakpoint:425,
                settings: {

                    // variableWidth:true,
                    slidesToScroll: 1,
                    slidesToShow: 1,
                    mobileFirst:true,
                }
             }]
        }
    );
})




$('.card').each(
    (index, card) => $(card).on('click', (e) => {
        const $element = $(e.target.closest('.card'));
        const $projectSelectedOld = $('.project-selected');

        $projectSelectedOld.removeClass('project-selected');
        $element.addClass('project-selected');

        changeProject($element.data('index'));

    })
)


// $('.carousel-small-previos').on('click', { d: "p" }, changeProject)
// $('.carousel-small-next').on('click', { d: "n" }, changeProject)


const changeProject = (projectId) => {
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

