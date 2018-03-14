import * as React from 'react';
import { Field, reduxForm, InjectedFormProps, FormErrors } from 'redux-form';

export interface FormData {
  firstName: string;
  lastName: string;
}

// interface Props {
//   handleSubmit: () => void;
// }

const validate = (values: Readonly<FormData>): FormErrors<FormData> => { 
  const errors: FormErrors<FormData> = {};

  if (values.firstName === undefined) {
      errors.firstName = 'First Name Required.';
  }

  if (values.lastName === undefined) {
      errors.lastName = 'Last Name Required.';
  }
  return errors;
};

const ContactForm = (props: InjectedFormProps<FormData>) => {
  const { handleSubmit } = props;
  return (
    <div style={{marginLeft: 100, marginTop: 100}}>
      <form onSubmit={handleSubmit}>
        <Field name="firstName" placeholder="First Name" component="input" /> <br/>
        <Field name="lastName" placeholder="Last Name" component="input" /> <br />
        <button type="submit" >Submit</button>
      </form>
    </div>
  );
};

export default reduxForm<Readonly<FormData>>({
  form: 'contact',
  validate
})(ContactForm);