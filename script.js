'use strict';


const setupModeToggle = () => {
    const buttonToggle = document.querySelector('.nav button');
    const root = document.querySelector(':root');
    const toggleIcon = document.querySelector('.nav button i')
    buttonToggle.addEventListener('click', () => {
        root.classList.toggle('toggle');
        if (toggleIcon.classList.contains('fa-moon')) {
            toggleIcon.classList.remove('fa-moon');
            toggleIcon.classList.add('fa-sun');
        } else {
            toggleIcon.classList.remove('fa-sun');
            toggleIcon.classList.add('fa-moon');
        }
    })
}


setupModeToggle();

