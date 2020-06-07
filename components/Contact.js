import React, { useState } from "react";
import { Grid, Container, Header, Segment, Input, Button, TextArea, Form, Message } from "semantic-ui-react";
import { Formiz, useForm, useField } from '@formiz/core'
import { isEmail } from '@formiz/validations'

const Contact = () => {
  const [messageSuccess, setMessageSuccess] = useState(false);
  const [messageNegative, setMessageNegative] = useState(false);

  const MyField = (props) => {
    const {
      errorMessage,
      id,
      isValid,
      isPristine,
      isSubmitted,
      resetKey,
      setValue,
      value,
    } = useField(props)
    const { label, type, required } = props
    const [isFocused, setIsFocused] = React.useState(false);
    const showError = !isValid && (!isPristine || isSubmitted)

    return (
      <Form.Field>
        <div className={`form-left demo-form-group ${(showError && !isFocused) ? 'is-error' : ''}`}>
          <label
            htmlFor={id}
          >
            {label}
            {required && ' *'}
          </label>
          <Input
            key={resetKey}
            id={id}
            type={type || 'text'}
            value={value || ''}
            className="demo-input"
            onChange={e => setValue(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            aria-invalid={!isValid}
            aria-describedby={!isValid ? `${id}-error` : null}
          />
          {showError && (
            <div id={`${id}-error`} className="demo-form-feedback">
              {errorMessage}
            </div>
          )}
        </div>
      </Form.Field>
    )
  }

  const MyTextArea = (props) => {
    const {
      errorMessage,
      id,
      isValid,
      isPristine,
      isSubmitted,
      resetKey,
      setValue,
      value,
    } = useField(props)
    const { label, type, required } = props
    const [isFocused, setIsFocused] = React.useState(false);
    const showError = !isValid && (!isPristine || isSubmitted)

    return (
      <Form.Field>
        <div className={`form-left demo-form-group ${(showError && !isFocused) ? 'is-error' : ''}`}>
          <label
            htmlFor={id}
          >
            {label}
            {required && ' *'}
          </label>
          <TextArea
            key={resetKey}
            id={id}
            type={type || 'text'}
            value={value || ''}
            className="demo-input"
            onChange={e => setValue(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            aria-invalid={!isValid}
            aria-describedby={!isValid ? `${id}-error` : null}
          />
          {showError && (
            <div id={`${id}-error`} className="demo-form-feedback">
              {errorMessage}
            </div>
          )}
        </div>
      </Form.Field>
    )
  }

  const MyForm = () => {
    const myForm = useForm()
    const [isLoading, setIsLoading] = React.useState(false)
    const submitForm = (values) => {
      setIsLoading(true)

      console.log(values)

      setTimeout(() => {
        setIsLoading(false);
        window.emailjs.send(
          'gmail', 'template_EHu1veGQ',
          values
        ).then(res => {
          setMessageSuccess(true)
        })
          // Handle errors here however you like, or use a React error boundary
          .catch(err => {
            setMessageNegative(true)
          })
        // myForm.invalidateFields({
        //   email: 'You can display an error after an API call',
        // })
      }, 1000)
    }
    return (
      <Formiz onValidSubmit={submitForm} connect={myForm}>
        <Form
          noValidate
          onSubmit={myForm.submit}
          className="demo-form"
          style={{ minHeight: '16rem' }}
        >
          <div className="form-content">
            <MyField
              name="name"
              label="Name"

            />

            <MyField
              name="email"
              label="Email"
              type="email"
              required="Email is required"
              validations={[
                {
                  rule: isEmail(),
                  message: 'Not a valid email',
                }
              ]}

            />
            <MyTextArea name="message"
              label="Message"
              required="Message is required"
            />

          </div>

          <div className="demo-form__footer">
            <div
              className="ml-auto"
              style={{ minWidth: '6rem' }}
            >
              <Button
                className="demo-button is-full is-primary"
                type="submit"
                disabled={isLoading || (!myForm.isValid && myForm.isSubmitted)}
              >
                {isLoading ? 'Loading...' : 'Send'}
              </Button>
            </div>
          </div>
        </Form>
      </Formiz>
    )
  }

  return (<Container fluid>
    <Header as="h3" divider>Contact</Header>
    <Grid columns='equal'>
      <Grid.Column>
        <Segment>1</Segment>
      </Grid.Column>
      <Grid.Column width={8}>
        <Segment> <MyForm />
          {messageSuccess && <Message positive>
            <Message.Header>Message successfully sent!</Message.Header>
            <p>

              We will respond as soon as possible
    </p>
          </Message>}
          {messageNegative && <Message negative>
            <Message.Header>Message not sent!</Message.Header>
            <p>


              sorry for the inconvenience
    </p>
          </Message>}
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>3</Segment>
      </Grid.Column>
    </Grid>


  </Container>);
};
export default Contact;
