import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AppLayout from './Layout'
import './App.module.less'

const Home = lazy(() => import(/* webpackChunkName: "home" */ '@pages/Home'))
const About = lazy(() => import(/* webpackChunkName: "about" */ '@pages/About'))
const Dispatch = lazy(() => import(/* webpackChunkName: "dispatch" */ '@pages/Dispatch'))
const Chart = lazy(() => import(/* webpackChunkName: "chart" */ '@pages/Chart'))
const Chat = lazy(() => import(/* webpackChunkName: "chat" */ '@pages/Chat'))

function App() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Router>
        <AppLayout>
          <Routes>
            <Route path="/" element={<Dispatch />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/chart" element={<Chart />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </AppLayout>
      </Router>
    </Suspense>
  )
}

export default App
