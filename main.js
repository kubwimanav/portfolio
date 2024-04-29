const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const form = document.getElementById('form');
const email_error= document.getElementById("email_error");
const message_error = document.getElementById("message_error");


form.addEventListener('submit', (e) =>
{
    if (email.value === '' || email.value == null)
    {
        e.preventDefault();
        email_error.innerHTML('Please Enter Your Email')
    }
    

    if (message.value === "" || message.value == null) {
      e.preventDefault();
      message_error.innerHTML("Please Enter Your Message");
    }

}
    
)
