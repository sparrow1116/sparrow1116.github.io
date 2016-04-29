import '../common/lib';
import App from '../component/App';
import ReactDOM from 'react-dom';
import React from 'react';

import key1 from '../component/key1'
import key2 from '../component/key2'

import pubsub from '../component/case/pubsub/pubsub.js'


import { Router, Route, hashHistory, IndexRoute } from 'react-router'


ReactDOM.render((

  <Router history={hashHistory}>
    <Route breadcrumbName="首页" path="/" component={App}>
      <Route path="/key1" component={key1}/>
      <Route breadcrumbName="key2" path="/key2" component={key2}/>
      <Route breadcrumbName="发布订阅者模式-实现双向绑定" path="/case/pubsub" component={pubsub}/>
    </Route>
  </Router>
), document.getElementById('react_content'))


