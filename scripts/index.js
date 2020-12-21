function start1(){
    document.getElementById("display1").appendChild(process.json2HTML(UserSignUp));
}
function start2(){
    document.getElementById("display2").appendChild(process.json2HTML(UserProfile));
}
function Submit(){
    alert("Registered Successfully !")
    return true;
}
