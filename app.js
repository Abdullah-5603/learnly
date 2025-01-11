const currentPath = window.location.pathname;
const navLinks = document.querySelectorAll('.learnly-navbar--routes a');
console.log(currentPath);

navLinks.forEach(link => {
    if (link.getAttribute('href') === `.${currentPath}`) {
        link.classList.add('active');
    } else{
        link.classList.remove('active')
    }
});