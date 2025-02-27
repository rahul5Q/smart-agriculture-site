// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Simple form validation
document.getElementById('contact-form')?.addEventListener('submit', e => {
    e.preventDefault();
    const form = e.target;
    const { name, email, message } = form.elements;

    if (name.value && email.value && message.value) {
        alert(`Thank you, ${name.value}! Your message has been sent.`);
        form.reset();
    } else {
        alert("Please fill out all fields.");
    }
});

