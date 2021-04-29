const axios = require('axios');
const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const FileDownload = require('js-file-download');
const mime = require('mime');

const url = 'https://unsplash.com/photos/a-0X2yc3vVM/download?force=true';
const pathToFile = path.resolve(__dirname, '../files', 'image.jpg');

async function download(url, path){
    const response = await axios({
        method: 'GET',
        url: url,
        responseType: 'stream'
    });
    
    response.data.pipe(fs.createWriteStream(path))

    return new Promise((resolve, reject) => {
        response.data.on('end', ()=> {
            resolve();
        });

        response.data.on('error', err=>{
            reject(err);
        });
    });  
}


router.get('/getTest2', async (req,res)=>{
    await download(url, pathToFile);
    const filename = path.basename(pathToFile);
    const mimetype = mime.lookup(pathToFile);

    res.setHeader('Content-disposition', 'attachment; filename=' + filename);
    res.setHeader('Content-type', mimetype);

    const filestream = fs.createReadStream(pathToFile);
    filestream.pipe(res);
});

router.get('/getTest', async (req,res) => {
    try{
        const response = await axios({
            url: url,
            method: 'GET',
            responseType: 'blob',
        });
        FileDownload(response.data, 'image.jpg');
    } catch(e){console.error(e.message)}
});

router.get('/getFile', async (req, res) => {
    await download(url, pathToFile);
    res.download(pathToFile, 'image.jpg');
});

module.exports = router;