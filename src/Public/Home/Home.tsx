import React, { Component } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import {
  Anchor,
  Block,
  Button,
  Card,
  CheckBox,
  Container,
  Content,
  Drawer,
  Flex,
  FlexSpacer,
  Image,
  Page,
  Range,
  Loading,
  MenuDrop,
  MenuItem,
  Input,
  TextArea,
  Warning,
  Select,
  Yoga
} from 'gerami'
import KelalTechLogo from '../../_assets/images/kelal-tech-logo.svg'

interface IHomeState {
  isLeftDrawerOpen: boolean
  isRightDrawerOpen: boolean
  isMenuDropOpen: boolean
  rangeMin: number
  rangeMax: number
}

export class Home extends Component<RouteComponentProps<{}>, IHomeState> {
  state = {
    isLeftDrawerOpen: false,
    isRightDrawerOpen: false,
    isMenuDropOpen: false,
    rangeMin: 22,
    rangeMax: 28
  }

  boxStyle = { width: 70, height: 70 }
  handleSelect = (value: any) => {
    console.log(value)
  }
  render() {
    const {
      isLeftDrawerOpen,
      isRightDrawerOpen,
      isMenuDropOpen,
      rangeMin,
      rangeMax
    } = this.state

    return (
      <Page top={'auto'}>
        <Content size={'L'}>
          <Block first last>
            <h3 className={'fg-blackish'}>The Components</h3>
            <hr />
          </Block>

          <Block>
            <code>Anchor:</code>
            <div className={'padding-vertical-normal'} />
            <Anchor href="">This is an Anchor.</Anchor>
          </Block>

          <Block first last>
            <hr />
          </Block>

          <Block>
            <code>Block:</code>
            <div className={'padding-vertical-normal'} />
            <Block>This is a Block.</Block>
          </Block>

          <Block first last>
            <hr />
          </Block>

          <Block>
            <code>Button:</code>
            <div className={'padding-vertical-normal'} />
            <Button>This is a Button.</Button>
          </Block>

          <Block first last>
            <hr />
          </Block>

          <Block>
            <Block>
              <code>Select box:</code>
            </Block>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-around'
              }}
            >
              <div>
                <code>Single:</code>
                <div className={'padding-vertical-normal'} />
                <Select
                  options={[
                    'Ethiopia',
                    'Nigeria',
                    'Kenya',
                    'Uganda',
                    'Somalia',
                    'Zambia',
                    'Congo',
                    'Congo',
                    'Congo',
                    'Congo',
                    'Malawi'
                  ]}
                  placeholder={'Choose your country....'}
                  selectedvalue={this.handleSelect}
                />
              </div>
              <div>
                <code>Multiple:</code>
                <div className={'padding-vertical-normal'} />
                <Select
                  size={'330px'}
                  options={[
                    'Ethiopia',
                    'Nigeria',
                    'Kenya',
                    'Uganda',
                    'Somalia',
                    'Zambia',
                    'Congo',
                    'Congo',
                    'Congo',
                    'Congo',
                    'Malawi'
                  ]}
                  placeholder={'Choose your country....'}
                  selectedvalue={this.handleSelect}
                  multiple={true}
                />
              </div>
            </div>
          </Block>

          <Block first last>
            <hr />
          </Block>

          <Block>
            <code>Container</code>

            <Page>
              <div>
                Div inside Page Component <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid, dicta dignissimos dolorem doloremque ea eaque enim
                facilis laudantium possimus provident quibusdam reiciendis
                repellendus soluta, tempora temporibus tenetur vel! Excepturi,
                laudantium?
              </div>
              <br />
              <Container>
                <div>
                  Div inside a Container Component
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquid, dicta dignissimos dolorem doloremque ea eaque enim
                  facilis laudantium possimus provident quibusdam reiciendis
                  repellendus soluta, tempora temporibus tenetur vel! Excepturi,
                  laudantium?
                </div>
              </Container>
            </Page>
          </Block>

          <Block first last>
            <hr />
          </Block>

          <Block>
            <code>CheckBox</code> <br />
            <br />
            Checked
            <CheckBox checked={true} className={'checked'} />
            <br />
            Unchecked
            <CheckBox checked={false} className={'unchecked'} />
          </Block>

