import React, { useState } from 'react'
import { Button, Icon, Image, Modal, Form, Input, TextArea, Select } from 'semantic-ui-react'
// import ContactMe from './ContactMe'

import 'semantic-ui-css/semantic.min.css'

const ContactModal = () => {

  //States
  const [open, setOpen] = useState(false)

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

            <Form>
              <Form.Group widths='equal'>
                <Form.Field
                  id='form-input-control-name'
                  control={Input}
                  label='Your Name'
                  placeholder='John Doe'
                />
                <Form.Field
                  id='form-input-control-error-email'
                  control={Input}
                  label='Your Email'
                  placeholder='john@schmoe.com'
                // error={{
                //   content: 'Please enter a valid email address',
                //   pointing: 'below',
                // }}
                />
              </Form.Group>
              <Form.Field
                id='form-textarea-control-message'
                control={TextArea}
                label='Your Message'
                placeholder='Message'
              />
            </Form>

          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => setOpen(false)} primary>
            Submit <Icon name='chevron right' />
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  )
}

export default ContactModal;
