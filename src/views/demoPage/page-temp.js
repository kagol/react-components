import React, { Component } from 'react';
const acorn = require("acorn");
/**
 * A tiny, fast JavaScript parser, written completely in JavaScript.
 */

class PageTemp extends Component {
  render() {

    const code = 'var a = 1 + 1';
    const code2 = `
      function square(n) {
        return n * n;
      }
      var result = square(6);
      console.log(result);
      const add = x => x+1;
      const add2 = function(x) { return x+1; }
    `;
    console.log(acorn.parse(code2));
    console.log(acorn.tokenizer(code2));
    console.log('acorn:', acorn);
    console.log('acorn.tokTypes:', acorn.tokTypes);
    console.log('acorn.tokTypes keys:', Object.keys(acorn.tokTypes));
    console.log('acorn.tokTypes length:', Object.keys(acorn.tokTypes).length);

    for (let token of acorn.tokenizer(code)) {
      console.log('token:', token);
      // iterate over the tokens
    }

    // transform code to array of tokens:
    var tokens = [...acorn.tokenizer(code2)];
    console.log('tokens:', tokens);

    return (
      <div className="page-temp">
        Temp page
      </div>
    )
  }
}

export default PageTemp;
