const moment = require('moment');

// var date = new Date();
//
// console.log(date.getMonth());

// var date = moment();
//
// date.add(1, 'year').subtract(2, 'month');
//
// console.log(date.format('MMM Do, YYYY'));
//
// console.log(date.startOf('minutes').fromNow());
// console.log(moment().toNow());

var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var createdAt = 12345;

const date = moment(createdAt);
console.log(date.format('h:mm a'));
