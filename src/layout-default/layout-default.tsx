import React, { Component } from 'react'
import { RouteComponentProps } from 'react-router'

import Layout from '../shared/components/layout/layout'
import layoutDefaultNavigation from './configs/layout-default-navigation'
import LayoutDefaultRoutes from './configs/layout-default-routes'
import DefaultPromotion from './components/default-promotion/default-promotion'

interface ILayoutDefaultProps extends RouteComponentProps<{}> {
  error?: any
}

interface ILayoutDefaultState {
  promo?: React.ReactNode
}

export default class LayoutDefault extends Component<
  ILayoutDefaultProps,
  ILayoutDefaultState
> {
  state: ILayoutDefaultState = {
    promo: undefined
  }

  componentDidMount() {
    if (window.sessionStorage.getItem('promoSeen') != 'true') {
      this.setState({ promo: <DefaultPromotion /> })
      window.sessionStorage.setItem('promoSeen', 'true')
    }
  }

  render() {
    const { error, match } = this.props
    const { promo } = this.state

    return (
      <Layout
        preHeader={promo}
        headerOptions={{
          navigation: layoutDefaultNavigation(false)
        }}
        error={error}
        nonContentHeight={164}
      >
        <LayoutDefaultRoutes prefix={match.url} />
      </Layout>
    )
  }
}
