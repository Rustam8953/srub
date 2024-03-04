const headerInfo = document.querySelector('.header-info')
const headerLine = document.querySelector('.header-line');

window.addEventListener('click', (e) => {

    if(e.target.closest('.header-burger')) {
        headerInfo.classList.toggle('active')
        headerLine.classList.toggle('active')
        document.body.classList.toggle('stuck')
    }

})

window.addEventListener('DOMContentLoaded', () => {
    mobileBanner();
})

window.addEventListener('resize', () => {
    mobileBanner()
})


function mobileBanner() {
    const banner = document.querySelector('.banner-img img')
    if (screen.width < 800) {
        banner.setAttribute('src', './img/banner/mobile.png')
    } else {
        banner.setAttribute('src', './img/banner/banner.png')
    }
}