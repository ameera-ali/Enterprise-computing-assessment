document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;

    document.querySelectorAll('.error-message').forEach((elem) => {
        elem.textContent = '';
    });

    const fullName = document.getElementById('full-name');
    if (fullName.value.trim() === '') {
        isValid = false;
        document.getElementById('name-error').textContent = 'Full Name is required.';
    }

    const email = document.getElementById('email');
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email.value.trim() === '') {
        isValid = false;
        document.getElementById('email-error').textContent = 'Email is required.';
    } else if (!emailPattern.test(email.value.trim())) {
        isValid = false;
        document.getElementById('email-error').textContent = 'Please enter a valid email address.';
    }

    const phoneNumber = document.getElementById('phone-number');
    if (phoneNumber.value.trim() === '') {
        isValid = false;
        document.getElementById('phone-error').textContent = 'Phone Number is required.';
    }

    const feedbackType = document.getElementById('feedback-type');
    if (feedbackType.value.trim() === '') {
        isValid = false;
        document.getElementById('feedback-type-error').textContent = 'Feedback Type is required.';
    }

    const message = document.getElementById('message');
    if (message.value.trim() === '') {
        isValid = false;
        document.getElementById('message-error').textContent = 'Message is required.';
    }

    if (isValid) {
        alert('Feedback submitted successfully!');
    }

});




