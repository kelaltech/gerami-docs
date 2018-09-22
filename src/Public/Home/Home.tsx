import React, { Component } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import {
  Anchor,
  Block,
  Button,
  Card,
  Content,
  FlexSpacer,
  Image,
  Page,
  LeftDrawer,
  Loading,
  MenuDrop,
  MenuItem,
  Input,
  TextArea,
  Warning
} from 'gerami'
import KelalTechLogo from '../../_assets/images/kelal-tech-logo.svg'

export class Home extends Component<
  RouteComponentProps<{}>,
  { isDrawerOpen: boolean; isMenuDropOpen: boolean }
> {
  state = {
    isDrawerOpen: false,
    isMenuDropOpen: false
  }

  boxStyle = { width: 70, height: 70 }

  render() {
    const { isDrawerOpen, isMenuDropOpen } = this.state

    return (
      <Page top={'auto'} bottom={'auto'}>
        <Content size="M">
          <Block first last>
            <h1>gerami</h1>
            <div>
              <small>gerami react components</small>
            </div>
          </Block>

          <hr />

          <Block first last>
            <code>Anchor:</code>
            <br />
            <br />
            <Anchor href="">Just an Anchor.</Anchor>
          </Block>

          <hr />

          <Block first last>
            <code>Block:</code>
            <br />
            <br />
            <Block>Just a Block.</Block>
          </Block>

          <hr />

          <Block first last>
            <code>Button:</code>
            <br />
            <br />
            <Button>Just a Button.</Button>
          </Block>

          <hr />

          <Block first last>
            <code>Card:</code>
            <br />
            <br />
            <Card
              imgSrc={'https://loremflickr.com/600/800/person,face/all'}
              title={'Card Title'}
              subtitle={'Card Subtitle'}
              actions={[
                <span>Action Text</span>,
                <FlexSpacer />,
                <Anchor>Action Anchor</Anchor>
              ]}
            >
              Just a Card.
            </Card>
          </Block>

          <hr />

          <Block first last>
            <code>Content:</code>
            <br />
            <br />
            <Content>Just a Content.</Content>
          </Block>

          <hr />

          <Block first last>
            <code>FlexSpacer:</code>
            <br />
            <br />
            <div style={{ display: 'flex' }}>
              left
              <FlexSpacer />
              center
              <FlexSpacer />
              right
            </div>
          </Block>

          <hr />

          <Block first last>
            <code>Image:</code>
            <br />
            <br />
            <Image src={KelalTechLogo} style={this.boxStyle} />
          </Block>

          <hr />

          <Block first last>
            <code>Input:</code>
            <br />
            <br />
            <Input label="Just an Input." />
          </Block>

          <hr />

          <Block first last>
            <code>LeftDrawer:</code>
            <br />
            <br />
            <Button onClick={() => this.setState({ isDrawerOpen: true })}>
              Open LeftDrawer
            </Button>
            <LeftDrawer
              onClose={() => this.setState({ isDrawerOpen: false })}
              open={isDrawerOpen}
              size={'M'}
            >
              Just a LeftDrawer.
            </LeftDrawer>
          </Block>

          <hr />

          <Block first last>
            <code>Loading:</code>
            <br />
            <br />
            <Loading delay />
          </Block>

          <hr />

          <Block first last>
            <code>MenuDrop &amp; MenuItem:</code>
            <br />
            <br />
            <Button onClick={() => this.setState({ isMenuDropOpen: true })}>
              Open MenuDrop
            </Button>
            <MenuDrop
              onClose={() => this.setState({ isMenuDropOpen: false })}
              open={isMenuDropOpen}
              size={'L'}
            >
              <MenuItem>Just a MenuItem.</MenuItem>
              <MenuItem>Inside a MenuDrop.</MenuItem>
            </MenuDrop>
          </Block>

          <hr />

          <Block first last>
            <code>Page:</code>
            <br />
            <br />
            <Page>Just a Page.</Page>
          </Block>

          <hr />

          <Block first last>
            <code>TextArea:</code>
            <br />
            <br />
            <TextArea label="Just a TextArea." />
          </Block>

          <hr />

          <Block first last>
            <code>Warning:</code>
            <br />
            <br />
            <Warning shy problem="Just a Warning." />
          </Block>
        </Content>
      </Page>
    )
  }
}
