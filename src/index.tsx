import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
// import AOS from 'aos' // not used yet
import initReactFastclick from 'react-fastclick'
import './_assets/styles/index.scss'
import * as serviceWorker from './_assets/spa/service-worker'
// import { fontawesomeLibrary } from './_assets/icons/fontawesome-library' // not used yet
import { App } from './_app'

// fontawesome icons
// fontawesomeLibrary() // not used yet

// animation on scroll
// AOS.init() // not used yet

// touch events
initReactFastclick()

// react
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
)

// SPA
serviceWorker.register()
