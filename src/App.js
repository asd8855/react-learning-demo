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
    // this.onSelect = this.onSelect.bind(this);
    this.state = {
      defaultActive: '/'
    }
  }

  componentDidMount() {
    console.log("componentDidMount")
    const pathName = window.location.hash.substring(1)
    if (this.state.defaultActive !== pathName) {
      this.setState({
        defaultActive: pathName
      })
    }

  }

  onSelect() {
    console.log("onSelect")
    const pathName = window.location.hash.substring(1)
    if (this.state.defaultActive !== pathName) {
      this.setState({
        defaultActive: pathName
      })
    }
  }

  render() {
    return (
        <div className="app-container">
          <div>
            <Menu defaultActive={this.state.defaultActive} className="el-menu-vertical-demo app-slide-bar" onSelect={this.onSelect.bind(this)}>
              {routerList.map(item => {
                if (item.children) {
                  return (
                    <Menu.SubMenu key={item.path} index={item.path} title={<span><i className={item.icon}></i>{item.name}</span>}>
                      {item.children.map(childrenItem => {
                        return (<Link className="app-link" to={childrenItem.path} key={childrenItem.path}>
                          <Menu.Item index={childrenItem.path}>
                            <i className={childrenItem.icon}></i>{childrenItem.name}
                          </Menu.Item>
                        </Link>
                        )
                      })}
                    </Menu.SubMenu>
                  )
                } else {
                  return (
                    <Link className="app-link" to={item.path} key={item.path}>
                      <Menu.Item index={item.path}>
                        <i className={item.icon}></i>{item.name}
                      </Menu.Item>
                    </Link>
                  )
                }

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

