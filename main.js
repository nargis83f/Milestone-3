var form = document.getElementById('resume-form');
var resumeDisplay = document.getElementById('resume-display');
var resumeContent = document.getElementById('resume-content');
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission from refreshing the page
    // Gather form data
    var formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        education: document.getElementById('education').value,
        workExperience: document.getElementById('workExperience').value,
        skills: document.getElementById('skills').value
    };
    // Display the resume
    displayResume(formData);
});
function displayResume(data) {
    resumeContent.innerHTML = "\n        <h3>".concat(data.name, "</h3>\n        <p><strong>Email:</strong> ").concat(data.email, "</p>\n        <p><strong>Education:</strong> ").concat(data.education, "</p>\n        <p><strong>Work Experience:</strong> ").concat(data.workExperience, "</p>\n        <p><strong>Skills:</strong> ").concat(data.skills, "</p>\n    ");
}
