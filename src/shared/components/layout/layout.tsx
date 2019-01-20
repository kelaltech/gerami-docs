import React, { Component, ReactNode } from 'react'
import { Page, Warning } from 'gerami'
import { MinHeightProperty } from 'csstype'

import { INavigationItem } from './interfaces'
import Header from '../header/header'
import Footer from '../footer/footer'

interface ILayoutProps {
  overrideHeader?: ReactNode
  overrideFooter?: ReactNode
  navigation?: INavigationItem[]
  error?: any
  preHeader?: ReactNode
  contentMinHeight?: MinHeightProperty<string | number>
}

export default class Layout extends Component<ILayoutProps, {}> {
  render() {
    const {
      children,
      overrideHeader,
      overrideFooter,
      navigation,
      error,
      preHeader,
      contentMinHeight
    } = this.props

    return error ? (
      <Page>
        <Warning problem={error} size={'XXL'} />
      </Page>
    ) : (
      <div>
        {preHeader}
        {overrideHeader || <Header navigation={navigation} />}
        <div style={{ minHeight: contentMinHeight || '100vh' }}>{children}</div>
        {overrideFooter || <Footer />}
      </div>
    )
  }
}
