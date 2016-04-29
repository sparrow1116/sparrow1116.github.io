/**
 * Created by zhangyingjie on 2016/4/28.
 */
import React, {Component} from 'react'
import { Breadcrumb } from 'antd';
export default  class pubsub extends Component{

  componentDidMount (){
    document.getElementsByTagName('iframe')[0].setAttribute('frameborder','no');
  }

  render(){
    return(
      <div className="content">
        <Breadcrumb className="bread" {...this.props} />
        <iframe frameborder="no" border="0" src="src/component/case/pubsub/pubsub.html" width="100%" height="90%" ></iframe>
      </div>
    )
  }
}
