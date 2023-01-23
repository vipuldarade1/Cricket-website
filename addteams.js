let teamDetails = JSON.parse(localStorage.getItem("teamdata"));
let playerDetails = JSON.parse(localStorage.getItem("playerdata"));

$("#teamaddf").submit(function (e) {
    e.preventDefault();
    let input1 = $("#onein").val();
    let sNamess = '';
    for (let i = 0; i < input1.length; i++) {
        if (i == 0) {
            sNamess += input1[i++].toUpperCase();
            continue;
        } else if (input1[i] == ' ') {
            sNamess += input1[++i].toUpperCase();
            i++;
        }
    }
    let addinfo = {
        "id": teamDetails.length,
        "teamFullName": $("#onein").val(),
        "sName": sNamess,

        "teamIcon": $("#threin").val(),
        "WonCount": $("#fourin").val(),
    }
    teamDetails.push(addinfo);
    localStorage.setItem("teamdata", JSON.stringify(teamDetails));
    location.href = `./teamdeatil.html?name=${addinfo.sName}`;
})
