import React, { Component } from 'react'
import { Page, Warning } from 'gerami'

import { DefaultHeader } from './default-header'
import { DefaultFooter } from './default-footer'

interface IPublicLayoutProps {
  error?: any
}

export class DefaultLayout extends Component<IPublicLayoutProps, {}> {
  contentMinHeight = window.innerHeight ? window.innerHeight - 140 : 0

  render() {
    const { children, error } = this.props

    return error ? (
      <Page>
        <Warning problem={error} size={'XXL'} />
      </Page>
    ) : (
      <div>
        <DefaultHeader />
        <div style={{ minHeight: this.contentMinHeight }}>{children}</div>
        <DefaultFooter />
      </div>
    )
  }
}
