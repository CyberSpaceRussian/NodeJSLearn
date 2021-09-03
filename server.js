const http = require('http');
// const { waitForDebugger } = require('inspector');
// const url = require('url');
const fs = require('fs');

let server = new http.Server();

server.on ('request', function (req, res) {

    if (req.url == '/') {
        fs.readFile('index.html', function (err, info) {
            if (err) {
                console.error(err);
                res.statusCode = 500;
                res.end("Server error");
                return;
            }
            res.end(info);
        }); 
    } else {}       
      
});
setTimeout(function () {
    server.close();
},2500);
let timer = setInterval(() => {
    console.log(process.memoryUsage());
}, 1000);


timer.unref();
server.listen(3000);

