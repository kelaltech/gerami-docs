import React from 'react'
import ReactDOM from 'react-dom'

import fontawesomeLibrary from '../shared/configs/fontawesome-library'
import App from './app'

beforeAll(() => {
  fontawesomeLibrary() // fontawesome icons
})

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})
