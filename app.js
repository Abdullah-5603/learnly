const currentPath = window.location.pathname;
const navLinks = document.querySelectorAll('.learnly-navbar--routes a');

const currentPathDev = currentPath;
const currentPathProduction = currentPath.split('/')[2]

navLinks.forEach(link => {
    if ((link.getAttribute('href') === `.${currentPathDev}`) || (link.getAttribute('href') === `.${currentPathProduction}`)) {
        link.classList.add('active');
    } else{
        link.classList.remove('active')
    }
});