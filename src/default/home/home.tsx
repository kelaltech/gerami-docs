import React, { Component } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import {
  AccordionSlider,
  Anchor,
  Block,
  Button,
  Card,
  CheckBox,
  Container,
  Content,
  Dialog,
  Drawer,
  Flex,
  FlexSpacer,
  Image,
  ImageInput,
  Input,
  Loading,
  MenuDrop,
  MenuItem,
  Page,
  Range,
  Select,
  SlideShow,
  TextArea,
  Toggle,
  Warning,
  Yoga,
} from 'gerami'
import kelalTechLogo from '../../_assets/images/kelal-tech-logo.svg'
import pic1 from '../../_assets/images/pic-1.jpg'
import pic2 from '../../_assets/images/pic-2.jpg'
import pic3 from '../../_assets/images/pic-3.jpg'
import pic4 from '../../_assets/images/pic-4.jpg'
import pic5 from '../../_assets/images/pic-5.jpg'

interface IHomeState {
  isDialogOpen: boolean
  isLeftDrawerOpen: boolean
  isRightDrawerOpen: boolean
  isMenuDropOpen: boolean
  rangeMin: number
  rangeMax: number
}

export class Home extends Component<RouteComponentProps<{}>, IHomeState> {
  state: IHomeState = {
    isDialogOpen: false,
    isLeftDrawerOpen: false,
    isRightDrawerOpen: false,
    isMenuDropOpen: false,
    rangeMin: 15,
    rangeMax: 19,
  }

  boxStyle = { width: 70, height: 70 }

