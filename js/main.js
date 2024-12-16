function convertDollar(){
    var dollar = document.getElementById("dollar").value;
    var dollar = document.getElementById("Result");

    if(isNaN(dollar)){
        result.innerHTML = "Enter Number Not Text";
        return false;
    }else if(dollar<0){
        result.innerHTML = "Enter Postive number";
        return false;
    }else if(dollar==0){
        result.innerHTML = "Enter Number Rather Than Zero";
        return false;
    }else{
        result.innerHTML = dollar* 50 + "Egyption Pound";
        return false;
    }
}