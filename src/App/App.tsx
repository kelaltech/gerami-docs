import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Public } from '../Public/Public'

export class App extends Component {
  public render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path={'/'} component={Public} />
        </Switch>
      </BrowserRouter>
    )
  }
}
