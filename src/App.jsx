import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Head } from './components/Header'
import { Forms } from './components/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Head />
      <Forms />
    </div>  
    
  )
}

export default App