  render() {
    const {
      isLeftDrawerOpen,
      isRightDrawerOpen,
      isMenuDropOpen,
      rangeMin,
      rangeMax,
    } = this.state

    return (
      <Page top={'auto'}>
        <Content size={'L'}>
          <Block first last>
            <h3 className={'fg-blackish'}>The Components</h3>
            <hr />
          </Block>

          {/* AccordionSlider */}
          <Block>
            <code>Accordion Slider:</code>
            <div className={'padding-vertical-normal'} />
            <AccordionSlider
              imgs={[
                {
                  src: pic1,
                  caption: 'first caption',
                  action: { headline: 'read more', to: 'http://google.com' },
                },
                {
                  src: pic2,
                },
                {
                  src: pic3,
                  caption: 'third caption',
                },
                {
                  src: pic4,
                  caption: 'forth caption',
                },
                {
                  src: pic5,
                  caption: 'fifth caption',
                  action: { headline: 'read more', to: 'google.com' },
                },
              ]}
            />
          </Block>
          <Block first last>
            <hr />
          </Block>

          {/* Anchor */}
          <Block>
            <code>Anchor:</code>
            <div className={'padding-vertical-normal'} />
            <Anchor href="">This is an Anchor.</Anchor>
          </Block>
          <Block first last>
            <hr />
          </Block>

          {/* Block */}
          <Block>
            <code>Block:</code>
            <div className={'padding-vertical-normal'} />
            <Block>This is a Block.</Block>
          </Block>
          <Block first last>
            <hr />
          </Block>

          {/* Button */}
          <Block>
            <code>Button:</code>
            <div className={'padding-vertical-normal'} />
            <Button>This is a Button.</Button>{' '}
            <Button primary>And, a Primary One.</Button>
          </Block>
          <Block first last>
            <hr />
          </Block>

          {/* Card */}
          <Block>
            <code>Card:</code>
            <div className={'padding-vertical-normal'} />
            <Card
              imgSrc={pic1}
              title={'Card Title'}
              subtitle={'Card Subtitle'}
              actions={[
                <span>Action Text</span>,
                <FlexSpacer />,
                <Anchor>Action Anchor</Anchor>,
              ]}
            >
              This is a Card.
            </Card>
          </Block>
          <Block first last>
            <hr />
          </Block>

          {/* Checkbox */}
          <Block>
            <code>CheckBox:</code>
            <div className={'padding-vertical-normal'} />
            <CheckBox>This is a CheckBox.</CheckBox>
            <br />
            <CheckBox checked>Checked, by default.</CheckBox>
          </Block>
          <Block first last>
            <hr />
          </Block>

          {/* Container */}
          <Block>
            <code>Container:</code>
            <div className={'padding-vertical-normal'} />
            <Container>This is a Container.</Container>
          </Block>
          <Block first last>
            <hr />
          </Block>

          {/* Content */}
          <Block>
            <code>Content:</code>
            <div className={'padding-vertical-normal'} />
            <Content>This is a Content.</Content>
          </Block>
          <Block first last>
            <hr />
          </Block>

          {/* Dialog */}
          <Block>
            <code>Dialog:</code>
            <div className={'padding-vertical-normal'} />
            <Button onClick={this.handleDialog}>show dialog</Button>
            <Dialog
              className={'hey'}
              bottom={true}
              open={this.state.isDialogOpen}
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deserunt id iste necessitatibus odit officia porro repellendus
                reprehenderit vitae. Dignissimos dolor dolorum eos illum impedit
                magni obcaecati, odio perferendis quibusdam saepe!
              </p>
            </Dialog>
          </Block>
          <Block first last>
            <hr />
          </Block>

          {/* Drawer */}
          <Block>
            <code>Drawer:</code>
            <div className={'padding-vertical-normal'} />
            <Flex>
              <Button onClick={() => this.setState({ isLeftDrawerOpen: true })}>
                Open Left Drawer
              </Button>
              <FlexSpacer />
              <Button
                onClick={() => this.setState({ isRightDrawerOpen: true })}
              >
                Open Right Drawer
              </Button>
            </Flex>
            <Drawer
              align={'left'}
              onClose={() =>
                this.setState({
                  isLeftDrawerOpen: false,
                })
              }
              open={isLeftDrawerOpen}
              size={'M'}
            >
              This is a Left Drawer.
            </Drawer>
            <Drawer
              align={'right'}
              onClose={() =>
                this.setState({
                  isRightDrawerOpen: false,
                })
              }
              open={isRightDrawerOpen}
              size={'M'}
            >
              This is a Right Drawer.
            </Drawer>
          </Block>
          <Block first last>
            <hr />
          </Block>

          {/* Flex */}
          <Block>
            <code>Flex:</code>
            <div className={'padding-vertical-normal'} />
            <Flex>
              <Content>Element 1</Content>
              <Content>Element 2</Content>
              <Content>Element 3</Content>
              <Content>Element 4</Content>
              <Content>Element 5</Content>
            </Flex>
          </Block>
          <Block first last>
            <hr />
          </Block>

          {/* FlexSpacer */}
          <Block>
            <code>FlexSpacer:</code>
            <div className={'padding-vertical-normal'} />
            <Flex>
              <Content style={{ flex: 1 }}>Element 1</Content>
              <FlexSpacer />
              <Content style={{ flex: 1 }}>Element 2</Content>
              <FlexSpacer />
              <Content style={{ flex: 1 }}>Element 3</Content>
            </Flex>
          </Block>
          <Block first last>
            <hr />
          </Block>

          {/* Image */}
          <Block>
            <code>Image:</code>
            <div className={'padding-vertical-normal'} />
            <Image
              src={kelalTechLogo}
              style={this.boxStyle}
              title={`kelal tech.'s Logo`}
              to={true}
            />
          </Block>
          <Block first last>
            <hr />
          </Block>

          {/* ImageInput */}
          <Block>
            <code>ImageInput:</code>
            <div className={'padding-vertical-normal'} />
            <ImageInput />
          </Block>
          <Block first last>
            <hr />
          </Block>

          {/* Input */}
          <Block>
            <code>Input:</code>
            <div className={'padding-vertical-normal'} />
            <Input label="This is an Input." />
          </Block>
          <Block first last>
            <hr />
          </Block>

          {/* Loading */}
          <Block>
            <code>Loading:</code>
            <div className={'padding-vertical-normal'} />
            <Loading delay />
          </Block>
          <Block first last>
            <hr />
          </Block>

          {/* MenuDrop & MenuItem */}
          <Block>
            <code>MenuDrop &amp; MenuItem:</code>
            <div className={'padding-vertical-normal'} />
            <Button onClick={() => this.setState({ isMenuDropOpen: true })}>
              Open MenuDrop
            </Button>
            <MenuDrop
              onClose={() =>
                this.setState({
                  isMenuDropOpen: false,
                })
              }
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

          {/* Page */}
          <Block>
            <code>Page:</code>
            <div className={'padding-vertical-normal'} />
            <Page>This is a Page.</Page>
          </Block>
          <Block first last>
            <hr />
          </Block>

          {/* Range */}
          <Block>
            <code>Range:</code>
            <div className={'padding-vertical-normal'} />
            <Range
              absoluteMin={14}
              absoluteMax={20}
              inputMin={rangeMin}
              inputMax={rangeMax}
              roundValues={false}
              onMoved={e => this.setState({ rangeMin: e.min, rangeMax: e.max })}
            />
          </Block>
          <Block first last>
            <hr />
          </Block>

          {/* Select */}
          <Block>
            <code>Select:</code>
            <div className={'padding-vertical-normal'} />
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
              }}
            >
              <div>
                Single:
                <div className={'padding-vertical-normal'} />
                <Select
                  options={[
                    {
                      name: 'Ethiopia',
                      value: 'Et',
                    },
                    {
                      name: 'Nigeria',
                      value: 'NG',
                    },
                    {
                      name: 'Kenya',
                      value: 'KE',
                    },
                    {
                      name: 'Uganda',
                      value: 'UG',
                    },
                    {
                      name: 'Somalia',
                      value: 'SM',
                    },
                    {
                      name: 'Zambia',
                      value: 'ZM',
                    },
                    {
                      name: 'Congo',
                      value: 'CG',
                    },
                    {
                      name: 'Malawi',
                      value: 'ML',
                    },
                  ]}
                  placeholder={'Choose your country....'}
                  selectedValue={this.handleSelect}
                />
              </div>
              <div>
                Multiple:
                <div className={'padding-vertical-normal'} />
                <Select
                  options={[
                    {
                      name: 'Ethiopia',
                      value: 'Et',
                    },
                    {
                      name: 'Nigeria',
                      value: 'NG',
                    },
                    {
                      name: 'Kenya',
                      value: 'KE',
                    },
                    {
                      name: 'Uganda',
                      value: 'UG',
                    },
                    {
                      name: 'Somalia',
                      value: 'SM',
                    },
                    {
                      name: 'Zambia',
                      value: 'ZM',
                    },
                    {
                      name: 'Congo',
                      value: 'CG',
                    },
                    {
                      name: 'Malawi',
                      value: 'ML',
                    },
                  ]}
                  placeholder={'Choose your country....'}
                  selectedValue={this.handleSelect}
                  multiple={true}
                />
              </div>
            </div>
          </Block>
          <Block first last>
            <hr />
          </Block>

