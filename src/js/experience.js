import { educations, experienceData,jobs} from "./data";


const slider = document.querySelector('#slider');
const pct = document.querySelector('.pct');
const pctIndicator = document.querySelector('#pct-ind')

const experiesList = $('.experience-list')

const progressCircle = (value, pctIndicator, progressBar, color) => {
	// percent for dashoffset
	const p = (1 - value / 100) * (2 * (22 / 7) * 40);

	//color personality 
	// pctIndicator.style = `stroke-dashoffset: ${p}; stroke:${color}`;
	progressBar.style = ` background: linear-gradient(90deg,#00ff90 ${value}%,white ${value}%);`;
};

$.each(experienceData, function (index, skill) {
	const createElement = $(`<div class="experience-container">
	<p class="experience-title">${this.name}</p>
	<div class="progress-bar-container">
		<div class="bar"></div>
		<div class="circular-progress">
			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' aria-labelledby='title'
				role='graphic'>
				<title id='title'>svg circular progress bar</title>
				<circle cx="50" cy="50" r="40"></circle>
				<circle cx="50" cy="50" r="40" id='pct-ind'></circle>
			</svg>
			<p class="pct">${this.valueExperience}%</p>
		</div>
	</div>
</div>`)

	// Find the pctIndicator within the created element
	const pctIndicator = createElement.find('#pct-ind')[0];
	const progressBar = createElement.find('.bar')[0];

	// Call the progressCircle function with the value and pctIndicator
	progressCircle(this.valueExperience, pctIndicator, progressBar, this.color);


	experiesList.append(createElement)

})

// show more skills
const showMoreSkills = $('#show-more-skills');
let skillShow;
let skillHidden

showMoreSkills.on('click', (e) => {

	let skills = $('.experience-container.hidden-skills');

	if (skills.length == 0) {
		skillHidden = skillShow;
		showMoreSkills.text('Ver más')
	} else {
		skillShow = skills;
		skillHidden = skillShow;
		showMoreSkills.text('Ver menos')
	}



	skillHidden.each(
		(index, skill) => {
			$(skill).toggleClass('hidden-skills');
		}
	)

})

//toggle 
const $toggleContainer = $('.toggle-container');
const $toggleTexts = $('.toggle-text');
const $toggleIndicator = $('.toggle-indicator');
const $timeLinesContainer = $('.cd-container')
let textWidth;
let isActive = false;



/**
 * 
 * @param {HTMLDivElement} element 
 */

const changeTimeLine = (isActiveToggle) => {

	if (isActiveToggle) {
		textWidth = $toggleTexts.last().width();
	} else {
		textWidth = $toggleTexts.first().width();
	}

	$toggleIndicator.width(textWidth + 10);
}

$toggleContainer.on('click', function () {
	$toggleIndicator.toggleClass('toggle-indicator-active');

	if ($toggleIndicator.hasClass('toggle-indicator-active')) {
		isActive = true;
		$($timeLinesContainer[1]).show();
		$($timeLinesContainer[0]).hide();
	} else {
		isActive = false;
		$($timeLinesContainer[0]).show();
		$($timeLinesContainer[1]).hide();
	}
	changeTimeLine(isActive)
})

changeTimeLine(isActive);
$($timeLinesContainer[1]).hide();

//paint timelines 

const $cdTimeLineJob = $('#cd-timeline-job');
const $cdTimeLineEducation = $('#cd-timeline-education');



jobs.forEach(
	job => {

		const itemJob = $(`
		<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-picture">
				<img src="./resources/icons/briefcase-solid.svg" alt="Briefcase">
			</div> 
		
			<div class="cd-timeline-content">
				<h2>${job.position}</h2>
				
				<div class="date-cotainer">
					<h3 class="company-name">${job.company}</h3>
					<span class="cd-date">${job.startDate} - ${job.endDate}</span>
				</div>
				
				<p class="text">${job.description}</p>
			</div
		</div>
		`)
	
		$cdTimeLineJob.append(itemJob);
	}
)

educations.forEach(
	education => {

		const itemEducation = $(`
		<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-picture">
				<img src="resources/icons/graduation-cap-solid.svg" alt="Briefcase">
			</div>

			<div class="cd-timeline-content">
				${education.courseUrl ?
					`<a href="${education.courseUrl}" class="education-title-link">${education.title} <img height="20" src='../resources/icons/link-solid.svg' alt='link' /></a>` :
					`<h2 class="education-title">${education.title}</h2>` 
				}
				<h3 class="text">${education.instituteName}</h3>
				<span class="cd-date">${education.startDate} - ${education.endDate}</span>
			</div>
		</div>
		`)
	
		$cdTimeLineEducation.append(itemEducation);
	}
)