//Bài tập 
function Kiemtrasonguyento(x){
    var count=0;
    for(var i=1;i<=x;i++){
        if(x%i===0){
            count++;
        }
    }
    if(count===2)
    {
        return true;
    }
    else{
        return false;
    }
}
document.getElementById("btnPrint").onclick=function(){
    var n=document.getElementById("number").value*1;
    var resultPrint="";
    for (var i=1;i<=n;i++){
        if (Kiemtrasonguyento(i)===true){
            resultPrint+=i+" ";
        }
    }
    document.getElementById("resultPrint").innerHTML=resultPrint;

}