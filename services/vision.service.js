function limpaLixo(arr) {
    let lixo = [
        "OPTIONS",
        'ANTERIOR R PRÓX.',
        'ANTERIOR (R) PRÓX.',
        'MERCADO DE TRANSFERÊNCIAS ELENCO CLUBE RD'
    ]
    lixo.forEach(elem => {
        let index = arr.indexOf(elem)
        if (index !== -1) {
            arr.splice(index,1);
        }
    })
}
async function quickstart(imagePath) {
    // Imports the Google Cloud client library
    return new Promise(async (resolve, reject)=>{

        const vision = require('@google-cloud/vision');
        
        
        // Creates a client
        const client = new vision.ImageAnnotatorClient();
        
        // Performs label detection on the image file
        const [result] = await client.textDetection(imagePath)
        const textAnnotations = result.fullTextAnnotation.text.split("\n")
        const novo = textAnnotations
        .reduce((unique, item) => unique.includes(item) ? unique : [...unique, item])
        .filter(element => {
            return element.match(/[A-Z]{4,30}/g)
        })
        
        limpaLixo(novo)
        resolve(novo); 
    })

}
module.exports = {
    detectaTexto:quickstart
}