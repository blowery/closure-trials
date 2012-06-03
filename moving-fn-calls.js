var b = null;

function callMe(){
    b = "a value";
    return Math.random() < 0.5;
}

var a = callMe(),
    a_name = b;

console.log(a_name);

if(a) {
    console.log("hi");
} 

console.log("bye");
