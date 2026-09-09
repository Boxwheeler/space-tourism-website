const technologyImg = document.getElementById('technology-image');
const technologyName = document.getElementById('technology-name');
const technologyDescribe = document.getElementById('technology-explanation');
const techLinks = document.querySelectorAll('.technology-list a')
const isMobile = window.innerWidth <= 768;

function initTechnology() {
    if (!technologyImg) return;
    console.log('init technology jalan');
    console.log(technology);
    updateTechnology(technology[0]);
    techLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            techLinks.forEach(I => I.classList.remove('active'));
            e.target.classList.add('active');

            const selected = technology.find(t => t.name === e.target.dataset.technology);
            updateTechnology(selected);
        });
    });
}

function updateTechnology(tech) {
    technologyImg.style.opacity = 0;
    

    setTimeout(() => {
        technologyImg.src = isMobile ? tech.images.landscape : tech.images.portrait;
        technologyImg.alt = tech.name;
        technologyName.textContent = tech.name;
        technologyDescribe.textContent = tech.description;

        technologyImg.style.opacity = 1;
    }, 200);
}