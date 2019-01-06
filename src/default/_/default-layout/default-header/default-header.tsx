import React, { Component } from 'react'
import { Block, Image } from 'gerami'
import KelalTechLogo from '../../../../_assets/images/kelal-tech-logo.svg'

export class DefaultHeader extends Component {
  render() {
    return (
      <Block first className={'bold fg-blackish'}>
        <Image
          src={KelalTechLogo}
          className={'middle'}
          style={{ width: 18, height: 18 }}
          title={'kelal tech.'}
          target={'_blank'}
          href={'http://kelaltech.com'}
        />
        <span className={'padding-horizontal-small'} style={{ opacity: 0.3 }}>
          |
        </span>
        <span className={'fg-primary'}>gerami</span> react components
      </Block>
    )
  }
}
