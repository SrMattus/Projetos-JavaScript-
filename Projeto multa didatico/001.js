
function calcular(){
    let txt = document.getElementById('txtvel').value;
    let txt2 = document.getElementById('res');
    if(parseInt(txt) >= 60){
        txt2.innerText = "voce foi multado";
    }else{
        txt2.innerText = "continue andando com cuidado";
    }

}

