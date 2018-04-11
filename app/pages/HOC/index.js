import React, { Component } from 'react'
import withHeader from 'components/ReactHOC'


export default class Demo extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        我是一个普通组件
      </div>
    )
  }
}
export const WithHeaderDemo = withHeader(Demo);
export const HOCwithParamsDemo = withHeader(Demo,'普通组件title');