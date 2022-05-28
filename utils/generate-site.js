const fs = require('fs');
const { resolve } = require('path');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            //IF AN ERROR REJECT THE PROMISE AND SEND ERROR TO .CATCH() METHOD 
            if (err) {
                reject(err);
                //RETURN OUT OF FUNCTION TO AVOID ACCIDENTAL PROMISE EXECUTION
                return;
            }
            //RESOLVE IF EVERYTHING IS OK AND SEND TO THE .THEN() METHOD
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

const copyFile = writeFileContent => {
    return new Promise('./src/style.css', './dist/style.css', err => {
        if (err) {
            reject(err);
            return;
        }
        resolve({
            ok: true,
            message: 'File copied!'
        });
    });
}

module.exports = { writeFile, copyFile };