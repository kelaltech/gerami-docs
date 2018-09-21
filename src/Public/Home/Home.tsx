import React, { Component } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Block, Content, Page } from 'gerami'

export class Home extends Component<RouteComponentProps<{}>, {}> {
  render() {
    return (
      <Page top>
        <Content>
          <Block first last>
            Welcome to <code>gerami-docs</code>!
          </Block>
        </Content>
      </Page>
    )
  }
}
