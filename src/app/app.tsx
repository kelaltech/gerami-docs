import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'

import AppRoutes from './app-routes'

export default class App extends Component {
  public render() {
    return (
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    )
  }
}
