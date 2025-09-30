 const form = document.getElementById("contactForm");
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const messageInput = document.getElementById("message");

        const nameError = document.getElementById("nameError");
        const emailError = document.getElementById("emailError");
        const messageError = document.getElementById("messageError");
        const successMessage = document.getElementById("successMessage");

        form.addEventListener("submit", function (e) {
            e.preventDefault();

            let isValid = true;
            successMessage.textContent = "";

            const namePattern = /^[a-zA-Z ]+$/;
            if (nameInput.value.trim() === "") {
                nameError.textContent = "Name is required";
                isValid = false;
            } else if (!namePattern.test(nameInput.value)) {
                nameError.textContent = "Only letters and spaces are allowed";
                isValid = false;
            } else {
                nameError.textContent = "";
            }

            const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
            if (emailInput.value.trim() === "") {
                emailError.textContent = "Email is required";
                isValid = false;
            } else if (!emailPattern.test(emailInput.value)) {
                emailError.textContent = "Enter a valid email (e.g. abc@example.com)";
                isValid = false;
            } else {
                emailError.textContent = "";
            }

            if (messageInput.value.trim() === "") {
                messageError.textContent = "Message cannot be empty";
                isValid = false;
            } else {
                messageError.textContent = "";
            }

            if (isValid) {
                successMessage.textContent = "Form submitted successfully!";
                form.reset();
            }
        }); 