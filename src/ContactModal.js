import React, { useState, useRef } from 'react'
import { Button, Icon, Modal, Form, Input, TextArea } from 'semantic-ui-react';
import emailjs from 'emailjs-com';
// import { init } from 'emailjs-com';
// init("user_TnY5a5lrQ29TcAvOHuN56");


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

            {/* <Form ref={form} onSubmit={sendEmail} >
              <Form.Group widths='equal'>
                <Form.Field
                  type="text"
                  name="user_name"
                  id='form-input-control-name'
                  control={Input}
                  label='Your Name'
                  placeholder='John Doe'

                />
                <Form.Field
                  type="email"
                  name="user_email"
                  id='form-input-control-error-email'
                  control={Input}
                  label='Your Email'
                  placeholder='john@schmoe.com'


                />
              </Form.Group>
              <Form.Field
                id='form-textarea-control-message'
                control={TextArea}
                name="message"
                label='Your Message'
                placeholder='Message'

              />
            </Form> */}

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
                {/* <div className="field">
                  <label>Gender</label>
                  <div role="listbox" aria-expanded="false" className="ui selection dropdown" tabIndex="0">
                    <div aria-atomic="true" aria-live="polite" role="alert" className="divider default text">
                      Gender
                    </div>
                    <i aria-hidden="true" className="dropdown icon"></i>
                    <div className="menu transition"><div style={{ pointerEvents: "all" }} role="option" aria-checked="false" aria-selected="true" className="selected item">
                      <span className="text">Male</span>
                    </div>
                      <div style={{ pointerEvents: "all" }} role="option" aria-checked="false" aria-selected="false" className="item">
                        <span className="text">Female</span>
                      </div>
                      <div style={{ pointerEvents: "all" }} role="option" aria-checked="false" aria-selected="false" className="item">
                        <span className="text">Other</span>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
              {/* <div className="inline fields">
                <label>
                  Quantity
                </label>
                <div className="field">
                  <div className="ui radio checkbox"><input type="radio" className="hidden" readOnly="" tabIndex="0" value="1" />
                    <label>One</label>
                  </div>
                </div>
                <div className="field">
                  <div className="ui radio checkbox">
                    <input type="radio" className="hidden" readOnly="" tabIndex="0" value="2" />
                    <label>Two</label>
                  </div>
                </div>
                <div className="field"><div className="ui radio checkbox">
                  <input type="radio" className="hidden" readOnly="" tabIndex="0" value="3" />
                  <label>Three</label>
                </div>
                </div>
              </div> */}
              <div className="field">
                <label>Your Message</label>
                <textarea placeholder="Tell me..." rows="3" name="message" ></textarea>
                {/* <input type="submit" value="Send" /> */}
              </div>
              {/* <div className="field">
                <div className="ui checkbox">
                  <input type="checkbox" className="hidden" readOnly="" tabIndex="0" />
                  <label>I agree to the Terms and Conditions</label>
                </div>
              </div> */}
              <div className="field">
                <button className="ui button" value="Send" >Submit</button>
              </div>
            </form>
            {/* <form className="ui form" ref={form} onSubmit={sendEmail}>
              <div className="equal width fields">
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
              </div>
            </form> */}
          </Modal.Description>
        </Modal.Content>
        {/* <Modal.Actions>
          <Button primary >
            Submit <Icon name='chevron right' />
          </Button>
        </Modal.Actions> */}
      </Modal>
    </div>
  )

}

export default ContactModal;
