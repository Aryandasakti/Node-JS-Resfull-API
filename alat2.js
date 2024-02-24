const fs = require('fs');


fs.readFile("./log.txt", 'utf-8', (err, data) => {
    if (err) {
        console.log('Error reading log file:', err);
        console.log(err)
    } else {

    let logData = data.split("\n");
    logData.shift();
    console.log(logData)
    console.log('-----------')
    
    fs.writeFile('modified_/log.txt', logData.join("\n"), 'utf-8', (err) => {
        if (err) {
            console.log('Error writing modified log data to file:', err);
        } else {
            console.log('Modified log data written to modified_log.txt');
        }
    });

    }
});

