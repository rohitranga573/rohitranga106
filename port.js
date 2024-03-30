const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = contactForm.name.value;
    const email = contactForm.email.value;
    const message = contactForm.message.value;

    const formData = {
        name,
        email,
        message
    }

    // send form data to server
    sendFormData(formData)
});

function sendFormData(formData) {
    // make a post request with the form data
    fetch("https://mail.google.com/mail/u/0/#inbox", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    })
    .then((res) => {
        if (res.status === 200) {
            // form submitted successfully
            showAlert("Form submitted successfully!", "success");
            // clear form
            contactForm.reset();
        } else {
            throw new Error("Form submission failed");
        }
    })
    .catch((err) => {
        // handle error
        showAlert("Form submission failed, please try again.", "error");
    });
}

function showAlert(message, type) {
    const alertContainer = document.createElement("div");
    alertContainer.classList.add("alert");
    alertContainer.textContent = message;
    alertContainer.classList.add(type);

    const alertContainerClose = document.createElement("span");
    alertContainerClose.classList.add("close");
    alertContainerClose.textContent = "&times;";

    alertContainer.appendChild(alertContainerClose);
    document.body.appendChild(alertContainer);

    setTimeout(() => {
        alertContainer.classList.add("hide");) {
            // show a success message
            showSuccessMessage();
            // clear form
            contactForm.reset();
        } else {
            // show an error message
            showErrorMessage();
        }
    });
}

function showSuccessMessage() {
    // show a success message
    alert("Thanks for your message! I will get back to you soon.");
}

function showErrorMessage() {
    // show an error message
    alert("Something went wrong. Please try again later.");
}
alertContainerClose.addEventListener("click", () => {
    alertContainer.classList.add("hide");
    setTimeout(() => {
        alertContainer.remove();
    }, 500);
});
