import React, { useState } from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import logo from '../../logo.svg'
import './index.less'

const Home = () => {
  const [count, setCount] = useState<number>(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <Button type="primary" onClick={() => setCount(count => count + 1)}>
            count is {count}
          </Button>
          <Link to="/about">go about</Link>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
      </header>
    </div>
  )
}

export default Home
