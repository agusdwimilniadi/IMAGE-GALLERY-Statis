const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo')

container.addEventListener('click', function(e){
    // apakah yang di klik adalahh thumb
    if (e.target.className == 'thumb') {
        jumbo.src = e.target.src;
        jumbo.classList.add('fade')
    }
})