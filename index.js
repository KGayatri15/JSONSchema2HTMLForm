function start(){
    document.getElementById("display").appendChild(process.json2HTML(schema));
}
function Submit(){
    alert('Registered Data Successfully !');
    return true;
}