// var myCarousel = document.querySelector('#myCarousel')
// var carousel = new bootstrap.Carousel(myCarousel, {
//   interval: 2000,
//   wrap: false
// })

detailTeam = JSON.parse(localStorage.getItem("teamdata"));
detailPlayer = JSON.parse(localStorage.getItem("playerdata"));

var auggesarr = [];
for (var i = 0; i < detailTeam.length; i++) {
    auggesarr.push(detailTeam[i].sName)
    console.log(auggesarr)
}
let searching = document.querySelector(".search");
let inputinfo = searching.querySelector("input");
let sugginf = searching.querySelector(".autocom");
let icoclick = searching.querySelector(".icon1");

inputinfo.onkeyup = (e) => {
    if (e.keyCode == 13) {
        icoclick.click()
    }
    let userda = e.target.value;
    let emptyarr = [];
    if (userda) {

        emptyarr = auggesarr.filter((data) => {
            return data.toLocaleLowerCase().startsWith(userda.toLocaleLowerCase());
        });
        emptyarr = emptyarr.map((data) => {
            return data = `<li>${data}</li>`;
        });
        searching.classList.add("active");
        Sugges(emptyarr);
        let alldata = sugginf.querySelectorAll("li");
        for (let i = 0; i < alldata.length; i++) {
            console.log(this);
            alldata[i].setAttribute("onclick", "currentLi(this)");
        }
    } else {
        searching.classList.remove("active");
    }
}
function Sugges(list) {
    let listdata;
    if (!list.length) {
        userValue = inputinfo.value;
        listdata = `<li>${userValue}</li>`;
    } else {
        listdata = list.join('');
    }
    sugginf.innerHTML = listdata;
}
function currentLi(element) {
    let selectData = element.textContent;
    inputinfo.value = selectData;
    icoclick.onclick = () => {

        window.open(`./teamdeatil.html?name=${element.textContent}`, "_self")

    }
    searching.classList.remove("active");
}
var teamcard = document.getElementById("teams-container")
for (var i = 0; i < detailTeam.length; i++) {

    teamcard.innerHTML += `
<div    onclick="makethisinclick('${detailTeam[i].sName}')"    class="teamcard">

<img src="${detailTeam[i].teamIcon}" class="teamlogo" alt=""/> 
<div class="dataodcard">

  <p class="text1"> ${detailTeam[i].teamFullName}   </p>
  <p class="text2"> Won Count : ${detailTeam[i].WonCount} </p>
 
</div>

</div>

`

}

// var clickedCard=detailTeam[1].teamFullName;
// console.log(clickedCard);
function makethisinclick(res) {

    var clickedCard = res;
    window.open(`./teamdeatil.html?name=${clickedCard}`, "_self")


}


var addteam = () => {
    window.open("./addteams.html", "_self")
}
