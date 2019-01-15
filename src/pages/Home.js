

import React, { Component } from 'react'
import { Table, Form, Input, Select, DatePicker, Button } from 'element-react';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            columns: [
                {
                    label: "日期",
                    prop: "date",
                    width: 180
                },
                {
                    label: "姓名",
                    prop: "name",
                    width: 180
                },
                {
                    label: "地址",
                    prop: "address"
                }
            ],
            data: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }],
            form: {
                name: "",
                address: "",
                startDate: null,
                endDate: null
            }
        }
    }

    onSubmit(e) {
        e.preventDefault();
    }

    onChange(key, value) {
        let form = this.state.form;
        form[key] = value;
        this.setState({ form: form })
    }

    render() {
        return (
            <div>
                <Form inline={true} model={this.state.form} onSubmit={this.onSubmit.bind(this)}>
                    <Form.Item label="姓名">
                        <Input value={this.state.form.name} onChange={this.onChange.bind(this, 'name')}></Input>
                    </Form.Item>
                    <Form.Item label="地址">
                        <Select value={this.state.form.address} placeholder="请选择地址">
                            <Select.Option label="北京" value="shanghai"></Select.Option>
                            <Select.Option label="上海" value="beijing"></Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="开始时间">
                        <DatePicker
                            value={this.state.form.startDate}
                            placeholder="选择日期"
                            onChange={this.onChange.bind(this, 'startDate')}
                        />
                    </Form.Item>
                    <Form.Item label="结束时间">
                        <DatePicker
                            value={this.state.form.endDate}
                            placeholder="选择日期"
                            onChange={this.onChange.bind(this, 'endDate')}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button nativeType="submit" type="primary">查询</Button>
                    </Form.Item>
                </Form>

                <Table
                    columns={this.state.columns}
                    data={this.state.data}
                    border={true}
                />
            </div>
        )
    }
}
