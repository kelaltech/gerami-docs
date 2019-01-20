import React, { Component } from 'react'
import { Image } from 'gerami'

import logo256 from '../../../assets/images/logo-256.png'
import './default-promotion.scss'

export default class DefaultPromotion extends Component<{}, {}> {
  render() {
    return (
      <div className="default-promotion">
        <div className="padding-big">
          <div className="padding-top-big center">
            <Image className="default-promotion-logo" src={logo256} size="XL" />
          </div>
          <h1 className="padding-big center light">
            <span>gerami</span> <span className="fg-whitish">is brought to you by</span>{' '}
            <span style={{ fontFamily: 'Kelal Wordmark' }}>kelal OpenDev</span>
            <span className="fg-whitish">.</span>
          </h1>
        </div>
      </div>
    )
  }
}
