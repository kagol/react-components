import React, { Component } from 'react';
import './List.css';

const formatList = function(list, config){
    let result = [];
    Object.keys(list).map((listItem, listKey) => {
        config ? config.map((configItem ,configKey) => {
            if(configItem['key'] === listItem){
                let resultItem = {};
                Object.keys(configItem).map(item => {
                    resultItem['sortid'] = configKey;//增加列表的排序规则，按照config中的顺序来排序
                    resultItem[item] = configItem[item];
                    resultItem['content'] = list[listItem];
                });
                result.push(resultItem);
            }
        }) : result.push({
            sortid: listKey,
            header: listItem,
            content: list[listItem]
        })
    });
    result.sort((prev, next) => {
        return prev.sortid > next.sortid ? 1 : -1;
    });
    return result;
}

export default class List extends Component {
	render(){
		const { data, config } = this.props;
        let lists = config ? formatList(data, config) : formatList(data);
		return (
            <div className="list-container">
                {
                    lists.map((list, key) => {
                        const header = list.header;
                        let content = list.content;
                        if(typeof list['formatter'] === 'function'){
                            content = list['formatter'](content);
                        }
                        return (
                            <div className="list-item" key={key}>
                                <span className="hd">{header}</span>
                                <span className="bd">{content}</span>
                            </div>
                        );
                    })
                }
            </div>
        );
	}
}

