import React, { Component } from 'react'
import { Anchor, Block, Button, FlexSpacer, Image, MenuDrop, MenuItem } from 'gerami'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { INavigationItem } from '../layout/interfaces'
import logo256 from '../../../assets/images/logo-256.png'
import './header.scss'

interface IHeaderProps {
  navigation?: INavigationItem[]
}

interface IHeaderState {
  isNavOpen: boolean
}

export default class Header extends Component<IHeaderProps, IHeaderState> {
  state: IHeaderState = {
    isNavOpen: false
  }

  render() {
    const { navigation } = this.props
    const { isNavOpen } = this.state

    return (
      <div className="header">
        <div className="header-shade-area">
          <Block first last className="header-block bold bg-white flex">
            <div>
              <Image
                src={logo256}
                className="header-logo middle"
                to="/"
                title="gerami home"
              />
              <span className="header-separator middle light">|</span>
              <Anchor to="/" className="header-wordmark middle" title="gerami home">
                <span className="fg-primary">gerami</span>{' '}
                <span className="fg-blackish">react components</span>
              </Anchor>
            </div>

            <FlexSpacer />

            <div className="header-nav-max-view">
              {navigation &&
                navigation.map((navRoute, i) => (
                  <Anchor
                    key={i}
                    to={navRoute.to}
                    className="header-nav-links middle"
                    title={navRoute.name}
                  >
                    <div className="flex">
                      <span className="center">
                        <FontAwesomeIcon icon={navRoute.icon} />
                        <span className="padding-horizontal-small" />
                        {navRoute.shortName || navRoute.name}
                      </span>
                    </div>
                  </Anchor>
                ))}
            </div>

            <div className="header-nav-min-view">
              <Button
                className="header-nav-btn middle"
                onClick={() => this.setState({ isNavOpen: true })}
              >
                <FontAwesomeIcon icon="bars" />
              </Button>
            </div>
          </Block>
        </div>

        <div className="header-nav-drop-vault header-nav-min-view">
          <MenuDrop
            className="header-nav-drop"
            open={isNavOpen}
            onClose={() => this.setState({ isNavOpen: false })}
            align="right"
          >
            <Block className="font-S">
              <Anchor to="/" title="gerami home" style={{ textDecoration: 'none' }}>
                <span className="fg-primary">gerami</span>{' '}
                <span className="fg-blackish">react components</span>
              </Anchor>
            </Block>
            {navigation &&
              navigation.map((navRoute, i) => (
                <MenuItem
                  key={i}
                  to={navRoute.to}
                  onClick={() => this.setState({ isNavOpen: false })}
                  className="header-nav-drop-items"
                >
                  <FontAwesomeIcon icon={navRoute.icon} />
                  <span className="padding-horizontal-normal" />
                  {navRoute.name}
                </MenuItem>
              ))}
          </MenuDrop>
        </div>
      </div>
    )
  }
}
