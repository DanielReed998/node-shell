module.exports = {
    pwd: function (file, done) {
        var output = process.argv[1];
        done(output);
    },
    ls: function(file, done) {
        var fs = require('fs');
        fs.readdir('./', function(err, files) {
            if (err) throw err;
            var output = '';
            files.forEach(function(file) {
              output += (file.toString() + "\n");
            })
            done(output);
          });
    },
    echo: function(strArr, done) {
        var output = strArr.join(' ');
        done(output);
    },
    cat: function(file, done) {
        var fs = require('fs');
        var output;
        fs.readFile(file, (err, data) => {
            if (err) throw err;
            output = data.toString();
            done(output);
        });
    },
    head: function(file, done) {
        var fs = require('fs');
        var output = '';
        fs.readFile(file, (err, data) => {
            if (err) throw err;
            var lineArr = data.toString().split('\n');
            for (var i = 0; i < 5; i++) {
                output += lineArr[i]+ '\n';
            }
            done(output);
          });
         
    },
    tail: function(file) {
        var fs = require('fs');
        fs.readFile(file, (err, data) => {
            if (err) throw err;
            var lineArr = data.toString().split('\n');
            for (var i = lineArr.length - 5; i < lineArr.length; i++) {
                process.stdout.write(lineArr[i] + '\n');
            }
          });
    }, 
    curl: function(url) {
        var request = require('request');
        request(url, function(err, res, body) {  
            if (err) throw err;
            process.stdout.write(body);
        });

    }
}