function kepvalt(){
    let fajl = document.getElementById('kepnev').value;
    document.getElementById('kephely').src = "../src/" + fajl;
}

function szelvalt(){
    let ujszel = document.getElementById('szel').value;
    let kep = document.getElementById('kephely');
    kep.width = ujszel;
}

function magvalt(){
    let ujmag = document.getElementById('mag').value;
    let kep = document.getElementById('kephely');
    kep.height = ujmag;
}
function keretvalt(){
    let ujkeret = document.getElementById('keretvastagsag').value;
    let kep = document.getElementById('kephely');
    kep.border = ujkeret + "px solid black";
}

function keretszinvalt(){
    let ujszin = document.getElementById('keretszin').value;
    let kep = document.getElementById('kephely');
    kep.style.borderColor = String(ujszin);
}

document.getElementById('kepnev').addEventListener('change', kepvalt);
document.getElementById('szel').addEventListener('change', szelvalt);
document.getElementById('mag').addEventListener('change', magvalt);
document.getElementById('keretvastagsag').addEventListener('change', keretvalt);
document.getElementById('keretszin').addEventListener('change', keretszinvalt);