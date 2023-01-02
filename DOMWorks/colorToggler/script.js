function redButton(){
    var title = document.querySelector("#id_title")
    title.style.backgroundColor="red"
}

function greenButton(){
    var title = document.querySelector("#id_title")
    title.style.backgroundColor="green"
}

function changeColor(){
    let btn = event.target.name

    let box = document.querySelector("#id_switch")
    if(btn=="redButton"){
        box.style.backgroundColor="red"
    }else if(btn=="greenButton"){
        box.style.backgroundColor="green"
    }
}