import React from 'react';


const Button = ({icon,text,...rest}) => {
  return (

    <div className='contact-btn'>
      <button className="secondary" {...rest} >
        {icon}
        {text}
        
      </button>
     
       
        
    </div>
  )
}

export default Button
