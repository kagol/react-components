import React, { Component } from 'react';
import Tabs from 'antd/lib/tabs';
import './Tabs.css';

export const TabItem = Tabs.TabPane;

export default class MyTabs extends Component {
    render() {
        return (
            <Tabs {...this.props} />
        );
    }
}
