
const form = document.getElementById('survey-form');

form.addEventListener('submit', function(event) {
event.preventDefault();

const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        age: document.getElementById('age').value,
        describe: document.getElementById('describe').value,
        recommend: document.querySelector('input[name="message"]:checked')?.value || '',
        languages: Array.from(document.querySelectorAll('input[name="lenguage"]:checked'))
            .map(checkbox => checkbox.value),
        comment: document.getElementById('comment').value
    };

    console.log("Form Data:", formData);
});
