import React from "react";
import { Layout, Menu, Icon, Row, Col, Button } from "antd";
import { Table, Divider } from "antd";

export default class Scheduler extends React.Component {
    render() {
        const columns = [
            {
                title: "Name",
                dataIndex: "name",
                key: "name",
                render: text => <a href="#">{text}</a>
            },
            {
                title: "Age",
                dataIndex: "age",
                key: "age"
            },
            {
                title: "Address",
                dataIndex: "address",
                key: "address"
            },
            {
                title: "Action",
                key: "action",
                render: (text, record) => (
                    <span>
                        <a href="#">Action 一 {record.name}</a>
                        <Divider type="vertical" />
                        <a href="#">Delete</a>
                        <Divider type="vertical" />
                        <a href="#" className="ant-dropdown-link">
                            More actions <Icon type="down" />
                        </a>
                    </span>
                )
            }
        ];

        const data = [
            {
                key: "1",
                name: "John Brown",
                age: 32,
                address: "New York No. 1 Lake Park"
            },
            {
                key: "2",
                name: "Jim Green",
                age: 42,
                address: "London No. 1 Lake Park"
            },
            {
                key: "3",
                name: "Joe Black",
                age: 32,
                address: "Sidney No. 1 Lake Park"
            }
        ];
        return (
            <div>
                <Row type="flex" justify="space-between" align="bottom" style={{ marginBottom: "40px" }}>
                    <Col span={20}>
                        <span className="page-title">Scheduler</span>
                    </Col>
                    <Col span={4}>
                        <Button type="primary" style={{ float: "right" }}>Create</Button>
                    </Col>
                </Row>
                <Table dataSource={data} columns={columns} />
            </div>
        );
    }
}
