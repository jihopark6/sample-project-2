const exampleData = [
    {
        category:"Web development",
        image_url:"https://placehold.co/800x600?text=Project+Deer&font=roboto",
        title:"Project Deer",    
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In venenatis velit vitae odio sodales rhoncus. Donec in sollicitudin diam, non euismod mi. Aliquam erat volutpat. Praesent venenatis vel augue a porta. Sed ut tempor diam. Duis aliquet sapien turpis, ut efficitur odio condimentum nec. Praesent eu diam sed tortor auctor blandit. Donec aliquet tincidunt vestibulum. Aliquam feugiat maximus vehicula. Nam egestas porttitor condimentum."
    },
    {
        category:"Application development",
        image_url:"https://placehold.co/800x600?text=Project+Lizard&font=roboto",
        title:"Project Lizard",    
        description:"Suspendisse faucibus ultrices condimentum. Integer volutpat augue ac ante dignissim, sit amet sagittis tellus sodales. Sed pulvinar, nulla ac consectetur suscipit, quam nisi tempor enim, gravida eleifend libero dui ut ex. Sed non lacus dictum, facilisis urna non, malesuada lectus. Donec venenatis mauris nec mi consectetur, ut accumsan nisl finibus.  "
    },
    {
        category:"Web development",
        image_url:"https://placehold.co/800x600?text=Project+Eagle&font=roboto",
        title:"Project Eagle",    
        description:"Cras a luctus libero. Nunc congue nisl id neque mattis congue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus congue purus id mi sagittis consequat. Praesent a velit lobortis, aliquam leo ac, scelerisque arcu. Quisque vel purus condimentum, maximus nibh vitae, dapibus metus. Donec sed nunc a enim efficitur efficitur. Donec eget ligula a enim efficitur convallis. Donec sed nisi ac ipsum efficitur convallis. Donec sed nisi ac ipsum efficitur convallis."
    }
];

window.addEventListener('load', () => {
    renderProjects();
    console.log('Projects rendered successfully!');
});

function renderProjects(){
    for (const project of exampleData) {
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