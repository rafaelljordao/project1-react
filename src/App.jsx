import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Head } from './components/Header'
import { Forms } from './components/Form'
import { Grid } from './components/Grid'

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
