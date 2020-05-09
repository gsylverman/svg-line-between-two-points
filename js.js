const line = $('#line');
const div1 = $('#one');
const div2 = $('#two');

const x1 = div1.offset().left + (div1.width()/2);
const y1 = div1.offset().top + (div1.height()/2);
const x2 = div2.offset().left + (div2.width()/2);
const y2 = div2.offset().top + (div2.height()/2);

line.attr('x1',x1).attr('y1',y1).attr('x2',x2).attr('y2',y2);