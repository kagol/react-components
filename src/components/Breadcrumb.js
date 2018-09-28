import React, { Component } from 'react';
import Breadcrumb from 'antd/lib/breadcrumb';
import './Breadcrumb.css';

export const BreadcrumbItem = Breadcrumb.Item;

export default class MyBreadcrumb extends Component {
    render() {
        return (
            <Breadcrumb {...this.props} />
        );
    }
}
