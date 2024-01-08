import React, { useState } from 'react';
import Button from './Button';
import { BiMessageRoundedDots } from "react-icons/bi";
import { IoMdMail } from "react-icons/io";

const ContactForm = () => {
  
  const [name, setName] = useState("vaishnavi");
  const [email, setEmail] = useState("support345@gmail.com");
  const [text, setText] = useState("Welcome");

  const onSubmit = (event) => {
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);

    console.log({ name, email, text });
  };

  return (
    <section className='container'>
      <div className='contact_form'>
        <div className='top_btn'>
          <Button className="secondary" text="Via Support Chat" icon={<BiMessageRoundedDots fontSize="24px" />} />
          <Button text="Via Email Form" icon={<IoMdMail fontSize="24px"/> } />
        </div>
        <form onSubmit={onSubmit}>
          <div className='form_control'>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name'></input>
          </div>
          <div className='form_control'>
            <label htmlFor='email'>Email</label>
            <input type='text' name='email'></input>
          </div>
          <div className='form_control'>
            <label htmlFor='text'>Text</label>
            <textarea name="text" id="" cols="30" rows="8"></textarea>
          </div>
          <div style={{
            display: "flex",
            justifyContent: "end",
          }}>
            <Button text="Submit"/>
          </div>
        </form>
        <div>
          {name + " " + email + " " + text}
        </div>
      </div>
      <div className='contact_img'>
        <img src="/images/Service 24_7-pana 1.svg" alt="Contact Image"></img>
      </div>
    </section>
  );
};

export default ContactForm;
