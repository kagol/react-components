import React, { Component } from 'react';
import Button from '../../components/Button';
import { gaussBlur, grayProcess, reliefProcess, drawPolygon, imageInText,
  drawWaterDrop, drawHeart, drawHeartDescartes, drawBezierCurves, drawCubicBezierCurves
} from '../../utils/image-filter';

class PageImageFilter extends Component {
  state = { blurLength: 1 }
  filterBlur(blurLength) {
    var canvasMain = this.canvas;
    var context = canvasMain.getContext('2d');
    context.clearRect(0, 0, canvasMain.width, canvasMain.height); // 清空画布内容
    var image_src = require('../../static/images/face_example.png');
    var img = new Image();
    img.onload = () => {
        context.drawImage(img, 0, 0);
        var imageData = context.getImageData(1, 1, img.width, img.height);
        context.putImageData(gaussBlur(imageData, this.state.blurLength), 1, 1);
    };
    img.src = image_src;
  }
  onFilterBlur() {
    this.setState({ blurLength: this.state.blurLength + 1});
    console.log('blurLength:', this.state.blurLength);
    this.filterBlur(this.state.blurLength)
  }
  onGrayProcess() {
    var canvasMain = this.canvas;
    var context = canvasMain.getContext('2d');
    context.clearRect(0, 0, canvasMain.width, canvasMain.height); // 清空画布内容
    var image_src = require('../../static/images/face_example.png');
    var img = new Image();
    img.onload = function() {
        context.drawImage(img, 0, 0);
        var imageData = context.getImageData(1, 1, img.width, img.height);
        console.log('imageData:', imageData);
        context.putImageData(grayProcess(imageData), 1, 1);
    }
    img.src = image_src;
  }
  onReliefProcess() {
    var canvasMain = this.canvas;
    var context = canvasMain.getContext('2d');
    context.clearRect(0, 0, canvasMain.width, canvasMain.height); // 清空画布内容
    var image_src = require('../../static/images/face_example.png');
    var img = new Image();
    img.onload = function() {
        context.drawImage(img, 0, 0);
        var imageData = context.getImageData(1, 1, img.width, img.height);
        console.log('imageData:', imageData);
        context.putImageData(reliefProcess(imageData), 1, 1);
    }
    img.src = image_src;
  }
  onDrawPolygon() {
    var canvasMain = this.canvas;
    var context = canvasMain.getContext('2d');
    context.clearRect(0, 0, canvasMain.width, canvasMain.height); // 清空画布内容
    var begin_x = 120;
    var begin_y = 120;
    var size = 50;
    context.save(); // 保存初始的画布
    drawPolygon(context, size, begin_x, begin_y, 5);
    context.restore(); // 恢复初始的画布
  }
  onDrawImageInText() {
    // var canvasMain = this.canvas;
    // var context = canvasMain.getContext('2d');
    // context.clearRect(0, 0, canvasMain.width, canvasMain.height); // 清空画布内容
    // var image_src = require('../../static/images/cat-rainbow.png');
    // context.save(); // 保存初始的画布
    // imageInText(context, image_src);
    // context.restore(); // 恢复初始的画布
  }
  onDrawWaterDrop() {
    var canvasMain = this.canvas;
    var context = canvasMain.getContext('2d');
    context.clearRect(0, 0, canvasMain.width, canvasMain.height); // 清空画布内容
    var begin_x = 100;
    var begin_y = 150;
    var precision = 360;
    var size = 100;
    context.save(); // 保存初始的画布
    drawWaterDrop(context, begin_x, begin_y, size, precision); // 中间进行过一些画布旋转、平移等操作
    context.restore(); // 恢复初始的画布
  }
  onDrawHeart() {
    var canvasMain = this.canvas;
    var context = canvasMain.getContext('2d');
    context.clearRect(0, 0, canvasMain.width, canvasMain.height); // 清空画布内容

    var begin_x = 100;
    var begin_y = 100;
    var precision = 360;
    var size = 5;
    context.save(); // 保存初始的画布
    drawHeart(context, begin_x, begin_y, size, precision);
    context.restore(); // 恢复初始的画布
  } 
  onDrawHeartDescartes() {
    var canvasMain = this.canvas;
    var context = canvasMain.getContext('2d');
    context.clearRect(0, 0, canvasMain.width, canvasMain.height); // 清空画布内容

    var begin_x = 100;
    var begin_y = 100;
    var precision = 360;
    var size = 50;
    context.save(); // 保存初始的画布
    drawHeartDescartes(context, begin_x, begin_y, size, precision, 'top');
    context.restore(); // 恢复初始的画布

    // context.save(); // 保存初始的画布
    // drawHeartDescartes(context, 400, 600, 100, 1000, 'top');
    // context.restore(); // 恢复初始的画布

    // context.save(); // 保存初始的画布
    // drawHeartDescartes(context, 300, 400, 100, 1000, 'left');
    // context.restore(); // 恢复初始的画布

    // context.save(); // 保存初始的画布
    // drawHeartDescartes(context, 600, 400, 100, 1000, 'right');
    // context.restore(); // 恢复初始的画布
  } 
  onDrawBezierCurves() {
    var canvasMain = this.canvas;
    var context = canvasMain.getContext('2d');
    context.clearRect(0, 0, canvasMain.width, canvasMain.height); // 清空画布内容
    context.save(); // 保存初始的画布
    drawBezierCurves(context, 500, { 
        start_x: 25, start_y: 175, 
        control_x: 60, control_y: 80, 
        end_x: 170, end_y: 150 
    });
    context.restore(); // 恢复初始的画布
  } 
  onDrawCubicBezierCurves() {
    var canvasMain = this.canvas;
    var context = canvasMain.getContext('2d');
    context.clearRect(0, 0, canvasMain.width, canvasMain.height); // 清空画布内容
    var start_x = 25;
    var start_y = 75;
    var control_a_x = 60;
    var control_a_y = 80;
    var control_b_x = 150;
    var control_b_y = 30;
    var end_x = 170;
    var end_y = 150;
    var step = 20;
    context.save(); // 保存初始的画布
    drawCubicBezierCurves(context, 500, { 
        start_x: start_x+step, start_y: start_y+step, 
        control_a_x: control_a_x+step, control_a_y: control_a_y+step, 
        control_b_x: control_b_x+step, control_b_y: control_b_y+step, 
        end_x: end_x+step, end_y: end_y+step 
    });
    context.restore(); // 恢复初始的画布
  }
  render() {
    return (
      <div className="page-image-filter" style={{display: 'flex', alignItems: 'center'}}>
        <img src={require('../../static/images/face_example.png')} />
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <Button onClick={this.onFilterBlur.bind(this)}>Blur</Button>
          <Button onClick={this.onGrayProcess.bind(this)}>Gray</Button>
          <Button onClick={this.onReliefProcess.bind(this)}>Relief</Button>
          <Button onClick={this.onDrawPolygon.bind(this)}>Draw polygon</Button>
          <Button onClick={this.onDrawImageInText.bind(this)}>Draw Image in text</Button>
          <Button onClick={this.onDrawWaterDrop.bind(this)}>Draw water drop</Button>
          <Button onClick={this.onDrawHeart.bind(this)}>Draw Heart</Button>
          <Button onClick={this.onDrawHeartDescartes.bind(this)}>Draw Heart Descartes</Button>
          <Button onClick={this.onDrawBezierCurves.bind(this)}>Draw Bezier Curves</Button>
          <Button onClick={this.onDrawCubicBezierCurves.bind(this)}>Draw Cubic Bezier Curves</Button>
        </div>
        <canvas ref={node => this.canvas = node} width={269} height={269}></canvas>
      </div>
    )
  }
}

export default PageImageFilter;
