const slider = document.querySelector('#slider');
const pct = document.querySelector('.pct');
const pctIndicator = document.querySelector('#pct-ind')

//React/Javascript/CSS/HTML/Angular/TypeScript/React-Native/Mysql/Node
const dataExperience = [
	{ name: 'React', valueExperience: 50, color: '#007bff' },
	{ name: 'JavaScript', valueExperience: 50, color: '#fff500' },
	{ name: 'TypeScript', valueExperience: 20, color: '#0039ff' },
	{ name: 'Angular', valueExperience: 20, color: '#ff0000' },
	{ name: 'Mysql', valueExperience: 20, color: '#ff8d00' },
	{ name: 'Nodejs', valueExperience: 25, color: '#04ff00' },
]

const experiesList = $('.experience-list')

const progressCircle = (value, pctIndicator, progressBar, color) => {
	// percent for dashoffset
	const p = (1 - value / 100) * (2 * (22 / 7) * 40);

	pctIndicator.style = `stroke-dashoffset: ${p}; stroke:${color}`;

	progressBar.style = ` background: linear-gradient(90deg,${color + ' ' + value}%, ${ color + ' '+value}%);`;
};

$.each(dataExperience, function () {
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


