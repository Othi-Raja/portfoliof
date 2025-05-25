import React, { useState, useRef } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { Col, Row, Container } from 'react-bootstrap';
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { motion, useInView } from 'framer-motion';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './contact.css';
import { CiMail } from "react-icons/ci";
export default function Contacts() {
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const isValidMobileNumber = /^\d{10}$/.test(mobileNumber);

  const handleValidation = () => {
    if (!name || !mobileNumber || !email || !message) {
      toast.error("All fields are required!", { position: "top-center", autoClose: 5000 });
      return false;
    } else if (!isValidMobileNumber) {
      toast.error("Mobile Number should be exactly 10 digits", { position: "top-center", autoClose: 5000 });
      return false;
    }
    return true;
  };

  const sendEmail = async (formData) => {
    try {
      const response = await fetch('https://formsubmit.co/ajax/othiraja64@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error(`Error: ${response.statusText}`);
      console.log("Form submitted successfully:", await response.json());
    } catch (error) {
      console.error("Form submission failed:", error);
    }
  };

  // Refs and Scroll Visibility Detection
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px 0px" });

  return (
    <Container className="overflow-x-hidden">
      <Row className="justify-content-center">
        
        {/* Left Section */}
        <Col xs={12} sm={8} md={6} lg={6} className="order-lg-0 order-xs-1 flex justify-content-center align-items-center">
        <div>
        <motion.div 
            ref={sectionRef}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Typography variant="h3" component="h3" gutterBottom className="mt-5 poppins-light">
              Let’s Chat<br/>Tell me about you<br />Project
            </Typography>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Typography variant="h6" component="h6" gutterBottom className="mt-5 poppins-light" style={{color:'#572af0'}}>
              Let’s create something together 🤘
            </Typography>
          </motion.div>

          {/* Social Icons */}
          <motion.div 
      
      className="d-flex flex-row gap-4 mt-4"
      initial={{ opacity: 0, y: 50 }} 
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    > 
      <div 
        style={{ height: '50px', width: '50px', background: '#c0c5d5', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '30%' }}
        className="cursor-pointer shadow"
      >
        <CiMail style={{ color: '#572af0' }} size={24} />
      </div>
    </motion.div>
        </div>
        </Col>

        {/* Right Section - Form */}
        <Col xs={12} sm={8} md={6} lg={6} className="order-lg-1">
          <motion.div 
          
          >
            <Box
              component="form"
              sx={{ display: 'flex', flexDirection: 'column', gap: 3, marginTop: 4, padding: 3 }}
              autoComplete="off"
            >
              <motion.div initial={{ opacity: 0, y: 50 }} 
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.2, delay: 0.1 }}>


              <Typography    variant="h5" component="h1" gutterBottom>
                Send Us a message 🚀
              </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.2, delay: 0.2 }}
              >
                              <TextField  value={name} onChange={(e) => setName(e.target.value)}  placeholder='Name' fullWidth variant="outlined" required />

              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
              <TextField value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} placeholder="Mobile Number" variant="outlined" fullWidth required type="tel" />

              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
              <TextField value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" variant="outlined" fullWidth required type="email" />

              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: 0.5}}
              >
              <TextField value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" variant="outlined" className='bg-gr' fullWidth multiline minRows={4} required />

              </motion.div>
          


              <Button variant="contained" className='w-25 shadow-sm p-2 ' style={{background:'#572af0',color:'white'}}  type="submit" sx={{ marginTop: 2 }}>
                Submit
              </Button>
            </Box>
          </motion.div>
        </Col>

      </Row>
    </Container>
  );
}
