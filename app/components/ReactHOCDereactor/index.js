'use strict'
import React, { Component } from 'react'

const getDisplayName = component => component.displayName || component.name || 'Component';

export default class HOCDereactor extends Component {
  //withHOCDereactor即为高阶组件
  static withHOCDereactor = (config) => (WrappedComponent) => class HOCDereactorWrapper extends Component {
    render() {
      const newProps = {
        hocNewProps: {
          defaultName: 'reactHOC',
          customConfig: config
        },
      }
      return <WrappedComponent {...this.props} {...newProps} />
    }
  }

  render() {
    return (
      <div>empty</div>
    )
  }
}
