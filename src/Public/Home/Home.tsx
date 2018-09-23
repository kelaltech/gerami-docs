import React, { Component } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import {
  Anchor,
  Block,
  Button,
  Card,
  Content,
  Drawer,
  FlexSpacer,
  Image,
  Page,
  Range,
  Loading,
  MenuDrop,
  MenuItem,
  Input,
  TextArea,
  Warning
} from 'gerami'
import KelalTechLogo from '../../_assets/images/kelal-tech-logo.svg'

interface IHomeState {
  isLeftDrawerOpen: boolean
  isRightDrawerOpen: boolean
  isMenuDropOpen: boolean
}

export class Home extends Component<RouteComponentProps<{}>, IHomeState> {
  state = {
    isLeftDrawerOpen: false,
    isRightDrawerOpen: false,
    isMenuDropOpen: false
  }

  boxStyle = { width: 70, height: 70 }

  render() {
    const { isLeftDrawerOpen, isRightDrawerOpen, isMenuDropOpen } = this.state

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
            <Anchor href="">This is an Anchor.</Anchor>
          </Block>

          <hr />

          <Block first last>
            <code>Block:</code>
            <br />
            <br />
            <Block>This is a Block.</Block>
          </Block>

          <hr />

          <Block first last>
            <code>Button:</code>
            <br />
            <br />
            <Button>This is a Button.</Button>
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
              This is a Card.
            </Card>
          </Block>

          <hr />

          <Block first last>
            <code>Content:</code>
            <br />
            <br />
            <Content>This is a Content.</Content>
          </Block>

          <hr />

          <Block first last>
            <code>Drawer:</code>
            <br />
            <br />
            <div style={{ display: 'flex' }}>
              <Button onClick={() => this.setState({ isLeftDrawerOpen: true })}>
                Open Left Drawer
              </Button>
              <FlexSpacer />
              <Button
                onClick={() => this.setState({ isRightDrawerOpen: true })}
              >
                Open Right Drawer
              </Button>
            </div>
            <Drawer
              align={'left'}
              onClose={() => this.setState({ isLeftDrawerOpen: false })}
              open={isLeftDrawerOpen}
              size={'M'}
            >
              This is a Left Drawer.
            </Drawer>
            <Drawer
              align={'right'}
              onClose={() => this.setState({ isRightDrawerOpen: false })}
              open={isRightDrawerOpen}
              size={'M'}
            >
              This is a Right Drawer.
            </Drawer>
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
            <Image
              src={KelalTechLogo}
              style={this.boxStyle}
              title={`kelal tech.'s Logo`}
              to={true}
            />
          </Block>

          <hr />

          <Block first last>
            <code>Input:</code>
            <br />
            <br />
            <Input label="This is an Input." />
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
              <MenuItem>This is a MenuItem.</MenuItem>
              <MenuItem>Inside a MenuDrop.</MenuItem>
            </MenuDrop>
          </Block>

          <hr />

          <Block first last>
            <code>Page:</code>
            <br />
            <br />
            <Page>This is a Page.</Page>
          </Block>

          <hr />

          <Block first last>
            <code>Range:</code>
            <br />
            <br />
            <Range
              absoluteMin={14}
              absoluteMax={42}
              inputMin={28}
              inputMax={35}
            />
          </Block>

          <hr />

          <Block first last>
            <code>TextArea:</code>
            <br />
            <br />
            <TextArea label="This is a TextArea." />
          </Block>

          <hr />

          <Block first last>
            <code>Warning:</code>
            <br />
            <br />
            <Warning shy problem="This is a Warning." />
          </Block>
        </Content>
      </Page>
    )
  }
}
