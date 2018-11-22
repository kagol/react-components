import React, { Component } from 'react';
import { gaussBlur, drawWaterDrop } from '../../utils/image-filter';

class PageImageFilter extends Component {
  state = {
    
  }
  componentDidMount() {
    var canvasMain = this.canvas;
    var context = canvasMain.getContext('2d');
    var image_src = require('../../static/images/face_example.png');
    var img = new Image();
    img.onload = () => {
        context.drawImage(img, 0, 0);
        console.log('image width:', img.width);
        console.log('image height:', img.height);
        var imageData = context.getImageData(1, 1, img.width, img.height);
        console.log('imageData:', imageData);
        context.putImageData(gaussBlur(imageData), 1, 1);
    };
    img.src = image_src;

    // var context = canvasMain.getContext('2d');
    // var begin_x = 200;
    // var begin_y = 400;
    // var precision = 360;
    // var size = 100;
    // drawWaterDrop(context, begin_x, begin_y, size, precision);
  }
  render() {
    return (
      <div className="page-image-filter" style={{display: 'flex'}}>
        <img src={require('../../static/images/face_example.png')} />
        <canvas ref={node => this.canvas = node} width={269} height={269}></canvas>
      </div>
    )
  }
}

export default PageImageFilter;
