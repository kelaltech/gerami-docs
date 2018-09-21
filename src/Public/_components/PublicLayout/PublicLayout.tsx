import React, { Component } from 'react'
import { Page, Warning } from 'gerami'

import { PublicHeader } from '../PublicHeader/PublicHeader'
import { PublicFooter } from '../PublicFooter/PublicFooter'

interface IPublicLayoutProps {
  error?: any
}

export class PublicLayout extends Component<IPublicLayoutProps, {}> {
  contentMinHeight = window.innerHeight ? window.innerHeight - 140 : 0

  render() {
    const { children, error } = this.props

    return error ? (
      <Page>
        <Warning problem={error} size={'XXL'} />
      </Page>
    ) : (
      <div>
        <PublicHeader />
        <div style={{ minHeight: this.contentMinHeight }}>{children}</div>
        <PublicFooter />
      </div>
    )
  }
}
