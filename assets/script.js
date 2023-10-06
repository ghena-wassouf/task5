let output = document.getElementById("calc")


function display(num) {
    output.value  += num
}
function Clear(){
    console.log('hi')
    output.value ="";
}
function Delete(){
    console.log('hi')
    output.value = output.value.slice(0,-1)
}
function calc(){
    try {
        console.log('hi')
        output.value = eval(output.value);
    }
    catch(err){
        output.value = "error";
    }
}