          <Block first last>
            <hr />
          </Block>

          <Block>
            <code>Card:</code>
            <div className={'padding-vertical-normal'} />
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

          <Block first last>
            <hr />
          </Block>

          <Block>
            <code>Content:</code>
            <div className={'padding-vertical-normal'} />
            <Content>This is a Content.</Content>
          </Block>

          <Block first last>
            <hr />
          </Block>

          <Block>
            <code>Drawer:</code>
            <div className={'padding-vertical-normal'} />
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

          <Block first last>
            <hr />
          </Block>

          <Block>
            <code>Flex:</code>
            <div className={'padding-vertical-normal'} />
            <Flex>
              <div>
                Div 1<br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid, dicta dignissimos dolorem doloremque ea eaque enim
                facilis laudantium possimus provident quibusdam reiciendis
                repellendus soluta, tempora temporibus tenetur vel! Excepturi,
                laudantium?
              </div>
              <br />
              <div>
                Div 2<br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid, dicta dignissimos dolorem doloremque ea eaque enim
                facilis laudantium possimus provident quibusdam reiciendis
                repellendus soluta, tempora temporibus tenetur vel! Excepturi,
                laudantium?
              </div>
              <div>
                Div 3<br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid, dicta dignissimos dolorem doloremque ea eaque enim
                facilis laudantium possimus provident quibusdam reiciendis
                repellendus soluta, tempora temporibus tenetur vel! Excepturi,
                laudantium?
              </div>
            </Flex>
          </Block>

          <Block first last>
            <hr />
          </Block>

          <Block>
            <code>FlexSpacer:</code>
            <div className={'padding-vertical-normal'} />
            <div style={{ display: 'flex' }}>
              left
              <FlexSpacer />
              center
              <FlexSpacer />
              right
            </div>
          </Block>

          <Block first last>
            <hr />
          </Block>

          <Block>
            <code>Image:</code>
            <div className={'padding-vertical-normal'} />
            <Image
              src={KelalTechLogo}
              style={this.boxStyle}
              title={`kelal tech.'s Logo`}
              to={true}
            />
          </Block>

          <Block first last>
            <hr />
          </Block>

          <Block>
            <code>Input:</code>
            <div className={'padding-vertical-normal'} />
            <Input label="This is an Input." />
          </Block>

          <Block first last>
            <hr />
          </Block>

          <Block>
            <code>Loading:</code>
            <div className={'padding-vertical-normal'} />
            <Loading delay />
          </Block>

          <Block first last>
            <hr />
          </Block>

          <Block>
            <code>MenuDrop &amp; MenuItem:</code>
            <div className={'padding-vertical-normal'} />
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

          <Block first last>
            <hr />
          </Block>

          <Block>
            <code>Page:</code>
            <div className={'padding-vertical-normal'} />
            <Page>This is a Page.</Page>
          </Block>

          <Block first last>
            <hr />
          </Block>

          <Block>
            <code>Range:</code>
            <div className={'padding-vertical-normal'} />
            <Range
              absoluteMin={14}
              absoluteMax={42}
              inputMin={rangeMin}
              inputMax={rangeMax}
              roundValues
              onMoved={e => this.setState({ rangeMin: e.min, rangeMax: e.max })}
            />
          </Block>

          <Block first last>
            <hr />
          </Block>

          <Block>
            <code>TextArea:</code>
            <div className={'padding-vertical-normal'} />
            <TextArea label="This is a TextArea." />
          </Block>

          <Block first last>
            <hr />
          </Block>

          <Block>
            <code>Warning:</code>
            <div className={'padding-vertical-normal'} />
            <Warning shy problem="This is a Warning." />
          </Block>

          <Block first last>
            <hr />
          </Block>

          <Block>
            <code>Yoga:</code>
            <div className={'padding-vertical-normal'} />
            <Yoga maxCol={3}>
              <Content>Element 1</Content>
              <Content>Element 2</Content>
              <Content>Element 3</Content>
              <Content>Element 4</Content>
              <Content>Element 5</Content>
            </Yoga>
          </Block>

          <Block last />
        </Content>
      </Page>
    )
  }
}
