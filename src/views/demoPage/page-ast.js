import React, { Component } from 'react';
import * as babelParser from "@babel/parser";
import traverse from "babel-traverse";
/**
 * https://babeljs.io/docs/en/next/babel-parser.html
 * @babel/parser
The Babel parser (previously Babylon) is a JavaScript parser used in Babel.

The latest ECMAScript version enabled by default (ES2017).
Comment attachment.
Support for JSX, Flow, Typescript.
Support for experimental language proposals (accepting PRs for anything at least stage-0).
Credits
Heavily based on acorn and acorn-jsx, thanks to the awesome work of @RReverser and @marijnh.
 */

 /**
  * https://github.com/babel/babel/tree/master/packages/babel-traverse
  * 
  */

class PageAst extends Component {
  render() {
    const code = `
      function square(n) {
        return n * n;
      }
      var result = square(6);
      console.log(result);
      const add = x => x+1;
      const add2 = function(x) { return x+1; }
    `;
    
    const result = babelParser.parse(code);
    // const resultExpression = babelParser.parseExpression(code);
    console.log('babelParser:', babelParser);
    console.log('result:', result);
    // console.log('resultExpression:', resultExpression);
    console.log('tokTypes:', babelParser.tokTypes);

    traverse(result, {
      enter(path) { // 遍历所有的 Node
        console.log('enter path:', path);
        console.log('enter path.type:', path.type);
        if(path.node.type === 'VariableDeclaration' && path.node.kind === 'const'){
          path.node.kind = 'var';
        }
        // if (
        //   path.node.type === "Identifier" &&
        //   path.node.name === "n"
        // ) {
        //   path.node.name = "x";
        // }
      }
    });
    console.log('traversed result:', result);
    return (
      <div className="page-ast">
        Page AST
      </div>
    )
  }
}

export default PageAst;
