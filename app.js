module.exports.circlearea = radius => Math.PI*radius*radius;
module.exports.circleperimetar = radius => 2*Math.PI*radius;

module.exports.rectangleperimeter = (type,length,width) => {
    if(type == 'square') {
        if(length != width){
            console.error('Height and width must be same!');
        } else {
            return 4*length;
        }
    } else if(type == 'rectangle'){
        return 2*(length + width);
    } else if(type == 'Parallelogram'){
        return 2 * (length + width);
    } else {
        console.error('Please select a perfect type of rectangle');
    }
}

module.exports.rectanglearea = (type,length,width) => {
    if(type == 'square') {
        if(length != width){
            console.error('Height and width must be same!');
        } else {
            return length*length;
        }
    } else if(type == 'rectangle'){
        return length * width;
    } else if(type == 'Parallelogram'){
        return length * width;
    } else {
        console.error('Please select a perfect type of rectangle');
    }
}

module.exports.trianglearea = (base,height) => {
    return base * height;
} 

module.exports.triangleperimeter = side1,side2,side3 => {
    return parseFloat(side1) + parseFloat(side2) + parseFloat(side3);
}

module.exports.trianglearea = (side1,side2,side3) => { 
    let perimeter = parseFloat(side1) + parseFloat(side2) + parseFloat(side3);
    let halfperi = (perimeter)/2;
    return Math.sqrt(halfperi*(halfperi - side1)*(halfperi - side2)*(halfperi - side3))
}

module.exports.polygonperimeter = (numberOfSide,side) => {
    let perimeter = numberOfSide * side;
    return perimeter;
}

module.exports.cubearea = side => {
    let area = 6 * (side*side);
    return area;
}

module.exports.spherearea = radius => {
    let area = 4*Math.PI*radius*radius;
    return area;
}

module.exports.cylinderarea = (type,radius,height) => {
    if(type == 'surface'){
       area = 2*Math.PI*radius*height;
       return area;
    } else if(type == 'whole'){
        area = 2(Math.PI * radius2) + 2 * Math.PI * radius * height;
        return;
    } else {
        console.error('Please select a perfect type of rectangle');
    }
}

module.exports.conearea = (radius,side) => {
        area = Math.PI*radius*side;
        return area;
}

module.exports.torusarea = (radius1,radius2) => {
       area = Math.PI * Math.PI * ((radius2*radius2) - (radius1*radius1));
       return area;
}

