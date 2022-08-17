import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Head } from './components/Header'
import { Forms } from './components/Form'
import { Grid } from './components/grid'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Head />
      <Forms />
      <Grid />
    </div>  
    
  )
}

export default App
