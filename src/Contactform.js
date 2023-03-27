import React, { useState } from 'react';
import axios from 'axios';

import './Contactform.css';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      Name: name,
      Email: email,
    };
    try {
      const response = await axios.post('https://public.herotofu.com/v1/debda9b0-c5a9-11ed-9f66-79fb1661ec02', formData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <div >
        <label className="FormName" htmlFor="name">Your Name</label>
        <input className="FormNameInput" name="Name" id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label className="FormMail" htmlFor="email">Your Email</label>
        <input className="FormMailInput" name="Email" id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div >
        <input className="ContactSubmissionButton" type="submit" value="Send" />
        <div style={{ textIndent: '-99999px', whiteSpace: 'nowrap', overflow: 'hidden', position: 'absolute' }} aria-hidden="true">
          <input type="text" name="_gotcha" tabIndex="-1" autoComplete="off" />
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
