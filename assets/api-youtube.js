const youTubeAPI = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCUSiWX2jnPcT0K-smDhT9eg&part=snippet%2Cid&order=date&maxResults=4';
const youTubeContent = null || document.getElementById('youtube-content');
const youTubeOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '36de641fe5mshd1237d1211d5fe6p1a0e1ejsn0bbe897d318e',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlAPI) {
    const response = await fetch(urlAPI, youTubeOptions);
    const data = response.json();
    return data;
}

(async () => { //Función que se llama así misma de forma automática
    try {
      const videos = await fetchData(youTubeAPI);
      let youtubeView = `
      ${videos.items.map(video => `
        <div class="group">
          <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <a target="_blank" href="https://www.youtube.com/watch?v=${video.id.videoId}"><img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.title}" class="w-full"></a>
          </div>
          <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
              <span aria-hidden="true" class="absolute inset-0"></span>
              ${video.snippet.title}
            </h3>
          </div>
          <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
            <p><span aria-hidden="true" class="font-bold">Description</span><br>${video.snippet.description}</p>
            </h3>
          </div>
        </div>
      `).join('')}
      `;
      youTubeContent.innerHTML = youtubeView; 
    } catch (err) {
        console.log(err);
    }
})();