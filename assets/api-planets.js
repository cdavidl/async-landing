const planetsAPI = 'https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planet/list';
const planetsContent = null || document.getElementById('planets-content');
const planetsOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '36de641fe5mshd1237d1211d5fe6p1a0e1ejsn0bbe897d318e',
		'X-RapidAPI-Host': 'planets-info-by-newbapi.p.rapidapi.com'
	}
};

async function fetchData(urlAPI) {
	const response = await fetch(urlAPI, planetsOptions);
	const data = response.json();
	return data;
}

(async () => {
	try {
		const planets = await fetchData(planetsAPI);
		let planetsview = `
		${planets.map(planet => `
		  <div class="group relative">
			<div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
			  <img src="${planet.imgSrc[0].img}" alt="${planet.name}" class="w-full">
			</div>
			<div class="mt-4 flex justify-between">
			  <h3 class="text-sm text-gray-700">
				<p><span aria-hidden="true" class="font-bold">Name: </span>${planet.name}</p>					
				<p><span aria-hidden="true" class="font-bold">Mass: </span>${planet.basicDetails[0].mass}</p>				
				<p><span aria-hidden="true" class="font-bold">Volume: </span>${planet.basicDetails[0].volume}</p>
				<p><span aria-hidden="true" class="font-bold">Id: </span>${planet.id}</p>							 
			  </h3>
			</div>
			<div class="mt-4 flex justify-between">
			  <h3 class="text-sm text-gray-700">
				<p><span aria-hidden="true" class="font-bold">Description</span><br>${planet.description}</p>						 
			  </h3>
			</div>
			<div class="mt-4 flex justify-between">
			  <h3 class="text-sm text-gray-700">
				<p><span aria-hidden="true" class="font-bold">Wikilink: </span><a target="_blank" href="${planet.wikiLink}" hover:text-gray-900>${planet.wikiLink}</a></p>						 
			  </h3>
			</div>
		  </div>
		`).join('')}
		`;
		planetsContent.innerHTML = planetsview; 
	} catch (err) {
		console.log(err);
	}
})();

// fetch(planetsAPI, planetsOptions)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));