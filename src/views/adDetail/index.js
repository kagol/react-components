import React, { Component } from 'react';
import Header from './Header';
import ChartBlock from './ChartBlock';
import DetailBlock from './DetailBlock';
import TableBlock from './TableBlock';
import './style.css';

class AdDetail extends Component {
    render() {
        return (
            <div className="ad-detail-container">
                <Header />
                <div className="content">
                    <div className="chart-detail-block">
                        <ChartBlock />
                        <DetailBlock />
                    </div>
                    <TableBlock />
                </div>
            </div>
        );
    }
}

export default AdDetail;
