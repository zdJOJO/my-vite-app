import React, { Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.module.less'
import Routes from './route'

function App() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Router>
        <Routes />
      </Router>
    </Suspense>
  )
}

export default App
