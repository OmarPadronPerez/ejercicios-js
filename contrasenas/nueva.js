function nueva(){
    
    let caracteres=parseInt(document.getElementById("caracteres").value);
    //let caracteres=parseInt(3);
    let nuevo="";
    for(let i=0;i<caracteres;i++){
        nuevo+=String.fromCharCode(ramdomMN(32,125));
    }
    document.getElementById("resultado2").innerHTML="<h3>"+nuevo+"</h3>";
    
}
function ramdomMN(min,max){
    let num
    do{
        num=Math.trunc(Math.random()*max);
    }while(num<min);

    return num;
}