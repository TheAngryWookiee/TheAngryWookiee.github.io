// JavaScript source code
// Your Full Name: Eric Thompson
// StudentID: 100526728
// Date Completed: 01/31/24

// Function to inject content into pages
//function injectContent(pageId, title, content, imageUrl) {
//    const pageElement = document.getElementById(pageId);

//    let contentHtml = `<h1>${title}</h1>`;

//    // Check if imageUrl is provided before including the img tag
//    if (imageUrl) {
//        contentHtml += `<img src="${imageUrl}" alt="${title} Image" class="img-fluid">`;
//    }

//    contentHtml += `<p>${content}</p>`;

//    pageElement.innerHTML = contentHtml;
//}

function injectContent(pageId, title, content, imageUrl) {
    const pageElement = document.getElementById(pageId);

    // Check if element exists.
    if (!pageElement) {
        console.error(`Element with id '${pageId}' not found.`);
        return;
    }

    let contentHtml = `<h1>${title}</h1>`;

    // Check if imageUrl is provided before including the img tag
    if (imageUrl) {
        contentHtml += `<img src="${imageUrl}" alt="${title} Image" class="img-fluid">`;
    }

    contentHtml += `<p>${content}</p>`;

    pageElement.innerHTML = contentHtml;
}

function injectParagraph(pageId, title, content, imageUrl) {
    const pageElement = document.getElementById(pageId);

    // Check if element exists.
    if (!pageElement) {
        console.error(`Element with id '${pageId}' not found.`);
        return;
    }

    let contentHtml = `<h2>${title}</h2>`;

    // Check if imageUrl is provided before including the img tag
    if (imageUrl) {
        contentHtml += `<img src="${imageUrl}" alt="${title} Image" class="img-fluid">`;
    }

    contentHtml += `<p>${content}</p>`;

    pageElement.innerHTML += contentHtml;
}

// Function to change the Products link to Projects
document.querySelector('.navbar-nav li:nth-child(2) a').innerText = 'Projects';


// Add Human Resources link to Navbar
const newLink = document.createElement('li');
newLink.className = 'nav-item';
newLink.innerHTML = '<a class="nav-link" href="#">Human Resources</a>';
document.querySelector('.navbar-nav li:nth-child(4)').insertAdjacentElement('afterend', newLink);

// Add Font Awesome icon to the new link
const icon = document.createElement('i');
icon.className = 'fas fa-users';
newLink.querySelector('a').appendChild(icon);


// Add bottom navbar
const bottomNavbar = document.createElement('nav');
bottomNavbar.className = 'navbar fixed-bottom navbar-light';
bottomNavbar.innerHTML = '<span class="navbar-text">&copy; ' + new Date().getFullYear() + ' Cerberus</span>';
document.body.appendChild(bottomNavbar);

document.addEventListener('DOMContentLoaded', function () {
    // Inject content into pages
    injectContent('homePage', 'Welcome to Cerberus', 'Here at Cerberus,' +
        ' we strive to advance humanity past its limits by pushing technology ever forward. From advanced web development headed by Dr.' +
        ' Goralski the most revered Computer Engineer of our generation, all the way to robotics, ship design and sophisticated artificial intelligence. ' +
        'Together humanity moves forward!');
    injectContent('projectsPage', 'Our Projects', 'Details about our projects go here...');
    injectContent('servicesPage', 'Our Services', 'Details about our services go here...');
    injectContent('aboutUsPage', 'About Us', 'Details about us go here...');
    injectParagraph('aboutUsPage', 'Zachary Munshaw', 'Programming on and off since I was 16, love it.' +
        ' Currently attending Durham College.', 'https://media.licdn.com/dms/' +
        'image/D4E03AQFQQKG9eVqw0Q/profile-displayphoto-shrink_800_800/0/1697209505406?e=1712188800&v=beta&t=wUjPnLa' +
        'mfiYFsCqktwgY1wEnkRrnCeD9cX5eRBqFBSc');


});
