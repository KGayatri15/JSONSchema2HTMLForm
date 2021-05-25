function start1(){
    document.getElementById("display1").appendChild(process.json2HTML(UserSignUp));
}
function start2(){
    document.getElementById("display2").appendChild(process.json2HTML(UserProfile));
}
function Submit1(){
    console.log("Registered Successfully !");
    document.getElementById("display1").innerHTML = "";
 //   return true;
}
function Submit2(){
    console.log("Registered Successfully !");
    document.getElementById("display2").innerHTML = "";
 //   return true;
}
