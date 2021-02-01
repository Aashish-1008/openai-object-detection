/**
 * This js file will help to
 * convert json format to xml format compatiable with open ai object detection algorithm.
 */

const dsFilePath = './dataset.json',
	processedFilePath = './output';

// Importing the Required Modules 
const fs = require('fs'),
	readline = require('readline');


// Creating a readable stream from file 
// readline module reads line by line  
// but from a readable stream only. 
const file = readline.createInterface({
	input: fs.createReadStream(dsFilePath),
	output: process.stdout,
	terminal: false
});

// Printing the content of file line by 
//  line to console by listening on the 
// line event which will triggered 
// whenever a new line is read from 
// the stream 
file.on('line', (line) => {
	console.log(line);
});