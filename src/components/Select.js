import React, { Component } from 'react';
// import Select from 'react-select';
import Select from 'antd/lib/select';
import './Select.css';

export const Option = Select.Option;

export default class MySelect extends Component {
    render() {
        return (
            <Select {...this.props} />
        );
    }
}
