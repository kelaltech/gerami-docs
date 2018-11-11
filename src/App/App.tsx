import React, { Component } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import { NotFound } from '../_shared/NotFound/NotFound'
import { Public } from '../Public/Public'

export class App extends Component {
  public render() {
    return (
      <BrowserRouter>
        <Switch>
          <Redirect exact path={`/index.html`} to={`/`} />

          <Route path={'/'} component={Public} />

          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    )
  }
}
