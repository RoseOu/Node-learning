/* If the second buffer isn't large enough to hold all of the contents,
you'll only get the portion of the bytes that fit.*/

var buf01=new Buffer('this is a new buffer with a string');
var buf02=new Buffer(10);
buf01.copy(buf02);
console.log(buf2.toString());

// Result:this is a


/*compare buffer*/

var buf1=new Buffer('1 is number one');
var buf2=new Buffer('2 is number two');

console.log(buf1.compare(buf2));

var buf3=new Buffer(buf1.length);
buf1.copy(buf3);

console.log(buf1.compare(buf2));  //-1
console.log(buf2.compare(buf1));  //1
console.log(buf1.compare(buf3));  //0
