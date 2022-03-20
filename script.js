'use strict';

const setupTheme = () => {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    const root = document.querySelector(':root');
    if (prefersDarkScheme.matches) {
      root.classList.add('toggle');
    } else {
      root.classList.remove('toggle');
    }
}

const setupModeToggle = () => {
    const buttonToggle = document.querySelector('.nav button');
    const root = document.querySelector(':root');
    const toggleIcon = document.querySelector('.nav button i')
    const paths = document.querySelectorAll('.nav__icon svg path');
    const circle = document.querySelector('circle');
    buttonToggle.addEventListener('click', () => {
        root.classList.toggle('toggle');
        if (toggleIcon.classList.contains('fa-moon')) {
            toggleIcon.classList.remove('fa-moon');
            toggleIcon.classList.add('fa-sun');
            paths.forEach(path => {
                path.setAttribute('fill', 'white');
            })
            circle.setAttribute('fill', 'white');
        } else {
            toggleIcon.classList.remove('fa-sun');
            toggleIcon.classList.add('fa-moon');
            paths.forEach(path => {
                path.setAttribute('fill', 'black');
            })
            circle.setAttribute('fill', 'black');
        }
    })
}

setupTheme();
setupModeToggle();

