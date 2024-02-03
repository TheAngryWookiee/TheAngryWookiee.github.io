// JavaScript source code
// Your Full Name: Eric Thompson
// StudentID: 100526728
// Date Completed: 01/31/24

// Function to inject content into pages
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

// Style the nav bar
var style = document.createElement('style');
style.innerHTML = `
    .navbar {
        height: 50px;
    }
    `;

document.head.appendChild(style);
document.addEventListener('DOMContentLoaded', function () {
    // Inject content into pages
    injectContent('homePage', 'Welcome to Cerberus', 'Here at Cerberus,' +
        ' we strive to advance humanity past its limits by pushing technology ever forward. From advanced web development headed by Dr.' +
        ' Goralski the most revered Computer Engineer of our generation, all the way to robotics, ship design and sophisticated artificial intelligence. ' +
        'Together humanity moves forward!');
    injectContent('projectsPage', 'Our Projects', 'Some of our stellar projects...');
    injectParagraph('projectsPage', 'Normandy SR-2', "The Flagship cruiser of Cerberus the Normandy represents humanities best when it comes to space travel.");
    injectParagraph('projectsPage', 'EDI', "The Enhanced Defense Intelligence, or EDI is an AI created by us and installed on aboard the Normandy SR-2.");
    injectParagraph('projectsPage', 'Lazarus Project', "The most daunting effort Cerberus has ever undertaken, to bring a human back to life... It worked flawlessly and we successfully revived a human that suffered catastrophic injuries.");
    injectContent('servicesPage', 'Our Services', 'You can find some information about our services here!');
    injectParagraph('servicesPage', 'AI Development', "At Cerberus one of our specialities is Artificial Intelligence, we can craft safe yet complete AI for all your needs.");
    injectParagraph('servicesPage', 'Ship Design', "Our engineers are the best there is when it comes to ship design, we can make anything you want from small single seat craft to larger and more robust capital ships.");
    injectContent('aboutUsPage', 'About Us', 'A little about ourselves...');
    injectParagraph('aboutUsPage', 'Zachary Munshaw', 'Programming on and off since I was 16, love it.' +
        ' Currently attending Durham College.', 'https://media.licdn.com/dms/' +
        'image/D4E03AQFQQKG9eVqw0Q/profile-displayphoto-shrink_800_800/0/1697209505406?e=1712188800&v=beta&t=wUjPnLa' +
        'mfiYFsCqktwgY1wEnkRrnCeD9cX5eRBqFBSc');
    injectParagraph('aboutUsPage', 'Eric Thompson', "I don't like pictures of myself, but here we are. Woooo. " +
        'I do like hockey a bunch though.', 'https://media.licdn.com/dms/' +
    'image/D4E03AQGxxkWLWynrCQ/profile-displayphoto-shrink_200_200/0/1696977867406?e=1712188800&v=beta&t=8LzXO9MfYIuiZqC7RDeBfgZJij8tir0Ahxf_eSGUh4s');

});
