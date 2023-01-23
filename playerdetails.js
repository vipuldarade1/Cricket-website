let urlinfo = location.href;
let newweb = new URL(urlinfo);
let playerweb = newweb.searchParams.get("name");
teamsdetails = JSON.parse(localStorage.getItem("teamdata"));
playersdetails = JSON.parse(localStorage.getItem("playerdata"));




let playerinfo = document.getElementById("playerdetails-card")
for (var i = 0; i < playersdetails.length; i++) {
    if (playersdetails[i].playerName == playerweb) {
        var playing = ""
        if (playersdetails[i].isPlaying == true) {
            playing = "Playing"
        } else {
            playing = "On Bench"
        }
        playerinfo.innerHTML += `

        <div id="playerdetailimg">
        <img src="${playersdetails[i].playerImg}" alt="playerimg">
    </div>
        <div id="newplayerdetail">
        <table>
        <tr class="tabledetail">
            <td>Player Name:  </td>
            <td>${playersdetails[i].playerName}  </td>
        </tr>
    <table>
        <tr class="tabledetail">
            <td> Team Name: </td>
            <td> ${playersdetails[i].playerTeam}  </td>
        </tr>
    <table>
        <tr class="tabledetail">
            <td> Team Code: </td>
            <td>${playersdetails[i].from}   </td>
        </tr>
    <table>
        <tr class="tabledetail">
            <td> Worth:</td>
            <td>${playersdetails[i].price}  </td>
        </tr>
    <table>
        <tr class="tabledetail">
            <td> Is playing: </td>
            <td> ${playing} </td>
        </tr>
    </table>
    </div>
    
        `
    }
}
