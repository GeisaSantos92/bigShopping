import React, { useState, useRef} from 'react'
import './Contact.css'
import Phone from '../../assets/phone.png'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import emailjs from '@emailjs/browser';
import Contato from '../../assets/contact.png'

export const Contact = () => {

    const navigate = useNavigate();

    const [validated, setValidated] = useState(false);
    const form = useRef();
    const [successMessage, setSuccessMessage] = useState(false);
    const inputRefs = {
        name: useRef(null),
        email: useRef(null),
        message: useRef(null),
    }
   

     function functionOne(){
            emailjs.sendForm('service_r6ek2j4', 'template_57qpqv3', form.current, 'qdvKZZ-KflbS-qgSK')
                .then((result) => {
                    setSuccessMessage(true);
                    
                    setTimeout(() =>{
                        setSuccessMessage(false)
                        Object.values(inputRefs).forEach((input) => {
                            input.current.value = '';
                        });
                    }, 5000);
                }, (error) => {
                    console.log(error.text);
                });
            }
    
           
        function handleSubmit (e){
            e.preventDefault();             
            
            const form = e.currentTarget;
                if (form.checkValidity() === false) {
                  e.preventDefault();
                  e.stopPropagation();
                
                } else{
                    functionOne();
                    setTimeout(() =>{
                      setValidated(false)
                    }, 5000);             
            
                }  
                
                setValidated(true); 
            
        }

  return (
    <div className="containerMax contact">
        <div className="container container-contact">
            <div className="banner">
                <div className="banner-txt">
                    <h2>SHOP ONLINE EXCLUSIVES</h2>
                    <h1>Big <span>Shopping</span></h1>
                    <button onClick={() => navigate("/")}>Shop Now</button>
                </div>
                <div className="banner-img">
                    <img src={Phone} alt="" />
                </div>
                </div>
            <div className="contact-txt">
                <h1>Contact Us</h1>
                <div className="formulario">
                    <div className="img-form">
                        <img src={Contato} alt="" />
                    </div>
                    <div className="form-formulario">
                        <Form className='form' ref={form} noValidate validated={validated} onSubmit={handleSubmit}   >
                            <Form.Group className="mb-3" controlId="validationCustom01">
                                <Form.Label>Name</Form.Label>
                                <Form.Control required defaultValue="" type="text" name='user_name' placeholder="Enter your email"  ref={inputRefs.name}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control required defaultValue="" name="user_email" type="email" placeholder="Enter a valid email adress"ref={inputRefs.email} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicMessage">
                                <Form.Label>Message</Form.Label>
                                <Form.Control name="message" required defaultValue="" as="textarea" type="text" placeholder="Enter your message" ref={inputRefs.message} />
                            </Form.Group>
            
                            <Button className='addToCartBttn' value="Send" type="submit">
                                SUBMIT
                            </Button>
                            { successMessage && (
                                <div className='ok' >
                                    Email sent successfully!
                                </div>
                            )}
                        </Form>
                    </div>
                </div>
               
            </div>
        </div>
    </div>
  )
}
