var fs=require('fs');
fs.readFile('../text/hangul.txt',function(err,data){
	console.log('data'+data);
});