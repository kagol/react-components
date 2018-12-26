import React, { Component } from 'react';
import Popover from 'antd/lib/popover';
import Icon from 'antd/lib/icon';
import { Picker as EmojiPicker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';
import { getCaretCharacterOffsetWithin, setCaratTo } from './utils';
import './style.css';

export default class EmojiInput extends Component {
    state = { caretOffset: 0 }
    onSelectionChange(event) {
        const caretOffset = getCaretCharacterOffsetWithin(this.emojiInput);
        this.setState({ caretOffset: caretOffset });
    }
    render() {
        const { caretOffset } = this.state;
        // bug1: when pop the EmojiPicker, the top emoji category button can't be clicked
        // bug2: insert emoji after a blank, the emoji will be wrong
        return <div className="emoji-input-container">
            <div ref={node => this.emojiInput = node} className="emoji-editor" contentEditable="true" 
                onMouseUp={this.onSelectionChange.bind(this)} onKeyUp={this.onSelectionChange.bind(this)}>
            </div>
            <Popover trigger="click" content={<EmojiPicker emoji="point_up" title="Pick your emoji…" onSelect={(data) => {
                // console.log('Emoji data:', data);
                const oldValue = this.emojiInput.innerHTML;
                
                const beginText = oldValue.substr(0, caretOffset);
                const endText = oldValue.substr(caretOffset, oldValue.length-caretOffset);
                const currentEmoji = data.native;//String.fromCodePoint(parseInt(data.unified, 16));

                const newValue = beginText + currentEmoji + endText;
                this.emojiInput.innerHTML = newValue;
            
                // auto focus emoji input
                // bug3: the caret position changed, but the oldValue don't change
                setCaratTo(this.emojiInput, newValue.length - 1);
            }} />}>
                <Icon type="smile" className="btn-emoji" />
            </Popover>
        </div>
    }
}