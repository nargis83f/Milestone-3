type FormData = {
    name: string;
    email: string;
    education: string;
    workExperience: string;
    skills: string;
};

const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplay = document.getElementById('resume-display') as HTMLElement;
const resumeContent = document.getElementById('resume-content') as HTMLElement;

form.addEventListener('submit', (event: Event) => {
    event.preventDefault(); // Prevent form submission from refreshing the page

    // Gather form data
    const formData: FormData = {
        name: (document.getElementById('name') as HTMLInputElement).value,
        email: (document.getElementById('email') as HTMLInputElement).value,
        education: (document.getElementById('education') as HTMLInputElement).value,
        workExperience: (document.getElementById('workExperience') as HTMLInputElement).value,
        skills: (document.getElementById('skills') as HTMLInputElement).value
    };

    // Display the resume
    displayResume(formData);
});

function displayResume(data: FormData) {
    resumeContent.innerHTML = `
        <h3>${data.name}</h3>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Education:</strong> ${data.education}</p>
        <p><strong>Work Experience:</strong> ${data.workExperience}</p>
        <p><strong>Skills:</strong> ${data.skills}</p>
    `;
}