

/* 
var stu_obj = {
    name : "Rifat",
    age : 18,
    phone : "017xxxxxxx"
};

console.log(stu_obj.name, stu_obj.age, stu_obj.phone); */



/* var text = document.getElementById("main").innerText = "Hey There";

console.log(text);

var farhan = document.getElementById("normal").innerHTML = "<h1>knooooooo</h1>";

console.log(farhan); */





function increment(){
    var counter = document.getElementById("counter").innerText;
    var strTonumber = parseInt(counter);
    document.getElementById("counter").innerText = strTonumber + 1
}

function decrement(){
    var counter = document.getElementById("counter").innerText;
    var strTonumber = parseInt(counter);
    document.getElementById("counter").innerText = strTonumber - 1
}