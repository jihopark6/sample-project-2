let exampleData = [];

window.addEventListener('load', async () => {

    fetchProjects();

    document.querySelector('#search-input').addEventListener('keyup', (event) => {
        const searchTerm = event.target.value;
        renderProjects(searchTerm);
    });
});

async function fetchProjects(){
    
    try {
        const response = await fetch('https://magnetikworks.github.io/project-data/data/projects.json');
        const data = await response.json();
        exampleData = data;
        renderProjects();
    } catch (error) {
        console.error("Error fetching project data:", error);
    }
}

function renderProjects(filterString){
    let filteredData = exampleData;
    let projectImg = "";
    document.querySelector('#projects-container').innerHTML = ''; 
    
    if(typeof filterString === 'string' && filterString.trim() !== ''){
        //filteredData = exampleData.filter(project => project.title.toLowerCase().includes(filterString.trim().toLowerCase())); // Case insentive search
        filteredData = exampleData.filter(project => project.projectName.toLowerCase().includes(filterString.trim().toLowerCase())); 
    }

    for (const project of filteredData) {
        projectImg = project.image_url ?? "https://placehold.co/800x400?text=Project+Image&font=roboto";
        const projectHTML = `
                <img src="${projectImg}" alt="Thumbnail of ${project.projectName}">
                <h3>${project.projectName}</h3>
                <p>${project.projectDescription}</p>
                <button type="button">View project</button>
        `;
        const projectElement = document.createElement('article');
        projectElement.innerHTML = projectHTML;
        document.querySelector('#projects-container').appendChild(projectElement);
    }
}