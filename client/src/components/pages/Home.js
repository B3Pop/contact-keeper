import React from 'react';
import Contacts from '../contacts/Contacts.js';
import ContactForm from '../contacts/ContactForm.js';

const Home = () => {
  return (
    <div class='grid-2'>
      <div>
        <ContactForm />
      </div>
      <div>
        <Contacts />
      </div>{' '}
    </div>
  );
};

export default Home;
