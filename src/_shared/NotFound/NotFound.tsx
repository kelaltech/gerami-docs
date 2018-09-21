import React, { Component } from 'react'
import { RouteComponentProps } from 'react-router'
import { Block, Button, Content, Page } from 'gerami'

export class NotFound extends Component<RouteComponentProps<{}>, {}> {
  render() {
    const { pathname } = this.props.location

    return (
      <Page>
        <Content transparent size={'XXL'}>
          <Block first className={'font-X7L light fg-primary'}>
            404
          </Block>

          <Block>
            <hr />
          </Block>

          <Block>
            The request page, <code>{pathname}</code>, was not found.
          </Block>

          <Block last className={'right'}>
            <Button to={'/'}>Go home.</Button>
          </Block>
        </Content>
      </Page>
    )
  }
}
