const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const mess = document.getElementById("text");



function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone: ${phone.value}<br> Message: ${mess.value}`;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "freij.akram@gmail.com",
        Password : "9581D1EA0CDD8A7582F27F71B3D9A3CB2594",
        To : 'freij.akram@gmail.com',
        From : "freij.akram@gmail.com",
        Subject : "Website Creation",
        Body : bodyMessage
    }).then(
      message => {
        if (message == "OK") {
          Swal.fire({
            title: "Success!",
            text: "Message sent successfully!",
            icon: "success"
          });
        }
      }
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    sendEmail();
});
