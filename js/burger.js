const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnimg = document.querySelector('#nav-btn-img');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnimg.src = "./img/icons/nav-close.svg";
    } else {
        navBtnimg.src = "./img/icons/nav-open.svg";
    }
}

AOS.init({
    once: true
});