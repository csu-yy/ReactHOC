'use strict'
import React, { Component } from 'react'

const getDisplayName = component => component.displayName || component.name || 'Component';
//export default WrappedComponent => class HOC extends Component{
export default (WrappedComponent, title = '默认标题') => class HOCwithParams extends Component {
  // static displayName = `HOC(${getDisplayName(WrappedComponent)})`;
  /*constructor(props){
    super(props)
  }*/
  render() {
    return (
      <fieldset>
        <legend>{title}</legend>
        <WrappedComponent {...this.props} />
      </fieldset>
    );
  }
}
