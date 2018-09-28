import React, { Component } from 'react';
import Button from 'antd/lib/button';
import './Button.css';

export default class MyButton extends Component {
    render() {
        return (
            <Button {...this.props} />
        );
    }
}
