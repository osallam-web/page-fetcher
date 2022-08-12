/**
 * this module should take two command line arguments: 
 * * * 1- a URL 2- a local file path * * *
 * this module should download:
 * * the resource at the URL to the local path on your machine. * *
 * *  Upon completion, it should print out a message like: 
 * *  "Downloaded and saved 1235 bytes to ./index.html.""
 */
const request = require('request');
const fs = require('fs');
const urlInput = process.argv[2];
const pathInput = process.argv[3];

let handleRequest = (urlInput, pathInput) => {
    request(urlInput, (error, response, body) => {
        if (error) {
            console.log(error);
            return;
        }
        fs.writeFile(pathInput, body, (error) => {
            if (error) {
                console.log(error);    
            } else {
                console.log(`Downloaded and saved ${body.length} bites to ${urlInput}`);
            }
        });
    })   
};

handleRequest(urlInput, pathInput);

