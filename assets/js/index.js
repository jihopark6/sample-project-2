let exampleData = [];

window.addEventListener('load', () => {

    fetchProjects();

    document.querySelector('#search-input').addEventListener('keyup', (event) => {
        const searchTerm = event.target.value;
        renderProjects(searchTerm);
    });
});

function fetchProjects(){
    
    const response = fetch('https://magnetikworks.github.io/project-data/data/projects.json')
    .then(response => response.json())
    .then(data => {
        exampleData = data;
        renderProjects();
    })
    .catch(error => console.error('Error fetching projects:', error));
    
}

function renderProjects(filterString){
    let filteredData = exampleData;
    let projectImg = "";
    document.querySelector('#projects-container').innerHTML = ''; 
    
    if(typeof filterString === 'string' && filterString.trim() !== ''){
        filteredData = exampleData.filter(project => project.title.toLowerCase().includes(filterString.trim().toLowerCase())); // Case insentive search
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