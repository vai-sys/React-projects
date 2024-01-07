import { useState } from 'react';
import Navigation from './components/Navigation';
import './App.css'
import ContactHeader from './components/contactHeader';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navigation/>
      <ContactHeader/>
    </div>
  )
}

export default App
