const crewImg = document.getElementById('crew-image');
const crewRole =  document.getElementById('crew-role');
const crewName =  document.getElementById('crew-name');
const crewBio = document.getElementById('crew-bio');
const crewLinks = document.querySelectorAll('.crew-option a');

function initCrew() {
    if (!crewImg) return;
    updateCrew(crew[0]);
    crewLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            crewLinks.forEach(I => I.classList.remove('active'));
            e.target.classList.add('active');

            const selected = crew.find(c => c.name === e.target.dataset.crew);
            updateCrew(selected);
        });
    });
}

function updateCrew(member) {
    crewImg.style.opacity = 0;

    setTimeout(() => {
        crewImg.src = member.images.webp;
        crewImg.alt =  member.name;
        crewName.textContent =  member.name;
        crewRole.textContent = member.role;
        crewBio.textContent = member.bio;

        crewImg.style.opacity = 1;
    }, 200);
}
