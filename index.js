
var express = require('express');
var exec = require('child_process').exec;
var child;
var app = express();


app.get('/nginx-health', function (req, res) {
  child = exec("docker exec nginx nginx -t", function (error, stdout, stderr) {
  console.log('stdout: ' + stdout);
  console.log('stderr: ' + stderr);
  if(stderr !==null){
    if(stderr.indexOf('test is successful')>-1){
	res.send(200);
    }else{
        console.log('nginx test failed');
	res.send(404);
    }
  }else{
    console.log('no nginx test output');
    res.send(404);
  }
  if (error !== null) {
    console.log('exec error: ' + error);
    res.send(404);
  }
});
});

/*Start the Server*/
app.listen(3000);
console.log('Started');
