import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'

import './_assets/styles/index.scss'
import { App } from './App/App'

import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root') as HTMLElement
)
registerServiceWorker()
