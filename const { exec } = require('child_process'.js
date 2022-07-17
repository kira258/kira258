const { exec } = require('child_process');


exec('start vlc C:\\Users\\fiary\\Desktop\\1337\\1337checker\\alert.mp3  ', (error, stdout, stderr) => {
    if (error) {
      console.error(`error: ${error.message}`);
      return;
    }
  
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }
  
    console.log(`stdout:\n${stdout}`);
  });