emailjs.init("Qsct3wbBa-67SwyTa");

document
  .getElementById("contactForm")
  .addEventListener("submit", function(event) {

    event.preventDefault();

    emailjs.sendForm(
      "service_wbe6x7j",
      "template_qlc1lmb",
      this
    )
    .then(() => {

      document.getElementById("formSuccess").style.display = "block";

      this.reset();

    })
    .catch((error) => {
      console.error(error);
      alert("Failed to send enquiry.");
    });

});