import React from 'react'
import { lazy, Suspense } from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import AppLayout from './Layout'
import './App.less'

const Home = lazy(() => import(/* webpackChunkName: "home" */ '@pages/Home'))
const About = lazy(() => import(/* webpackChunkName: "about" */ '@pages/About'))

function App() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Router>
        <AppLayout>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </AppLayout>
      </Router>
    </Suspense>
  )
}

export default App
