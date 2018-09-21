import React, { Component } from 'react'
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router-dom'

import { PublicLayout } from './_components/PublicLayout/PublicLayout'
import { NotFound } from '../_shared/NotFound/NotFound'
import { Home } from './Home/Home'

export class Public extends Component<RouteComponentProps<{}>, {}> {
  render() {
    const { url: p } = this.props.match

    return (
      <PublicLayout error={undefined}>
        <Switch>
          <Redirect exact path={`${p}home`} to={`${p}`} />

          <Route exact path={`${p}`} component={Home} />

          <Route component={NotFound} />
        </Switch>
      </PublicLayout>
    )
  }
}
