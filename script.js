const btnR = document.querySelector('.btn-right');
const btnL = document.querySelector('.btn-left');
const stTrack = document.querySelector('.schedule-table');
const tracksW = stTrack.offsetWidth;


if(!('ontouchstart' in window)) {
	btnR.addEventListener('click', (event) => {
		stTrack.scrollBy({
			left: 300,
			behavior: 'smooth'
		});
	});

	btnL.addEventListener('click', (event) => {
		stTrack.scrollBy({
			left: -300,
			behavior: 'smooth'
		});
	});
}
else {
	btnR.style.display = 'none';
	btnL.style.display = 'none';
}


