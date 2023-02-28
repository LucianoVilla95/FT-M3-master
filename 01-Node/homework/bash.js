  const commands = require('./commands/index.js');



  // Output un prompt
    process.stdout.write('prompt > ');
    // El evento stdin 'data' se dispara cuando el user escribe una línea
    process.stdin.on('data', function (data) {
      
      var args = data.toString().trim().split(' ');
      var cmd = data.toString().trim(); // remueve la nueva línea

      /*process.stdout.write('You typed: ' + cmd);*/
      if(commands[cmd]) {
      	commands[cmd]()
      } else {
      	process.stdout.write(`${cmd} not found`)
      }

      process.stdout.write('\nprompt > ');
    });