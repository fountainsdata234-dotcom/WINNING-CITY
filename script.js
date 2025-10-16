emailjs.init('Ox0jjjc-W7SApaVP4'); // Replace with your EmailJS public key

document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const sendBtn = document.getElementById('sendBtn');
  const statusMsg = document.getElementById('status-msg');
  
  sendBtn.innerText = 'Sending...';
  sendBtn.disabled = true;

  emailjs.sendForm('service_tq1g3kk', 'template_puimljm', this)
    .then(() => {
      sendBtn.innerText = 'Message Sent ✅';
      statusMsg.innerText = 'Thank you! We will get back to you.';
      this.reset();

      setTimeout(() => {
        sendBtn.innerText = 'Send Message';
        sendBtn.disabled = false;
        statusMsg.innerText = '';
      }, 4000);
    })
    .catch((error) => {
      console.error('Email send failed:', error);
      sendBtn.innerText = 'Error ❌';
      statusMsg.innerText = 'Something went wrong. Please try again.';
      sendBtn.disabled = false;
    });
});


