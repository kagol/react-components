import React, { Component } from 'react';
import Tabs, { TabItem } from '../../../components/Tabs';
import LineChart from '../../../components/LineChart';
import './style.css';

class ChartBlock extends Component {
    render() {
        return (
            <div className="chart-block">
                <Tabs defaultActiveKey="1">
                    <TabItem tab={<div className="tab-title">Ad performance</div>} key="1">LineChart</TabItem>
                    <TabItem tab={<div className="tab-title">Audience</div>} key="2">BarChart</TabItem>
                </Tabs>
            </div>
        );
    }
}

export default ChartBlock;
