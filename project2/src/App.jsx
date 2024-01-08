import { useState } from 'react';
import Navigation from './components/Navigation';
import './App.css'
import ContactHeader from './components/contactHeader';
import ContactForm from './components/ContactForm';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navigation/>
      <div className='main_container'>
      <ContactHeader/>
      <ContactForm/>
      </div>
     
    </div>
  )
}

export default App
