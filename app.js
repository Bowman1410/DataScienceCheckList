document.addEventListener("DOMContentLoaded", function() {
    const checklistContainer = document.getElementById("app");

    // Sample checklist items
    const checklistItems = [
        "Strengthen programming skills, especially in Python.",
        "Review basic statistics and mathematics concepts",
        "Dive deeper into Python or R, focusing on data manipulation libraries (e.g., pandas for Python)",
        "Work on small projects to practice data handling and analysis",
        "Take online courses or classes in statistics and mathematics relevant to data science.",
        "Apply statistical concepts to analyze data",
        "Explore machine learning concepts and algorithms",
        "Start implementing basic machine learning models using libraries like scikit-learn.",
        "Learn data visualization techniques using libraries like Matplotlib or Seaborn",
        "Understand databases and SQL for data management",
        "Explore advanced machine learning topics (e.g., deep learning) if interested.",
        "Specialize in an area of data science aligning with your career goals (e.g., NLP, computer vision",
        "Stay updated with industry trends and emerging technologies",
        "Engage in online courses, workshops, and communities.",
        "Build a portfolio of data science projects showcasing your skills",
        "Tailor your resume and cover letter to highlight data science skills",
        // Add other checklist items
    ];

    checklistItems.forEach((item, index) => {
        const listItem = document.createElement("div");
        listItem.className = "checklist-item";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        const label = document.createElement("label");
        label.textContent = item;

        // Check local storage for saved state
        const savedState = localStorage.getItem(`item${index}`);
        if (savedState === "completed") {
            checkbox.checked = true;
        }

        // Event listener for checkbox change
        checkbox.addEventListener("change", function() {
            if (this.checked) {
                localStorage.setItem(`item${index}`, "completed");
            } else {
                localStorage.removeItem(`item${index}`);
            }
        });

        listItem.appendChild(checkbox);
        listItem.appendChild(label);
        checklistContainer.appendChild(listItem);
    });
});
