let urlinfo = location.href;
let newuinfo = new URL(urlinfo);
let teamfullinfo = newuinfo.searchParams.get("name");
console.log(teamfullinfo);

teamsdetails = JSON.parse(localStorage.getItem("teamdata"));
playsdetails = JSON.parse(localStorage.getItem("playerdata"));
var teamcard = document.getElementById("player-cards")
var tabledetail = document.getElementById("teamd-table")

var cnt = 0;


for (var i = 0; i < playsdetails.length; i++) {
   
    if (teamfullinfo == playsdetails[i].from) {
        var Playing = ""
        if (playsdetails[i].Playing == true) {
            Playing = "Playing"
        }
        else {
            Playing = "On Bench"
        }
        var currentPlyer = playsdetails[i].playerName
        console.log(currentPlyer)
        function clickonthis(response) {
            window.open(`./playerdetails.html?name=${response}`, "_self")
            console.log(response);
        }
        cnt++
        teamcard.innerHTML += `
    <div    onclick="clickonthis('${currentPlyer}')"    class="playercards">
    
    <img src="${playsdetails[i].playerImg}" class="playerimg" alt=""/> 
    <div class="dataodcard">
    
      <p class="text1"> ${playsdetails[i].playerName}   </p>
      <p class="text2"> Worth : ${playsdetails[i].price} </p>
      <p class="text2"> Playing : ${Playing} </p>
      <p class="text2">
       ${playsdetails[i].description} </p>
     
    </div>
    
    </div>
    
    `}
    
}
var topbatsman = ""
for (var j = 0; j < playsdetails.length; j++) {
    if (playsdetails[j].description == "Batsman" && playsdetails[j].from == teamfullinfo) {
        topbatsman = playsdetails[j].playerName

        break
    }
    else {
        topbatsman = "No Player in squad"
    }
}
var topbowler = ""
for (var j = 0; j < playsdetails.length; j++) {
    if (playsdetails[j].description == "Bowler" && playsdetails[j].from == teamfullinfo) {
        topbowler = playsdetails[j].playerName

        break
    }
    else {
        topbowler = "No Player"
    }
}
console.log(cnt)
teamsdetails.map((item) => {
    if (teamfullinfo == item.sName) {


        return tabledetail.innerHTML += `
 <table >
 <tr>
     <td>Team name:</td>
     <td>${item.teamFullName}</td>
 </tr>

 <tr>
     <td>Team icon:</td>
     <td> <img src="${item.teamIcon}" class="team-page-icon" alt=""></td>
 </tr>

 <tr>
     <td>Player count:</td>
     <td>  ${cnt}</td>
 </tr>

 <tr>
     <td>Top Batsman:</td>
     <td>${topbatsman}</td>
 </tr>
 <tr>
     <td>Top Bowler:</td>
     <td>${topbowler}</td>
 </tr>

 <tr>
     <td>Won Count:</td>
     <td>${item.WonCount}</td>
 </tr>
</table>
`    }

})
var addplayer=()=>{
    window.open("./addplayer.html","_self")
}
