import React, { lazy, Suspense } from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import AppLayout from './Layout'
import './App.module.less'

const Home = lazy(() => import(/* webpackChunkName: "home" */ '@pages/Home'))
const About = lazy(() => import(/* webpackChunkName: "about" */ '@pages/About'))
const Dispatch = lazy(() => import(/* webpackChunkName: "dispatch" */ '@pages/Dispatch'))

function App() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Router>
        <AppLayout>
          <Routes>
            <Route path="/" element={<Dispatch />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </AppLayout>
      </Router>
    </Suspense>
  )
}

export default App
