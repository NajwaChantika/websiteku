document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    console.log('Form found:', form); 

    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            console.log('Form submitted!'); 
            const response = document.getElementById('formResponse');
            response.style.color = 'green';
            response.textContent = 'Thank you for your message!';
        });
    } else {
        console.error('Form with id "contactForm" not found.');
    }
});
