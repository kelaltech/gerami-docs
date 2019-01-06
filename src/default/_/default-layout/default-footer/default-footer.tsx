import React, { Component } from 'react'
import { Block } from 'gerami'

export class DefaultFooter extends Component {
  render() {
    return (
      <Block last className={'center font-S fg-blackish'}>
        &copy; kelal tech., 2018.
      </Block>
    )
  }
}
