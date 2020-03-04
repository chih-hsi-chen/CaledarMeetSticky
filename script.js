const btnR = document.querySelector('.btn-right');
const btnL = document.querySelector('.btn-left');
const stTrack = document.querySelector('.schedule-table');
const tracksW = stTrack.offsetWidth;

btnR.addEventListener('click', _ => {
  stTrack.scrollBy({
    left: tracksW / 2,
    behavior: 'smooth'
  });
});

btnL.addEventListener('click', _ => {
  stTrack.scrollBy({
    left: -tracksW / 2,
    behavior: 'smooth'
  });
});