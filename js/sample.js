if(d3){
    d3.select("#result").text("d3.jsは読み込まれています");
}
else{
    document.getElementById("result").innerHTML = "d3.jsを読み込めませんでした";
}