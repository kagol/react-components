import React, { Component } from 'react';
import Table from 'antd/lib/table';
import './style.css';

export default class MyTable extends Component {
   render() {
        return (
            <Table {...this.props} />
        )
    }
}
