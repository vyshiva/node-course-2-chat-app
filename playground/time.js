const moment = require('moment');


var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var createdAt = 12345678901234;
var date = moment(createdAt);
//date.add(100, 'year').subtract(9, 'months');
console.log(date.format('MMM Do, YYYY'));
console.log(date.format('h:mm a'));
