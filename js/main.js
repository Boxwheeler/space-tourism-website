const hamButton = document.querySelector('.hamburger');
const nav = document.querySelector('header nav');
let planets, crew, technology;

hamButton.addEventListener('click', () => {
    nav.classList.toggle('open');
});

fetch('./data.json')
    .then(res => res.json())
    .then(data => {
        planets = data.destinations;
        crew = data.crew;
        technology = data.technology;

        console.log(technology);


        if (typeof initDestination === 'function') initDestination();
        if (typeof initCrew === 'function') initCrew();
        if (typeof initTechnology ==='function') initTechnology();
    });




