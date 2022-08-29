//Output

function showoutput(output){
    document.getElementById("output").innerHTML =output;

}
//Output / Result  ko clear kary kay lay
document.getElementById("clearOutputButton").onclick=function(){
    document.getElementById("output").innerHTML = " ";
    toastifySuccess("output / Result box has been clered.")
}
//Type your here text  ko clear kary kay lay
function clearInput() {
    inputText.value = " ";
    toastifySuccess("Input box has been cleared")
}

//Round A Number waly Button par ye function work ho ga.
function roundNumber(){                                      //Note:=>   //Round A Number par ye Round karta hai number ko jo bi is kay qariab hoo.
    let number =document.getElementById("inputText").value; 
    if(!number){                                             
        toastifyError("please enter a floating point number.")
        return;
    }
    let roundTheNumber = Math.round(number);
    let html = "<h1 class= 'text-primary mb-0'>" + roundTheNumber + "</h1>"
    showoutput(html)
}

//Ceil A Number  waly Button par ye function work ho ga.     //Note:=>   // ceil par ye hamasha top par lay kar jy ga 
function ceilNumber(){
    let number =document.getElementById("inputText").value;
    if(!number){
        toastifyError("please enter a floating point number.")
        return;
    }
    let ceilTheNumber = Math.ceil(number);
    let html = "<h1 class= 'text-primary mb-0'>" + ceilTheNumber + "</h1>"
    showoutput(html)
}

//Floor a Number  waly Button par ye function work ho ga.    //Note:=>   // floor par ye hamasha bottom par lay kar jy ga

function floorNumber(){
    let number=document.getElementById("inputText").value;
    if(!number){
        toastifyError("please enter a floating point number.")
        return;
    }
    let floorTheNumber =Math.floor(number);
    let html = "<h1 class= 'text-primary mb-0'>" + floorTheNumber + "</h1>"
    showoutput(html)
}

//Generate A Random Number  waly Button par ye function work ho ga.  //Note:=>  //is sy har bar ek random number ay ga .

function generateRandomNumber(){             
    let randomNumber = Math.random();
    let html = "<h1 class= 'text-primary mb-0'>" + randomNumber + "</h1>"
    showoutput(html)
}

//Throw A Dice 
function throwNumber(){
    let randomNumber =Math.random();
    randomNumber = ( randomNumber * 6 ) + 1 ;
    let dice = Math.floor(randomNumber);
    let html = '<h1 class= "text-primary mb-0">' + dice +  '</h1><span style="color:red; font-size: 20px;">Generate A Random Number From 1 to 6 </span>'
    showoutput(html)
}
//Generate A strong Password / Generate A random string  waly Button par ye function work ho ga.
function generateStrongPassword(){
  let length = document.getElementById("inputText").value;
  if(!length){
      toastifyError("Please enter length")
      return;
    }
    let randomString = " ";
    let upperCaseAlphabets = "ABCDEFGHIGKLMNOPQRSTUVWXYZ";
    let lowerCaseAlphabets = "abcdefghigklmnopqrstuvwxyz";
    let number = "0123456789";
    let symbols = "`~!@#$%^&*-_+=/?.,"
    let possibleString = upperCaseAlphabets + lowerCaseAlphabets + number +symbols;

    for(let i = 0; i<length;i++){
        let randomNumber = Math.random();
        randomString += possibleString .charAt(Math.floor(randomNumber * possibleString.length));
    }
    let html = '<h5 class= "text-pimarytheme mb-0">' + randomString + '<h5>' + '<span style="color:red; font-size: 20px;">'+"Generate A Random String=> "+ length + '</span>'
    showoutput(html)
}

//Converting String to integer   waly Button par ye function work ho ga.

function convertingString(){
    let num = document.getElementById("inputText").value;
    if(!num){
        toastifyError("Please enter some number");
        return;
    }
    console.log(typeof num)
    num = parseInt(num)
    console.log(num)
    let html = '<h5 class= "text-pimarytheme mb-0">' + num + '<h5>' + '<span style="color:red; font-size: 20px;">Convert string to integer </span>'
    showoutput(html)
}

// Controlling Length of decimal  waly Button par ye function work ho ga.
function convertingLength(){
    let num =document.getElementById("inputText").value;
    if(!num){
        toastifyError("Please enter some number");
        return;

    }
    num= Number(num);
    console.log(typeof num);
    num = num.toFixed(2);
    console.log(typeof num);
    let html = '<h5 class= "text-pimarytheme mb-0">' + num + '<h5>' + '<span style="color:red; font-size: 20px;">controlling length of decimal </span>'
    showoutput(html)
}

//Calculate GST   waly Button par ye function work ho ga
function calculateGst(){
    let cost =document.getElementById("inputText").value;
    if(!cost){
        toastifyError("Please type something to calculate")
        return;
    }
    cost =Number(cost);
    let tax = cost * (17 /100);
    let totalCost =cost + tax;
    totalCost = Math.round(totalCost);
    document.getElementById("output").innerHTML= 'Your bill = <span class ="text-pimaryTheme fw-18" >' +cost + '</span>'
    document.getElementById("output").innerHTML+='<br>Tax 17% = <span class="text-danger fw-18">'+tax.toFixed(2) +'</span>'
    document.getElementById("output").innerHTML+='<br>Total amount inculding tax = <span class= "text-success fw-bold fw-18">'+totalCost +'</span>'
}



//Toastify 
const toastifySuccess = (msg) =>{
    Toastify({
    text: msg,
    duration: 3000,
    //destination: "https://github.com/apvarun/toastify-js",
    //newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    
  }).showToast();
} 


// clear output 
document.getElementById("clearOutputButton").onclick =function(){
    document.getElementById("output").innerHTML=" ";
    toastifySuccess("The output has been cleared")
     audio.play();

    
}