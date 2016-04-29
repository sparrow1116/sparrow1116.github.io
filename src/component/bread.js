/**
 * Created by zhangyingjie on 2016/4/29.
 */
const ReactRouter = require('react-router');
let { Router, Route, Link, hashHistory } = ReactRouter;
import { Breadcrumb } from 'antd';



export default  class Bread extends Component{
  render(){
    return(
      <div className="content" > Key 2</div>
    )
  }
}

ReactDOM.render(
  <Router history={hashHistory}>
    <Route name="home" breadcrumbName="首页" path="/" component={Home}>
      <Route name="apps" breadcrumbName="应用列表" path="apps" component={Apps}>
        <Route name="app" breadcrumbName="应用:id" path=":id">
          <Route name="detail" breadcrumbName="详情" path="detail" />
        </Route>
      </Route>
    </Route>
  </Router>
  , mountNode);
