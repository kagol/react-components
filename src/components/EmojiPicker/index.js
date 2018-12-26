import React, { Component } from 'react';
import * as emojiData from './emoji-pretty.json';

export default class EmojiPicker extends Component {
    render() {
        console.log('emojiData:', emojiData);
        return (
            <div className="emoji-picker-container">
                {/* <div>&#x1F601;</div> */}
                {
                    emojiData.map((emojiItem, key) => {
                        const emojiCode = emojiItem.unified;
                        const emojiCodeText = String.fromCodePoint(parseInt(emojiCode, 16));
                        return <div key={key}>
                            <div>{emojiCodeText}</div>
                            <div>Name:      {emojiItem.name}</div>
                            <div>Short name:{emojiItem.short_name}</div>
                            <div>Category:  {emojiItem.category}</div>
                            <div>Code:      {emojiCode}</div>
                            <br />
                        </div>
                    })
                }
            </div>
        )
    }
}