import { useState } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
        setSuccess(true);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <>
      <div className="contact-container">
        <div className="contact-form">
          <h2>Get in touch</h2>
          <form onSubmit={sendEmail}>
            <input id='user' type="text" name="name" placeholder="Name" required onChange={handleChange} />
            <input id="email" type="email" name="email" placeholder="Email" required onChange={handleChange} />
            <textarea name="message" placeholder="Message" required onChange={handleChange} />
            <button type="submit">Send</button>
          </form>
          {success && <p>Message sent successfully!</p>}
        </div>
      </div>
      <div className="contact-info contact-container">
          <h2>Contact Information</h2>
          <p>Email: yasmin.ishaque@gmail.com</p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Address: 123 Main Street, City, Country</p>
        </div>

    </>
  );
};

export default Contact;