const btnR = document.querySelector('.btn-right');
const btnL = document.querySelector('.btn-left');
const stTrack = document.querySelector('.schedule-table');
const tracksW = stTrack.offsetWidth;

btnR.addEventListener('touchstart', (event) => {
  stTrack.scrollBy({
    left: 300,
    behavior: 'smooth'
  });
  console.log(event); 
});

btnL.addEventListener('touchstart', (event) => {
  stTrack.scrollBy({
    left: -300,
    behavior: 'smooth'
  });
  console.log(event);
});

btnL.addEventListener('touchend', (event) => {
	event.preventDefault();
});
btnR.addEventListener('touchend', (event) => {
	event.preventDefault();
});

btnR.addEventListener('click', (event) => {
	console.log(event);
  stTrack.scrollBy({
    left: 300,
    behavior: 'smooth'
  });
});

btnL.addEventListener('click', (event) => {
	console.log(event);
  stTrack.scrollBy({
    left: -300,
    behavior: 'smooth'
  });
});