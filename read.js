const fs = require('fs');

fs.readFile("adsadas", {encoding: "utf-8"}, function (err, data) {
    if (err) {
        if (err.code == "ENOEND") {
            console.log(err.message);
        } else {
        console.error(err);  
        }   
    } else {
        console.log(data);
    }
});