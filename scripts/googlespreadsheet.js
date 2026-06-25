const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {

  e.preventDefault();

  const data = {
    name: document.getElementById("fname").value,
    phone: document.getElementById("fphone").value,
    email: document.getElementById("femail").value,
    projectType: document.getElementById("ftype").value,
    projectDetails: document.getElementById("fmsg").value
  };

  try {

    await fetch(
      "https://script.google.com/macros/s/AKfycbxl7Snp2NOOgMASMTXGPyFfWvEPblMEIDXaEBp8Rf8lcz91tomm-xOnL5s8WzDhFmsO/exec",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }
    );

    alert("Enquiry Submitted Successfully!");

    form.reset();

  } catch(err) {

    console.log(err);

    alert("Submission failed");

  }

});
