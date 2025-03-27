document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Initialize Particles.js
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#4cc9f0" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: "#4cc9f0", opacity: 0.4, width: 1 },
            move: { enable: true, speed: 2, direction: "none", random: true, straight: false, out_mode: "out" }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" }
            }
        }
    });
    
    // Custom cursor
    const cursor = document.querySelector('.cursor');
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.pageX + 'px';
        cursor.style.top = e.pageY + 'px';
    });
    
    // Animate stats counters
    const statCards = document.querySelectorAll('.stat-card[data-count]');
    statCards.forEach(card => {
        const target = parseInt(card.getAttribute('data-count'));
        const statNumber = card.querySelector('.stat-number');
        animateValue(statNumber, 0, target, 2000);
    });
    
    // Simplified skills data in script.js
    const skillsData = {
        "Languages & Databases": [
            "Python", "SQL", "MySQL", "PostgreSQL", 
            "MS SQL Server", "SQLAlchemy ORM"
        ],
        "Data Visualization & Analytics": [
            "Power BI", "Tableau", "Matplotlib", 
            "Seaborn", "Pandas", "Numpy", "EDA"
        ],
        "Machine Learning": [
            "Scikit-learn", "TensorFlow", "Keras",
            "Predictive Modeling", "Statistical Analysis"
        ],
        "AI Technologies": [
            "Computer Vision", "Natural Language Processing",
            "Deep Learning", "Neural Networks"
        ],
        "Tools & Platforms": [
            "Git/GitHub", "VS Code", "Jupyter",
            "Postman", "Docker", "AWS"
        ]
    };

    const skillsContainer = document.querySelector('.skills-container');
    for (const category in skillsData) {
        const skillsCategory = document.createElement('div');
        skillsCategory.className = 'skills-category';
        
        const iconMap = {
            "Languages & Databases": "fa-code",
            "Data Visualization & Analytics": "fa-chart-bar",
            "Machine Learning": "fa-brain",
            "AI Technologies": "fa-robot",
            "Tools & Platforms": "fa-tools"
        };
        
        skillsCategory.innerHTML = `
            <h3><i class="fas ${iconMap[category]}"></i> ${category}</h3>
            <div class="skills-list"></div>
        `;
        
        const skillsList = skillsCategory.querySelector('.skills-list');
        skillsData[category].forEach(skill => {
            const skillItem = document.createElement('div');
            skillItem.className = 'skill-item';
            skillItem.textContent = skill;
            skillsList.appendChild(skillItem);
        });
        
        skillsContainer.appendChild(skillsCategory);
    }
    
    // Dynamic experience generation
    const experienceData = [
        {
            date: "Aug 2024 – Present",
            company: "University of South Florida",
            title: "Graduate Research Assistant",
            location: "Tampa, Florida",
            description: [
                "Integrated an auto grading system, achieving 85% accuracy, by implementing both LSTM and Transformer-based models",
                "Optimized model performance, reducing mean absolute error (MAE) from 1.5 points to <1 point, by fine-tuning transformer based model with grid search, cross-validation, and dataset expansion",
                "Streamlined the feedback generation pipeline, cutting grading time by 90%, by automating the feedback process and ensuring consistency through improved model predictions"
            ]
        },
        {
            date: "Sep 2022 – Jul 2023",
            company: "Fractal Analytics",
            title: "Data Scientist",
            location: "Remote",
            description: [
                "Delivered a high-performance Revenue Growth Management dashboard, enabling 10+ filters for sales data analysis, by employing Power BI data modeling, and DAX optimization for actionable business insights",
                "Automated data ingestion of 1M+ records improving efficiency and scalability through implementing SQLAlchemy ORM",
                "Optimized SQL performance reducing redundancy by 25% through schema normalization, index and query optimization",
                "Developed a predictive sales model, achieving 85% accuracy in forecasting future sales, using Random Forest and XGBoost",
                "Designed an interactive Power BI dashboard, delivering 15+ KPIs and real-time insights, by optimizing DAX queries",
                "Collaborated in VS Code for development and debugging, reducing code review time by 50% by optimizing version control"
            ]
        },
        {
            date: "May 2022 – Jul 2022",
            company: "Fractal Analytics",
            title: "Data Science Internship",
            location: "Remote",
            description: [
                "Created Power BI dashboards, visualizing 10+ sales KPIs and providing real-time insights, by using advanced DAX queries",
                "Engineered SQL queries, reducing processing time from 2 min to 5 secs, by implementing indexing and query optimization",
                "Constructed a predictive model, achieving 83.6% accuracy for sales trend forecasting, employing feature engineering, model ensembling, and cross-validation for enhanced model robustness"
            ]
        }
    ];
    
    const timeline = document.querySelector('.timeline');
    experienceData.forEach((exp, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        
        const descriptionItems = exp.description.map(item => `<li>${item}</li>`).join('');
        
        timelineItem.innerHTML = `
            <div class="timeline-date">${exp.date}</div>
            <div class="timeline-content">
                <h3>${exp.company}</h3>
                <p class="job-title">${exp.title}</p>
                <p class="job-location"><i class="fas fa-map-marker-alt"></i> ${exp.location}</p>
                <ul class="job-description">${descriptionItems}</ul>
            </div>
        `;
        
        timeline.appendChild(timelineItem);
    });
    
    // Dynamic projects generation
    const projectsData = [
        {
            title: "Predicting Income Levels Using ML Models",
            tech: ["Python", "Scikit-learn", "Random Forest"],
            description: [
                "Preprocessed data and formulated a machine learning model, achieving 82.71% accuracy, by applying feature engineering",
                "Refined the XGBoost model, achieving 84.46% recall, by optimizing hyperparameters to improve income segmentation"
            ],
            metrics: [
                { value: "82.71%", label: "Accuracy" },
                { value: "84.46%", label: "Recall" }
            ],
            github: "https://github.com/PriyaankaReddyB/income-level-prediction-ml"
        },
        {
            title: "Hate Speech Detection in Memes",
            tech: ["Keras", "TensorFlow", "Multimodal AI"],
            description: [
                "Evaluated image-only model achieving 58.72% accuracy by using CNNs with autoencoders to optimize model performance",
                "Accomplished efficient text-based hate speech detection, achieving 69.41% accuracy, by leveraging TF-IDF vectorization and Truncated SVD for feature extraction and dimensionality reduction",
                "Improved the combined model precision to 52.68% and recall to 50.24%, by combining text features with pre-trained CNNs"
            ],
            metrics: [
                { value: "69.41%", label: "Text Accuracy" },
                { value: "52.68%", label: "Combined Precision" }
            ],
            github: "https://github.com/PriyaankaReddyB/hate-speech-meme-detection"
        },
        {
            title: "Recipe Reviews Sentiment Analysis",
            tech: ["NLP", "Deep Learning", "Textblob"],
            description: [
                "Implemented a sentiment analysis system, achieving 81.8% precision and 85.9% recall using TextBlob and Decision Tree",
                "Processed 18,182 reviews, computing cosine similarity for personalized recipe recommendations, by applying Transformer-based NLP models and embeddings"
            ],
            metrics: [
                { value: "81.8%", label: "Precision" },
                { value: "85.9%", label: "Recall" }
            ],
            github: "https://github.com/PriyaankaReddyB/recipe-reviews-sentiment-analysis"
        }
    ];
    
    const projectsGrid = document.querySelector('.projects-grid');
    projectsData.forEach(project => {
        const descriptionItems = project.description.map(item => `<li>${item}</li>`).join('');
        const techItems = project.tech.map(tech => `<span>${tech}</span>`).join('');
        const metricItems = project.metrics.map(metric => `
            <div class="metric">
                <div class="metric-value">${metric.value}</div>
                <div class="metric-label">${metric.label}</div>
            </div>
        `).join('');
        
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <div class="project-header">
                <h3>${project.title}</h3>
                <div class="project-tech">${techItems}</div>
            </div>
            <div class="project-details">
                <ul>${descriptionItems}</ul>
            </div>
            <div class="project-metrics">${metricItems}</div>
            <div class="project-footer">
                <a href="${project.github}" target="_blank" class="github-btn">
                    <i class="fab fa-github"></i> View on GitHub
                </a>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
    
    // Dynamic certifications generation
    const certificationsData = [
        {
            title: "Fractal Imagineers Data Science Program",
            issuer: "Analytics Vidhya",
            link: "https://www.credential.net/4cec051f-cd50-49c2-86c0-77e20fc045b1#acc.aJVS8j04"
        },
        {
            title: "Machine Learning with Python (with Honors)",
            issuer: "Coursera",
            link: "https://www.coursera.org/account/accomplishments/certificate/M6DAAV2SMQYT"
        },
        {
            title: "Predictive Modeling, Model Fitting, and Regression Analysis",
            issuer: "Coursera",
            link: "https://www.coursera.org/account/accomplishments/verify/JRZFLR9CT5T7"
        },
        {
            title: "Python for Data Science and AI",
            issuer: "Coursera",
            link: "https://www.credly.com/badges/f14e1cbc-48cf-4b48-9578-072b12904b47"
        },
        {
            title: "Introduction to Data Science in Python",
            issuer: "Coursera",
            link: "https://www.coursera.org/account/accomplishments/verify/5B3HC9VSK2PS"
        },
        {
            title: "Python for Data Science, AI & Development",
            issuer: "Coursera",
            link: "https://www.coursera.org/account/accomplishments/verify/Y9RLJMMP49K5"
        },
        {
            title: "Big Data Modeling and Management Systems",
            issuer: "Coursera",
            link: "https://www.coursera.org/account/accomplishments/verify/T7KUUZBC7NES"
        },
        {
            title: "Database Management Essentials",
            issuer: "Coursera",
            link: "https://www.coursera.org/account/accomplishments/certificate/UEALVB6UH222"
        },
        {
            title: "Introduction to Databases",
            issuer: "Coursera",
            link: "https://www.coursera.org/account/accomplishments/verify/S7LD4JX2YG6C"
        },
        {
            title: "Business Analytics for Decision Making",
            issuer: "Coursera",
            link: "https://www.coursera.org/account/accomplishments/verify/RTDTGETQN5B2"
        },
        {
            title: "Quantitative Foundations for International Business",
            issuer: "Coursera",
            link: "https://www.coursera.org/account/accomplishments/verify/5QHNUCMBJ98P"
        },
        {
            title: "Data Science Orientation",
            issuer: "Coursera",
            link: "https://www.credly.com/badges/2460c40d-8df3-48b7-9cba-299bdba900c1"
        },
        {
            title: "Data Science Math Skills",
            issuer: "Coursera",
            link: "https://www.coursera.org/account/accomplishments/verify/KA9QA6BKAHY8"
        },
        {
            title: "What is Data Science?",
            issuer: "Coursera",
            link: "https://www.coursera.org/account/accomplishments/verify/QHE9Q8A6YJYY"
        }
    ];
    
    const certificationsGrid = document.querySelector('.certifications-grid');
    certificationsData.forEach(cert => {
        const certCard = document.createElement('div');
        certCard.className = 'certification-card';
        certCard.setAttribute('onclick', `window.open('${cert.link}', '_blank')`);
        certCard.innerHTML = `
            <div class="certification-icon">
                <i class="fas fa-certificate"></i>
            </div>
            <h3>${cert.title}</h3>
            <p>Issued by ${cert.issuer}</p>
        `;
        certificationsGrid.appendChild(certCard);
    });
    
    // Modal for coursework
    const modal = document.getElementById('coursesModal');
    const btn = document.getElementById('showCoursesBtn');
    const span = document.getElementsByClassName("close-modal")[0];
    
    btn.onclick = function() {
        modal.style.display = "flex";
    }
    
    span.onclick = function() {
        modal.style.display = "none";
    }
    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    
    // Back to top button
    const backToTopButton = document.getElementById('backToTop');
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });
    
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
    
    // Highlight active section in navbar
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        document.querySelectorAll('nav a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the form data to a server
            // For this example, we'll just log it and show an alert
            console.log('Form submitted:', { name, email, subject, message });
            
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }
    
    // Animate elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.timeline-item, .project-card, .certification-card, .education-card, .skill-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animate__animated', 'animate__fadeInUp');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load
});

// Helper function to animate counting up
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}