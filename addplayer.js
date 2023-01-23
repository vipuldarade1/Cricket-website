let teamdata = JSON.parse(localStorage.getItem("teamdata"));
let playerdata = JSON.parse(localStorage.getItem("playerdata"));


var newcount=10
$("#addplyfor").submit(function (e) {
    e.preventDefault();
    let input6 = $("#sixbox").val();
    let Names = '';
    for(let i=0;i<input6.length;i++){
        if(i == 0){
            Names += input6[i++].toUpperCase();
            continue;
        }else if(input6[i] == ' '){
            Names += input6[++i].toUpperCase();
            i++;
        }
    }
    var plyornot=""
    if($("#threbox").val()=="true"){
        plyornot=true
    }
    else{
        plyornot=false
    }
    let addon={
        "id":playerdata.length,
        "playerName": $("#onebox").val(),
        "from": Names,
        "price": $("#twobox").val()+"Cr",
        "isPlaying": plyornot,
        "description":  $("#fourbox").val(),
        "playerImg":  $("#fivebox").val(),
        "playerTeam":  $("#sixbox").val(),
    }
    playerdata.push(addon)
    localStorage.setItem('playerdata',JSON.stringify(playerdata))
    location.href = "./index.html";
})
var Teamopt=document.getElementById("sixbox")
for(var i=0;i<playerdata.length;i++){
    Teamopt.innerHTML+=`
    <option value="${teamdata[i].teamFullName}">${teamdata[i].teamFullName}</option>
               
    `
}