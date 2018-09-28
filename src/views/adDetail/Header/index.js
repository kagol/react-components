import React, { Component } from 'react';
import Breadcrumb, { BreadcrumbItem } from '../../../components/Breadcrumb';
import Button from '../../../components/Button';
import DateRangePicker from '../../../components/DateRangePicker';
import './style.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="breadcrumb-area">
                    <div className="breadcrumb-current">gary audio</div>
                    <div className="breadcrumb-from">From: <Breadcrumb className="breadcrumb" separator="">
                        <BreadcrumbItem href="http://www.qq.com">Campaign List</BreadcrumbItem>
                        <span className="breadcrumb-seprator">> </span>
                        <BreadcrumbItem href="http://www.qq.com">gary audio test</BreadcrumbItem>
                    </Breadcrumb></div>
                </div>
                <div className="operation-area">
                    <Button icon="mail" className="flat" onClick={() => { console.log('You click "Send Report Email" button'); }}>Send Report Email</Button>
                    <DateRangePicker onChange={(selectedDate) => { console.log('selected date:', selectedDate); }} />
                </div>
            </div>
        );
    }
}

export default Header;
