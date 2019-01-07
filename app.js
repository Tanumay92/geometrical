module.exports.circle.area = radius => Math.PI*radius*radius;
module.exports.circle.perimetar = radius => 2*Math.PI*radius;

module.exports.rectangle.perimeter = type,length,width => {
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

module.exports.rectangle.area = type,length,width => {
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

module.exports.triangle.area = base,height => {
    return base * height;
} 

module.exports.triangle.perimeter = side1,side2.side3 => {
    return side1 + side2 + side3;
}