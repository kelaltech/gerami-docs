import React, { Component } from 'react'
import { Anchor, Block } from 'gerami'

export default class Footer extends Component {
  render() {
    return (
      <Block first last className="center font-S fg-blackish">
        <span title="All right reserved.">
          &copy; 2019, gerami.{' '}
          {/* todo: remember to update this link when migrating to OpenDev on GitLab */}
          <Anchor
            href="https://gitlab.com/kelal/_dev/gerami/blob/master/LICENSE"
            target="_blank"
            rel="noopener"
          >
            MIT License
          </Anchor>
          <br />
          <span className="fg-black font-M" style={{ fontFamily: 'Kelal Wordmark' }}>
            kelal OpenDev
          </span>{' '}
          <span style={{ opacity: 0.3 }}>/</span>{' '}
          <a
            className="kelal-wordmark font-M"
            href="https://www.kelaltech.com/"
            rel="noopener"
            target="_blank"
          >
            tech
          </a>
        </span>
      </Block>
    )
  }
}
