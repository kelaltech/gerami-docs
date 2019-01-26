import React, { Component, ReactNode } from 'react'
import { Page, Warning } from 'gerami'
import { MinHeightProperty } from 'csstype'

import Header, { IHeaderProps } from '../header/header'
import Footer from '../footer/footer'

interface ILayoutProps {
  error?: any
  contentMinHeight?: MinHeightProperty<string | number>
  headerOptions?: IHeaderProps
  overrideHeader?: ReactNode
  overrideFooter?: ReactNode
  preHeader?: ReactNode
}

export default class Layout extends Component<ILayoutProps, {}> {
  render() {
    const {
      children,
      contentMinHeight,
      error,
      headerOptions,
      overrideHeader,
      overrideFooter,
      preHeader
    } = this.props

    return error ? (
      <Page>
        <Warning problem={error} size={'XXL'} />
      </Page>
    ) : (
      <div>
        {preHeader}
        {overrideHeader || <Header {...headerOptions} />}
        <div style={{ minHeight: contentMinHeight || '100vh' }}>{children}</div>
        {overrideFooter || <Footer />}
      </div>
    )
  }
}
