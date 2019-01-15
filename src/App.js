import { Link } from "react-router-dom";
import Main from './route/Main';
import { Menu } from 'element-react';
import React, { Component } from 'react'
import 'element-theme-default'
import './App.css';
import { routerList } from './route/config';
export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      defaultActive: '/'
    }
  }

  componentDidMount() {
    this.setState({
      defaultActive: window.location.pathname
    })
  }

  render() {
    return (
      <div className="app-container">
        <div>
          <Menu defaultActive={this.state.defaultActive} className="el-menu-vertical-demo app-slide-bar">
            {routerList.map(item => {
              return (
                <Link className="app-link" to={item.path} key={item.path}>
                  <Menu.Item index={item.path}>
                    <i className={item.icon}></i>{item.name}
                  </Menu.Item>
                </Link>
              )
            })}
          </Menu>
        </div>
        <div className="app-content">
          <Main></Main>
        </div>
      </div>
    )
  }
};

