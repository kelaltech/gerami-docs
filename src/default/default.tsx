import React, { Component } from 'react'
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router-dom'

import { DefaultLayout } from './_/default-layout'
import { NotFound } from '../_shared/not-found'
import { Home } from './home'

export class Default extends Component<RouteComponentProps<{}>, {}> {
  render() {
    const { url: p } = this.props.match

    return (
      <DefaultLayout error={undefined}>
        <Switch>
          <Redirect exact path={`${p}home`} to={`${p}`} />

          <Route exact path={`${p}`} component={Home} />

          <Route component={NotFound} />
        </Switch>
      </DefaultLayout>
    )
  }
}
