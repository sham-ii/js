function addition(){
    var num1= 0;
    var num2= 0;
    var ans1= 0;
    num1= document.getElementById('add1').value;
    num2= document.getElementById('add2').value;
   
    ans1= Number(num1)+Number(num2);
    document.getElementById('sum').value=ans1;
    if(Number(num1)==false){
        alert("Num1 cannot be empty.");
    }
    else{
        alert("Num2 cannot be empty");
    }

}

function subtraction(){
    var num1= 0;
    var num2= 0;
    var ans2= 0;
    num1= document.getElementById('subt1').value;
    num2= document.getElementById('subt2').value;
   
    ans2= Number(num1)-Number(num2);
    document.getElementById('difference').value=ans2;
    if(Number(num1)==false){
        alert("Num1 cannot be empty.");
    }
    else{
        alert("Num2 cannot be empty");
    }

}

function multiplication(){
    var num1= 0;
    var num2= 0;
    var ans3= 0;
    num1= document.getElementById('mult1').value;
    num2= document.getElementById('mult2').value;
   
    ans3= Number(num1)*Number(num2);
    document.getElementById('product').value=ans3;
    if(Number(num1)==false){
        alert("Num1 cannot be empty.");
    }
    else{
        alert("Num2 cannot be empty");
    }

}

function division(){
    var num1= 0;
    var num2= 0;
    var ans4= 0;
    num1= document.getElementById('div1').value;
    num2= document.getElementById('div2').value;
   
    ans4= Number(num1)/Number(num2);
    document.getElementById('qoutient').value=ans4;
    if(Number(num1)==false){
        alert("Num1 cannot be empty.");
    }
    else{
        alert("Num2 cannot be empty");
    }

}

    let age = prompt("How old are you?", 100);
    alert (age);

    let boss = confirm("Are you the boss?");
    if(boss==true){
        alert("Welcome boss!");
    }
    else{
        alert("Get lost!");
    }