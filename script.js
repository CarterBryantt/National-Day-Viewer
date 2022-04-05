document.getElementById('date-input').onchange = (e) => {
	document.getElementById('content').innerHTML = "";
	let key = "75f34cf3-c432-4ccd-a8a2-833656a23a5c";
	let country = "US";
	let lastYear = new Date().getFullYear() - 1;
	let month = e.target.value.slice(5, 7);
	let day = e.target.value.slice(8);
	let url = `https://holidayapi.com/v1/holidays?pretty&key=${key}&country=${country}&year=${lastYear}&month=${month}&day=${day}`;
	fetch(url).then(response => response.json()).then(jsondata => displayData(jsondata));
}

function displayData(data) {
	if (data.holidays.length == 0) {
		let errorMsg = document.createElement('h2');
		errorMsg.innerHTML = "Sorry, it appears there are no national holidays that occur on this day.";
		document.getElementById('content').appendChild(errorMsg);
		return;
	}

	data.holidays.forEach(holiday => {
		let header = document.createElement('h1');
		header.innerHTML = holiday.name;
		document.getElementById('content').appendChild(header);
	});
}