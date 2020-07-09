import React, { useState } from "react";
import { Segment, Button, Form, Message } from "semantic-ui-react";
import { Formiz, useForm } from "@formiz/core";
import { isEmail } from "@formiz/validations";
import MyField from "./Form/Field";
import MyTextArea from "./Form/Textarea";

const Contact = () => {
  const [messageSuccess, setMessageSuccess] = useState(false);
  const [messageNegative, setMessageNegative] = useState(false);

  const MyForm = () => {
    const myForm = useForm();
    const [isLoading, setIsLoading] = React.useState(false);
    const submitForm = (values) => {
      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false);
        window.emailjs
          .send("gmail", process.env.EMAILJS_TEMPLATE_ID, values)
          .then(() => {
            setMessageSuccess(true);
          })
          // Handle errors here however you like, or use a React error boundary
          .catch(() => {
            setMessageNegative(true);
          });
        // myForm.invalidateFields({
        //   email: 'You can display an error after an API call',
        // })
      }, 1000);
    };
    return (
      <>
        <Formiz onValidSubmit={submitForm} connect={myForm}>
          <Form noValidate onSubmit={myForm.submit} className="demo-form" style={{ minHeight: "16rem" }}>
            <div className="form-content">
              <MyField name="name" label="Name" />

              <MyField
                name="email"
                label="Email"
                type="email"
                required="Email is required"
                validations={[
                  {
                    rule: isEmail(),
                    message: "Not a valid email",
                  },
                ]}
              />
              <MyTextArea name="message" label="Message" required="Message is required" />
            </div>

            <div className="demo-form__footer">
              <div className="ml-auto" style={{ minWidth: "6rem" }}>
                <Button
                  className="demo-button is-full is-primary"
                  type="submit"
                  disabled={isLoading || (!myForm.isValid && myForm.isSubmitted)}
                >
                  {isLoading ? "Loading..." : "Send"}
                </Button>
              </div>
            </div>
          </Form>
        </Formiz>
      </>
    );
  };

  return (
    <div className="articles">
      <h3 className="sectionTitle">Contact</h3>
          <Segment>
            {" "}
            <MyForm />
            {messageSuccess && (
              <Message positive>
                <Message.Header>Message successfully sent!</Message.Header>
                <p>We will respond as soon as possible</p>
              </Message>
            )}
            {messageNegative && (
              <Message negative>
                <Message.Header>Message not sent!</Message.Header>
                <p>sorry for the inconvenience</p>
              </Message>
            )}
          </Segment>
    </div>
  );
};
export default Contact;
