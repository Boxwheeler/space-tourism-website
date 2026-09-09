
const planetImg = document.getElementById('planet-img');
const planetName = document.getElementById('planet-name');
const planetDescription = document.getElementById('planet-description');
const planetDistance = document.getElementById('planet-distance');
const planetTravel = document.getElementById('planet-travel');
const navLinks = document.querySelectorAll('.planet-choice a');

function initDestination() {
    if (!planetImg) return;

    updatePlanet(planets[0]);

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.forEach(I => I.classList.remove('active'));
            e.target.classList.add('active');

             const selected = planets.find(p => p.name === e.target.dataset.planet);
             updatePlanet(selected);
        });
    });
}

function updatePlanet(planet) {
    planetImg.style.opacity = 0;

    setTimeout(() => {
        planetImg.src = planet.images.webp;
        planetImg.alt = planet.name;
        planetName.textContent = planet.name;
        planetDescription.textContent = planet.description;
        planetDistance.textContent = planet.distance;
        planetTravel.textContent = planet.travel;

        planetImg.style.opacity = 1;
    }, 200);
}
