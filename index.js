document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Sample projects data
    const projects = [
        {
            title: "E-commerce Website",
            description: "A fully responsive e-commerce platform with product filtering, cart functionality, and secure checkout.",
            period: "May 2025 - June 2025",
            image: "assets/images/project1.jpg"
        },
        {
            title: "Intelligent Healthcare Chatbot using Cloud-based AI",
            description: "Design and develop an intelligent healthcare chatbot that utilizes cloud-based AI services to provide patients with personalised medical information , guidance and support.",
            period: "July 2025 - September 2025",
            image: "assets/images/project2.jpg"},
        {
            title: "Smart Water Metering System",
            description: "  Aims to design and develop an intelligent water metering system.",
            period: "October 2025 - November 2025",
            image: "assets/images/project3.jpg"
        }
    ];

    const projectsContainer = document.getElementById('projects-container');
    const addProjectBtn = document.getElementById('add-project-btn');
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    // Display initial projects
    displayProjects(projects);

    // Add project button functionality
    addProjectBtn.addEventListener('click', function() {
        const newProject = {
            title: prompt("Enter project title:"),
            description: prompt("Enter project description:"),
            period: prompt("Enter project period (e.g., Jan 2024 - Mar 2024):"),
            image: "assets/images/project-default.jpg"
        };

        if (newProject.title && newProject.description && newProject.period) {
            projects.push(newProject);
            displayProjects(projects);
        } else {
            alert("All fields are required. Project not added.");
        }
    });

    // Contact form submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (validateForm(name, email, message)) {
            // In a real application, you would send this data to a server
            formMessage.textContent = "Thank you for your message, " + name + "! I'll get back to you soon.";
            formMessage.style.display = "block";
            formMessage.style.backgroundColor = "#d4edda";
            formMessage.style.color = "#155724";
            
            // Reset form
            contactForm.reset();
            
            // Hide message after 5 seconds
            setTimeout(() => {
                formMessage.style.display = "none";
            }, 5000);
        }
    });

    // Function to display projects
    function displayProjects(projectsArray) {
        projectsContainer.innerHTML = '';
        
        projectsArray.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            
            projectCard.innerHTML = `
                <img src="${project.image}" alt="${project.title}" class="project-img">
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <span class="project-period">${project.period}</span>
                    <p>${project.description}</p>
                </div>
            `;
            
            projectsContainer.appendChild(projectCard);
        });
    }

    // Form validation
    function validateForm(name, email, message) {
        if (!name || !email || !message) {
            formMessage.textContent = "Please fill in all fields.";
            formMessage.style.display = "block";
            formMessage.style.backgroundColor = "#f8d7da";
            formMessage.style.color = "#721c24";
            return false;
        }

        if (!validateEmail(email)) {
            formMessage.textContent = "Please enter a valid email address.";
            formMessage.style.display = "block";
            formMessage.style.backgroundColor = "#f8d7da";
            formMessage.style.color = "#721c24";
            return false;
        }

        return true;
    }

    // Email validation helper
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});