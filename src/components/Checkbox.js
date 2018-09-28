import React, { Component } from 'react';
import { Checkbox } from 'antd';
import './Checkbox.css';

export default class MyCheckbox extends Component {
    render() {
        return (
            <Checkbox {...this.props} />
        );
    }
}
