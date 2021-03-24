function Checkfiles() {
    var fup = document.getElementById('filename');
    var fileName = fup.value;
    var ext = fileName.substring(fileName.lastIndexOf('.') + 1);

    if (ext == "jpeg" || ext == "png") {
        return true;
    }
    else {
        return false;
    }
}


function transformImage() {
    var photo = document.getElementById('filename').files[0];
    let req = new XMLHttpRequest();
    let formData = new FormData();
    
    formData.append("photo", photo);                                
    req.open("POST", '/processa');
    req.send(formData);
    
}