// 高斯模糊
export function gaussBlur(imgData, blurLength) {
    var pixes = imgData.data;
    var width = imgData.width;
    var height = imgData.height;
    var gaussMatrix = [],
        gaussSum = 0,
        x, y,
        r, g, b, a,
        i, j, k, len;

    var radius = 30; // 模糊半径（30），数值越大越模糊
    var sigma = blurLength || 5; // 正态分布标准差（5），数值越大越模糊

    a = 1 / (Math.sqrt(2 * Math.PI) * sigma);
    b = -1 / (2 * sigma * sigma);
    //生成高斯矩阵
    for (i = 0, x = -radius; x <= radius; x++, i++){
        g = a * Math.exp(b * x * x);
        gaussMatrix[i] = g;
        gaussSum += g;

    }
    //归一化, 保证高斯矩阵的值在[0,1]之间
    for (i = 0, len = gaussMatrix.length; i < len; i++) {
        gaussMatrix[i] /= gaussSum;
    }
    //x 方向一维高斯运算
    for (y = 0; y < height; y++) {
        for (x = 0; x < width; x++) {
            r = g = b = a = 0;
            gaussSum = 0;
            for(j = -radius; j <= radius; j++){
                k = x + j;
                if(k >= 0 && k < width){//确保 k 没超出 x 的范围
                    //r,g,b,a 四个一组
                    i = (y * width + k) * 4;
                    r += pixes[i] * gaussMatrix[j + radius];
                    g += pixes[i + 1] * gaussMatrix[j + radius];
                    b += pixes[i + 2] * gaussMatrix[j + radius];
                    // a += pixes[i + 3] * gaussMatrix[j];
                    gaussSum += gaussMatrix[j + radius];
                }
            }
            i = (y * width + x) * 4;
            // 除以 gaussSum 是为了消除处于边缘的像素, 高斯运算不足的问题
            // console.log(gaussSum)
            pixes[i] = r / gaussSum;
            pixes[i + 1] = g / gaussSum;
            pixes[i + 2] = b / gaussSum;
            // pixes[i + 3] = a ;
        }
    }
    //y 方向一维高斯运算
    for (x = 0; x < width; x++) {
        for (y = 0; y < height; y++) {
            r = g = b = a = 0;
            gaussSum = 0;
            for(j = -radius; j <= radius; j++){
                k = y + j;
                if(k >= 0 && k < height){//确保 k 没超出 y 的范围
                    i = (k * width + x) * 4;
                    r += pixes[i] * gaussMatrix[j + radius];
                    g += pixes[i + 1] * gaussMatrix[j + radius];
                    b += pixes[i + 2] * gaussMatrix[j + radius];
                    // a += pixes[i + 3] * gaussMatrix[j];
                    gaussSum += gaussMatrix[j + radius];
                }
            }
            i = (y * width + x) * 4;
            pixes[i] = r / gaussSum;
            pixes[i + 1] = g / gaussSum;
            pixes[i + 2] = b / gaussSum;
        }
    }
    return imgData;
}

/**
 * 灰度化
 */
export function grayProcess(imgData) {
    var pixes = imgData.data;
    var width = imgData.width;
    var height = imgData.height;
    for ( var x = 0; x < width-1; x++)
    {
        for ( var y = 0; y < height-1; y++)
        {

            var index = (x + y * width) * 4;
            var average = (pixes[index + 0] + pixes[index + 1] + pixes[index + 2]) / 3;
            pixes[index + 0] = average;
            pixes[index + 1] = average;
            pixes[index + 2] = average;
            pixes[index + 3] = 255;
        }
    }
    return imgData;
}

/**
 * 浮雕效果
 */
