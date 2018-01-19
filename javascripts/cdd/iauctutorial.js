// JavaScript Document
var resource_url = 'https://jjinventorysystem.com/devtest/dlm_lmt/';
var ti;

var targar = [
    ["janusername", "Enter username"],
    ["janpassword", "Enter password"],
    ["jans_country", "Select country"],
    ["listname", "Select list: A, B, C or D<br>Bid lots will be added to the selected list automatically"],
    ["datemanualchange","Set lock on date, if you want the selected date to be remembered. Try now!"]

];

function rechecktut() {
    for (var i = 0; i < targar.length; i++) {

        if (localStorage.getItem(targar[i][0]) == null) {
            showTutorial(targar[i][0], targar[i][1]);

            break;
        }

    }
}



function showTutorial(targ, txt) {
    if ($("#tut" + targ).length == 0) {

        try{


            var tutpop = document.createElement("div");
            tutpop.id = "tut" + targ;
            tutpop.setAttribute("onmouseover","rechecktut()");

            var tg = document.getElementById(targ).getBoundingClientRect(); //referencing the target field from the sidebar
            var im = '<img src="https://media.giphy.com/media/GARFzmYrpPVDi/giphy.gif" style=" transform: scaleX(-1);   width:  30px;    margin-top: -20px;    margin-left:  -8px;    margin-right:  10px;">' + txt;
            tutpop.innerHTML = im;
            tutpop.setAttribute("style", "padding:10px; text-shadow: 1px 1px darkgreen; box-shadow: 0 0 5px 3px black; z-index: 10000000;    height: 80px;    width: 250px;    background-color: #808000eb;    position: fixed; color:white; border-radius:5px; transition: left 1s; top:" + tg.top + "px; left:" + Number(230 + tg.left) + "px;");
            document.getElementById('credo').append(tutpop);
        }
        catch(e){
            setTimeout(function () {
                hideTutorial();
            }, 1000);
        }

    }
    else {
        try{
            var tg = document.getElementById(targ).getBoundingClientRect();
            document.getElementById("tut"+targ).setAttribute("style", "padding:10px; text-shadow: 1px 1px darkgreen; box-shadow: 0 0 5px 3px black; z-index: 10000000;    height: 80px;    width: 250px;    background-color: #808000eb;    position: fixed; color:white; border-radius:5px; transition: left 1s; top:" + tg.top + "px; left:" + Number(230 + tg.left) + "px;");
        }
        catch(e)
        {

        }

    }
}



function hideTutorial() {
    for (var i = 0; i < targar.length; i++) {
        $("#tut" + targar[i][0]).remove();
    }

    setTimeout(function () {
        rechecktut();
    }, 500);

    localStorage.setItem("tutorialseen","true");
}
