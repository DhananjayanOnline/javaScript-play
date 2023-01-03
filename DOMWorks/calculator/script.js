function displayValues(event){
    let num = event.target.value;
    result.value+=num
}

function clearBox(){
    result.value = ""
}


function evaluateExpression(){
    let currentValue = result.value
    let out = eval(currentValue)
    result.value = out
}

function changeTheme(){
    if document.getElementById("#dark-theme")
    let theme = document.querySelector("#theme")
    theme.href="dark.css"
}