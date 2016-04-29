/**
 * Created by zhangyingjie on 2016/4/11.
 */
import React, {Component} from 'react'
import { Link } from 'react-router'
import { Breadcrumb } from 'antd';


export default  class Key2 extends Component{
  render(){
    return(
    <div>
        <Breadcrumb className="bread" {...this.props} />
        <div className="content" > Key 2</div>
    </div>
      )
  }
}
