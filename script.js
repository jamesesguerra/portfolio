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
    buttonToggle.addEventListener('click', () => {
        root.classList.toggle('toggle');
        
    })
}

setupTheme();
setupModeToggle();

