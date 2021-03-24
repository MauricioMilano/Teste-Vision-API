const futdbService = require("../services/futdb.service");
const visionService = require("../services/vision.service");

var formidable = require('formidable');
var fs =require('fs-extra');    //File System-needed for renaming file etc

module.exports = { 
   async upload(req, res, next){
    const path = await transformImage(req, res);
    console.info(`\n\n---------- detectando texto na imagem ${path} ----------\n\n`)
    const nomesJogadores = await visionService.detectaTexto(path)
    console.log(nomesJogadores);
    console.info(`\n\n---------- Procurando os jogadores ----------------------\n\n`)
    const jogadoresCompletos = []
    nomesJogadores.forEach(async elem=>{
        await timeout();
        jogadoresCompletos.push(await futdbService.getPlayer(elem));
    })
    console.log(JSON.stringify(jogadoresCompletos,null,2))
    res.end();
   }

}
async function timeout () {return setTimeout(()=>{return Promise.resolve()},10000)};
function transformImage (req, res){
    var form = new formidable.IncomingForm();
    //Formidable uploads to operating systems tmp dir by default
    form.uploadDir = "./img";       //set upload directory
    form.keepExtensions = true;     //keep file extension
    let path = ""
    return new Promise((resolve, reject)=>{

        form.parse(req, function(err, fields, files) {
            res.writeHead(200, {'content-type': 'text/plain'});
            res.write('received upload:\n\n');
            console.log("form.bytesReceived");
            //TESTING
            console.log("file size: "+JSON.stringify(files.fileUploaded.size));
            console.log("file path: "+JSON.stringify(files.fileUploaded.path));
            console.log("file name: "+JSON.stringify(files.fileUploaded.name));
            console.log("file type: "+JSON.stringify(files.fileUploaded.type));
            console.log("astModifiedDate: "+JSON.stringify(files.fileUploaded.lastModifiedDate));
            
            //Formidable changes the name of the uploaded file
            //Rename the file to its original name
            let filename = path = './img/image.'+files.fileUploaded.name.split('.')[1]
            fs.rename(files.fileUploaded.path,filename, function(err) {
                if (err)  reject(err);
                resolve(path)
                console.log('renamed complete');
            });
            
        });
        
    }) 
}
