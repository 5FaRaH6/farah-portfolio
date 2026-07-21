(function () {

    emailjs.init("cnhfjIsnythH3PJoc");

})();


document
    .getElementById("contact-form")
    .addEventListener("submit", function (e) {

        e.preventDefault();


        emailjs.sendForm(
            "service_00env9a",
            "template_j7gryi1",
            this
        )
            .then(function () {

                alert("Thank you! Your message has been sent successfully.");

            })
            .catch(function (error) {

                console.log(error);
                alert("Failed to send message.");

            });

    });