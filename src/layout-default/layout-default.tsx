import React, { Component } from 'react'
import { RouteComponentProps } from 'react-router'

import Layout from '../shared/components/layout/layout'
import layoutDefaultNavigation from './configs/layout-default-navigation'
import LayoutDefaultRoutes from './configs/layout-default-routes'
import DefaultPromotion from './components/default-promotion/default-promotion'

interface ILayoutDefaultProps extends RouteComponentProps<{}> {
  error?: any
}

export default class LayoutDefault extends Component<ILayoutDefaultProps, {}> {
  render() {
    const { error, match } = this.props
    const contentMinHeight = window.innerHeight ? window.innerHeight - 164 : 0

    return (
      <Layout
        preHeader={<DefaultPromotion />}
        headerOptions={{
          navigation: layoutDefaultNavigation(false)
        }}
        error={error}
        contentMinHeight={contentMinHeight}
      >
        <LayoutDefaultRoutes prefix={match.url} />
      </Layout>
    )
  }
}
