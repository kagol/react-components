import React, { Component } from 'react';
import Button from '../../../components/Button';
import List from '../../../components/List';
import { adDetail } from '../fakeData';
import { detailConfig } from '../conf';
import './style.css';

class DetailBlock extends Component {
    render() {
        return (
            <div className="detail-block">
                <div className="detail-header">
                    <div className="detail-title">Ad detail</div>
                    <div className="detail-operation">
                        <Button icon="edit" className="flat" onClick={() => { console.log('You click "Edit" button'); }}>Edit</Button>
                        <Button icon="delete" className="flat" onClick={() => { console.log('You click "Delete" button'); }}>Delete</Button>
                        <Button icon="eye" className="flat" onClick={() => { console.log('You click "Preview" button'); }}>Preview</Button>
                    </div>
                </div>
                <List data={adDetail} config={detailConfig} />
            </div>
        );
    }
}

export default DetailBlock;
