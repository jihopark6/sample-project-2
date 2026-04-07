let exampleData = [];

window.addEventListener('load', () => {

    fetchProjects();

    document.querySelector('#search-input').addEventListener('keyup', (event) => {
        const searchTerm = event.target.value;
        renderProjects(searchTerm);
    });
});

function fetchProjects(){
    
    const response = fetch('./assets/data/projects.json')
    .then(response => response.json())
    .then(data => {
        exampleData = data;
        renderProjects();
    })
    .catch(error => console.error('Error fetching projects:', error));
    
}

function renderProjects(filterString){
    let filteredData = exampleData;

    document.querySelector('#projects-container').innerHTML = ''; 
    
    if(typeof filterString === 'string' && filterString.trim() !== ''){
        filteredData = exampleData.filter(project => project.title.toLowerCase().includes(filterString.trim().toLowerCase())); // Case insentive search
    }

    for (const project of filteredData) {
        const projectHTML = `
                <img src="${project.image_url}" alt="Thumbnail of ${project.title}">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <button type="button">View project</button>
        `;
        const projectElement = document.createElement('article');
        projectElement.innerHTML = projectHTML;
        document.querySelector('#projects-container').appendChild(projectElement);
    }
}