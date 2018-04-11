import React, { Component } from 'react'
import withHeader from 'components/ReactHOCDereactor'

@withHeader.withHOCDereactor({
  name:'skyeGao',
  age:'18'
})
export default class Demo extends Component{
  constructor(props){
    super(props)
  }
  render(){
    const props = this.props;
    const { hocNewProps } = props
    const { name,age } = hocNewProps.customConfig

    console.log(props)
    return(
      <div>
        {name}永远{age}岁
      </div>
    )
  }
}