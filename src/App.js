import React, { Component,Fragment } from 'react'
// 2.引入需要的路由组件
import {HashRouter as Router,Route} from 'react-router-dom'
// 3.引入需要显示的组件
import Home from './pages/home'
import Info from './pages/info'
import List from './pages/list'
import Profiler from './pages/profiler'
// 4.引入TabBar组件
import HKlaout from './components/HKlaout'
// 1.创建一个App组件
export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Route path="/" exact render={()=><HKlaout><Home/></HKlaout>}/>
          <Route path="/list" exact render={()=><HKlaout><List/></HKlaout>}/>
          <Route path="/info" exact render={()=><HKlaout><Info/></HKlaout>}/>
          <Route path="/profiler" exact render={()=><HKlaout><Profiler/></HKlaout>}/>
        </Router>
      </Fragment>
    )
  }
}
