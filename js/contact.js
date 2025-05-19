const contactForm = document.getElementById("contactForm");
const formSuccess = document.getElementById("formSuccess");

function handleFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(contactForm);
  const formValues = Object.fromEntries(formData.entries());

  contactForm.classList.add("submitting");

  setTimeout(() => {
    // Show success message
    contactForm.reset();
    contactForm.style.display = "none";
    formSuccess.classList.add("visible");

    // Reset form after a few seconds
    setTimeout(() => {
      contactForm.style.display = "block";
      formSuccess.classList.remove("visible");
    }, 5000);

    contactForm.classList.remove("submitting");
  }, 1500);

  console.log("Form submitted with values:", formValues);
}

function initContactForm() {
  contactForm.addEventListener("submit", handleFormSubmit);
}

window.addEventListener("load", initContactForm);
