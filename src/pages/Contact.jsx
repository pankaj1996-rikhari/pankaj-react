import React from 'react'
import ContactForm from '../components/form/ContactForm'
import { Helmet } from 'react-helmet-async'

const Contact = () => {
  return (
   <>
   <Helmet>
      <title>Contact - My Website</title>
      <meta name="description" content="This is the Contact page of my website" />
    </Helmet>

     <ContactForm/>
   </>
  )
}

export default Contact
