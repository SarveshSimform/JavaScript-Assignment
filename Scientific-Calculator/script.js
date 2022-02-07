let operation = document.getElementById('operations');
let resultdiv = document.getElementById('result-div');

function addChar(element) {
    let char = element.getAttribute('data-value');
    operation.innerText += char;
}

function cube(){
    let operationValue = operation.innerText;
    operation.innerText = operationValue * operationValue * operationValue;
}

function clearScreen() {
    operation.innerText = "";
}


function backspace() {
    let operationValue = operation.innerText;
    let operationValueLength = operationValue.length;
    let newOperationValue = operationValue.substring(0, operationValueLength-1);
    operation.innerText = newOperationValue;
}

function calculate() {
    let operationValue = operation.innerText;
    operation.innerText = eval(operationValue);
}

// trigonometry function to calculate sine,cos,tan,cot,cosec,sec
function trigonometry(fun){
    let operationValue = operation.innerText;
    let result;
    switch (fun) {
        case 'sine':
            result = Math.sin(operationValue);
            break;
        case 'cos':
            result = Math.cos(operationValue);
            break; 
        case 'tan':
            result = Math.tan(operationValue);
            break;
        case 'cot':
            result = 1 / Math.tan(operationValue);
            break;  
        case 'cosec':
            result = 1 / Math.sin(operationValue);
            break;
        case 'sec':
            result = 1 / Math.cos(operationValue);
            break;         
    }
    if(result === 'NaN'){
        operation.innerText = "Error";
    }else{
        operation.innerText = result;
    }
}

function func(fun){
    let operationValue = operation.innerText;
    let result;
    switch (fun) {
        case 'random':
            result = Math.random();
            break;
        case 'ceil':
            result = Math.ceil(operationValue);
            break; 
        case 'floor':
            result = Math.floor(operationValue);
            break;
        case 'round':
            result = Math.round(operationValue);
            break;  

                
    }
    if(result === 'NaN'){
        operation.innerText = "Error";
    }else{
        operation.innerText = result;
    }
}



function square(){
    let operationValue = operation.innerText;
    operation.innerText = operationValue * operationValue;
}

function absolute(){
    operation.innerText = Math.abs(operation.innerText);
}

function xp(){
    operation.innerText = Math.exp(operation.innerText);
}

function sqrt(){
    operation.innerText = Math.sqrt(operation.innerText);
}

function factorial(){
    let operationValue = operation.innerText;
    let result = 1;
    for(i = operationValue;i >= 1; i--){
        result *= i;
    }
    operation.innerText = result;
}

function ten_pow(){
    operation.innerText = Math.pow(10,operation.innerText);
}

// log base 10 function
function log(){
    operation.innerText = Math.log10(operation.innerText);
}

//natural logarithm function
function ln(){
    operation.innerText = Math.log(operation.innerText);
}

// MC, MR, M+, M-, MS funtionality
let memoryArr = [];
let mStatus = 0;

function Clear(){
    memoryArr = [];
    if(mStatus == 1){
        document.getElementById('memory-clear').style.opacity = 0.2;
        document.getElementById('memory-recall').style.opacity = 0.2;
    }
}

function Recall(){
    let sum = 0;
    for(let x of memoryArr){
        sum += Number(x);
    }
    operation.innerText = sum;
}

function Plus(){
    if(operation.innerText != ""){
        memoryArr.push(operation.innerText);
    }
    if(mStatus == 0 && operation.innerText != ""){
        document.getElementById('memory-clear').style.opacity = 1;
        document.getElementById('memory-recall').style.opacity = 1;
        mStatus = 1;
    }
    operation.innerText = ""; 
}

function Minus(){
    if(operation.innerText != ""){
        memoryArr.push('-'+operation.innerText);
    }
    if(mStatus == 0 && operation.innerText != ""){
        document.getElementById('memory-clear').style.opacity = 1;
        document.getElementById('memory-recall').style.opacity = 1;
        mStatus = 1;
    }
    operation.innerText = "";
}

function Save(){
    if(operation.innerText != ""){
        memoryArr.push(operation.innerText);
    }
    if(mStatus == 0 && operation.innerText != ""){
        document.getElementById('memory-clear').style.opacity = 1;
        document.getElementById('memory-recall').style.opacity = 1;
        mStatus = 1;
    }
    operation.innerText = "";
}