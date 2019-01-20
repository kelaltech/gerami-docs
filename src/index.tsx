import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import AOS from 'aos'

import fontawesomeLibrary from './shared/configs/fontawesome-library'
import initReactFastclick from 'react-fastclick'
import App from './app/app'
import * as serviceWorker from './assets/scripts/service-worker'
import './assets/styles/index.scss'

AOS.init() // animation on scroll
fontawesomeLibrary() // fontawesome icons
initReactFastclick() // touch events

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
)

serviceWorker.register()
