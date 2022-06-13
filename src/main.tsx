import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.less'
import App from './App'

/**
 * @description react 17
 * */

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// )

/**
 * @description react 18
 * */

const container = document.getElementById('root')
if (container) {
  const root = createRoot(container)
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  )
}
