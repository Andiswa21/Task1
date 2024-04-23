// Function to render the professional experience section
function renderProfessionalExperience() {
    // Select the container where the professional experience section will be appended
    var container = document.querySelector('.additional_content .cv_section');

    // Create a div for each experience entry
    var experienceEntries = [
        {
            title: "Data Analysis Intern",
            company: "Alma Clinic",
            location: "Gauteng, South Africa",
            duration: "2023/07 – 2023/12",
            responsibilities: [
                "Conducted comprehensive data analysis using tools such as Excel, SQL to extract meaningful insights from large datasets.",
                "Collaborated with cross-functional teams to interpret data, identify trends, and generate reports that informed strategic decision-making.",
                "Cleaned and processed raw data to ensure accuracy and consistency, contributing to improved data quality and integrity.",
                "Utilized visualization tools like Tableau or Power BI to create interactive dashboards and visual representations of complex data sets for stakeholders."
            ]
        },
        {
            title: "DevOps Trainee",
            company: "Mecer Inter-Ed",
            location: "Gauteng, South Africa",
            duration: "2023/02 – 2023/06",
            responsibilities: [
                "Understanding the culture, emphasizing collaboration and integration between development and operations teams.",
                "Understanding Docker and Kubernetes for efficient application deployment and scaling.",
                "Working knowledge of Azure for deploying and managing applications.",
                "Proficiency in using Git or SVN for managing code versions and changes."
            ]
        }
    ];

    // Loop through each experience entry and create corresponding HTML elements
    experienceEntries.forEach(function(entry) {
        // Create div for the entry
        var entryDiv = document.createElement('div');
        entryDiv.classList.add('experience_entry');

        // Create and append h3 for the job title
        var titleHeading = document.createElement('h3');
        titleHeading.textContent = entry.title;
        entryDiv.appendChild(titleHeading);

        // Create and append p elements for company, location, and duration
        var detailsParagraphs = [
            "Company: " + entry.company,
            "Location: " + entry.location,
            "Duration: " + entry.duration
        ];

        detailsParagraphs.forEach(function(detail) {
            var detailParagraph = document.createElement('p');
            detailParagraph.textContent = detail;
            entryDiv.appendChild(detailParagraph);
        });

        // Create and append ul for responsibilities
        var responsibilitiesList = document.createElement('ul');
        entry.responsibilities.forEach(function(responsibility) {
            var responsibilityItem = document.createElement('li');
            responsibilityItem.textContent = responsibility;
            responsibilitiesList.appendChild(responsibilityItem);
        });
        entryDiv.appendChild(responsibilitiesList);

        // Append the entry div to the container
        container.appendChild(entryDiv);
    });
}

// Call the function to render the professional experience section
renderProfessionalExperience();

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    const submitButton = document.getElementById("submit-btn");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        // Fetch Formspree endpoint URL
        const formEndpoint = "https://formspree.io/f/xnqelojw";

        // Prepare form data
        const formData = new FormData(form);

        // Submit form data using Fetch API
        fetch(formEndpoint, {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json"
            }
        })
        .then(response => {
            if (response.ok) {
                alert("Message sent successfully!");
                form.reset(); // Clear form fields
            } else {
                alert("Error sending message. Please try again later.");
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("An error occurred while sending the message.");
        });
    });
});
