import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NoteList from './components/NoteList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NoteList></NoteList>
    </>
  )
}

export default App
