import React from 'react'
import './privacypolicy.css'
// import { motion } from "framer-motion";
import Footer from '../../components/Footer/Footer'

function privacypolicy() {
  return (
    <div className="privacy-policy" initial={{width:0}} animate={{width:"100%"}} exit={{x:"100%"}}>
      <header className='pp'>
        <h1>Privacy Policy</h1>
      </header>
      <div className='discription'>
        <p>We take your privacy seriously. This Privacy Policy explains what personal information we collect and how we use it.</p>
        <h2>Information we collect</h2>
        <p>We collect information you provide directly to us, such as your name, email address, and payment information when you make a purchase.</p>
        <h2>How we use your information</h2>
        <p>We use your information to provide and improve our services, communicate with you, and process payments.</p>
        <h2>Sharing of your information</h2>
        <p>We do not share your personal information with third parties except as necessary to provide our services or as required by law.</p>
        <h2>Security of your information</h2>
        <p>We take reasonable measures to protect your personal information from unauthorized access, disclosure, or alteration.</p>
        <h2>Changes to this Privacy Policy</h2>
        <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
      </div>
      <div className='footer2'>
        <Footer/>
      </div>
    </div>
  )
}

export default privacypolicy