export function reliefProcess(imgData) {
    var pixes = imgData.data;
    var width = imgData.width;
    var height = imgData.height;

    var copyData = [];
    for(var x=0;x<pixes.length-1;x++){
        copyData.push(pixes[x]);
    }
    var tempImgData = {
        width: width,
        height: height,
        data: copyData
    }
    for ( var x = 0; x < width-1; x++)
    {
        for ( var y = 0; y < height-1; y++)
        {

            // Index of the pixel in the array    
            var idx = (x + y * width) * 4;
            var bidx = ((x-1) + y * width) * 4; // before
            var aidx = ((x+1) + y * width) * 4; // after

            // calculate new RGB value
            var nr = copyData[aidx + 0] - copyData[bidx + 0] + 128;
            var ng = copyData[aidx + 1] - copyData[bidx + 1] + 128;
            var nb = copyData[aidx + 2] - copyData[bidx + 2] + 128;
            nr = (nr < 0) ? 0 : ((nr >255) ? 255 : nr);
            ng = (ng < 0) ? 0 : ((ng >255) ? 255 : ng);
            nb = (nb < 0) ? 0 : ((nb >255) ? 255 : nb);

            // assign new pixel value    
            pixes[idx + 0] = nr; // Red channel    
            pixes[idx + 1] = ng; // Green channel    
            pixes[idx + 2] = nb; // Blue channel    
            pixes[idx + 3] = 255; // Alpha channel    
        }
    }
    return imgData;
}

/**
 * 水滴💧
 */
export function drawWaterDrop(context, begin_x, begin_y, size, precision) {
    context.beginPath();
    context.translate(begin_x, begin_y);
    context.rotate(3*Math.PI/2);
    for(var i=0; i<precision; i++) {
        var step = i/precision*(Math.PI*2);
        var x = size * Math.cos(step);
        var y = size * Math.sin(step)*Math.pow(Math.sin(step/2), 2);
        context.lineTo(x, y);
    }
    context.stroke();
}

/**
 * 心形🧡
 */
export function drawHeart(context, begin_x, begin_y, size, precision) {
    context.beginPath();
    context.translate(begin_x, begin_y);
    context.rotate(Math.PI);
    for(var i=0; i<precision; i++) {
        var step = i/precision*(Math.PI*2);
        var x = size * (16 * Math.pow(Math.sin(step), 3));
        var y = size * (13 * Math.cos(step) - 5 * Math.cos(2 * step) - 2 * Math.cos(3 * step) - Math.cos(4 * step));
        context.lineTo(x, y);
    }
    context.fillStyle = 'red';
    context.fill();
}


/**
 * 笛卡尔心形线
 */
export function drawHeartDescartes(context, begin_x, begin_y, size, precision, position) {
    context.beginPath();
    context.translate(begin_x, begin_y);
    context.rotate(Math.PI);
    var start = 0;
    for(var i=0; i<precision; i++) {
        start += Math.PI*2/precision;
        var end = start + Math.PI*2/precision;

        //top: 1-sinx right: 1-cosx bottom: 1+sinx left: 1+cosx
        // var radius = size * (1 - Math.sin(start)); // top 
        // var radius = size * (1 - Math.cos(start)); // right
        // var radius = size * (1 + Math.sin(start)); // bottom
        // var radius = size * (1 + Math.cos(start)); // left

        var radius = size * (1 - Math.sin(start)); // 默认向上

        switch(position) {
            case 'top':
                radius = size * (1 - Math.sin(start));
                break;
            case 'right':
                radius = size * (1 - Math.cos(start));
                break;
            case 'bottom':
                radius = size * (1 + Math.sin(start));
                break;
            case 'left':
                radius = size * (1 + Math.cos(start));
                break;
        }

        context.arc(0, 0, radius, start, end, false);
    }
    context.fillStyle = 'red';
    context.fill();
}

/**
 * 二阶贝塞尔曲线
 */
