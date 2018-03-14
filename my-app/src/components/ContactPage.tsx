import * as React from 'react';
import ContactForm, { FormData } from './ContactForm';

export default class ContactPage extends React.Component<{}, {}> {

  submit = (values: FormData) => {
    alert(JSON.stringify(values));
    // console.log(values);
  }

  render () {
    return (
      <ContactForm onSubmit={this.submit} />
    );
  }
}
