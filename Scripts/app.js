// JavaScript source code
// Your Full Name: Eric Thompson
// StudentID: 100526728
// Date Completed: 01/31/24

// Function to inject content into pages
function injectContent(pageId, title, content, imageUrl) {
    const pageElement = document.getElementById(pageId);

    let contentHtml = `<h1>${title}</h1>`;

    // Check if imageUrl is provided before including the img tag
    if (imageUrl) {
        contentHtml += `<img src="${imageUrl}" alt="${title} Image" class="img-fluid">`;
    }

    contentHtml += `<p>${content}</p>`;

    pageElement.innerHTML = contentHtml;
}

// Function to change the Products link to Projects
function changeProductsLink() {
    document.querySelector('.navbar-nav li:nth-child(2) a').innerText = 'Projects';
}

// Function to add Human Resources link to Navbar
function addHumanResourcesLink() {
    const newLink = document.createElement('li');
    newLink.className = 'nav-item';
    newLink.innerHTML = '<a class="nav-link" href="#">Human Resources</a>';
    document.querySelector('.navbar-nav li:nth-child(4)').insertAdjacentElement('afterend', newLink);

    // Add Font Awesome icon to the new link
    const icon = document.createElement('i');
    icon.className = 'fas fa-users';
    newLink.querySelector('a').appendChild(icon);
}

// Function to add bottom navbar
function addBottomNavbar() {
    const bottomNavbar = document.createElement('nav');
    bottomNavbar.className = 'navbar fixed-bottom navbar-light bg-light';
    bottomNavbar.innerHTML = '<span class="navbar-text">&copy; ' + new Date().getFullYear() + ' Cerberus</span>';
    document.body.appendChild(bottomNavbar);
}
document.addEventListener('DOMContentLoaded', function () {
    // Inject content into pages
    injectContent('homePage', 'Welcome to Cerberus', 'Here at Cerberus, we strive to advance humanity past its limits by pushing technology ever forward. From advanced web development headed by Dr. Goralski the most revered Computer Engineer of our generation, all the way to robotics, ship design and sophisticated artificial intelligence. Together humanity moves forward!');
    injectContent('projectsPage', 'Our Projects', 'Details about our projects go here...');
    injectContent('servicesPage', 'Our Services', 'Details about our services go here...');
    injectContent('aboutUsPage', 'About Us', 'Details about us go here...');

    // Change Products link to Projects
    changeProductsLink();

    // Add Human Resources link to Navbar
    addHumanResourcesLink();

    // Add bottom navbar
    addBottomNavbar();
});