export function drawBezierCurves(context, precision, control) {
    var start_x = control.start_x;
    var start_y = control.start_y;
    var control_x = control.control_x;
    var control_y = control.control_y;
    var end_x = control.end_x;
    var end_y = control.end_y;

    context.beginPath();
    context.moveTo(start_x, start_y);
    for(var i=0; i<precision; i++) {
        var t = i * (1/precision);
        var x = Math.pow(1-t, 2) * start_x + 2*t*(1-t) * control_x + Math.pow(t, 2) * end_x;
        var y = Math.pow(1-t, 2) * start_y + 2*t*(1-t) * control_y + Math.pow(t, 2) * end_y;
        context.lineTo(x, y);
    }
    context.strokeStyle = 'red';
    context.stroke();
}

/**
 * 三阶贝塞尔曲线
 */
export function drawCubicBezierCurves(context, precision, control) {
    var start_x = control.start_x;
    var start_y = control.start_y;
    var control_a_x = control.control_a_x;
    var control_a_y = control.control_a_y;
    var control_b_x = control.control_b_x;
    var control_b_y = control.control_b_y;
    var end_x = control.end_x;
    var end_y = control.end_y;

    context.beginPath();
    context.moveTo(start_x, start_y);
    for(var i=0; i<precision; i++) {
        var t = i * (1/precision);
        var x = Math.pow(1-t, 3) * start_x + 3*t*Math.pow(1-t, 2) * control_a_x + 3*(1-t)*Math.pow(t, 2) * control_b_x + Math.pow(t, 3) * end_x;
        var y = Math.pow(1-t, 3) * start_y + 3*t*Math.pow(1-t, 2) * control_a_y + 3*(1-t)*Math.pow(t, 2) * control_b_y + Math.pow(t, 3) * end_y;
        context.lineTo(x, y);
    }
    context.strokeStyle = 'red';
    context.stroke();
}

/**
 * 绘制多边形
 */
export function drawPolygon(context, size, start_x, start_y, num) {
    var num = num || 6;
    context.beginPath();
    context.translate(start_x, start_y);
    for(var i=0; i<num+1; i++) {
        context.lineTo(0, 100);
        context.rotate(2/num*Math.PI);
    }
    context.stroke();
}

/**
 * 文字里嵌入图像
 */
export function imageInText(context, img, text) {
    // var canvas = document.querySelector('#cvs-main');
    // var context = canvas.getContext('2d');
    var width = context.width;
    var height = context.height;
    context.textBaseline = 'middle';
    context.font = 'bold 100px "Microsoft Yahei"';
    // 绘制方法
    // var draw = function () {    
        context.clearRect(0, 0, width, height);
        // 渐变和纹理
        var gradient, pattern;
        // 创建材质canvas
        var canvasPattern = document.createElement('canvas');
        var contextUnder = canvasPattern.getContext('2d');
        canvasPattern.width = width;
        canvasPattern.height = height;
    
        // 创建渐变canvas
        var canvasGradient = document.createElement('canvas');
        var contextOver = canvasGradient.getContext('2d');
        canvasGradient.width = width;
        canvasGradient.height = height;

        // 绘制渐变对象
        gradient = contextOver.createLinearGradient(0, 0, 0, height);
        var red = '#FF0000';
        gradient.addColorStop(0, red);
        gradient.addColorStop(1, red);
    
        // 纹理对象，img指纹理图片对象
        pattern = contextUnder.createPattern(img, 'no-repeat');
        contextUnder.fillStyle = pattern;
        contextUnder.fillRect(0, 0, width, height);

        // 应用渐变
        // contextOver.fillStyle = gradient;
        // contextOver.fillRect(0, 0, width, height);

        // 叠加canvas
        contextOver.blendOnto(contextUnder, 'overlay');
    
        // 给当前context创建pattern
        pattern = context.createPattern(canvasPattern, 'no-repeat');
        
        // 绘制文本
        context.fillStyle = pattern;
        context.fillText(text || 'THANK YOU', 200, 1100);
        // context.fillText('YOU', 300, 800);
    // };
    // draw();
}