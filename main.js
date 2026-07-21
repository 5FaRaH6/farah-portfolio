window.onload = function () {

    setTimeout(function () {

        const splash = document.getElementById("splash-screen");

        splash.style.opacity = "0";

        setTimeout(function () {
            splash.style.display = "none";
        }, 1000);

    }, 4000);


    const title = document.querySelector(".projects-title");

    window.addEventListener("scroll", () => {

        const section = document.querySelector("#projects");
        const rect = section.getBoundingClientRect();

        if(rect.top < window.innerHeight - 150){
            title.classList.add("show");
        }
        else{
            title.classList.remove("show");
        }

    });



    // PROJECTS

    const container = document.getElementById("projects-container");


    projects.forEach(project => {


        const card = document.createElement("div");

        card.classList.add("project-card");


        card.innerHTML = `

            <img src="${project.image}" alt="${project.title}">

            <h3>${project.title}</h3>

            <p>${project.description}</p>

            <div class="project-tags">
                ${project.technologies.map(tag => `<span>${tag}</span>`).join("")}
            </div>

            <a href="${project.github}" target="_blank">
                GitHub
            </a>

        `;


        container.appendChild(card);


    });


};
/*
const username = "5FaRaH6";
const container = document.getElementById("projects-container");

async function loadProjects(){

    const res = await fetch(`https://api.github.com/users/5FaRaH6/repos`);
    const repos = await res.json();

    container.innerHTML = "";

    repos.forEach(repo => {

        const card = document.createElement("div");
        card.classList.add("project-card");

        card.innerHTML = `
            <h3>${repo.name}</h3>

            <p>
                ${repo.description ? repo.description : "No description available"}
            </p>

            <div class="project-links">
                <a href="${repo.html_url}" target="_blank">GitHub</a>
            </div>
        `;

        container.appendChild(card);
    });
}

loadProjects();

};*/