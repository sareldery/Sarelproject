const form = document.querySelector("form");

function sendEmail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "drs161950@gmail.com",
        Password: "FEDE65B449BE8D04B30E16EFFE440C46F3E3",
        To: 'drs161950@gmail.com',
        From: 'drs161950@gmail.com',
        Subject: "your portfolio",
        Body: "this is the most amazing portfolio"
    }).then(
        message => {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "OK"
            });
        }
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
});