let equation = document.getElementById("equation");

function clickOn(input){
    if(equation.textContent === '0'){
        equation.textContent = ''; 
    }
    equation.textContent += input; 
}

function remove(){ 
    equation.textContent = '';
}

function equate(){
    try{
        equation.textContent = eval(equation.textContent);
        if(equation.textContent === "Infinity"){
            equation.textContent = "♾";    
        }
    }catch(error){
        equation.textContent = "Incorrect input"; 
    }
}