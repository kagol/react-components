import React, { Component } from 'react';
import Checkbox from '../../../components/Checkbox';
import Select, { Option } from '../../../components/Select';
import Button from '../../../components/Button';
import Table from '../../../components/Table';
import { adsList } from '../fakeData';
import { columns } from '../conf';
import './style.css';

class TableBlock extends Component {
    render() {
        return (
            <div className="table-block">
                <div className="table-operation-bar">
                    <Checkbox onChange={(event) => { console.log('Your checked status: ', event.target.checked); }}>Has delivery</Checkbox>
                    <Select className="select-table-column" defaultValue="1" 
                        onChange={(value) => { console.log('You selected: ', value); }}>
                        <Option value="1">Performance</Option>
                        <Option value="2">Customize</Option>
                    </Select>
                    <Button icon="export" onClick={() => { console.log('You click "Export Data" button'); }}>Export Data</Button>
                </div>
                <Table dataSource={adsList} columns={columns} />
            </div>
        );
    }
}

export default TableBlock;
