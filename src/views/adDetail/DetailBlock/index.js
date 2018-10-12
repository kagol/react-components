import React, { Component } from 'react';
import Button from '../../../components/Button';
import List from '../../../components/List';
import { adDetail } from '../fakeData';
import { detailConfig } from '../conf';
import './style.css';

class DetailBlock extends Component {
    render() {
        const { onEditClick, onDeleteClick, onPreviewClick } = this.props;
        return (
            <div className="detail-block">
                <div className="detail-header">
                    <div className="detail-title">Ad detail</div>
                    <div className="detail-operation">
                        <Button id="btn-edit" icon="edit" className="flat" onClick={onEditClick}>Edit</Button>
                        <Button id="btn-delete" icon="delete" className="flat" onClick={onDeleteClick}>Delete</Button>
                        <Button id="btn-eye" icon="eye" className="flat" onClick={onPreviewClick}>Preview</Button>
                    </div>
                </div>
                <List data={adDetail} config={detailConfig} />
            </div>
        );
    }
}

export default DetailBlock;