          {/* SlideShow */}
          <Block>
            <code>SlideShow:</code>
            <div className={'padding-vertical-normal'} />
            <SlideShow
              images={[
                { image: pic1, caption: '' },
                { image: pic2, caption: '' },
                { image: pic3, caption: '' },
                { image: pic4, caption: '' },
                { image: pic5, caption: '' },
              ]}
              height={'200px'}
              autoPlay={true}
              showControls={true}
              interval={5000}
              animation={'fade'}
            />
          </Block>
          <Block first last>
            <hr />
          </Block>

          {/* TextArea */}
          <Block>
            <code>TextArea:</code>
            <div className={'padding-vertical-normal'} />
            <TextArea label="This is a TextArea." />
          </Block>
          <Block first last>
            <hr />
          </Block>

          {/* Toggle */}
          <Block>
            <code>Toggle:</code>
            <div className={'padding-vertical-normal'} />
            <Toggle>Checked, by default.</Toggle>
          </Block>
          <Block first last>
            <hr />
          </Block>

          {/* Warning */}
          <Block>
            <code>Warning:</code>
            <div className={'padding-vertical-normal'} />
            <Warning shy problem="This is a Warning." />
          </Block>
          <Block first last>
            <hr />
          </Block>

          {/* Yoga */}
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

  handleSelect = (value: any) => {
    console.log(value)
  }

  handleDialog = () => {
    this.setState(old => ({
      isDialogOpen: !old.isDialogOpen,
    }))
  }
}