import React from 'react'
import { useTheme } from './hooks/useTheme'

const App = () => {

  const [theme, toggleChange] = useTheme()

  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>Hello {theme} Mode</h1>
      <button onClick={toggleChange}> Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode</button>
    </div>
  )
}

export default App