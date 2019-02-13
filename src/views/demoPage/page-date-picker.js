import React, { Component } from 'react';
import * as babelParser from "@babel/parser";
import traverse from "babel-traverse";
import { Editor, EditorState, convertFromHTML } from 'draft-js';
import DatePicker from '../../components/DatePicker';

class PageDatePicker extends Component {
  state = {
    isPopoverOpen: false, selectedDate: null
  }
  render() {
    const isPopoverOpen = this.state.isPopoverOpen;
    const selectedDate = this.state.selectedDate;

    const code = `function square(n) {
      return n * n;
    }`;
    
    const result = babelParser.parse(code);
    const resultExpression = babelParser.parseExpression(code);
    console.log('babelParser:', babelParser);
    console.log('result:', result);
    console.log('resultExpression:', resultExpression);
    console.log('tokTypes:', babelParser.tokTypes);

    traverse(result, {
      enter(path) { // 遍历所有的 Node
        console.log('path:', path);
        // if (
        //   path.node.type === "Identifier" &&
        //   path.node.name === "n"
        // ) {
        //   path.node.name = "x";
        // }
      }
    });

    const sampleMarkup =
    '<b>Bold text</b>, <i>Italic text</i><br/ ><br />' +
    '<a href="https://www.facebook.com">Example link</a><br /><br/ >' +
    '<img src="https://raw.githubusercontent.com/facebook/draft-js/master/examples/draft-0-10-0/convertFromHTML/image.png" height="112" width="200" />';

    const blocksFromHTML = convertFromHTML(sampleMarkup);
    // const state = ContentState.createFromBlockArray(
    //   blocksFromHTML.contentBlocks,
    //   blocksFromHTML.entityMap,
    // );
    console.log('blocksFromHTML:', blocksFromHTML);
    // console.log('state:', state);

    // this.state = {
    //   editorState: EditorState.createWithContent(
    //     state,
    //     decorator,
    //   ),
    // };

    return (
      <div className="page-date-picker">
        <DatePicker onChange={(selectedDate) => {
          console.log('selectedDate:', selectedDate);
          console.log('selectedDate format:', selectedDate.format('YYYY-MM-DD'));
        }} />
      </div>
    )
  }
}

export default PageDatePicker;
