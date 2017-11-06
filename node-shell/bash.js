// Output a prompt
process.stdout.write('prompt > ');

var commands = require('./command.js');

var done = function(output) {
  process.stdout.write(output);
  process.stdout.write("\nprompt > ");
}
// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  data = data.toString().trim().split(' ');
  var cmd = data[0].trim(); // remove the newline
  if(cmd === 'pwd'){
    commands.pwd(null, done);
  }
  if (cmd === 'ls') {
    commands.ls(null, done);
  }
  if (cmd === 'echo') {
    commands.echo(data.slice(1), done);
  }
  if (cmd === 'cat') {
    commands.cat(data[1], done);
  }
  if (cmd === 'head') {
    commands.head(data[1], done);
  }
  if (cmd === 'tail') {
    commands.tail(data[1]);
  }
  if (cmd === 'curl') {
    commands.curl(data[1]);
  }
});
//   if(cmd === 'date'){
//     var date = new Date();
//     process.stdout.write(date.toUTCString())
//   }
//   process.stdout.write('\nprompt > ');

// });