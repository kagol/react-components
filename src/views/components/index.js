import React, { Component } from 'react';
import EmojiInput from '../../components/EmojiInput';
import './style.css';

class PageComponents extends Component {
    render() {
        return (
            <div className="page-components-container">
                <div style={{width: '250px', margin: '20px'}}>
                    <EmojiInput />
                </div>
            </div>
        );
    }
}

export default PageComponents;
