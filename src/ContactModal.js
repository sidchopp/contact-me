import React, { useState, useRef } from 'react'
import { Button, Icon, Modal } from 'semantic-ui-react';
import emailjs from 'emailjs-com';


import 'semantic-ui-css/semantic.min.css'

const ContactModal = () => {

  //States
  const [open, setOpen] = useState(false);

  // EmailJS
  const form = useRef();
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_ns631vs', 'contact_form', form.current, 'user_TnY5a5lrQ29TcAvOHuN56')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  };

  return (
    <div style={{ margin: '50px' }}>
      <Modal
        closeIcon
        open={open}
        trigger={<Button>Contact Me</Button>}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
      >
        <Modal.Header>Contact Me</Modal.Header>
        <Modal.Content image scrolling>
          <Modal.Description>
            <form className="ui form" ref={form} onSubmit={sendEmail}>
              <div className="equal width fields">
                <div className="field">
                  <label>Your Name</label>
                  <div className="ui input">
                    <input type="text" placeholder="John Doe" name="user_name" />
                  </div>
                </div>
                <div className="field">
                  <label>Your Email</label>
                  <div className="ui input">
                    <input type="text" placeholder="john@gmail.com" name="user_email" />
                  </div>
                </div>
              </div>
              <div className="field">
                <label>Your Message</label>
                <textarea placeholder="Tell me..." rows="3" name="message" ></textarea>
              </div>
              <div className="field">
                <button className="ui button" value="Send" >Submit</button>
              </div>
            </form>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </div>
  );
};

export default ContactModal;
