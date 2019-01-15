import React, { Component } from 'react'

export default class About extends Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        console.log(1111111);
    };

    componentDidMount() {
        console.log('组件加载完毕');
        console.log('应该在 componentDidMount 生命周期方法内发送网络请求');
    }

    componentWillUnmount() {
        console.log('组件即将卸载');
        console.log('应该在 componentWillUnmount 生命周期方法内取消网络请求');
    }


    render() {
        return (
            <div>
                {/* 在这里写注释*/}
                <h2>About</h2>
                <button onClick={this.onClick}>ddddd</button>
            </div>
        )
    }
}
