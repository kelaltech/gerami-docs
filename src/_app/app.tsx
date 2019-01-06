import React, { Component } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import { NotFound } from '../_shared/not-found'
import { Default } from '../default'

export class App extends Component {
  public render() {
    return (
      <BrowserRouter>
        <Switch>
          <Redirect exact path={`/index.html`} to={`/`} />

          <Route path={'/'} component={Default} />

          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    )
  }
}
