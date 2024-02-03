// use indicator width

const scrollIndicator = document.querySelector('.scroll-indicator .progress');
const docHeight = document.documentElement.scrollHeight;
const viewportHeight = document.documentElement.clientHeight;

window.onscroll = function () {
    // console.log(scrollY);
    let scrollPersentage = (scrollY / (docHeight - viewportHeight)) * 100;
    scrollIndicator.style.width = scrollPersentage + "%";
}