import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import AsyncLoad from '../../shared/components/async-load/async-load'

// routes
const Home = AsyncLoad(() => import('../pages/home/home'))
const NotFound = AsyncLoad(() => import('../../shared/pages/not-found/not-found'))

export default function LayoutDefaultRoutes({ prefix: p }: { prefix: string }) {
  return (
    <Switch>
      <Redirect exact path={`${p}home`} to={`${p}`} />

      <Route exact path={`${p}`} component={Home} />

      <Route component={NotFound} />
    </Switch>
  )
}
