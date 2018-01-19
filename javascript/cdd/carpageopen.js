var currenthtml_a;
var latesthtml_a;
var askcount_a = 0;
var rowcount_auto_send = 0;
var list_a;
var listName_a;
var showsas = false;
var showsl = false;
var loadchassis = false;
var priceclick = 0;

var foo = 0;
var foomain = 0;
var myarray = [];
var sd;
var mytimer;
var mytimer2;
var mychoice = false;
var mychoiceS = false;
var chastype;

var mysheet = "MARKET";

var selectedMarket = "";

var imgArray = [];
var currentCar;
var myWindow;

var twoSecondDelay = false;
var SendDataToDB = "";
var SendDataToGSS = "";

var show_chassis_shift = "";
var show_fuel = "";

var hideSeen = "";
var hideList = "";


var priceHint = "";

var jun = "";

var detailRows = [];

var info;
var info2;
var ActiveSheet = "CDL";

var list;
var comIn;
var listName = "C";
var dest = "";
var attempts = 0;
var ID;

var pageUrl;
var arm;
var tto;
var sendOK = false;

var loadinitiated = false;

var year = new Date();



var countyList = [
	["afr", 284],
	["bots", 213],
	["chi", 322],
	["jap", 23],
	["jp", 23],
	["ken", 20],
	["mon", 396],
	["moz", 214],
	["nam", 212],
	["kar", 282],
	["pak", 282],
	["dr", 14],
	["dur", 14],
	["mes", 209],
	["mas", 209],
	["sw", 359],
	["tan", 10],
	["tha", 267],
	["uae", 17],
	["uk", 21],
	["ug", 279],
	["gd", 279],
	["zam", 12]
];



$(window).off().on("beforeunload", function () {
	var sunday = new Date();
	sunday = sunday.getDay();

	var _lsTotal = 0,
		_xLen, _x;

	for (_x in localStorage) {
		_xLen = ((localStorage[_x].length + _x.length) * 2);
		_lsTotal += _xLen;
		//console.log(_x+" = "+ (_xLen/1024).toFixed(2)+" KB", _lsTotal + "_lsTotal size");
		if ((sunday == 0 || sunday == 1) && (_lsTotal / 1024) > 10000) {
			//It is either Sunday or Monday
			if (_x.indexOf("http") >= 0) {
				localStorage.removeItem(_x);
			}
		}

	};
	console.log("Total = " + (_lsTotal / 1024).toFixed(2) + " KB");


});




//console.log("script loaded");


function setCountry() {
	localStorage.setItem("selected_country", $("#jans_country").val());
	
	
	
	var user = document.getElementById("janusername").value;
	var pass = document.getElementById("janpassword").value;

	jun = user;
	
	if (user!="" && pass!="")
		{
			console.log("saving");
	localStorage.setItem("janusername", user);

	localStorage.setItem("janpassword", pass);
		}
	else {
		alert("Please, enter Username and Password also and press REMEMBER ME button");
		$("#janlogin").css("display","block");
	}

	

	//console.log($("#jans_country").val());
}




document.addEventListener('DOMContentLoaded', checklang());

function checklang() {
	//console.log("inject objects");
	scriptj = document.createElement('script');
	scriptj.type = 'text/javascript';
	scriptj.async = true;
	scriptj.setAttribute('onload', 'this.onload=function(){};initiate()');
	scriptj.setAttribute('onreadystatechange', 'if (this.readyState === "complete") this.onload()');
	scriptj.src = 'https://inventivesolutionste.ipage.com/javascripts/cdd/iaucmap.js';
	document.getElementsByTagName('head')[0].appendChild(scriptj);

	setTimeout(function () {
		console.log("DOMContentLoaded");

		//initiate();

		if ($("#toggle_lang").hasClass("jp")) {
			//$("#toggle_lang").click();
		} else {}

	}, 2000);


}







function openNav() {
	document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
	document.getElementById("myNav").style.width = "0%";
}

$(document).unbind("keyup");

$(document).keyup(function (e) {

	//console.log(e.keyCode);
	if (e.keyCode === 27) {
		//console.log("cancelled");
		cancelSend(); // esc
	} else if (e.keyCode === 18) {
		// console.log("Price input fields");
		refreshCode(); // esc
	}

});

function cancelSend() {
	if (document.getElementById("send_status").innerText == "ESC to cancel") {
		sendOK = false;
		document.getElementById("send_status").innerText = "Cancelled";
		setTimeout(function () {
			document.getElementById("auction_to_send").innerHTML = "";
			document.getElementById("lot_to_send").innerHTML = "";
			document.getElementById("send_status").innerText = "";
		}, 1500);
	}

}

function clearCount() {
	localStorage.setItem("carcount", 0);
	$("#carcount")[0].innerText = 0;

}

function localJsonpCallback(json) {
	///alert(json.message);
	//console.log(json.message);
}


function sortbyname() {
	$(".sort_button.list-head-asc.button-on-left.row-2")[0] != undefined ? $(".sort_button.list-head-asc.button-on-left.row-2")[0].click() : console.log("cant sort");
}

function sortbylot() {
	document.querySelectorAll('[data-element="exhibitNum"]')[0] != undefined ? document.querySelectorAll('[data-element="exhibitNum"]')[0].click() : console.log("cant sort");
}

function filterKaijo() {
	$("#site_narrow_button").click();
}


//https://www.iauc.co.jp/detail/?vehicleId=4-633-1&from=vehicle&__tid=25027368754cd2c8024baebb26797e3413148
//https://www.iauc.co.jp/detail/?vehicleId=4-633-1&from=vehicle&__tid=25027368754cd2c8024baebb26797e3413148

function initiate() {
	try {
		if (window.location.href.match(/vehicle\/mylist|vehicle\/carlist/g) != null && $(".mode-button")[0].title == "ç”»åƒè¡¨ç¤ºã«åˆ‡æ›¿" || window.location.href.match(/vehicle\/mylist|vehicle\/carlist/g) != null && $(".mode-button")[0].title == "Thumbnail View") {
			//$("#display_mode_button").length !=0 ? $("#display_mode_button").click() : $(".list_mode_button")[0].click();
		}
	} catch (e) {
		console.log(e.message);
	}


	//console.log("initiated");


	var txt1 = `
<div id="lever" ><span style="color:white;">DLM</span></div>
<div class="credo" id="credo">
<img id="aucview" src="" style="pointer-events:none; position:fixed">
<label style="color:mintcream; margin-top:1px;">Purchase Username</label>
<input id="janusername" type="text" placeholder="Jans Purchase Username" class="jans_username" style="width:100%;" />
<label style="color:mintcream; margin-top:1px;">Purchase Password</label>
<input id="janpassword" type="password" placeholder="Jans Purchase Password" class="jans_password" style="width:100%;" />
<label style="color:mintcream; margin-top:1px;">Purchase Country</label>
<select id="jans_country" class="jans_country" name="jans_country" onchange="setCountry()" style="width:100%;">
<option value="">Select Market</option>
<option value="284">Africa Online</option>
<option value="213">Botswana</option>
<option value="322">Chile</option>
<option value="391">Dominican</option>
<option value="23">Japan Kobe</option>
<option value="20">Kenya</option>
<option value="335">Kenya Online</option>
<option value="396">Mongolia</option>
<option value="214">Mozambique</option>
<option value="212">Namibia</option>
<option value="282">Pakistan</option>
<option value="317">Pakistan Online</option>
<option value="14">South Africa Durban</option>
<option value="209">South Africa Messina</option>
<option value="359">Swazilan</option>
<option value="10">Tanzania</option>
<option value="267">Thailand</option>
<option value="17">UAE Dubai</option>
<option value="21">UK</option>
<option value="279">Uganda</option>
<option value="12">Zambia</option>
</select>

<input type="button" value="Remember Me" id="janlogin" onmousedown="janlogin()" class="janlogin"  />

<label style="color:mintcream;  margin-top:2px;">Auction Date</label>
<input type="text" placeholder="DD/MM/YYYY" class="jans_auction_date" style="width:100%;" />
<input type="button" value="Change list: ` + localStorage.getItem("listname") + `" id="resetMem" class="janlogin" onmouseover="showResetMem()" onmouseleave="notshowResetMem()"/>
<div id="janoptions" onmouseover="showJanOptions()">Options</div>

<span id="success_msg" class="success_msg" ></span>

<span id="repeatingcar_msg" class="repeatingcar_msg"></span>

<table class="sidetable" style="width:100%; background-color: lightslategray;    margin-top: 3px;">

<tbody><tr>
<td style="padding:3px; text-align:center; font-size:medium; color:white;">LOT</td>
<td style="text-align:center; padding:5px; font-size:medium; color:white;">PRICE</td>
</tr>


<tr style="height:40px">
<td id="lot_to_send" style="padding:5px; text-align:center; font-size:x-large; color:white;"></td>
<td id="auction_to_send" style="text-align:center; padding:5px; font-size:x-large; color:white;"></td>
</tr>
<tr>
<td><span id="delayStatus" style="color:skyblue;">Status:</span></td>
<td id="send_status" ></td></tr>
<tr>
<td>
<span id="carcount" style=" color: floralwhite; margin-left: 10px; font-size: large;"></span>
</td>
<td><input type="button" value="Reset Counter" id="clearcount" onmousedown="clearCount()" ></td>
</tr>    
<tr>
<td>
<input type="button" value="Sort by LOT" id="sortbylot" onmousedown="sortbylot()" class="sortbutton">
</td>
<td>
<input type="button" value="Sort A-Z" id="sortbyname" onmousedown="sortbyname()" class="sortbutton">
</td>
</tr>
<tr>
<td>
<input type="button" value="Show re-auc" id="showreauctioned" onmousedown="showreauctioned()" class="sortbutton">
</td>
<td>
<input type="button" value="Auction filter" id="filterKaijo" onmousedown="filterKaijo()" class="sortbutton">
</td>
</tr>
</tbody>
</table>

<div id="delaycar" onmouseleave="hideJanOptions()" style="border-radius: 10px; margin-top:110px; padding:5px; background-color:black; display: none;    margin-left: 230px;    position: fixed;">
<table class="sidetable" style="width:100%;">

<tr style="height:22px">
<td style="padding:5px; text-align:center; font-size:medium; color:white;">Quick</td>
<td style="text-align:center; padding:5px; font-size:medium; color:white;">Settings</td>
</tr>

<tr>
<td>
<label class="optionslabel" ><input id="enableDelay" class="mycheckbox" type="checkbox">2s delay</label>
</td>
<td>

</td>
</tr>

<tr>
<td>
<label class="optionslabel" ><input id="databaseInput" class="mycheckbox" type="checkbox">Input JDB</label>
</td>
<td>
<label class="optionslabel" ><input id="hideSeen" class="mycheckbox" type="checkbox" style="margin-left: 25px; ">Hide Seen</label>
</td>
</tr>

<tr>
<td>
<label  class="optionslabel" ><input id="ssInput" class="mycheckbox" type="checkbox">Input GSS</label>
</td>
<td>
<label  class="optionslabel" ><input id="hideList" class="mycheckbox" type="checkbox" >Hide Listed</label>
</td>
</tr>

<tr>
<td>
<label  class="optionslabel" ><input id="priceHint" class="mycheckbox" type="checkbox">Price Hint</label>
</td>
<td>
<label class="optionslabel" ><input id="forceEn" class="mycheckbox" type="checkbox">English</label>
</td>
</tr>

<tr>
<td>
<label  class="optionslabel" ><input id="show_chassis_shift" class="mycheckbox" type="checkbox">Show Type</label>
</td>
<td>
<label  class="optionslabel" ><input id="show_fuel" class="mycheckbox" type="checkbox">Show Fuel</label>
</td>
</tr>





</table>
</div>
<div id="alltolist">

<input type="button" value="A" title="All to list A" id="alist" class="janlogin" onmousedown="alltomylist(event)" />
<input type="button" value="B" title="All to list  B" id="blist" class="janlogin" onmousedown="alltomylist(event)" />
<input type="button" value="C" title="All to list  C" id="clist" class="janlogin" onmousedown="alltomylist(event)" />
<input type="button" value="D" title="All to list  D" id="dlist" class="janlogin" onmousedown="alltomylist(event)" />

</div>





<input type="button" value="Add Price Fields" title="Add price fields, also use alt key" id="addprices" class="janlogin" onmousedown="refreshCode()" style=" height:50px;" />
<input type="button" value="MORE" title="More menu buttons" id="autosend" class="janlogin" onmouseover="showAutoSendButs()" onmouseleave="notshowAutoSendButs()" />


<div id="autosendbuttons" onmouseleave="hideAutoSendButs()" >

<input type="button" value="Market Price" title="Compare your bid price to sold price. The report will be sent to spreadsheet" id="marketprice" class="janlogin" onmousedown="createReport()" />

<input type="button" value="Auto pick my cars" title="Add cars I ever bid on into my list" id="autopick" class="janlogin" onmousedown="autoPick()"  />


<input type="button" value="All in this list with 0 price" title="Send all cars in the current list to jjpurchase system" id="autosend" class="janlogin" onmousedown="autoSend()"   />
<input type="button" value="All with previous bid price" title="Cars are identified by their chassis code" id="autosend" class="janlogin" onmousedown="autoSendReauctioned()" />
</div>
<div id="resetMemDiv" onmouseleave="hideResetMem()" >

<input type="button" value="A" title="Set your current list to A" id="alist" class="janlogin" onmousedown="setCurrentList(event)" />
<input type="button" value="B" title="Set your current list to B" id="blist" class="janlogin" onmousedown="setCurrentList(event)" />
<input type="button" value="C" title="Set your current list to C" id="clist" class="janlogin" onmousedown="setCurrentList(event)" />
<input type="button" value="D" title="Set your current list to D" id="dlist" class="janlogin" onmousedown="setCurrentList(event)" />

</div>
Note!
<br>
<span id="notepricecolor" style="font-family: sans-serif;    font-size: small;    color: cornsilk;">RED price: lower than start price</span>
<span id="notepricehint" style="font-family: sans-serif;    font-size: small;    color: cornsilk;">Blue price: hint price</span>
<span id="noteprice" style="font-family: sans-serif;    font-size: small;    color: cornsilk;">Black price: sent price</span>


</div>`;






	if (!document.getElementById("myNav"))

	{
		
		var myStyle = document.createElement("link");
	myStyle.rel = "stylesheet";
	myStyle.type = "text/css";
	myStyle.href = "https://inventivesolutionste.ipage.com/javascripts/cdd/iaucnewmain.css";
	document.head.appendChild(myStyle);


		var divel = document.createElement('div');

		divel.id = "myNav";
		divel.setAttribute("class", "overlay");
		divel.innerHTML = '<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>';


		document.body.insertBefore(divel, document.body.firstChild);
		var divel2 = document.createElement('div');


		divel2.setAttribute("class", "overlay-content");
		divel2.innerHTML = '<a href="#" onclick="handleSignInClick()">Sign in</a></br></br> <p id="notice1" style="color:deepskyblue;">You must sign in to your google account to use all features</p> </br>';

		document.getElementById('myNav').appendChild(divel2);


	}

	//<input type="button" value="Submit Data" class="jans_add_purchase" style="background-color: #ff8d00;color:#FFF;margin-top: 10px;" />
	//<input type="button" value="Jan Login" class="jans_login" style="background-color: #ff8d00;color:#FFF;margin-top: 10px;" />

	if (document.getElementsByClassName("mode-button")[0] != undefined) {
		//document.getElementsByClassName("mode-button")[0].setAttribute("onmousedown","refreshCode()");	
	}





	$("#error_view_area").html(txt1);


	var currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
	var dd = currentDate.getDate();
	var mm = currentDate.getMonth() + 1;
	var yyyy = currentDate.getFullYear();
	//console.log(dd + "/" + mm + "/" + yyyy);

	if (dd < 10) {
		dd = '0' + dd
	}

	if (mm < 10) {
		mm = '0' + mm
	}

	today = dd + '/' + mm + '/' + yyyy;

	//console.log(d);
	if (today.length < 3) {

		//var fd = "DD/MM"+"/"+ String(d);
		$(".jans_auction_date").val(today);

	} else {
		//var fd = ed+"/"+ String(d);
		$(".jans_auction_date").val(today);

	}









	//$("#resetAll")[0].setAttribute("onclick","refreshCode()");
	//$("#resetAll")[0].setAttribute("display","hidden");

	if (window.origin == "https://www.iauc.co.jp") {
		//first check cookie
		pageUrl = window.location;

		if (pageUrl.href.indexOf("iauc.co.jp/detail") > 0) {
			for (var i = 0; i < $("a.pager-link").length; i++) {
				try {
					//$("a.pager-link")[i].setAttribute("onmousedown","refreshCode()");
				} catch (e) {

				}

			}
			document.getElementsByClassName("page-back-button")[0].setAttribute("onmousedown", "refreshCode()");
			//individual page
			//console.log("single vehicle details view ");
			if (checkCookie(true) != null) {

				//indInit();
				//console.log("indInit called");

				refreshCode();
				//alert("Price input in this view is not supported");
			} else {
				setDefaults();
				//alert("Price input in this view is not supported");
				askUser();
			}

		} else if (pageUrl.href.match(/vehicle\/mylist|vehicle\/carlist/g).length > 0) {

			//document.getElementsByClassName("mode-button")[0].setAttribute("onmousedown","refreshCode()");
			try{
				document.getElementsByClassName("page-back-button")[0].setAttribute("onmousedown", "refreshCode()");
			}
			catch(e)
				{
					console.log(e.message);
				}
			


			//console.log("list vehicle view");
			if (checkCookie(true) != null) {
				//setDefaults();
				init();
				//console.log("refreshCode called from initiate");
				refreshCode();
			} else {
				setDefaults();
				askUser();
				document.getElementById("resetMem").value = "Selected list: " + list;
			}
		}


	}
	jun = localStorage.getItem("janusername");

	if (jun != undefined || jun != null) {
		document.getElementById("janusername").value = jun;
		document.getElementById("janpassword").value = localStorage.getItem("janpassword");

		switch (jun) {
			case "jpn":
				ActiveSheet = "CDL";
				break;
			case "auran":
				ActiveSheet = "AURAN";
				break;
			case "dom":
				ActiveSheet = "DOMINICAN";
				break;
			case "chile":
				ActiveSheet = "CHILE";
				break;
			case "dur":
				ActiveSheet = "DURBAN";
				break;
			case "kenya_user":
				ActiveSheet = "KENYA";
				break;
			case "namibia_user":
				ActiveSheet = "NAMIBIA";
				break;
			case "tanzania_user":
				ActiveSheet = "TANZANIA";
				break;
			case "thai":
				ActiveSheet = "THAI";
				break;
			case "uganda":
				ActiveSheet = "UGANDA";
				break;
			case "uae_user":
				ActiveSheet = "UAE";
				break;
			case "deen":
				ActiveSheet = "DEEN";
				break;
			case "qasam":
				ActiveSheet = "QASAM";
				break;
			case "nasir":
				ActiveSheet = "NASIR";
				break;
			case "noor":
				ActiveSheet = "NOOR";
				break;
			case "fazal":
				ActiveSheet = "FAZAL";
				break;
			case "tan":
				ActiveSheet = "TANZANIA";
				break;
			case "zambia_user":
				ActiveSheet = "ZAMBIA";
				break;
			case "mong":
				ActiveSheet = "MONGOLIA";
				break;
			case "zimbab_user":
				ActiveSheet = "ZIMBABWE";
				break;
			case "swazi_user":
				ActiveSheet = "SWAZI";
				break;
			case "karonline":
				ActiveSheet = "KARONLINE";
				break;


		}



	} else {

	}
}

function showreauctioned()
{
	loadchassis = true;
	autoSend();
}

function showAutoSendButs()
{
	showsas = true;
	
	var sas = setTimeout(function(){
			if (showsas)
			{
				
	
	$("#autosendbuttons").css({"display": "table-row"});
	
				setTimeout(function(){
		$("#autosendbuttons").css({"opacity": 1});	
		$("#autosendbuttons").css({"width": "210px"});   
					},100);
			}
	},1000);
}

function notshowAutoSendButs()
{
	showsas = false;	
}


function hideAutoSendButs()
{
	showsas = false;
	
	$("#autosendbuttons").css({"opacity": 0});
	$("#autosendbuttons").css({"width": "0px"});
	setTimeout(function(){
		$("#autosendbuttons").css({"display": "none"});
	},500);
}





function showJanOptions() {
	$("#delaycar").css("display", "block");
}

function hideJanOptions() {
	$("#delaycar").css("display", "none");
}


function findMS() {
	var msf = false;
	for (var i = 0; i < $("script").length; i++) {
		if ($("script")[i].src.indexOf("inventivesolutions") > 0) {
			msf = true;
		}
	}
	return msf;

}

//usage:
function deleteCookies() {

	localStorage.removeItem("listname");
	//localStorage.removeItem("comment");

}

function setCookie(cname, cvalue) {

	try {
		localStorage.setItem(cname, cvalue);
	} catch (e) {
		console.log(e.message);
	}


}

function checkCookie(checkonly) {

	var lname = localStorage.getItem("listname");
	//var com = localStorage.getItem("comment");

	if (lname != null) {
		// console.log("Welcome again " + lname);
		return lname;
	} else {

		if (checkonly) {

		} else {
			localStorage.setItem("listname", list);
			//setCookie("autostart", "true");
			//setCookie("comment", dest);
		}

		return null;
	}

}

function getCookie(cname) {
	var name = cname;

	var ca = localStorage.getItem(cname);

	return ca;
}


function askUser() {


	if (attempts == 1) {
		list = prompt("Input list name. \r\nYou can only enter a single letter!", "a,b,c OR d");
	} else if (attempts == 2) {
		list = prompt("Input list name. \r\nThis is the last attempt. A failure will terminate the program", "a,b,c OR d");
	} else {
		list = prompt("Input list name. \r\nThe lots you input price into will also be added to your selected list automatically", "a,b,c OR d");
	}

	if (list != null && list.length == 1) {
		list = list.toUpperCase();
		if (list == "A" || list == "B" || list == "C" || list == "D") {
			listName = list;
			//askUserDestination();
			attempts = 0;
			setTimeout(function () {
				setCookie("listname", list);
			}, 1000);


			document.getElementById("resetMem").value = "Change list: " + list;
			//setCookie("comment", $(".jans_username").val());
			if (pageUrl.href.indexOf("iauc.co.jp/vehicle") > 0 && $(".mode-button")[0].title == "ãƒ†ã‚­ã‚¹ãƒˆè¡¨ç¤ºã«åˆ‡æ›¿" || pageUrl.href.indexOf("iauc.co.jp/vehicle") > 0 && $(".mode-button")[0].title == "Text View") {
				//console.log("init from askUserDestination");

				init();
			} else if (pageUrl.href.indexOf("iauc.co.jp/detail") > 0) {
				//alert("Price input in this view is not supported");
				console.log("indInit from askUserDestination");
				setDefaults();
				indInit();
			} else if (pageUrl.href.match(/vehicle\/mylist|vehicle\/carlist/g).length > 0 && $(".mode-button")[0].title == "ç”»åƒè¡¨ç¤ºã«åˆ‡æ›¿" || pageUrl.href.match(/vehicle\/mylist|vehicle\/carlist/g).length > 0 && $(".mode-button")[0].title == "Thumbnail View") {
				//$("a.mode-button")[0].click();
				//$("#display_mode_button").click();
				removeGapi();
				setDefaults();
				init();
			}


		} else {
			setDefaults();
			askUser();
		}
	} else {
		attempts++;
		document.getElementById("resetMem").value = "Selected list: " + list;

		if (attempts < 3) {
			askUser();
		} else {
			attempts = 0;
			alert("User input failure! \r\nProgram terminated");
		}
	}


}

function alltomylist(event)
{
	//console.log(event.target.value);
	$("input[value="+event.target.value+"]").each(function(){
this.click();
});
	if ($("a[title=æ¬¡ã¸â†’]").length>0)
    {
		$("a[title=æ¬¡ã¸â†’]")[$("a[title=æ¬¡ã¸â†’]").length-1].click();
    }
else {
if ($("a[title=Nextâ†’]").length>0)
    {
		$("a[title=Nextâ†’]")[$("a[title=Nextâ†’]").length-1].click();
    }

}
	
}


function setCurrentList(event){
	console.log(event.target.value);
	$("#resetMemDiv").val(event.target.value);
	localStorage.setItem("listname", event.target.value);
	listName = event.target.value;
	document.getElementById("resetMem").value = "Selected list: " + event.target.value;
}

function showResetMem()
{
	showsl = true;
	
	var sl = setTimeout(function(){
		if (showsl)
			{
				
			
	
	$("#resetMemDiv").css("display","table-row");
	$("#resetMemDiv").css("opacity","0");
	setTimeout(function(){
		$("#resetMemDiv").css("width","210px");
		$("#resetMemDiv").css("opacity","1");
	},100);
			}
		},1000);
		
}
function notshowResetMem()
{
	showsl = false;	
}


function hideResetMem()
{
	showsl = false;
	$("#resetMemDiv").css("opacity","0");
	$("#resetMemDiv").css("width","0px");
	setTimeout(function(){		
		$("#resetMemDiv").css("display","none");
	},100);
}

function resetMem() {
	//console.log("cookies deleted");
	deleteCookies();

	document.getElementById("resetMem").value = "List not selected!";

	setTimeout(function () {
		cyclePrompy();
	}, 500);

	function cyclePrompy() {
		if (attempts == 1) {
			list = prompt("Input list name. \r\nYou can only enter a single letter!", "a,b,c OR d");
		} else if (attempts == 2) {
			list = prompt("Input list name. \r\nThis is the last attempt. A failure will terminate the program", "a,b,c OR d");
		} else {
			list = prompt("Input list name. \r\nThe lots you input price into will also be added to your selected list automatically", "a,b,c OR d");
		}

		if (list != null && list.length == 1) {
			list = list.toUpperCase();
			if (list == "A" || list == "B" || list == "C" || list == "D") {
				listName = list;
				//askUserDestination();
				attempts = 0;
				setTimeout(function () {
					setCookie("listname", list);
				}, 1000);
				document.getElementById("resetMem").value = "Change list: " + list;
				//setCookie("comment", $(".jans_username").val());



			} else {
				askUser();
			}
		} else {
			attempts++;

			if (attempts < 3) {
				askUser();
			} else {
				attempts = 0;
				alert("User input failure! \r\nProgram terminated");
			}
		}
	}




	//document.getElementById("resetMem").innerText = "reset->" + " list='" + getCookie("listname");
}



function refreshCode() {

	if ($("#toggle_lang").hasClass("jp")) {
		//$("#toggle_lang").click();
	}

	setDefaults();
	setEventListeners();

	$(".success_msg").hide();
	//$(".repeatingcar_msg").hide();

	jun = localStorage.getItem("janusername");

	if (jun != undefined || jun != null) {
		document.getElementById("janusername").value = jun;
		document.getElementById("janpassword").value = localStorage.getItem("janpassword");

	}

	//console.log("Local Storage", localStorage.getItem("janusername"), localStorage.getItem("janpassword"));

	var carcnt = localStorage.getItem("carcount");

	if (carcnt != undefined || carcnt != null) {
		$("#carcount")[0].innerText = carcnt;
	} else if (carcnt == "0") {
		$("#carcount")[0].innerText = carcnt;
	} else {
		$("#carcount")[0].innerText = 0;
	}


	//////////////////////////	



	for (var j = $(".rowx").length - 1; j >= 0; j--) {

		//$(".rowp2")[j].remove();
		$(".rowp")[j].remove();
		$(".rowcom")[j].remove();
		if ($(".mydiv")[j] != undefined) {
			$(".mydiv")[j].remove();
		}


	}

	for (var k = $(".rowx").length - 1; k >= 0; k--) {
		$(".rowx")[k].remove();
	}

	if ($("button#signin-button").length > 1) {
		$("#signin-button")[0].remove();
		$("#signout-button")[0].remove();
	}





	pageUrl = window.location;

	if (pageUrl.href.indexOf("iauc.co.jp/detail") > 0) {

		for (var i = 0; i < $("a.pager-link").length; i++) {
			try {
				//$("a.pager-link")[i].setAttribute("onmousedown","refreshCode()");
			} catch (e) {

			}

		}
		//individual page
		//console.log("single vehicle details view ");
		if (checkCookie(true) != null) {
			console.log("indInit from refreshCode");
			removeGapi();

			indInit();

		}

	} else if (pageUrl.href.match(/vehicle\/mylist|vehicle\/carlist/g).length > 0 && $(".mode-button")[0].title == "ãƒ†ã‚­ã‚¹ãƒˆè¡¨ç¤ºã«åˆ‡æ›¿" || pageUrl.href.match(/vehicle\/mylist|vehicle\/carlist/g).length > 0 && $(".mode-button")[0].title == "Text View") {




		//console.log("list vehicle view");
		if (checkCookie(true) != null) {
			//console.log("init from refreshCode");
			removeGapi();
			//$("a.mode-button")[0].click();
			init();

		} else {

		}

	}








	//window.document.getElementsByClassName("header-menus")[0].removeChild(arm);
}

function changeSideBar() {

	//console.log(window.innerHeight, window.innerWidth, "window resize");
	if ($(document).width() < 1800) {
		$("#lever").css("display", "block");
	} else {
		$("#lever").css("display", "none");
	}
	if (window.innerHeight < 740) {
		$("#janoptions").css("display", "block");
		$("#delaycar").css("display", "none");
		$("#delaycar").css("margin-left", "230px");
		$("#delaycar").css("margin-top", "50px");
		$("#delaycar").css("position", "fixed");
		$("#delaycar").attr("onmouseleave", "hideJanOptions()");
	} else {
		$("#janoptions").css("display", "none");
		$("#delaycar").css("display", "block");
		$("#delaycar").css("margin-left", "0px");
		$("#delaycar").css("margin-top", "10px");
		$("#delaycar").css("position", "relative");
		$("#delaycar").attr("onmouseleave", "");
	}
}

function setEventListeners() {
	//window.removeEventListener("resize", changeSideBar);
	window.addEventListener("resize", changeSideBar);


	$("#lever").off().on("mouseover", function () {

		$("#credo").css("margin-left", "5px");
	});
	$("#credo").off().on("mouseleave", function () {
		$("#credo").css("margin-left", "-250px");
	});

	$("#enableDelay").on("click", function () {

		if ($("#enableDelay")[0].checked) {
			twoSecondDelay = true;

		} else {

			twoSecondDelay = false;
		}


	});

	$("#databaseInput").off().on("click", function () {

		if ($("#databaseInput")[0].checked) {
			SendDataToDB = "true";
			localStorage.setItem("SendDataToDB", SendDataToDB);

		} else {

			SendDataToDB = "";
			localStorage.setItem("SendDataToDB", SendDataToDB);
		}

		console.log("setting db input ", SendDataToDB);
	});
	$("#ssInput").off().on("click", function () {

		if ($("#ssInput")[0].checked) {
			SendDataToGSS = "true";
			localStorage.setItem("SendDataToGSS", SendDataToGSS);

		} else {

			SendDataToGSS = "";
			localStorage.setItem("SendDataToGSS", SendDataToGSS);
		}
		console.log("setting gss input ", SendDataToGSS);

	});

	//////////////
	$("#hideSeen").off().on("click", function () {

		if ($("#hideSeen")[0].checked) {
			hideSeen = "true";
			localStorage.setItem("hideSeen", hideSeen);


			$(".list-body-image.visited").parent().parent().parent().hide();



		} else {

			hideSeen = "";
			localStorage.setItem("hideSeen", hideSeen);

			$(".list-body-image.visited").parent().parent().parent().show();



		}

		console.log("setting hideSeen ", hideSeen);
	});

	$("#hideList").off().on("click", function () {

		if ($("#hideList")[0].checked) {
			hideList = "true";
			localStorage.setItem("hideList", hideList);

			for (var i = 0; i < $("input[type=button]").length; i++) {
				if ($("input[type=button]").eq(i).attr("data-mode") == "delete") {
					$("input[type=button]").eq(i).parent().parent().parent().hide();
				}
			}


		} else {

			hideList = "";
			localStorage.setItem("hideList", hideList);
			for (var i = 0; i < $("input[type=button]").length; i++) {
				if ($("input[type=button]").eq(i).attr("data-mode") == "delete") {
					$("input[type=button]").eq(i).parent().parent().parent().show();
				}
			}
		}

		//console.log("setting hideList ", hideList);
	});

	$("#priceHint").off().on("click", function () {

		if ($("#priceHint")[0].checked) {
			priceHint = "true";
			localStorage.setItem("priceHint", priceHint);
			showPriceHints();


		} else {

			priceHint = "";
			localStorage.setItem("priceHint", priceHint);
			refreshCode();
		}

		console.log("setting priceHint ", priceHint);
	});

	$("#show_chassis_shift").off().on("click", function () {

		if ($("#show_chassis_shift")[0].checked) {
			show_chassis_shift = true;
			refreshCode();

		} else {

			show_chassis_shift = "";
		}

		localStorage.setItem("show_chassis_shift", show_chassis_shift);
	});

	$("#show_fuel").off().on("click", function () {

		if ($("#show_fuel")[0].checked) {
			show_fuel = true;

		} else {

			show_fuel = "";
		}

		localStorage.setItem("show_fuel", show_fuel);
	});


}

function markVisited() {
	$(".row_detail_link").each(function () {

		localStorage.setItem(this.href.substr(0, this.href.indexOf("&")) + "visited", "visited");
	});
}

function setDefaults() {
	
	setTimeout(function(){
		
	

	if(localStorage.getItem("lastVehicle")!=null)
		{
			$("#auction_to_send").text(localStorage.getItem("lastVehicle")["price"]);
			$("#lot_to_send").text(localStorage.getItem("lastVehicle")["lot"]);
		}
	
	if ($(window).width() < 1850) {
		$("#lever").css("display", "block");

	}
	if (window.innerHeight > 740) {
		$("#delaycar").css("display", "block");
		$("#delaycar").css("margin-left", "0px");
		$("#delaycar").css("margin-top", "10px");
		$("#delaycar").css("position", "relative");
		$("#delaycar").attr("onmouseleave", "");
	}
	//console.log($(window).width());
	//document.getElementById("databaseInput").checked = SendDataToDB;

	if (localStorage.getItem("show_chassis_shift") == null || localStorage.getItem("show_chassis_shift") == "") {
		localStorage.setItem("show_chassis_shift", show_chassis_shift);
		document.getElementById("show_chassis_shift").checked = show_chassis_shift;

	} else {
		document.getElementById("show_chassis_shift").checked = localStorage.getItem("show_chassis_shift");
		show_chassis_shift = localStorage.getItem("show_chassis_shift");

	}
	if (localStorage.getItem("show_fuel") == null || localStorage.getItem("show_fuel") == "") {
		localStorage.setItem("show_fuel", show_fuel);
		document.getElementById("show_fuel").checked = show_fuel;

	} else {
		document.getElementById("show_fuel").checked = localStorage.getItem("show_fuel");
		show_fuel = localStorage.getItem("show_fuel");

	}

	if (localStorage.getItem("SendDataToDB") == null || localStorage.getItem("SendDataToDB") == "") {
		localStorage.setItem("SendDataToDB", SendDataToDB);
		document.getElementById("databaseInput").checked = SendDataToDB;

	} else {
		document.getElementById("databaseInput").checked = localStorage.getItem("SendDataToDB");
		SendDataToDB = localStorage.getItem("SendDataToDB");

	}

	if (localStorage.getItem("SendDataToGSS") == null || localStorage.getItem("SendDataToGSS") == "") {
		localStorage.setItem("SendDataToGSS", SendDataToGSS);
		document.getElementById("ssInput").checked = SendDataToGSS;

	} else {
		document.getElementById("ssInput").checked = localStorage.getItem("SendDataToGSS");
		SendDataToGSS = localStorage.getItem("SendDataToGSS");

	}

	//$(".pager-link").each(function(){ $(this).attr("onmouseover", "markVisited()"); });
	/*
	$(".pager-link").each(function () {
		$(this).attr("onmouseup", "delayedRefreshCode()");
	});
*/

		document.getElementById("hideSeen").checked = hideSeen;

	if (localStorage.getItem("hideSeen") == null || localStorage.getItem("hideSeen") == "") {
		localStorage.setItem("hideSeen", hideSeen);
		document.getElementById("hideSeen").checked = hideSeen;

		$(".list-body-image.visited").parent().parent().parent().show();
		document.getElementById("hideSeen").checked = hideSeen;

	} else {
		document.getElementById("hideSeen").checked = localStorage.getItem("hideSeen");
		hideSeen = localStorage.getItem("hideSeen");

		$(".list-body-image.visited").parent().parent().parent().hide();
		document.getElementById("hideSeen").checked = hideSeen;


	}





	if (localStorage.getItem("hideList") == null || localStorage.getItem("hideList") == "") {
		localStorage.setItem("hideList", hideList);
		document.getElementById("hideList").checked = hideList;
		//console.log(hideList, "hideList");

		for (var i = 0; i < $("input[type=button]").length; i++) {
			if ($("input[type=button]").eq(i).attr("data-mode") == "delete") {
				$("input[type=button]").eq(i).parent().parent().parent().show();
			}
		}

	} else {
		document.getElementById("hideList").checked = localStorage.getItem("hideList");
		hideList = localStorage.getItem("hideList");
		document.getElementById("hideList").checked = hideList;

		//console.log(hideList, "hideList");

		for (var i = 0; i < $("input[type=button]").length; i++) {
			if ($("input[type=button]").eq(i).attr("data-mode") == "delete") {
				$("input[type=button]").eq(i).parent().parent().parent().hide();
			}
		}



	}
	document.getElementById("priceHint").checked = priceHint;



	if (localStorage.getItem("priceHint") == null || localStorage.getItem("priceHint") == "") {
		localStorage.setItem("priceHint", priceHint);
		document.getElementById("priceHint").checked = priceHint;
	} else {
		priceHint = localStorage.getItem("priceHint");
		document.getElementById("priceHint").checked = priceHint;

		showPriceHints();

	}
		},1000);
}

function delayedRefreshCode() {
	setTimeout(function () {
		refreshCode();
	}, 500);
}

function showPriceHints() {
	setTimeout(function () {

		
		var cph = "";
		var pf = document.getElementsByClassName("rowp");
		var rdb = document.getElementsByClassName("rowp");
		for (var i = 0; i < pf.length; i++) {
			//console.log("PRICE HINT", jun + rdb[i].ctype + rdb[i].year);
			cph = localStorage.getItem(jun + rdb[i].ctype + rdb[i].year);
			if (cph != null) {
				if (cph.length > 0) {
					pf[i].value = cph;
					pf[i].style.color = "cyan";
				}

			}

		}
	}, 500);
}
function autoPick() {
	setTimeout(function () {

		
		var cph = "";
		
		var rdb = document.getElementsByClassName("rowp");
		for (var i = 0; i < rdb.length; i++) {
			//console.log("PRICE HINT", jun + rdb[i].ctype + rdb[i].year);
			cph = localStorage.getItem(jun + rdb[i].ctype + rdb[i].year);
			if (cph != null) {
				if (cph.length > 0) {
					rdb[i].value = cph;
					rdb[i].style.color = "deeppink";
					rdb[i].style["font-weight"] = "bold";
					rdb[i].style["font-size"] = "small";
					
					try {

									$(rdb[i]).parent().parent().parent().parent().eq(0).find("input[value=" + listName.toUpperCase() + "]").eq(0).hasClass("active-" + listName.toLowerCase()) ? console.log("already listed") : $(rdb[i]).parent().parent().parent().parent().eq(0).find("input[value=" + listName.toUpperCase() + "]")[0].click();
								} catch (e) {
									console.log(e.message);
								}
					
					
				}

			}

		}
	}, 500);
}


function removeGapi() {

	document.removeEventListener('DOMContentLoaded', function () {});

	for (var i = 0; i < $("script").length; i++) {
		if ($("script")[i].src.indexOf("inventive") >= 0) {
			$("script")[i].remove();
			//console.log("s rem OK");
		}
		if ($("script")[i].src.indexOf("https://apis.google.com/js/api.js") >= 0) {
			$("script")[i].remove();
			//console.log("google api remove OK");
		}
	}
}
/*
setTimeout(function(){addListeners();},2000);


function addListeners(){
	
	refreshCode();
}
*/

function loadAS(event) {
	//query each car only once
	var clink = event.target.parentElement.parentElement.href;
	event.target.classList.add("visited");

	localStorage.setItem(clink.substr(0, clink.indexOf("&")) + "visited", "visited");

	if (event.target.seen != undefined) {
		//skip loading. Just show what is available
		//seen property is equal to the auction sheet URL
		//console.log(event.target.seen + " existed");

		//document.getElementById("aucview").src = event.target.seen;


	} else {


		clink = clink.substr(0, clink.indexOf("&"));

		imgArray = [];
		//console.log(event.target.parentElement.parentElement.parentElement, "parent of image");
		if (event.target.parentElement.parentElement.parentElement.getElementsByClassName("rowp")[0] != undefined && event.target.parentElement.parentElement.parentElement.getElementsByClassName("rowp")[0].photo != undefined) {

			photo = event.target.parentElement.parentElement.parentElement.getElementsByClassName("rowp")[0].photo;


			if (show_fuel != "") {
				event.target.fuel = findFuelType(photo);
			}





			if (event.target.parentElement.parentElement.getElementsByClassName("mydiv")[0] != undefined && show_fuel != "") {
				if (event.target.parentElement.parentElement.getElementsByClassName("mydiv")[0].getElementsByClassName("myfuel")[0] == undefined) {

					var node = document.createElement("p"); // Create a <p> node
					var asty = document.createAttribute("style");
					asty.value = "font-size: large; margin-top: 25px; font-weight: bold;";
					var asclass = document.createAttribute("class");
					asclass.value = "myfuel";
					node.setAttributeNode(asty);
					node.setAttributeNode(asclass);
					var textnode = document.createTextNode(event.target.fuel); // Create a text node
					node.appendChild(textnode);
					event.target.parentElement.parentElement.getElementsByClassName("mydiv")[0].appendChild(node);
				}

			}


			//console.log(photo.find("h4"));

			for (var i = 0; i < photo.find("img").length; i++) {
				if (photo.find("img")[i].src.length > 60) {

					event.target.seen = photo.find("img")[i].src;
					//console.log(event.target.seen + " newly loaded");				
					//document.getElementById("aucview").src = event.target.seen;								
					break;
				}
			}
		}
	}
}



function findFuelType(p) {
	var bul = "";


	for (var n = 0; n < p.find("h4").length; n++) {

		var resfuel = p.find("h4")[n].innerText;
		if (resfuel.match(/ç‡ƒæ–™|Fuel/g) != null) {

			try {
				bul = p.find("h4")[n].nextSibling.nextSibling != null ? p.find("h4")[n].nextSibling.nextSibling.innerText : p.find("h4")[n].nextSibling.innerText;
			} catch (e) {
				console.log(e.message);
			}

			//console.log(p.find("h4")[n].nextSibling.nextSibling.innerText);
		}

	}

	return bul;
}



function showAS(event) {
	//query each car only once
	if (event.ctrlKey) {
		//console.log("CTRL down");


		if (event.target.seen != undefined) {
			//skip loading. Just show what is available
			//seen property is equal to the auction sheet URL
			//console.log(event.target.seen + " existed");
			// Append the text to <li>

			document.getElementById("aucview").src = event.target.seen;
			//console.log(event.target.parentElement.parentElement);


		} else {

		}

	}
}

function hideAS() {
	try {
		clearTimeout(tto);
		document.getElementById("aucview").src = "";

	} catch (e) {
		console.log(e.message);
	}

}




function init() {
	document.getElementById("aucview").src = "";
	var elements = document.getElementsByClassName('list-body-image');

	for (var i = 0; i < elements.length; i++) {
		elements[i].setAttribute("onmouseover", "loadAS(event)");
		elements[i].setAttribute("onmouseout", "hideAS(event)");
		elements[i].setAttribute("onmousemove", "showAS(event)");

	}

	//console.log(localStorage.getItem("selected_country") + " selected country");
	document.getElementById("jans_country").value = ((localStorage.getItem("selected_country") != null) ? localStorage.getItem("selected_country") : "");
	pageScriptS = window.document.createElement('script');
	pageScriptS.type = 'text/javascript';
	pageScriptS.async = true;
	pageScriptS.setAttribute('defer', '');
	pageScriptS.setAttribute('onload', 'this.onload=function(){};handleClientLoad()');
	pageScriptS.setAttribute('onreadystatechange', 'if (this.readyState === "complete") this.onload()');
	pageScriptS.src = 'https://apis.google.com/js/api.js';
	document.getElementsByTagName('head')[0].appendChild(pageScriptS);


	for (var i = 0; i < $(".pager-link").length; i++) {
		//	$(".pager-link")[i].setAttribute("onmousedown","refreshCode()");
	}

	//document.getElementsByClassName("mode-button")[0].setAttribute("onmousedown","refreshCode()");
	document.getElementsByClassName("page-back-button")[0].setAttribute("onmousedown", "refreshCode()");

	if (document.getElementById("resetMem") == null) {
		arm = window.document.createElement("a");
		arm.id = "resetMem";
		arm.onmousedown = "resetMem()";
		//arm.innerText = "reset->" + " list='" + getCookie("listname");
		arm.setAttribute("style", "cursor:pointer; font-style:bold; font-size:8pt; color:red; margin-left:1%;");
		//window.document.getElementsByClassName("header-menus")[0].appendChild(arm);

		arm1 = window.document.createElement("a");
		arm1.id = "resetAll";
		arm1.innerText = "Add fields";
		arm1.setAttribute("onclick", "refreshCode()");
		arm1.setAttribute("style", "cursor:pointer; font-style:bold; color:red; margin-left:1%; font-size:8pt;");
		//window.document.getElementsByClassName("header-menus")[0].appendChild(arm1);

	}

	//document.getElementById("resetMem").setAttribute("onmousedown","resetMem()");






	//$("#logout")[0].setAttribute("onmousedown","loggedOut()");
	listName = getCookie("listname");
	var lr = $(".list-body-buttons");
	for (var i = 0; i < lr.length; i++) {

		/* Old string
			String($(".list-sitename-exhibit").eq(i).text().trim() +", " + $(".modelyear").eq(i).text() + ", " +  $(".list-carname-grade").eq(i).text().trim() + ", " + $(".list-type-displacement").eq(i).text().trim() + ", " + $(".list-inspection-mileage").eq(i).text().trim() + ", " + $(".list-colorname-colorid").eq(i).text().trim() + ", " + $(".list-shift-air").eq(i).text().trim() + ", " + $(".list-rate-evaluation").eq(i).text().trim() + ", " + $(".list-startprice").eq(i).text().trim() + ", " + $(".list-transaction").eq(i).text().trim());
		
			*/
		info = getAucname($('.list-sitename').eq(i).text().trim()) + ', ' +
			//$('.exhibit').eq(i).text().trim().replace(/\//g, "//") + ', ' + 
			$('.exhibitnum').eq(i).text().trim() + ', ' +


			$('.modelyear').eq(i).text();

		//console.log(info);


		var colss = colormap[$('.list-colorname-colorid').eq(i).find("p").eq(0).text().trim().replace(/[ç³»æ›¿]/g, "")] != undefined ? colormap[$('.list-colorname-colorid').eq(i).find("p").eq(0).text().trim().replace(/[ç³»æ›¿]/g, "")] : $('.list-colorname-colorid').eq(i).find("p").eq(0).text().trim().replace(/[ç³»æ›¿]/g, "");

		var mycarname = translateName($('.carname').eq(i).text().trim());

		var cgrade = $('.grade').eq(i).text().trim();

		cgrade = translateGrade(cgrade);

		info2 = mycarname + ', ' +
			cgrade + ', ' +


			$('.type').eq(i).text().trim() + ', ' +
			$('.displacement').eq(i).text().trim() + ', ' +

			$('.list-inspection-mileage').eq(i).text().trim().replace(/,/g, "") + ', ' +

			colss +
			', ' +
			$('.list-colorname-colorid').eq(i).find("p").eq(1).text().trim() + ', ' +

			$('.list-shift-air').eq(i).find("p").eq(0).text().trim() + ', ' +
			$('.list-shift-air').eq(i).find("p").eq(1).text().trim() + ', ' +


			$('.list-rate-evaluation').eq(i).find("p").eq(0).text().trim() + ', ' +
			$('.list-rate-evaluation').eq(i).find("p").eq(1).text().trim() + ', ' +


			$('.list-startprice').eq(i).find("p").eq(0).text().trim().replace(/,/g, "") + ', ' +
			$('.list-startprice').eq(i).find("p").eq(1).text().trim().replace(/,/g, "") + ', ' + getSchedule(i) + ", " +
			$('.held-num').eq(i).text().trim();







		//$(".list-row").eq(i).append("<div class='rowx'></div>");

		$(".list-body-buttons").eq(i).append("<div class='rowx'></div>");


		$(".rowx").eq(i).append("<div class='detprogbar'></div>");
		//$(".rowx").eq(i).append("<button class='rowb' onclick='clickHandle(event)'>PHOTOS</button>"); 
		$(".rowx").eq(i).append("<input type='button' value='S' class='rowsend' onmouseup='enterPressed(event)' onmousedown='changepricecolor(event)'>");
		$(".rowx").eq(i).append("<input placeholder='price' class='rowp' onkeyUp='changepricecolor(event)' onkeypress='enterPressed(event)' onmouseup='windowFocused(event)'>");
		$(".rowx").eq(i).append("<input placeholder='comment' class='rowcom' onkeyUp='changepricecolor(event)' onkeypress='enterPressed(event)'>");


		//$(".list-body-buttons").eq(i).append("<input placeholder='price' class='rowp' onkeypress='enterPressed(event)' onmousedown='windowFocused(event)'>");
		//$(".list-body-buttons").eq(i).append("<input placeholder='comment' class='rowcom'>");

		//$(".rowx").css({"z-index":"10", "width":"260px", "float":"left"});

		//$(".list-row").css({"height":"300px"});
		//test


		//$('.type').eq(i).text().trim();
		var mytrans = $('.list-shift-air').eq(i).find("p").eq(0).text().trim();
		var chtype = $('p.type').eq(i).text().trim();

		$(".list-carimage").eq(i).append("<div class='mydiv'></div>")

		if (show_chassis_shift != "") {
			$(".list-carimage").eq(i).find(".mydiv").eq(0).append("<p class='mytype' style=' font-size: large; margin-top: 25px; font-weight: bold;'>" + chtype + "</p>");
			$(".list-carimage").eq(i).find(".mydiv").eq(0).append("<p class='mytype' style=' font-size: large; margin-top: 25px; font-weight: bold;'>" + mytrans + "</p>");
		}



		var tlink = $(".rowp").eq(i).parent().parent().parent().parent().find("a")[0].href;
		tlink = tlink.substr(0, tlink.indexOf("&"));
		var tla = localStorage.getItem(tlink);

		if (tla)
			{
				tla = tla.split(",");
				tla[0] = tla[0].split("=");
				tla[1] ? tla[1] = tla[1].split("=") : [];
				tla[0][1] ? $(".rowp").eq(i).val(tla[0][1]) : $(".rowp").eq(i).val(tla[0][0]);
				tla[1] ? $(".rowcom").eq(i).val(tla[1][1]) : $(".rowcom").eq(i).val("");				
				
				
			}
		



		//document.getElementsByClassName("rowp")[3].parentElement.parentElement.parentElement.parentElement.getElementsByClassName("body-image-large")[0].classList.add("visited");
		if (localStorage.getItem(tlink + "visited") != null || localStorage.getItem(tlink + "visited") == "visited") {

			document.getElementsByClassName("rowp")[i].parentElement.parentElement.parentElement.parentElement.getElementsByClassName("list-carimage")[0].getElementsByTagName("img")[0].classList.add("visited");

		} else {
			document.getElementsByClassName("rowp")[i].parentElement.parentElement.parentElement.parentElement.getElementsByClassName("list-carimage")[0].getElementsByTagName("img")[0].classList.add("newcar");
		}



		//
		
		
		
		$(".rowp")[i].info = info;

		$(".rowp")[i].info2 = info2;


		$(".rowp")[i].aucname = getAucname($('.list-sitename').eq(i).text().trim());
		var ddc = $(".list-body-buttons")[i].children[0].getAttribute("data-code") != null ? $(".list-body-buttons")[i].children[0].getAttribute("data-code") : "//" + $(".exhibit")[i].innerText;


		$(".rowp")[i].lotno = ddc.match(/\-/g).length > 1 ? ddc.substr(ddc.indexOf("-") + 1).replace(/\-/g, "//") : ddc;
		$(".rowp")[i].ctype = chtype;
		$(".rowp")[i].clickcount = 0;

		$(".rowp")[i].info = info;
		$(".rowp")[i].info2 = info2;
		$(".rowp")[i].aucname = getAucname($('.list-sitename').eq(i).text().trim());
		var ddc = $(".list-body-buttons")[i].children[0].getAttribute("data-code") != null ? $(".list-body-buttons")[i].children[0].getAttribute("data-code") : "//" + $(".exhibit")[i].innerText;
		$(".rowp")[i].lotno = ddc.match(/\-/g).length > 1 ? ddc.substr(ddc.indexOf("-") + 1).replace(/\-/g, "//") : ddc;
		$(".rowp")[i].ctype = chtype;

		var myyear = $('p.modelyear').eq(i).text().indexOf("å¹´")>=0 ? Number($('p.modelyear').eq(i).text().substr(0, $('p.modelyear').eq(i).text().indexOf("å¹´")))+1988 : $('p.modelyear').eq(i).text();

		var grade = $('.grade').eq(i).text().trim();
		//grade = translateGrade(grade);

		$(".rowp")[i].year = myyear;
		$(".rowp")[i].carname = mycarname;
		$(".rowp")[i].cgrade = cgrade;
		$(".rowp")[i].disp = $('.displacement').eq(i).text().trim();
		$(".rowp")[i].inspect = $('p.inspection').eq(i).text().trim().replace(/\s+/g, " ").replace(/ /g, ", ").trim();
		var mil = $('.mileage').eq(i).text().indexOf("$") >= 0 || $('.mileage').eq(i).text().indexOf("#") >= 0 || $('.mileage').eq(i).text().indexOf("*") >= 0 ? $('.mileage').eq(i).text().replace(/[km:$]/g, "").replace(/,/g, "") + "km$" : $('.mileage').eq(i).text().replace(/[km:$]/g, "").replace(/,/g, "") + "km";



		$(".rowp")[i].mileage = mil.replace(/åƒ/g, "000");
		$(".rowp")[i].ccolor = colss;
		$(".rowp")[i].colorno = $('.list-colorname-colorid').eq(i).find("p").eq(1).text().trim();
		$(".rowp")[i].shift = mytrans;
		$(".rowp")[i].air = $('.list-shift-air').eq(i).find("p").eq(1).text().trim();


		$(".rowp")[i].rate = $('.list-rate-evaluation').eq(i).find("p").eq(0).text().trim();
		$(".rowp")[i].ext = $('.list-rate-evaluation').eq(i).find("p").eq(1).text().trim().substr(0, 1);
		$(".rowp")[i].inter = $('.list-rate-evaluation').eq(i).find("p").eq(1).text().trim().substr(2);



		var sp = $('p.startprice').eq(i).text().trim();

		sp = sp.indexOf(",") > 0 ? sp.substr(0, sp.lastIndexOf(",")).replace(/,/g, "") : sp.substr(0, sp.lastIndexOf("."));


		$(".rowp")[i].startprice = sp;
		//$(".rowp")[i].starttime2 = getAucTime(i);
		$(".rowp")[i].sched = getScheduledb(i);
		
		try{
		var aday = $(".rowp").eq(i).parent().parent().parent().parent().find("div").eq(19).find(".enddate")[0].innerText.replace(/[æœˆæ—¥]/g, "/");
		var curdate = new Date(aday);
		if (aday!="" && curdate!="Invalid Date")
			{
				//console.log(aday, curdate);
				var dd = curdate.getDate();
				var mm = curdate.getMonth()+1;
				var curyear = new Date();
				var yyyy = curyear.getFullYear();
				$(".rowp")[i].enddate = dd+"/"+mm+"/"+yyyy;
			}

		else {
			$(".rowp")[i].enddate = $(".jans_auction_date").eq(0).val();
		}
		}
		catch(e)
			{
				//console.log(e.message);
				$(".rowp")[i].enddate = $(".jans_auction_date").eq(0).val();
			}

		//localStorage.setItem($(".rowp")[i].parent().parent().parent().parent().find("a")[0].href);
		//+ "auctionhouse", $('.list-sitename').eq(i).text().trim());


		//$(".rowp2").eq(i).val(infodb2);
		//$(".rowcom").eq(i)[0].value = getCookie("comment");
	}



	//$(".rowp2").css({"z-index":"10", "width":"260px", "float":"left", "display":"none"});
	
	$(".rowp").css({
		"z-index": "10",
		"width": "15%",
		"height": "26px",
		"font-family": "sans-serif",
		"font-size": "small",
		"font-weight": "bold",
		"border": "solid 1px #707070",
		"box-shadow": "0 0 5px 1px #969696",
		"text-align": "center",
		"background-color": "honeydew"
	});
	
	$("input.rowsend").css(
	{
    "background-color": "lightgray",
    "margin-right": "2px",
	"margin-left": "1%",
	"height": "26px"
	});
	

	$(".rowcom").css({
		"width": "25%",
		"height": "26px",
		"font-family": "sans-serif",
		"font-size": "small",
		"font-weight": "bold",
		"margin-left": "1%",
		"border": "solid 1px #707070",
		"box-shadow": "0 0 5px 1px #969696",
		"text-align": "center",
		"background-color": "palegoldenrod"
	});
	$(".list-body-buttons").css({
		"width": "inherit"
	});
	$(".list-body-image").css({
		"float": "left"
	});
	$(".list-body-button").css({
		"width": "10%"
	});


	for (var t = 0; t < $(".rowp").length; t++) {
		$(".rowp")[t].tabIndex = t + 1000;

	}



}


function getAucname(a) {
	var an = a;
	for (var k in aucmapObj) {
		//aucmapObj[k];
		if (a.indexOf(k) >= 0) {
			a = aucmapObj[k];
		}

	}
	return a;

}

function injectSayuri() {
	var chascode = $("#detail-name")[0].innerText.trim().replace(/\s/g, " ");
	chascode = chascode.substr(chascode.lastIndexOf(" ") + 1);
	var cha = chascode.substr(0, chascode.indexOf("-"));
	var chanu = chascode.substr(chascode.indexOf("-") + 1);
	//console.log(cha, chanu);

	document.styleSheets[0].insertRule("h1{background-color:olive; ", 1);




	var divel2 = document.createElement('div');
	divel2.id = "man-year-find-home";
	divel2.setAttribute("class", "cs-box");
	divel2.width = 620;
	divel2.height = 460;
	document.getElementsByClassName('rowx')[0].appendChild(divel2);

	var divel3 = document.createElement('div');
	divel3.id = "chassiformholder";
	document.getElementById('man-year-find-home').appendChild(divel3);
	var form1 = document.createElement('form');
	form1.setAttribute("action", "https://www.sayuri.co.jp/en/api/check_chassis_no");
	form1.setAttribute("onsubmit", "checkChassisNumber(this,event)");
	form1.setAttribute("method", "post");
	form1.id = "postform";
	form1.setAttribute("accept-charset", "utf-8");
	document.getElementById('chassiformholder').appendChild(form1);
	var small = document.createElement('small');
	small.innerText = "Enter chassis Code and Number seperately.";
	form1.appendChild(small);
	var tbl = document.createElement('table');
	tbl.id = "saytab";
	form1.appendChild(tbl);
	var tb = document.createElement('tbody');
	tb.id = "tbb";
	document.getElementById('saytab').appendChild(tb);
	var tr = document.createElement('tr');
	tr.id = "saytr";
	document.getElementById('tbb').appendChild(tr);
	var tdata1 = document.createElement('td');
	tdata1.setAttribute("id", "tdata1");
	document.getElementById('saytr').appendChild(tdata1);
	var tdata2 = document.createElement('td');

	tdata2.setAttribute("id", "tdata2");
	document.getElementById('saytr').appendChild(tdata2);
	var tdata3 = document.createElement('td');
	tdata3.setAttribute("id", "tdata3");
	document.getElementById('saytr').appendChild(tdata3);
	var td1 = document.createElement('input');
	td1.setAttribute("type", "text");
	td1.setAttribute("name", "chassis_code");
	td1.setAttribute("style", "width:60px");
	td1.setAttribute("placeholder", "Code");
	td1.setAttribute("class", "large-input");
	td1.setAttribute("value", cha);
	document.getElementById('tdata1').appendChild(td1);
	var td2 = document.createElement('input');
	td2.setAttribute("type", "text");
	td2.setAttribute("name", "chassis_no");
	td2.setAttribute("style", "width:90px");
	td2.setAttribute("placeholder", "Number");
	td2.setAttribute("class", "large-input");
	td2.setAttribute("value", chanu);
	document.getElementById('tdata2').appendChild(td2);
	var td3 = document.createElement('input');
	td3.setAttribute("type", "submit");
	td3.setAttribute("id", "chassisnochecksubmit");
	td3.setAttribute("class", "button");
	td3.setAttribute("value", "Find");
	document.getElementById('tdata3').appendChild(td3);

	var sayscript = document.createElement("script");
	sayscript.type = "text/javascript";
	sayscript.innerHTML = "function checkChassisNumber(frm, e) {	e.preventDefault();	$.post($(frm).attr('action'), $(frm).serialize(),function(data){$('#chassiformholder').html(data);});}";
	$(".rowx")[0].appendChild(sayscript);

	var lot = document.createElement('h3');

	lot.innerText = chascode;
	lot.id = "lot";
	lot.hidden = true;

	document.getElementsByTagName('body')[0].appendChild(lot);
	document.getElementsByClassName("large-input")[0].style["width"] = "110px";
	document.getElementsByClassName("large-input")[1].style["width"] = "110px";
}

//individual page inject
function indInit() {
if ($("#toggle_lang").hasClass("jp")) {
			$("#toggle_lang").click();
		} 



	$(document).unbind("keyup");
	$(document).keyup(function (e) {

		if (e.keyCode == 39) {
			if (event.target != document.getElementsByClassName("large-input")[0]) {

				//console.log(e.keyCode, "Right", event.target, $("input[name='chassis_code']").eq(0) );
				$("a#btn-next").click();
								
				delayedRefreshCode();
			}

		} else if (e.keyCode == 37) {
			if (event.target != document.getElementsByClassName("large-input")[0]) {
				//console.log(e.keyCode, "Left");
				$("a#btn-prev").click();
				delayedRefreshCode();
			}
		}

	});

	if ($("#toggle_lang").hasClass("jp")) {
		//$("#toggle_lang").click();
	}
	document.getElementById("jans_country").value = ((localStorage.getItem("selected_country") != null) ? localStorage.getItem("selected_country") : "");

	listName = getCookie("listname");
	listName = listName.toLowerCase();

	pageScriptS = window.document.createElement('script');
	pageScriptS.type = 'text/javascript';
	pageScriptS.async = true;
	pageScriptS.setAttribute('defer', '');
	pageScriptS.setAttribute('onload', 'this.onload=function(){};handleClientLoad()');
	pageScriptS.setAttribute('onreadystatechange', 'if (this.readyState === "complete") this.onload()');
	pageScriptS.src = 'https://apis.google.com/js/api.js';
	document.getElementsByTagName('head')[0].appendChild(pageScriptS);
	for (var i = 0; i < $("a.pager-link").length; i++) {
		try {
			//	$("a.pager-link")[i].setAttribute("onmousedown","refreshCode()");
		} catch (e) {

		}

	}

	//document.getElementsByClassName("mode-button")[0].setAttribute("onmousedown","refreshCode()");
	document.getElementsByClassName("page-back-button")[0].setAttribute("onmousedown", "refreshCode()");
	if (document.getElementById("resetMem") == null) {
		arm = window.document.createElement("a");
		arm.id = "resetMem";
		arm.onmousedown = "resetMem()";
		arm.innerText = "reset" + " l='" + getCookie("listname");
		//window.document.getElementsByClassName("header-menus")[0].appendChild(arm);

		arm1 = window.document.createElement("a");
		arm1.id = "resetAll";
		arm1.innerText = "Add fields";
		arm1.setAttribute("onclick", "refreshCode()");
		arm1.setAttribute("style", "cursor:pointer; font-style:bold; font-size:8pt; color:red; margin-left:1%;");
		//window.document.getElementsByClassName("header-menus")[0].appendChild(arm1);

	}
	//document.getElementById("resetMem").setAttribute("onmousedown","resetMem()");
	//document.getElementById("resetMem").setAttribute("style","cursor:pointer; font-style:bold; font-size:8pt; color:red; margin-left:1%;");

	//$("#logout")[0].setAttribute("onmousedown","loggedOut()");
	listName = getCookie("listname");


	$("#detail-info").append("<div class='rowx'></div>");

	$(".rowx").eq(0).append("<input placeholder='price' class='rowp' onkeypress='enterPressedInd(event)'>");
	$(".rowx").eq(0).append("<input placeholder='comment' class='rowcom' onkeypress='enterPressedInd(event)'>");

	$(".rowx").css({
		"z-index": "10",
		"width": "100%",
		"float": "left"
	});

	$(".rowp").css({
		"z-index": "10",
		"width": "50px",
		"float": "right",
		"height": "30px",
		"font-family": "sans-serif",
		"font-size": "18px",
		"margin-top": "5px",
		"margin-right": "5%",
		"border": "solid 1px #707070",
		"box-shadow": "0 0 5px 1px #969696"
	});
	$(".rowcom").css({
		"width": "150px",
		"height": "30px",
		"float": "right",
		"font-family": "sans-serif",
		"font-size": "18px",
		"margin-top": "5px",
		"margin-right": "10%"
	});
	$("h1").css({
		"background-color": "black"
	});

	var inf = getIndPageContent();

	//test
	
	

	//console.log("ind init");
	//

	$(".rowp")[0].info = inf[0];
	$(".rowp")[0].info2 = inf[1];
	//$(".rowcom").eq(0)[0].value = getCookie("comment");

	if ($("div#mynotification").length == 0) {
		$("a#btn-next").eq(1).append('<div id="mynotification" style="display: block;">Press right arrow on your keyboard</div>');

		$("a#btn-next").eq(1).mouseover(function () {
			$("div#mynotification").css({
				"display": "block"
			});
		});
		$("a#btn-next").eq(1).mouseleave(function () {
			$("div#mynotification").css({
				"display": "none"
			});
		});

		$("div#mynotification").css({
			"background-color": "skyblue",
			"border-radius": "10px",
			"text-align": "center",
			"display": "none",
			"position": "absolute",
			"margin-left": "100px",
			"width": "150px",
			"padding": "6px",
			"font-size": "small",
			"z-index": "10"
		});
	}
	if ($("div#mynotificationleft").length == 0) {
		$("a#btn-prev").eq(1).append('<div id="mynotificationleft" style="display: block;">Press left arrow on your keyboard</div>');

		$("a#btn-prev").eq(1).mouseover(function () {
			$("div#mynotificationleft").css({
				"display": "block"
			});
		});
		$("a#btn-prev").eq(1).mouseleave(function () {
			$("div#mynotificationleft").css({
				"display": "none"
			});
		});

		$("div#mynotificationleft").css({
			"background-color": "skyblue",
			"border-radius": "10px",
			"text-align": "center",
			"display": "none",
			"position": "absolute",
			"margin-left": "100px",
			"width": "150px",
			"padding": "6px",
			"font-size": "small",
			"z-index": "10"
		});
	}


	if ($("#toggle_lang").hasClass("jp")) {




	} else {

		$(".rowp")[0].aucname = getAucname($("h4").filter(":contains('Auction House')").parent().children("p")[0].innerText.match(/^\D+[[]/g) != null ? $("h4").filter(":contains('Auction House')").parent().children("p")[0].innerText.match(/^\D+[[]/g)[0].replace(/[\s[]/g, "") : $("h4").filter(":contains('Auction House')").parent().children("p")[0].innerText);

		$(".rowp")[0].lotno = $("h4").filter(":contains('Number of')").parent().children("p")[0].innerText.trim() + "//" + $("h4").filter(":contains('Lot')").parent().children("p")[0].innerText.trim();

		var cd = $("#detail-name");
		var cdc = cd.find("p")[cd.find("p").length - 1].innerText.replace(/\s+/g, " ");
		cdc = cdc.substring(cdc.lastIndexOf(" ") + 1, cdc.indexOf("-"));

		$(".rowp")[0].ctype = cdc;
		$(".rowp")[0].year = $("h4").filter(":contains('Year')").parent().children("p")[0].innerText;

		var cd2 = $("#detail-name");
		var l = cd2.find("p").length;
		if (l == 3) {
			var cdc2 = cd2.find("p")[1].innerText.replace(/\s+/g, " ");
			cdc2 = cdc2.substring(0, cdc2.lastIndexOf(" "));
			//console.log(cdc2);
		} else {
			var cdc2 = cd2.find("p")[1].innerText.replace(/\s+/g, " ");
			cdc2 = cdc2.substring(0, cdc2.lastIndexOf(" "));
			//console.log(cdc2);
		}

		$(".rowp")[0].carname = cdc2;

		//console.log($(".rowp")[0].carname, ", " , $(".rowp")[0].ctype);
		var grade = $("h4").filter(":contains('Grade')").parent().children("p")[0] != undefined ? $("h4").filter(":contains('Grade')").parent().children("p")[0].innerText.trim() : "";

		grade = translateGrade(grade);

		var incol = $("h4").filter(":contains('Color')").parent().children("p")[0].innerText.trim();
		var myair = $("h4").filter(":contains('A/C')").parent().children("p")[0] ? $("h4").filter(":contains('A/C')").parent().children("p")[0].innerText.trim() : "";

		$(".rowp")[0].cgrade = grade;
		$(".rowp")[0].disp = $("h4").filter(":contains('cc')").parent().children("p")[0].innerText.trim().replace(/,/g, "");
		$(".rowp")[0].inspect = "";
		$(".rowp")[0].mileage = $("h4").filter(":contains('Odo')").parent().children("p")[0].innerText.trim().replace(/,/g, "").indexOf("$") >= 0 || $("h4").filter(":contains('Odo')").parent().children("p")[0].innerText.trim().replace(/,/g, "").indexOf("#") >= 0 || $("h4").filter(":contains('Odo')").parent().children("p")[0].innerText.trim().replace(/,/g, "").indexOf("*") >= 0 ? $("h4").filter(":contains('Odo')").parent().children("p")[0].innerText.trim().replace(/,/g, "").replace(/[km:$]/g, "").replace(/,/g, "") + "km$" : $("h4").filter(":contains('Odo')").parent().children("p")[0].innerText.trim().replace(/,/g, "").replace(/[km:$]/g, "").replace(/,/g, "") + "km";




		$(".rowp")[0].ccolor = colormap[incol] != undefined ? colormap[incol] : incol;

		$(".rowp")[0].colorno = "";

		$(".rowp")[0].shift = $("h4").filter(":contains('Transmission')").parent().children("p")[0].innerText.trim();
		$(".rowp")[0].air = myair;

		$(".rowp")[0].rate = $("h4").filter(":contains('Condition')").parent().children("p")[0].innerText.trim();
		$(".rowp")[0].ext = "";
		$(".rowp")[0].inter = "";

		var acday = $("h4").filter(":contains('Starting')").parent().children("p")[0].innerText.trim().replace(/[å¹´æœˆ]/g, "/").replace(/æ™‚/g, ":").replace(/åˆ†/g, "").replace(/æ—¥/g, "");
		acday = acday.substr(0, acday.indexOf(" "));

				$(".rowp")[0].starttime = $(".jans_auction_date").eq(0).val();
		
				$(".rowp")[0].enddate = $(".jans_auction_date").eq(0).val();
				$(".rowp")[0].starttime2 = $(".jans_auction_date").eq(0).val();
		

		var asday = acday;

		

		var acprice = $("h4").filter(":contains('Price')").parent().children("p")[0].innerText.trim();

		$(".rowp")[0].startprice = acprice;

		$(".rowp")[0].sched = getScheduledb(i);
	}

	setTimeout(function () {
		$(".rowp").eq(0).focus();
		if (!document.getElementById("man-year-find-home")) {
		injectSayuri();
	} else {

		var chascode = $("#detail-name")[0].innerText.trim().replace(/\s/g, " ");
		chascode = chascode.substr(chascode.lastIndexOf(" "));
		var cha = chascode.substr(0, chascode.indexOf("-"));
		var chanu = chascode.substr(chascode.indexOf("-") + 1);
		//console.log(cha, chanu);
		document.getElementsByClassName("large-input")[0].value = cha;
		document.getElementsByClassName("large-input")[1].value = chanu;
	}

	}, 100);

	

}

function translateGrade(g) {
	g = convertKanaF2H(g);

	for (var i = 0; i < gradearray.length; i++) {
		while (g.indexOf(gradearray[i][0]) >= 0) {

			var rg = RegExp(gradearray[i][0]);

			g = g.replace(rg, " " + gradearray[i][1] + " ");



		}

	}
	//console.log(g);	
	return g.replace(/\s+/g, " ");
}

function translateName(g) {
	g = convertKanaF2H(g);

	for (var i = 0; i < carnames.length; i++) {
		while (g.indexOf(carnames[i][0]) >= 0) {

			var rg = RegExp(carnames[i][0]);

			g = g.replace(rg, " " + carnames[i][1] + " ");



		}

	}
	//console.log(g);	
	return g.replace(/\s+/g, " ");
}

function getIndPageContent() {
	var tval1 = ""; //info preceeding price & comment
	var tval2 = ""; //info following price & comment

	if ($("#toggle_lang").hasClass("jp")) {


	} else {
		
		var cyear = $("h4").filter(":contains('Year')").parent().children("p")[0].innerText;

		tval1 = getAucname($("h4").filter(":contains('Auction House')").parent().children("p")[0].innerText.match(/^\D+[[]/g) != null ? $("h4").filter(":contains('Auction House')").parent().children("p")[0].innerText.match(/^\D+[[]/g)[0].replace(/[\s[]/g, "") : $("h4").filter(":contains('Auction House')").parent().children("p")[0].innerText) + ', ' +
			$("h4").filter(":contains('Lot')").parent().children("p")[0].innerText.trim() + ', ' +
			cyear;

		//console.log(tval1);

		var cd = $("#detail-name");



chastype = cd.find("p")[cd.find("p").length - 1].innerText.replace(/\s+/g, " ");
chastype = chastype.substring(chastype.lastIndexOf(" ")).trim();
var cdc = chastype;		
			var priceLink = "https://www.iauc.co.jp" + $("#btn-print").attr("data-iauc").replace(/pdf/g, "");
	
	if (localStorage.getItem(chastype)!=null)
		{
			var d = localStorage.getItem(chastype);
			
			try{
			d = d.split(",");			
			d[0] = d[0].split("=");
			d[1] = d[1].split("=");
			
			
			
			$(".rowp").eq(0).val(d[0][1]);
			$(".rowcom").eq(0).val(d[1][1]);	
			$(".rowx").eq(0).css("background-color", "brown");
			}
			
			catch(e)
				{
					console.log("error in history price IND page", e);
				}
			
		//historyPrice();
			
		}
	else
		{
			
			$(".rowp").eq(0).val(localStorage.getItem(priceLink.substr(0, priceLink.indexOf("&"))));
			
			var ty = chastype.substr(0, chastype.indexOf("-"));
			console.log("hint price", jun+ty+cyear);
			if (localStorage.getItem(jun+ty+cyear)!=null && priceHint)
				{
					$(".rowp").eq(0).val(localStorage.getItem(jun+ty+cyear));
				}
		}

		
		
		
		chastype = chastype.substring(chastype.lastIndexOf(" ") + 1, chastype.indexOf("-"));

		var incol = $("h4").filter(":contains('Color')").parent().children("p")[0].innerText.trim();

		var l = cd.find("p").length;
		if (l == 3) {
			var cdc2 = cd.find("p")[1].innerText.replace(/\s+/g, " ");
			cdc2 = cdc2.substring(0, cdc2.lastIndexOf(" "));
			//console.log(cdc2);
		} else {
			var cdc2 = cd.find("p")[1].innerText.replace(/\s+/g, " ");
			cdc2 = cdc2.substring(0, cdc2.lastIndexOf(" "));
			//console.log(cdc2);
		}

		var ccolor = colormap[incol] != undefined ? colormap[incol] : incol;
		var mytime = $("h4").filter(":contains('Starting')").parent().children("p")[0].innerText.trim().replace(/\s+/g, " ").replace(/[å¹´æœˆ]/g, "/").replace(/æ™‚/g, ":").replace(/æ—¥/g, "").replace(/åˆ†/g, "").replace(/\s+/g, ", ");
		mytime = mytime.substr(0, mytime.indexOf(","));
		var myac = $("h4").filter(":contains('A/C')").parent().children("p")[0] != undefined ? $("h4").filter(":contains('A/C')").parent().children("p")[0].innerText.trim() : "";
		var mycc = $("h4").filter(":contains('cc')").parent().children("p")[0] != undefined ? $("h4").filter(":contains('cc')").parent().children("p")[0].innerText.trim().replace(/,/g, "") : "";
		var grade = $("h4").filter(":contains('Grade')").parent().children("p")[0] != undefined ? $("h4").filter(":contains('Grade')").parent().children("p")[0].innerText.trim() : "";
		grade = translateGrade(grade);

		tval2 = cdc +
			', ' +
			cdc2 + ', ' +
			grade + ', ' +
			chastype + ', ' +
			mycc + ', ' +
			getMileage() +
			ccolor + ', , ' +

			$("h4").filter(":contains('Transmission')").parent().children("p")[0].innerText.trim() + ', ' +
			myac + ', ' +


			$("h4").filter(":contains('Condition')").parent().children("p")[0].innerText.trim() + ', , ' +

			$("h4").filter(":contains('Inspection')").parent().children("p")[0].innerText.trim() + ', ' +

			$("h4").filter(":contains('Start Price')").parent().children("p")[0].innerText.trim().replace(/,/g, "") + ', ' +

			mytime + ", " +

			$("h4").filter(":contains('Number of')").parent().children("p")[0].innerText.trim();



		//////////////////////

	






	}






	return [tval1, tval2];
}

function historyPrice()
{
	setTimeout(function(){
			console.log("history price");
			$(".repeatingcar_msg").show();
			$("#repeatingcar_msg")[0].innerText = "Bid price exists";
		setTimeout(function(){
		
			$(".repeatingcar_msg").hide();
			
		
	},3000);
			
	},1000);
	
	
}


function getMileage() {
	var m = "";

	if ($("h4").filter(":contains('Odo')").parent().children("p")[0].innerText.trim().replace(/,/g, "").indexOf("$") >= 0 || $("h4").filter(":contains('Odo')").parent().children("p")[0].innerText.trim().replace(/,/g, "").indexOf("#") >= 0 || $("h4").filter(":contains('Odo')").parent().children("p")[0].innerText.trim().replace(/,/g, "").indexOf("*") >= 0) {
		m = $("h4").filter(":contains('Odo')").parent().children("p")[0].innerText.trim().replace(/,/g, "").replace(/[km:$#*]/g, "").replace(/,/g, "") + "km$, ";
	} else {
		m = $("h4").filter(":contains('Odo')").parent().children("p")[0].innerText.trim().replace(/,/g, "").replace(/[km:]/g, "").replace(/,/g, "") + "km, ";
	}
	return m;
}

function getAucTime(i) {
	var hours = "";

	if ($(".list-column.list-transaction.lower.col-lg-12.col-md-14.col-sm-2.col-xs-2").eq(i).find("p")[0] != undefined) {
		hours = "";
	} else {
		hours = $("h4").filter(":contains('Starting Day')").parent().children("p")[0].innerText;
		hours = hours.replace(/[å¹´æœˆæ™‚]+/g, "/");
		hours = hours.replace(/[æ—¥\s]+/g, ",");
		hours = hours.replace(/[åˆ†]/g, "");
		hours = hours.substr(0, hours.indexOf(","));

	}
	return hours;
}


function getScheduledb(i) {
	if ($(".list-column.list-transaction.lower.col-lg-12.col-md-14.col-sm-2.col-xs-2").eq(i).find("p")[0] != undefined) {
		var day = $(".list-column.list-transaction.lower.col-lg-12.col-md-14.col-sm-2.col-xs-2").eq(i).find("p")[0].innerText;
		if (day.match(/[a-z A-Z]+/g) != null) {
			if (day.indexOf("Cancel") >= 0) {
				day = $(".jans_auction_date").val();
			} else {
				day = day;
				day = day.replace(/[æœˆ]+/g, "");
				//console.log(day);			
				day = day.replace(/[æœˆæ—¥]+/g, "/");
				year = new Date();
				year = year.getFullYear();
				day = day + year;
			}
		} else {
			day = day.substr(day.indexOf("æœˆ"), day.indexOf("æ—¥")) + day.substr(0, day.indexOf("æœˆ")) + "/";
			day = day.replace(/[æœˆ]+/g, "");
			//console.log(day);			
			day = day.replace(/[æœˆæ—¥]+/g, "/");
			year = new Date();
			year = year.getFullYear();
			day = day + year;
		}
	} else {
		var day = $("h4").filter(":contains('Starting Day')").parent().children("p")[0].innerText;

		//var datearray = [];
		day = day.replace(/[å¹´æœˆæ™‚]+/g, "-");
		day = day.replace(/[æ—¥\s]+/g, ",");
		day = day.replace(/[åˆ†]/g, "");

		day = day.substr(0, day.indexOf(","));

		var dar = day.split("-");
		//console.log(day, dar);
		dar = dar.reverse();

		day = dar.join("/");

	}
	return "";
}

//getScheduledb(0);

function getSchedule(i) {

	if ($(".list-column.list-transaction.lower.col-lg-12.col-md-14.col-sm-2.col-xs-2").eq(i).find("p")[0] != undefined) {
		var day = $(".list-column.list-transaction.lower.col-lg-12.col-md-14.col-sm-2.col-xs-2").eq(i).find("p")[0].innerText;
		if (day.match(/[a-z A-Z]+/g) != null) {
			if (day.indexOf("Cancel") >= 0) {
				day = $(".jans_auction_date").val();
			} else {
				day = day;
				day = day.replace(/[æœˆ]+/g, "");
				//console.log(day);			
				day = day.replace(/[æœˆæ—¥]+/g, "/");
				year = new Date();
				year = year.getFullYear();
				day = day + year;
			}

		} else {
			day = day.substr(day.indexOf("æœˆ"), day.indexOf("æ—¥")) + day.substr(0, day.indexOf("æœˆ")) + "/";
			day = day.replace(/[æœˆ]+/g, "");
			//console.log(day);			
			day = day.replace(/[æœˆæ—¥]+/g, "/");
			year = new Date();
			year = year.getFullYear();
			day = day + year;
		}



	} else {
		var day = $("h4").filter(":contains('Starting Day')").parent().children("p")[0].innerText;
		//console.log(day);
		day = day.replace(/[å¹´æœˆæ™‚]+/g, "/").replace(/æ—¥\s+/g, ",").replace(/[åˆ†]/g, "");

		day = day.substr(0, day.indexOf(","));
		var dar = day.split("/");
		dar = dar.reverse();
		day = dar.join("/");
	}









	return day;

}

function injectSideBar() {
	$("body").prepend("<div id='sbar'></div>");
	$("#sbar")[0].setAttribute("style", "background-color: blue; width: 250px; height:2000px; float:right");
	$("#sbar")[0].setAttribute("style", "background-color: #A4BA00; margin-left:-15%; width: 15%; height:2000px; position:fixed; float:left");

	$("#no-bread").append("<p id='tempRow'>Hello</p>");
	$("#no-bread").append("<p id='tempRowButton'>Do not send</p>");

	//$("#no-bread")[0].setAttribute("style", "background-color: #A4BA00; height:25px; max-width:auto");	
	$("#no-bread")[0].setAttribute("style", "background-color: #A4BA00; height:25px; min-width:768; width:1366px; margin-right:200px");

	$("#tempRow")[0].innerText = "car info here";
	$("#tempRow")[0].setAttribute("style", "height:25px; float:left");
	$("#tempRowButton")[0].setAttribute("style", "height:25px; float:right; margin-right:20%; color:red");

	$("#wrapper")[0].setAttribute("style", "margin-right:2%;");
	$("nav")[0].setAttribute("style", "margin-right:2%;");
}


function checklocaldata(ld) {
	var ldr = localStorage.getItem(ld);


	if (ldr != null) {
		return ldr;
	} else {
		return "";
	}

}

function checkMarket(sc) {
	var rval = 0;
	for (var i = 0; i < countyList.length; i++) {
		if (sc.indexOf(countyList[i][0]) >= 0) {
			rval = countyList[i][1];
		}
	}
	return rval;
}

function enterPressed(event) {
	var x = event.keyCode;

	//console.log(x);
	if (x == 13) {
		event.target.parentElement.getElementsByClassName("rowp")[0].cgrade = translateGrade(event.target.parentElement.getElementsByClassName("rowp")[0].cgrade);
		if ($("#jans_country").val() != "") {



			var selcon = event.target.parentElement.getElementsByClassName("rowcom")[0].value.trim();
			selcon = checkMarket(selcon);

			if (selcon > 0) {
				document.getElementById("jans_country").value = selcon;
			}


			var newrl = event.target.parentElement.parentElement.parentElement.parentElement.getElementsByTagName("a")[0].href;

			/*if (myWindow!=undefined || myWindow!=null)
						{
						*/
			//console.log("window load COMPLETE!!!");


			imgArray = [];
			var cardetails = event.target.parentElement.getElementsByClassName("rowp")[0].photo;
			if (cardetails !== undefined) {







				//injectImages();
				var threeImages = [];
				for (var i = 0; i < cardetails.find("img").length; i++) {
					if (cardetails.find("img")[i].src.length > 60) {
						//console.log(photo.find("img")[i].src + " image source");
						if (threeImages.length < 3) {
							threeImages.push(cardetails.find("img")[i].src);
						}

					}
				}
				//console.log("Photos available " + threeImages);

				var clink = event.target.parentElement.parentElement.parentElement.parentElement.getElementsByTagName("a")[0].href;
				localStorage.setItem(clink.substr(0, clink.indexOf("&")) + "visited", "visited");
				
				localStorage.setItem(clink.substr(0, clink.indexOf("&")) + "sent", "sent");

				//event.target.parentElement.parentElement.parentElement.getElementsByClassName("body-image-large")[0].classList.add("visited");



				var chassis;

				chassis = cardetails.find("#detail-name")[0].innerText.trim().replace(/\s/g, " ");
				chassis = chassis.substr(chassis.lastIndexOf(" ")).trim();
				var ssd = [];
				ssd.push(event.target.parentElement.getElementsByClassName("rowp")[0].info.split(", "));

				var p = event.target.parentElement.getElementsByClassName("rowp")[0].value!="" ? event.target.parentElement.getElementsByClassName("rowp")[0].value : "0";
				p = p.replace(/,/g, " ");
				var c = document.getElementsByClassName("jans_username")[0].value;
				c = c.replace(/,/g, " ");


				localStorage.setItem(jun + event.target.parentElement.getElementsByClassName("rowp")[0].ctype + event.target.parentElement.getElementsByClassName("rowp")[0].year, p);
				
				var cb = event.target.parentElement.getElementsByClassName("rowcom")[0].value.trim();
				
				localStorage.setItem(chassis, "bid="+p+",remark="+cb);
				

				//var name = $(".list-row").eq(0).find("a")[0].href;
				//.parent().parent().find("a")[0].href;
				//.parentElement.parentElement.getElementsByTagName("a")[0].href;
				localStorage.setItem(event.target.parentElement.parentElement.parentElement.parentElement.getElementsByTagName("a")[0].href.substr(0, event.target.parentElement.parentElement.parentElement.parentElement.getElementsByTagName("a")[0].href.indexOf("&")), "bid="+p+",remark="+cb);
				
				
				
				
				//console.log(event.target.parentElement.getElementsByClassName("rowcom")[0]);
				cb = cb.replace(/,/g, " ");




				ssd[0] = ssd[0].concat(p);
				ssd[0] = ssd[0].concat(cb);
				ssd[0] = ssd[0].concat(c);
				ssd[0] = ssd[0].concat(chassis.trim());
				ssd[0] = ssd[0].concat(event.target.parentElement.getElementsByClassName("rowp")[0].info2.split(", "));
				ssd[0] = ssd[0].concat('=image("' + threeImages[0] + '", 1)');
				ssd[0] = ssd[0].concat('=image("' + threeImages[1] + '", 1)');
				ssd[0] = ssd[0].concat('=image("' + threeImages[2] + '", 1)');





				var ssdb = [];
				ssdb.push(event.target.parentElement.getElementsByClassName("rowp")[0]);


				var pb = event.target.parentElement.getElementsByClassName("rowp")[0].value.trim();
				pb = pb.replace(/,/g, " ");


				sendOK = true;
				/*
					document.getElementById("lot_to_send").innerText = event.target.parentElement.getElementsByClassName("rowp")[0].lotno.substr(event.target.parentElement.getElementsByClassName("rowp")[0].lotno.indexOf("//") + 2);
					document.getElementById("auction_to_send").innerText = pb;
					document.getElementById("send_status").innerText = "ESC to cancel";
					*/

				var cbl = cb.toLowerCase();

				if (cbl.indexOf("ask") >= 0) {
					setTimeout(function () {
						var svc = ssd[0].concat(cbl);
						svc = svc.concat('=image("' + threeImages[0] + '", 1)');
						svc = svc.concat('=image("' + threeImages[1] + '", 1)');
						svc = svc.concat('=image("' + threeImages[2] + '", 1)');



						console.log("Send it to supervisor");
						makeApiCalltoSupervisor(svc);

					}, 3000);


				}


				if (twoSecondDelay) {


					setTimeout(function () {

						if (sendOK) {

							if (SendDataToDB == "true") {
								sendtoDatabase(event.target, event.target.parentElement.getElementsByClassName("rowp")[0], pb, cb, chassis.trim(), newrl, threeImages);
								/*
								document.getElementById("auction_to_send").innerHTML = "";
								document.getElementById("lot_to_send").innerHTML = "";
								document.getElementById("send_status").innerText = "request";
								*/



							} else if (SendDataToDB != "true" && SendDataToGSS != "true") {
								alert("Unable to send data. You must choose Input JDB or Input GSS. Check your choice and try again!");
							}



							if (SendDataToGSS == "true") {


								makeApiCall(ssd[0]);
								/*
								document.getElementById("auction_to_send").innerHTML = "";
								document.getElementById("lot_to_send").innerHTML = "";
								document.getElementById("send_status").innerText = "request";
								*/
							}


						}

					}, 2000);
				} else {
					if (sendOK) {
						//console.log("ignoring");
						if (SendDataToDB == "true") {
							sendtoDatabase(event.target, event.target.parentElement.getElementsByClassName("rowp")[0], pb, cb, chassis, newrl, threeImages);
							/*
							document.getElementById("auction_to_send").innerHTML = "";
							document.getElementById("lot_to_send").innerHTML = "";
							document.getElementById("send_status").innerText = "request";
							*/



						} else if (SendDataToDB != "true" && SendDataToGSS != "true") {
							alert("Unable to send data. You must choose Input JDB or Input GSS. Check your choice and try again!");
						}

						if (SendDataToGSS == "true") {
							makeApiCall(ssd[0]);

							if (SendDataToDB != "true") {
								try {

									$(event.target).parent().parent().parent().parent().eq(0).find("input[value=" + listName.toUpperCase() + "]").eq(0).hasClass("active-" + listName.toLowerCase()) ? console.log("already listed") : $(event.target).parent().parent().parent().parent().eq(0).find("input[value=" + listName.toUpperCase() + "]")[0].click();
								} catch (e) {
									try {
										$("button[id=mylist-" + listName.toLowerCase() + "]").eq(1).hasClass("checked") ? console.log("already listed") : $("button[id=mylist-" + listName.toLowerCase() + "]")[1].click();
									} catch (e) {
										$("button[id=mylist-" + listName.toLowerCase() + "]").eq(0).hasClass("checked") ? console.log("already listed") : $("button[id=mylist-" + listName.toLowerCase() + "]")[0].click();
									}

								}




							}
							/*
							document.getElementById("auction_to_send").innerHTML = "";
							document.getElementById("lot_to_send").innerHTML = "";
							document.getElementById("send_status").innerText = "request";
							*/
						}
					}
				}





				//findNext(event.target.tabIndex);




			}



			//here may have to implement delay
			else {



				var chassis;

				//chassis = getChassis(cardetails);
				chassis = "";
				var ssd = [];
				ssd.push(event.target.parentElement.getElementsByClassName("rowp")[0].info.split(", "));

				var p = event.target.parentElement.getElementsByClassName("rowp")[0].value;
				p = p.replace(/,/g, " ");
				var c = document.getElementsByClassName("jans_username")[0].value;
				c = c.replace(/,/g, " ");


				localStorage.setItem(jun + event.target.parentElement.getElementsByClassName("rowp")[0].ctype + event.target.parentElement.getElementsByClassName("rowp")[0].year, p);

				//var name = $(".list-row").eq(0).find("a")[0].href;
				//.parent().parent().find("a")[0].href;
				//.parentElement.parentElement.getElementsByTagName("a")[0].href;
				
				
				localStorage.setItem(event.target.parentElement.parentElement.parentElement.parentElement.getElementsByTagName("a")[0].href.substr(0, event.target.parentElement.parentElement.parentElement.parentElement.getElementsByTagName("a")[0].href.indexOf("&")), "bid="+p+",remark="+cb);
				var cb = event.target.parentElement.getElementsByClassName("rowcom")[0].value.trim();
				//console.log(event.target.parentElement.getElementsByClassName("rowcom")[0]);
				cb = cb.replace(/,/g, " ");



				ssd[0] = ssd[0].concat(p);
				ssd[0] = ssd[0].concat(cb);
				ssd[0] = ssd[0].concat(c);
				ssd[0] = ssd[0].concat("");
				ssd[0] = ssd[0].concat(event.target.parentElement.getElementsByClassName("rowp")[0].info2.split(", "));

				//ssd[0] = ssd[0].concat(event.target.parentElement.getElementsByClassName("rowcom")[0].value);



				var ssdb = [];
				ssdb.push(event.target.parentElement.getElementsByClassName("rowp")[0]);


				var pb = event.target.parentElement.getElementsByClassName("rowp")[0].value.trim();
				pb = pb.replace(/,/g, " ");


				sendOK = true;



				var cbl = cb.toLowerCase();
				threeImages = ["", "", ""];
				if (cbl.indexOf("ask") >= 0) {

					setTimeout(function () {
						var svc = ssd[0].concat(cbl);
						svc = svc.concat('=image("' + threeImages[0] + '", 1)');
						svc = svc.concat('=image("' + threeImages[1] + '", 1)');
						svc = svc.concat('=image("' + threeImages[2] + '", 1)');



						console.log("Send it to supervisor");
						makeApiCalltoSupervisor(svc);

					}, 3000);


				}


				if (twoSecondDelay) {
					console.log("2 second delay");

					setTimeout(function () {

						if (sendOK) {

							if (SendDataToDB == "true") {
								sendtoDatabase(event.target, event.target.parentElement.getElementsByClassName("rowp")[0], pb, cb, "", newrl, threeImages);
								document.getElementById("auction_to_send").innerHTML = "";
								document.getElementById("lot_to_send").innerHTML = "";
								document.getElementById("send_status").innerText = "request";



							} else if (SendDataToDB != "true" && SendDataToGSS != "true") {
								alert("Unable to send data. You must choose Input JDB or Input GSS. Check your choice and try again!");
							}



							if (SendDataToGSS == "true") {
								makeApiCall(ssd[0]);
								document.getElementById("auction_to_send").innerHTML = "";
								document.getElementById("lot_to_send").innerHTML = "";
								document.getElementById("send_status").innerText = "request";
							}


						}

					}, 2000);
				} else {
					if (sendOK) {
						threeImages = ["", "", ""];
						//console.log("ignoring");
						if (SendDataToDB == "true") {
							sendtoDatabase(event.target, event.target.parentElement.getElementsByClassName("rowp")[0], pb, cb, "", newrl, threeImages);
							document.getElementById("auction_to_send").innerHTML = "";
							document.getElementById("lot_to_send").innerHTML = "";
							document.getElementById("send_status").innerText = "request";



						} else if (SendDataToDB != "true" && SendDataToGSS != "true") {
							alert("Unable to send data. You must choose Input JDB or Input GSS. Check your choice and try again!");
						}

						if (SendDataToGSS == "true") {
							makeApiCall(ssd[0]);

							if (SendDataToDB != "true") {
								try {

									$(event.target).parent().parent().parent().parent().eq(0).find("input[value=" + listName.toUpperCase() + "]").eq(0).hasClass("active-" + listName.toLowerCase()) ? console.log("already listed") : $(event.target).parent().parent().parent().parent().eq(0).find("input[value=" + listName.toUpperCase() + "]")[0].click();
								} catch (e) {
									try {
										$("button[id=mylist-" + listName.toLowerCase() + "]").eq(1).hasClass("checked") ? console.log("already listed") : $("button[id=mylist-" + listName.toLowerCase() + "]")[1].click();
									} catch (e) {
										$("button[id=mylist-" + listName.toLowerCase() + "]").eq(0).hasClass("checked") ? console.log("already listed") : $("button[id=mylist-" + listName.toLowerCase() + "]")[0].click();
									}

								}
							}

							document.getElementById("auction_to_send").innerHTML = "";
							document.getElementById("lot_to_send").innerHTML = "";
							document.getElementById("send_status").innerText = "request";
						}
					}
				}

			}


		} else {
			alert("Please, select a country");
		}





		//writeToSS();
	} else if (x < 58 && x > 45) {
		//numbers are entered		
		//console.log("a number");
		//event.target.value = event.target.value + ", ";

	} else {
		//event.target.value = event.target.value.trim();
		event.target.parentElement.getElementsByClassName("rowcom")[0].focus();
	}

}


function autoSend() {
rowcount_auto_send = 0;
		if (confirm("Start automatic send?") == true) {
			mychoiceS = true;
			startLMS();
		} else {
			mychoiceS = false;
			
		}
}


	
function printRowS(i) {

	var dl = $(".row_detail_link")[i].href.substr(0, $(".row_detail_link")[i].href.indexOf("&"));
	var et = $(".rowp")[i];
	var c_details = $(".rowp")[i].photo;	
	var newrl = allRows.eq(i).find("a")[0].href;
	
		
	if (mychoiceS) {
		
		if (c_details==undefined)
			{
				
			
		$.get(newrl, function (data) {
				photo = $(data);
			})
			.done(function () {
			et.parentElement.getElementsByClassName("rowp")[0].photo = photo;
			et.parentElement.getElementsByClassName("detprogbar")[0].style["background-color"] = "limegreen";
			if (loadchassis)
				{
					var chasnphoto = getChassisandPhotos(photo);
					if (localStorage.getItem(chasnphoto[0])!=null)
						{
							var d = localStorage.getItem(chasnphoto[0]);

							try{
							d = d.split(",");			
							d[0] = d[0].split("=");
							d[1] = d[1].split("=");
							console.log(d[0][1], d[1][1], ":history price and comment");

							$(et).val(d[0][1]);
							$(et).parent().find(".rowcom").eq(0).val(d[1][1]);
							et.parentElement.getElementsByClassName("rowp")[0].style["background-color"] = "darkslategray";
							et.parentElement.getElementsByClassName("rowcom")[0].style["background-color"] = "darkslategray";
							et.parentElement.getElementsByClassName("rowp")[0].style["color"] = "aliceblue";
							et.parentElement.getElementsByClassName("rowcom")[0].style["color"] = "aliceblue";
							}
							catch(e)
								{
									console.log("error in history price ", e);
								}
							console.log(chasnphoto[0], "repeating car");
							
							
							
							
							
						}
					
				}
			else 
				{
					sendnow();
				}
			
			
			});
		}
		else {
			photo = c_details;
			if (loadchassis)
				{
					var chasnphoto = getChassisandPhotos(photo);
					if (localStorage.getItem(chasnphoto[0])!=null)
						{
							var d = localStorage.getItem(chasnphoto[0]);

							try{
							d = d.split(",");			
							d[0] = d[0].split("=");
							d[1] = d[1].split("=");
							console.log(d[0][1], d[1][1], ":history price and comment");

							$(et).val(d[0][1]);
							$(et).parent().find(".rowcom").eq(0).val(d[1][1]);
							$(et).parent().css("background-color", "brown");
							}
							catch(e)
								{
									console.log("error in history price ", e);
								}

							//console.log(cc, "repeating car");
							
							
							
							
							
						}
					
				}
			else 
				{
					sendnow();
				}
		}
	}
	
	function sendnow()
			{				
			et.parentElement.getElementsByClassName("detprogbar")[0].style["background-color"] = "limegreen";
			var chasnphoto = getChassisandPhotos(photo);
			 
			var threeImage = [];
				for (var i = 0; i < photo.find("img").length; i++) {
					if (photo.find("img")[i].src.length > 60) {
						//console.log(photo.find("img")[i].src + " image source");
						if (threeImage.length < 3) {
							threeImage.push(photo.find("img")[i].src);
						}

					}
				}
			
			
			//SEND TO DATABASE
			
			var threeImages = chasnphoto[1];
			var code = chasnphoto[0];
				//chassis = getChassis(cardetails);
			
			//console.log(code, threeImages);
			
				
				var p = et.parentElement.getElementsByClassName("rowp")[0].value;
				p = p.replace(/,/g, " ");
				var c = document.getElementsByClassName("jans_username")[0].value;
				c = c.replace(/,/g, " ");

				var cb = "";
/*
				var ssd = [];
				ssd.push(et.parentElement.getElementsByClassName("rowp")[0].info.split(", "));

				ssd[0] = ssd[0].concat(p);
				ssd[0] = ssd[0].concat(cb);
				ssd[0] = ssd[0].concat(c);
				ssd[0] = ssd[0].concat(code);
				ssd[0] = ssd[0].concat(et.parentElement.getElementsByClassName("rowp")[0].info2.split(", "));
				ssd[0] = ssd[0].concat(threeImages.split(","));
*/
				var ssdb = [];
				ssdb.push(et.parentElement.getElementsByClassName("rowp")[0]);


				var pb = et.parentElement.getElementsByClassName("rowp")[0].value.trim();
			
			if (pb=="")
				{
					pb = "0";
				}
			
				pb = pb.replace(/,/g, " ");

				sendOK = true;

				var cbl = cb.toLowerCase();
				
				
				if (sendOK) {
						
						//console.log("ignoring");
						if (SendDataToDB == "true") {
							sendtoDatabase(et, et.parentElement.getElementsByClassName("rowp")[0], pb, cb, code, newrl, threeImage);
							document.getElementById("auction_to_send").innerHTML = "";
							document.getElementById("lot_to_send").innerHTML = "";
							document.getElementById("send_status").innerText = "request";

						} else if (SendDataToDB != "true" && SendDataToGSS != "true") {
							alert("Unable to send data. You must choose Input JDB or Input GSS. Check your choice and try again!");
						}

						if (SendDataToGSS == "true") {
							
							console.log("sending to GSS from this option is disabled. Use other tools");
						}
					}
			if (rowcount_auto_send < clickable.length-1) {
				startLMS();
			}
				else{
					
				}
			}
}

function getChassisandPhotos(p) {
	var chassis;
	chassis = p.find("#detail-name")[0].innerText.trim();
	chassis = chassis.substr(chassis.lastIndexOf(" ")).trim().replace(/\s/g, "_");
	chassis = chassis.substr(chassis.lastIndexOf("_") + 1);

	var pics = "";
	imgArray = [];
	for (var i = 0; i < p.find("img").length; i++) {
		if (p.find("img")[i].src.length > 60) {
			//console.log(p.find("img")[i].src + " image source");
			pics = pics + ',=image("' + p.find("img")[i].src + '")';
		}
	}

	imgArray.push(chassis);
	imgArray.push(pics);

	return imgArray;
}






function startLMS() {
	
	
	clickable = $(".startprice");
	allRows = $(".list-row");
	

	recGetInfo();

	function recGetInfo() {
		if (rowcount_auto_send < clickable.length) {
			mod = $(".type").eq(rowcount_auto_send).text();
			printRowS(rowcount_auto_send);
			rowcount_auto_send++;
			if (mychoiceS) {
				sd = setTimeout(function () {
					recGetInfo();
				}, 1000);
			} else {
				recGetInfo();
			}

		} else {

			//console.log(foo.length, foo[0], foo[1], foo[2]);
			
			mychoiceS = false;
			loadchassis = false;
			clearTimeout(mytimer);
			clearTimeout(mytimer2);
			clearTimeout(sd);
			//appendSpreadsheet();
		}



	}
}

	
	
						
					
					
		
		



function changepricecolor(event) {

	var pt = event.target.parentElement.getElementsByClassName("rowp")[0].photo;
	var irl = event.target.parentElement.parentElement.parentElement.parentElement.getElementsByTagName("img")[0].src;

	var newrl = event.target.parentElement.parentElement.parentElement.parentElement.getElementsByTagName("a")[0].href; //main link to fetch more data

	if (pt == undefined || pt == null) {
		event.target.parentElement.getElementsByClassName("detprogbar")[0].style["background-color"] = "orange";


		//console.log("PHOTO " + pt);
		loadIt(event.target);
	}
	event.target.parentElement.getElementsByClassName("rowp")[0].value = event.target.parentElement.getElementsByClassName("rowp")[0].value.trim();

	var sprice = event.target.parentElement.getElementsByClassName("rowp")[0].startprice;

	//console.log("price check ", event.target.value, sprice);

	if ($("#toggle_lang").hasClass("jp")) {

		if (Number(event.target.value) < Number(sprice)) {
			//console.log("price check ", event.target.value, sprice);
			event.target.style["color"] = "red";
			document.getElementById("notepricecolor").style.color = "red";


		} else {
			event.target.style["color"] = "black";
			document.getElementById("notepricecolor").style.color = "white";
		}

	} else {
		if ((Number(event.target.value) * 10) < Number(sprice)) {
			//console.log("price check ", event.target.value, sprice);
			event.target.style["color"] = "red";
			document.getElementById("notepricecolor").style.color = "red";
		} else {
			event.target.style["color"] = "black";
			document.getElementById("notepricecolor").style.color = "white";
		}

	}





}
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

function enterPressedInd(event) {
	var x = event.which;

	//console.log(x);

	if (x == 13) {

		var selcon = document.getElementsByClassName("rowcom")[0].value.trim();
		selcon = checkMarket(selcon);

		if (selcon > 0) {
			document.getElementById("jans_country").value = selcon;
		}


		//console.log("The event target is: " + event.target.tabIndex);
		var chascode = getChassisInd();
		
		//console.log(event.target.parentElement.getElementsByClassName("rowp")[0].value + ","+   chascode.trim() + ","+ event.target.value);
		var ssd = [];
		ssd.push(document.getElementsByClassName("rowp")[0].info.split(", "));

		var p = document.getElementsByClassName("rowp")[0].value.trim();
		p = p.replace(/,/g, " ");
		var u = document.getElementsByClassName("jans_username")[0].value;
		u = u.replace(/,/g, " ");
		var c = document.getElementsByClassName("rowcom")[0].value.trim();
		c = c.replace(/,/g, " ");

		var threeImages = [];
		var photos = document.getElementsByTagName("img");
		for (var i = 0; i < photos.length; i++) {
			if (photos[i].src.indexOf("jpg") >= 0 || photos[i].src.indexOf("JPG") >= 0 || photos[i].src.indexOf("png") >= 0 || photos[i].src.indexOf("PNG") >= 0) {
				//console.log(photo[i].src + " image source");
				if (photos[i].width > 100) {
					if (threeImages.length < 3) {
						threeImages.push(photos[i].src);
					}

				}


			}
		}


		ssd[0] = ssd[0].concat(p);
		ssd[0] = ssd[0].concat(c);
		ssd[0] = ssd[0].concat(u);

		ssd[0] = ssd[0].concat(document.getElementsByClassName("rowp")[0].info2.split(", "));
		ssd[0] = ssd[0].concat('=IMAGE("' + threeImages[0] + '", 4,80,80)');
		ssd[0] = ssd[0].concat('=IMAGE("' + threeImages[1] + '", 4,80,80)');
		ssd[0] = ssd[0].concat('=IMAGE("' + threeImages[2] + '", 4,80,80)');

		//ssd[0] = ssd[0].concat(event.target.parentElement.getElementsByClassName("rowcom")[0].value);

		//console.log(ssd[0]);

		sendOK = true;

		document.getElementById("lot_to_send").innerText = document.getElementsByClassName("rowp")[0].lotno.substr(document.getElementsByClassName("rowp")[0].lotno.indexOf("//") + 2);
		document.getElementById("auction_to_send").innerText = p;
		document.getElementById("send_status").innerText = "Sending soon";

		var priceLink = "https://www.iauc.co.jp" + $("#btn-print").attr("data-iauc").replace(/pdf/g, "");

		priceLink = priceLink.substr(0, priceLink.indexOf("&"));

		localStorage.setItem(priceLink, "bid="+p+",remark="+c);
		
		chascode = chascode.trim();
		localStorage.setItem(chascode, "bid="+p+",remark="+c);

		if (twoSecondDelay) {

			setTimeout(function () {

				if (sendOK) {
					if (SendDataToDB == "true") {
						sendtoDatabase(event.target, document.getElementsByClassName("rowp")[0], p, c, chascode.trim(), priceLink, threeImages);



						document.getElementById("auction_to_send").innerHTML = "";
						document.getElementById("lot_to_send").innerHTML = "";
						document.getElementById("send_status").innerText = "request";
					} else if (SendDataToDB != "true" && SendDataToGSS != "true") {
						alert("Unable to send data. You must choose Input JDB or Input GSS. Check your choice and try again!");
					}

					if (SendDataToGSS == "true") {
						makeApiCall(ssd[0]);

						if (SendDataToDB != "true") {

						}


						document.getElementById("auction_to_send").innerHTML = "";
						document.getElementById("lot_to_send").innerHTML = "";
						document.getElementById("send_status").innerText = "request";
					}
				}

			}, 1500);
		} else {


			////

			////

			if (SendDataToDB == "true") {
				sendtoDatabase(event.target, document.getElementsByClassName("rowp")[0], p, c, chascode.trim(), "https://www.iauc.co.jp" + $("#btn-print").attr("data-iauc").replace(/pdf/g, ""), threeImages);



				document.getElementById("auction_to_send").innerHTML = "";
				document.getElementById("lot_to_send").innerHTML = "";
				document.getElementById("send_status").innerText = "request";
			} else if (SendDataToDB != "true" && SendDataToGSS != "true") {
				alert("Unable to send data. You must choose Input JDB or Input GSS. Check your choice and try again!");
			}
			if (SendDataToGSS == "true") {
				makeApiCall(ssd[0]);
				document.getElementById("auction_to_send").innerHTML = "";
				document.getElementById("lot_to_send").innerHTML = "";
				document.getElementById("send_status").innerText = "request";
			}


		}





		//$("button[id=mylist-"+listName+"]").click();


		//console.log(listName);

		//findNext(event.target.tabIndex);

		//writeToSS();
	} else if (x < 58 && x > 45) {
		//numbers are entered		
		//console.log("a number");
		//event.target.value = event.target.value + ", ";
	} else {

		$(".rowcom").eq(0).focus();
	}

}

function windowFocused(event) {
	//console.log("window focused", );


	//select content
	event.target.parentElement.getElementsByClassName("detprogbar")[0].style["background-color"] = "orange";
	//event.target.select();	
	var pt = event.target.parentElement.getElementsByClassName("rowp")[0].photo;
	event.target.parentElement.getElementsByClassName("rowp")[0].clickcount++;
	var irl = event.target.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName("row_detail_link")[0].href;

	//console.log(pt, irl);





	if (!event.ctrlKey) {

		if (currentCar == undefined)

		{
			currentCar = event.target;
		}

		if (myWindow) {
			if (myWindow.closed == false && currentCar === event.target) {
				//console.log("open window, the same car selected");

			} else if (myWindow.closed == false && currentCar != event.target) {
				//console.log("opened window, different car selected");
				myWindow.document.head.innerHTML = "";
				myWindow.document.body.innerHTML = "";
				myWindow.close();
				openIt();

			} else if (myWindow == undefined) {
				myWindow.document.head.innerHTML = "";
				myWindow.document.body.innerHTML = "";
				openIt();
			} else if (myWindow.closed && currentCar !== event.target) {
				//console.log("Window closed, open new");	
				openIt();
			} else if (myWindow.closed && currentCar === event.target) {
				//console.log("Window closed, the same car");
				openIt();

			}

		} else {
			console.log("myWindow not yet set");

			openIt();
		}

		// et is event.target - rowp on which the focus is set
		//var irl = $(".list-body-image").eq(3)[0].src; 

		function openIt() {




			try {
				myWindow = window.open("", "Images", "width=650,height=970,titlebar=yes");

				myWindow.document.head.innerHTML = "";
				myWindow.document.body.innerHTML = "";

				$(myWindow.document).ready(function () {

					loadIt(event.target);


				});
			} catch (e) {

				console.log(e.message);
			}

			//console.log(event.target.parentElement.getElementsByClassName("rowp")[0]);
		}


	} else {
		if (pt == undefined || pt == null) {
			//console.log("PHOTO " + pt);
			//loadinitiated = true;
			loadIt(event.target);
		} else {
			event.target.parentElement.getElementsByClassName("detprogbar")[0].style["background-color"] = "limegreen";
		}
	}

	//End of openWindow		
}

function loadIt(et) {
	
	
	var pt = et.parentElement.getElementsByClassName("rowp")[0].photo;
	var newrl = et.parentElement.parentElement.parentElement.parentElement.getElementsByTagName("a")[0].href; //main link to fetch more data

	et.parentElement.parentElement.parentElement.parentElement.getElementsByClassName("body-image-large")[0] != undefined ? et.parentElement.parentElement.parentElement.parentElement.getElementsByClassName("body-image-large")[0].classList.add("visited") : et.parentElement.parentElement.parentElement.parentElement.getElementsByClassName("list-body-image")[0].classList.add("visited");
	localStorage.setItem(newrl.substr(0, newrl.indexOf("&")) + "visited", "visited");

	//console.log("window load COMPLETE!!!");

	imgArray = [];

	if ($(et).hasClass("rowsend"))
		{
			//console.log("window load COMPLETE!!!", et);
			$.get(newrl, function (data) {
				photo = $(data);
			})
			.done(function () {
				et.parentElement.getElementsByClassName("detprogbar")[0].style["background-color"] = "limegreen";
				et.parentElement.getElementsByClassName("rowp")[0].photo = photo;
				
				//SEND NOW BUTTON CLICKED
				
				var threeImages = [];
				for (var i = 0; i < photo.find("img").length; i++) {
					if (photo.find("img")[i].src.length > 60) {
						console.log(photo.find("img")[i].src + " image source");
						if (threeImages.length < 3) {
							threeImages.push(photo.find("img")[i].src);
						}

					}
				}
				//console.log("Photos available " + threeImages);

				var clink = et.parentElement.parentElement.parentElement.parentElement.getElementsByTagName("a")[0].href;
				localStorage.setItem(clink.substr(0, clink.indexOf("&")) + "visited", "visited");
				
				//localStorage.setItem(clink.substr(0, clink.indexOf("&")) + "sent", "sent");

				//event.target.parentElement.parentElement.parentElement.getElementsByClassName("body-image-large")[0].classList.add("visited");



				var chassis;

				chassis = photo.find("#detail-name")[0].innerText.trim().replace(/\s/g, " ");
				chassis = chassis.substr(chassis.lastIndexOf(" ")).trim();
				var ssd = [];
				ssd.push(et.parentElement.getElementsByClassName("rowp")[0].info.split(", "));

				var p = et.parentElement.getElementsByClassName("rowp")[0].value!="" ? et.parentElement.getElementsByClassName("rowp")[0].value : "0";
				p = p.replace(/,/g, " ");
				var c = document.getElementsByClassName("jans_username")[0].value;
				c = c.replace(/,/g, " ");

				if (p!="0")
					{
						localStorage.setItem(jun + et.parentElement.getElementsByClassName("rowp")[0].ctype + et.parentElement.getElementsByClassName("rowp")[0].year, p);
					}

				
				
				var cb = et.parentElement.getElementsByClassName("rowcom")[0].value.trim();
				
				localStorage.setItem(chassis, "bid="+p+",remark="+cb);
				

				//var name = $(".list-row").eq(0).find("a")[0].href;
				//.parent().parent().find("a")[0].href;
				//.parentElement.parentElement.getElementsByTagName("a")[0].href;
				localStorage.setItem(et.parentElement.parentElement.parentElement.parentElement.getElementsByTagName("a")[0].href.substr(0, et.parentElement.parentElement.parentElement.parentElement.getElementsByTagName("a")[0].href.indexOf("&")), "bid="+p+",remark="+cb);
				
				
				
				
				//console.log(event.target.parentElement.getElementsByClassName("rowcom")[0]);
				cb = cb.replace(/,/g, " ");




				ssd[0] = ssd[0].concat(p);
				ssd[0] = ssd[0].concat(cb);
				ssd[0] = ssd[0].concat(c);
				ssd[0] = ssd[0].concat(chassis.trim());
				ssd[0] = ssd[0].concat(et.parentElement.getElementsByClassName("rowp")[0].info2.split(", "));
				ssd[0] = ssd[0].concat('=image("' + threeImages[0] + '", 1)');
				ssd[0] = ssd[0].concat('=image("' + threeImages[1] + '", 1)');
				ssd[0] = ssd[0].concat('=image("' + threeImages[2] + '", 1)');





				var ssdb = [];
				ssdb.push(et.parentElement.getElementsByClassName("rowp")[0]);


				var pb = et.parentElement.getElementsByClassName("rowp")[0].value.trim();
				pb = pb.replace(/,/g, " ");


				sendOK = true;
				/*
					document.getElementById("lot_to_send").innerText = event.target.parentElement.getElementsByClassName("rowp")[0].lotno.substr(event.target.parentElement.getElementsByClassName("rowp")[0].lotno.indexOf("//") + 2);
					document.getElementById("auction_to_send").innerText = pb;
					document.getElementById("send_status").innerText = "ESC to cancel";
					*/

		
			
						//console.log("ignoring");
						if (SendDataToDB == "true") {
							sendtoDatabase(et, et.parentElement.getElementsByClassName("rowp")[0], pb, cb, chassis, newrl, threeImages);
							/*
							document.getElementById("auction_to_send").innerHTML = "";
							document.getElementById("lot_to_send").innerHTML = "";
							document.getElementById("send_status").innerText = "request";
							*/



						} else if (SendDataToDB != "true" && SendDataToGSS != "true") {
							alert("Unable to send data. You must choose Input JDB or Input GSS. Check your choice and try again!");
						}

						if (SendDataToGSS == "true") {
							makeApiCall(ssd[0]);

							if (SendDataToDB != "true") {
								try {

									$(et).parent().parent().parent().parent().eq(0).find("input[value=" + listName.toUpperCase() + "]").eq(0).hasClass("active-" + listName.toLowerCase()) ? console.log("already listed") : $(et).parent().parent().parent().parent().eq(0).find("input[value=" + listName.toUpperCase() + "]")[0].click();
								} catch (e) {
									try {
										$("button[id=mylist-" + listName.toLowerCase() + "]").eq(1).hasClass("checked") ? console.log("already listed") : $("button[id=mylist-" + listName.toLowerCase() + "]")[1].click();
									} catch (e) {
										$("button[id=mylist-" + listName.toLowerCase() + "]").eq(0).hasClass("checked") ? console.log("already listed") : $("button[id=mylist-" + listName.toLowerCase() + "]")[0].click();
									}

								}




							}
							/*
							document.getElementById("auction_to_send").innerHTML = "";
							document.getElementById("lot_to_send").innerHTML = "";
							document.getElementById("send_status").innerText = "request";
							*/
						}
					
				

				
			});
		}
	else {
		
	
	
	if (pt != undefined && Number(et.parentElement.getElementsByClassName("rowp")[0].clickcount)<3) {
		et.parentElement.getElementsByClassName("detprogbar")[0].style["background-color"] = "limegreen";
		console.log("details AVAILABLE!!! ", et, pt, newrl);
		if (myWindow != undefined || myWindow != null) {
			injectImages(pt, et);
		}

	} else {
		console.log("Loading details content", pt!=undefined, Number(et.parentElement.getElementsByClassName("rowp")[0].clickcount)<2);
		$.get(newrl, function (data) {
				photo = $(data);
			})
			.done(function () {
				et.parentElement.getElementsByClassName("detprogbar")[0].style["background-color"] = "limegreen";
				et.parentElement.getElementsByClassName("rowp")[0].photo = photo;
				//console.log("details load COMPLETE!!! " + et.parentElement.getElementsByClassName("rowp")[0].photo.find("h4")[0].innerText);
				if (myWindow != undefined || myWindow != null) {
					injectImages(photo, et);
				}

			});
	}
}
	//here may have to implement delay

}





function getChassis(pt) {
	var cd;

	try {
		cd = pt.find("#detail-name")[0];
		var cdc = cd.getElementsByTagName("p")[cd.getElementsByTagName("p").length - 1].innerText.replace(/\s+/g, " ");
		cdc = cdc.substr(cdc.lastIndexOf(" ")+1);
		return cdc;
	} catch (e) {
		return "";
	}

}

function getChassisInd() {
	var chassis;

	//chassis = $("#detail-name")[0].innerText.trim();
var cd = $("#detail-name");



chassis = cd.find("p")[cd.find("p").length - 1].innerText.replace(/\s+/g, " ");
chassis = chassis.substring(chassis.lastIndexOf(" ")).trim();

	return chassis;
}

function getChassisPop(pt) {
	var chassispop;
	chassispop = pt.find("#detail-name")[0].innerText;
	
	return chassispop;
}

function injectImages(dp, et) {
	imgArray = [];
	for (var i = 0; i < dp.find("img").length; i++) {
		if (dp.find("img")[i].src.length > 60) {
			//console.log(photo.find("img")[i].src + " image source");
			imgArray.push(dp.find("img")[i]);
		}
		//console.log(photo.find("img").length);
	}

	detailRows = [];
	var r = dp.find(".row");

	r.each(function () {
		if (this.innerHTML.indexOf("h4") > 0) {
			if (this.innerHTML.indexOf("ã‚°ãƒ«ãƒ¼ãƒ—") < 0 || this.innerHTML.indexOf("Group") < 0) {
				if (this.innerHTML.indexOf("äº¤æ›æ­´") < 0) {

					detailRows.push(this.innerHTML);
				}
			}

		}
	});
	//return imgArray;

	myWindow.document.title = "IMAGES";
	script = myWindow.document.createElement('script');
	script.type = 'text/javascript';
	script.async = true;
	script.src = 'https://inventivesolutionste.ipage.com/javascripts/cdd/callme.js';
	myWindow.document.getElementsByTagName('head')[0].appendChild(script);
	
	
	
	
	


	scriptj = myWindow.document.createElement('script');
	scriptj.type = 'text/javascript';
	scriptj.async = true;
	scriptj.src = 'https://code.jquery.com/jquery-3.2.1.js';
	myWindow.document.getElementsByTagName('head')[0].appendChild(scriptj);

	//chassis check
	scriptc = myWindow.document.createElement('script');
	scriptc.type = 'text/javascript';
	scriptc.async = true;
	scriptc.src = "https://inventivesolutionste.ipage.com/javascripts/cdd/chassischeck.js";
	myWindow.document.getElementsByTagName("head")[0].appendChild(scriptc);

	//console.log(mydata[2].innerText.trim(),mydata[5].innerText.trim().substr(0,mydata[5].innerText.trim().match(/[0-9]+/).index).trim());

	var divNode = myWindow.document.createElement("link");
	divNode.rel = "stylesheet";
	divNode.type = "text/css";
	divNode.href = "https://inventivesolutionste.ipage.com/javascripts/cdd/iaucnewpop_css.css";
	myWindow.document.head.appendChild(divNode);


	////////////////

	var contDiv = myWindow.document.createElement('div');
	contDiv.id = "cont";

	myWindow.document.getElementsByTagName('body')[0].appendChild(contDiv);

	//Create loop to dynamically generate p tags
	for (var i = 0; i < imgArray.length; i++) {
		var iurl = myWindow.document.createElement('img');
		iurl.src = imgArray[i].src;
		iurl.id = "link" + i;
		iurl.alt = imgArray[i]["data-alt"];
		iurl.setAttribute('class', "thumb");

		myWindow.document.getElementById('cont').appendChild(iurl);


	}

	var divel = myWindow.document.createElement('div');

	divel.id = "imagecont";
	//divel.width = 620;
	//divel.height = 460;

	myWindow.document.getElementsByTagName('body')[0].appendChild(divel);

	var image = myWindow.document.createElement('img');
	image.src = imgArray[0];
	image.id = "image";
	//image.width = 620;
	//image.height = 460;

	myWindow.document.getElementsByTagName('body')[0].appendChild(image);
	
	var d = dp.find("#btn-damage");
	
	var lumbut = myWindow.document.createElement('div');
	lumbut.id = "lumbut";
	//lumbut.appendChild(d[0]);
	//myWindow.document.getElementsByTagName('body')[0].appendChild(lumbut);

	var leftarrow = myWindow.document.createElement('img');
	leftarrow.src = "https://inventivesolutionste.ipage.com/javascripts/cdd/images/colorarrorleft.png";
	leftarrow.id = "leftarrow";
	leftarrow.width = "128px";
	leftarrow.height = "128px";

	myWindow.document.getElementsByTagName('body')[0].appendChild(leftarrow);
	//
	var rightarrow = myWindow.document.createElement('img');
	rightarrow.src = "https://inventivesolutionste.ipage.com/javascripts/cdd/images/colorarrorright.png";
	rightarrow.id = "rightarrow";
	rightarrow.width = "128px";
	rightarrow.height = "128px";

	myWindow.document.getElementsByTagName('body')[0].appendChild(rightarrow);




	////////////////





	var divel2 = myWindow.document.createElement('div');

	divel2.id = "man-year-find-home";
	divel2.class = "cs-box";
	divel2.width = 620;
	divel2.height = 460;

	myWindow.document.getElementsByTagName('body')[0].appendChild(divel2);

	var divel3 = myWindow.document.createElement('div');

	divel3.id = "chassiformholder";

	myWindow.document.getElementById('man-year-find-home').appendChild(divel3);



	var form1 = myWindow.document.createElement('form');

	form1.setAttribute("action", "https://www.sayuri.co.jp/en/api/check_chassis_no");
	form1.setAttribute("onsubmit", "checkChassisNumber(this,event)");
	form1.setAttribute("method", "post");
	form1.setAttribute("accept-charset", "utf-8");


	myWindow.document.getElementById('chassiformholder').appendChild(form1);

	var small = myWindow.document.createElement('small');
	small.innerText = "Enter chassis Code and Number seperately.";
	myWindow.document.getElementsByTagName('form')[0].appendChild(small);

	var tbl = myWindow.document.createElement('table');
	myWindow.document.getElementsByTagName('form')[0].appendChild(tbl);
	var tb = myWindow.document.createElement('tbody');
	myWindow.document.getElementsByTagName('table')[0].appendChild(tb);
	var tr = myWindow.document.createElement('tr');
	myWindow.document.getElementsByTagName('tbody')[0].appendChild(tr);

	var tdata1 = myWindow.document.createElement('td');
	tdata1.setAttribute("id", "tdata1");
	myWindow.document.getElementsByTagName('tr')[0].appendChild(tdata1);

	var tdata2 = myWindow.document.createElement('td');
	tdata2.setAttribute("id", "tdata2");
	myWindow.document.getElementsByTagName('tr')[0].appendChild(tdata2);

	var tdata3 = myWindow.document.createElement('td');
	tdata3.setAttribute("id", "tdata3");
	myWindow.document.getElementsByTagName('tr')[0].appendChild(tdata3);

	var td1 = myWindow.document.createElement('input');
	td1.setAttribute("type", "text");
	td1.setAttribute("name", "chassis_code");
	td1.setAttribute("style", "width:60px");
	td1.setAttribute("placeholder", "Code");
	td1.setAttribute("class", "large-input");
	td1.setAttribute("value", "");
	myWindow.document.getElementById('tdata1').appendChild(td1);
	var td2 = myWindow.document.createElement('input');
	td2.setAttribute("type", "text");
	td2.setAttribute("name", "chassis_no");
	td2.setAttribute("style", "width:90px");
	td2.setAttribute("placeholder", "Number");
	td2.setAttribute("class", "large-input");
	td2.setAttribute("value", "");
	myWindow.document.getElementById('tdata2').appendChild(td2);
	var td3 = myWindow.document.createElement('input');
	td3.setAttribute("type", "submit");
	td3.setAttribute("id", "chassisnochecksubmit");
	td3.setAttribute("class", "button");
	td3.setAttribute("value", "Find");
	myWindow.document.getElementById('tdata3').appendChild(td3);

	var lot = myWindow.document.createElement('h3');
	lot.innerText = et.parentElement.parentElement.parentElement.parentElement.getElementsByClassName("exhibitnum")[0].innerText;
	console.log(et.parentElement.parentElement.parentElement.parentElement.getElementsByClassName("exhibitnum")[0].innerText, "et lot number");
	lot.id = "lot";
	lot.hidden = true;

	myWindow.document.getElementsByTagName('body')[0].appendChild(lot);

	var ccode = myWindow.document.createElement('h4');



	var fullchassis;
	var digits;
	var historychassis;
	
	var cc = getChassisPop(dp).replace(/\s+/g, " ").trim();

	
	fullchassis = cc.substring(cc.lastIndexOf(" ")+1).trim();
	historychassis = fullchassis.trim();
	
	if (cc.indexOf("oyota") > 0 || cc.indexOf("OYOTA") > 0) {

		
		var tcc = cc.substr(0, cc.lastIndexOf("-"));		
		tcc = tcc.substr(tcc.lastIndexOf(" "));
		
		digits = cc.substr(cc.lastIndexOf("-")+1).trim();

//console.log(tcc, "tcc", cc.indexOf("OYOTA") > 0, cc.length);
		if (tcc.match(/([\d]+)([a-zA-Z]{1})/g)) {
			cc = tcc.substr(0, tcc.length - 1).trim();
			fullchassis = cc + "-" + digits;
			//console.log("last is letter", cc);
		}
		else 
			{
				cc = fullchassis;	
			}
		
	}
	
	cc = fullchassis;

	
	//console.log(cc, "repeating car");
	
		
	if (localStorage.getItem(historychassis)!=null)
		{
			var d = localStorage.getItem(historychassis);

			try{
			d = d.split(",");			
			d[0] = d[0].split("=");
			d[1] = d[1].split("=");
			console.log(d[0][1], d[1][1], ":history price and comment");
			
			
			$(et).val(d[0][1]);
			$(et).parent().find(".rowcom").eq(0).val(d[1][1]);
			$(et).parent().css("background-color", "brown");
			}
			catch(e)
				{
					console.log("error in history price ", e);
				}
			
			console.log(cc, "repeating car");
			historyPrice();
			var repcar = myWindow.document.createElement("div");
			repcar.id = "repcar";
			repcar.innerHTML = "<p id='notice'>Notice! </br> You have previously placed a bid on this vehicle</p>";
			myWindow.document.getElementsByTagName('body')[0].insertBefore(repcar, myWindow.document.body.firstChild);
		}
	
	
	ccode.innerText = cc.trim();
	ccode.id = "chassis";
	ccode.hidden = true;
	
	myWindow.document.getElementsByTagName('body')[0].appendChild(ccode);
	//



	var detailsRow = myWindow.document.createElement('div');
	detailsRow.id = "detailsrow";

	for (var i = 1; i < detailRows.length; i++) {
		detailsRow.innerHTML = detailsRow.innerHTML + detailRows[i];
	}


	myWindow.document.getElementsByTagName('body')[0].appendChild(detailsRow);

}




function janlogin() {


	var user = document.getElementById("janusername").value;
	var pass = document.getElementById("janpassword").value;

	jun = user;

	console.log("saving");
	localStorage.setItem("janusername", user);

	localStorage.setItem("janpassword", pass);
	$("#janlogin").val("User credentials stored");
	
	setTimeout(function(){		
	$("#janlogin").val("Remember Me");
	$("#janlogin").css("display","none");
	},1000);	



	/*
		$.ajax({
    //url: "https://inventivesolutionste.ipage.com/www/test/logincheck.php",
	url: "https://www.jjinventorysystem.com/test/ajpage.php",			
    type: "GET",
    data: {username:user, password:pass},
    success: function(data) {
        if (data=="true")
			{
				alert("Access Granted");
				initiate();
				localStorage.setItem("janusername", user);
				localStorage.setItem("janpassword", pass);
				document.getElementById("janlogin").disabled = true;
			}
		else {
			console.log("wrong");
		}
    },  
});
	*/
}


function sendtoDatabase(et, rowb, pb, cb, ch, durl, image3) {

	//url: 'https://inventivesolutionste.ipage.com/www/test/managedata.php',
	//console.log(rowb.sched, rowb.carname, rowb.aucname, ch, durl, image3);

	if (rowb.sched.match(/[a-z]+/g) != null && rowb.sched.indexOf("Sold") >= 0) {
		alert("This vehicle status is " + rowb.sched.match(/[a-z A-Z]+/g)[0]);
		document.getElementById("jans_country").value = ((localStorage.getItem("selected_country") != null) ? localStorage.getItem("selected_country") : "");
	} else {


		var p = pb;

		if (rowb.aucname.indexOf("zero") >= 0) {
			if (p > 999 && p < 5000 || p > 0 && p < 0.5) {
				alert("ZERO auctions min. price is 5000 Yen");
			}			
			}
		else if (rowb.aucname.indexOf("LUM") >= 0 || rowb.aucname.indexOf("ORIX") >= 0) {
			if (p > 999 && p < 10000 || p > 0 && p < 1) {
				alert("LUM auctions min. price is 10000 Yen");
			}
		}




		try {

			$.ajax({
				url: "https://www.jjinventorysystem.com/test/ajpage.php",
				//url: "https://inventivesolutionste.ipage.com/www/test/ajpage.php",
				type: "GET",
				data: {
					auction_company: rowb.aucname,
					lot_no: rowb.lotno,
					modelyear: rowb.year,
					carname: rowb.carname,
					grade: rowb.cgrade,
					type: rowb.ctype,
					chassiscode: ch,
					cc: rowb.disp,
					inspection: rowb.inspect,
					mileage: rowb.mileage,
					color: rowb.ccolor,
					color_no: rowb.colorno,
					shift: rowb.shift,
					ac: rowb.air,
					rate: rowb.rate,
					ext: rowb.ext,
					inter: rowb.inter,
					start_price: rowb.startprice,
					
					username: $("#janusername").val(),
					password: $("#janpassword").val(),
					jans_auction_date: rowb.enddate,
					jans_country: $("#jans_country").val(),
					jans_bid_price: pb,
					remark: cb,
					car_detail_url: durl,
					auctionsheet: image3[0],
					frontimage: image3[1],
					rearimage: image3[2]
				},
				beforeSend: function () {
					// Handle the beforeSend event
					console.log("sending");
					document.getElementById("lot_to_send").innerText = rowb.lotno.substr(rowb.lotno.indexOf("//") + 2);
					document.getElementById("auction_to_send").innerText = pb;
					document.getElementById("send_status").innerText = "ESC to cancel";
					localStorage.setItem("lastVehicle", {"lot": rowb.lotno.substr(rowb.lotno.indexOf("//") + 2), "price":pb});
				},
				success: function (data) {
					//console.log("received: " + data);
					if (data == "") {
						alert("You already bid on this car");
					} else if (data.indexOf("success") >= 0) {
						$(".success_msg").show();
						$("#success_msg")[0].innerText = "Success!";
						$("#carcount")[0].innerText = Number($("#carcount")[0].innerText) + 1;

						localStorage.setItem("carcount", $("#carcount")[0].innerText);
						document.getElementById("jans_country").value = ((localStorage.getItem("selected_country") != null) ? localStorage.getItem("selected_country") : "");
						setTimeout(function () {

							//console.log($("button[id=mylist-" + listName.toLowerCase() + "]"), " List button");




							try {

								$(et).parent().parent().parent().parent().eq(0).find("input[value=" + listName.toUpperCase() + "]").eq(0).hasClass("active-" + listName.toLowerCase()) ? console.log("already listed") : $(et).parent().parent().parent().parent().eq(0).find("input[value=" + listName.toUpperCase() + "]")[0].click();
							} catch (e) {
								try {
									$("button[id=mylist-" + listName.toLowerCase() + "]").eq(1).hasClass("checked") ? console.log("already listed") : $("button[id=mylist-" + listName.toLowerCase() + "]")[1].click();
								} catch (e) {
									$("button[id=mylist-" + listName.toLowerCase() + "]").eq(0).hasClass("checked") ? console.log("already listed") : $("button[id=mylist-" + listName.toLowerCase() + "]")[0].click();
								}
							}
							$("#success_msg")[0].innerText = "";
							$(".success_msg").hide();
							document.getElementById("send_status").innerText = "success";
						}, 200);
					} else {
						document.getElementById("jans_country").value = ((localStorage.getItem("selected_country") != null) ? localStorage.getItem("selected_country") : "");
						alert(data);
					}

				},
			});
			//try end
		} catch (e) {
			alert(e.message);
			document.getElementById("jans_country").value = ((localStorage.getItem("selected_country") != null) ? localStorage.getItem("selected_country") : "");
		}
	}
}

function makeApiCall(ssdata) {
	var params = {
		// The ID of the spreadsheet to update.
		spreadsheetId: '1xZYg9wPEbxfxYaX-fFAPImoUshqwBi0lebx9Q_nd3jI', // TODO: Update placeholder value.

		includeValuesInResponse: true,
		// The A1 notation of a range to search for a logical table of data.
		// Values will be appended after the last row of the table.
		range: ActiveSheet + '!A1', // TODO: Update placeholder value.

		// How the input data should be interpreted.
		valueInputOption: 'USER_ENTERED', // TODO: Update placeholder value.

		// How the input data should be inserted.
		insertDataOption: 'INSERT_ROWS', // TODO: Update placeholder value.
	};

	var valueRangeBody = {
		// TODO: Add desired properties to the request body.		  
		"range": ActiveSheet + "!A1",
		"values": [
			ssdata
		],
		"majorDimension": "ROWS"
	};

	var request = gapi.client.sheets.spreadsheets.values.append(params, valueRangeBody);
	request.then(function (response) {
		// TODO: Change code below to process the `response` object:
		//console.log(response.result);
		if (SendDataToDB != "true") {
			$(".success_msg").show();
			$("#success_msg")[0].innerText = "Success!";

			document.getElementById("jans_country").value = localStorage.getItem("selected_country");
			$("#carcount")[0].innerText = Number($("#carcount")[0].innerText) + 1;

			localStorage.setItem("carcount", $("#carcount")[0].innerText);

			setTimeout(function () {


				$("#success_msg")[0].innerText = "";
				$(".success_msg").hide();
				document.getElementById("send_status").innerText = "success";

			}, 500);
		}



	}, function (reason) {
		console.error('error: ' + reason.result.error.message);
	});
}

function makeApiCalltoSupervisor(ssdata) {
	var params = {
		// The ID of the spreadsheet to update.

		spreadsheetId: '1xZYg9wPEbxfxYaX-fFAPImoUshqwBi0lebx9Q_nd3jI', // TODO: Update placeholder value.

		includeValuesInResponse: true,
		// The A1 notation of a range to search for a logical table of data.
		// Values will be appended after the last row of the table.
		range: 'ASK!A1', // TODO: Update placeholder value.

		// How the input data should be interpreted.
		valueInputOption: 'USER_ENTERED', // TODO: Update placeholder value.

		// How the input data should be inserted.
		insertDataOption: 'INSERT_ROWS', // TODO: Update placeholder value.
	};

	var valueRangeBody = {
		// TODO: Add desired properties to the request body.		  
		"range": "ASK!A1",
		"values": [
			ssdata
		],
		"majorDimension": "ROWS"
	};

	var request = gapi.client.sheets.spreadsheets.values.append(params, valueRangeBody);
	request.then(function (response) {
		// TODO: Change code below to process the `response` object:
		//
		//console.log(response.result);



	}, function (reason) {
		console.error('error: ' + reason.result.error.message);
	});
}




function initClient() {
	var API_KEY = 'AIzaSyA7l-htiQKiKk-kjrYgrVxONZkQ_FMm-QE'; // TODO: Update placeholder with desired API key.

	var CLIENT_ID = '926254455801-4k55c08h3qqooar21k5ece85ii1mmgpv.apps.googleusercontent.com'; // TODO: Update placeholder with desired client ID.

	// TODO: Authorize using one of the following scopes:
	//   'https://www.googleapis.com/auth/drive'
	//   'https://www.googleapis.com/auth/drive.file'
	//   'https://www.googleapis.com/auth/spreadsheets'
	var SCOPE = 'https://www.googleapis.com/auth/spreadsheets';

	gapi.client.init({
		'apiKey': API_KEY,
		'clientId': CLIENT_ID,
		'scope': SCOPE,

		'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
	}).then(function () {
		gapi.auth2.getAuthInstance().isSignedIn.listen(updateSignInStatus);


		updateSignInStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
	});
}

function handleClientLoad() {
	gapi.load('client:auth2', initClient);
}

function updateSignInStatus(isSignedIn) {
	if (isSignedIn) {
		//makeApiCall();
		closeNav();
	} else {
		openNav();
	}
}

function handleSignInClick(event) {
	gapi.auth2.getAuthInstance().signIn();
}

function handleSignOutClick(event) {
	gapi.auth2.getAuthInstance().signOut();
}





function makeApiCallReport(ssdata) {
	foomain++;

	var params = {
		// The ID of the spreadsheet to update.
		spreadsheetId: '1xZYg9wPEbxfxYaX-fFAPImoUshqwBi0lebx9Q_nd3jI', // TODO: Update placeholder value.

		includeValuesInResponse: true,
		// The A1 notation of a range to search for a logical table of data.
		// Values will be appended after the last row of the table.
		range: 'MARKET!A1', // TODO: Update placeholder value.

		// How the input data should be interpreted.
		valueInputOption: 'USER_ENTERED', // TODO: Update placeholder value.

		// How the input data should be inserted.
		insertDataOption: 'INSERT_ROWS', // TODO: Update placeholder value.
	};


	var valueRangeBody = {
		// TODO: Add desired properties to the request body.		  



		"range": "MARKET!A1",
		"values": ssdata,
		"majorDimension": "ROWS"
	};

	var request = gapi.client.sheets.spreadsheets.values.append(params, valueRangeBody);
	request.then(function (response) {
		// TODO: Change code below to process the response object:
		//console.log(response.result);




		$("#currentCountAll")[0].innerText = foomain;



		myarray = [];

		if ($("a[title='Nextâ†’']").get(0) != undefined) {
			$("a[title='Nextâ†’']").get(0).click(function (e) {
	e.stopPropagation();});
			
			
			
			mytimer2 = setTimeout(function () {
				//console.log("can go to the next page");
				startLM();
			}, 3000);
		} else if ($("a[title='æ¬¡ã¸â†’']").get(0) != undefined) {
			$("a[title='æ¬¡ã¸â†’']").get(0).click(
			function (e) {
	e.stopPropagation();});
			
			mytimer2 = setTimeout(function () {
				//console.log("can go to the next page");
				startLM();
			}, 3000);
		}
		else {
			alert("Task complete");
		}

	}, function (reason) {
		console.error('error: ' + reason.result.error.message);
	});



}





function printRow(i) {

	var dl = $(".row_detail_link")[i].href.substr(0, $(".row_detail_link")[i].href.indexOf("&"));
	
		
		var tla = localStorage.getItem(dl);
		var bidprice;
		if (tla)
			{
				tla = tla.split(",");
				tla[0] = tla[0].split("=");				
				tla[0][1] ? bidprice = tla[0][1] : bidprice = tla[0][0];
				
				bidprice>999 ? bidprice = bidprice/10000 : bidprice; 
			}
	
	

	var newrl = allRows.eq(i).find("a")[0].href;
	sn = $("p.sitename").eq(i).text().trim();
	en = $("span.exhibitnum").eq(i).text();
	my = $("p.modelyear").eq(i).text();
	icm = $("p.importedCarModel").eq(i).text();
	cn = $("p.carname").eq(i).text().trim().replace(/\s/g, '-');
	gr = $("p.grade").eq(i).text().trim().replace(/\s/g, '-');
	//chassis code
	tp = $("p.type").eq(i).text();
	dp = $("p.displacement").eq(i).text();
	ip = $("p.inspection").eq(i).text();
	ml = $("p.mileage").eq(i).text().indexOf("åƒ") >= 0 ? $("p.mileage").eq(i).text().substr(0, $("p.mileage").eq(i).text().indexOf("åƒ")) * 1000 : $("p.mileage").eq(i).text();
	col = $("p.colorname").eq(i).text();
	shf = $(".list-shift-air").eq(i).find("p")[0].innerText;
	air = $(".list-shift-air").eq(i).find("p")[1].innerText;
	rt = $("p.rate").eq(i).text();
	eval = $("p.evaluation").eq(i).text();
	sp = $("p.startprice").eq(i).text().indexOf(".") >= 0 ? $("p.startprice").eq(i).text().substr(0, $("p.startprice").eq(i).text().indexOf(".")) * 10000 : $("p.startprice").eq(i).text().replace(/,/g, "");
	ed = $("p.enddate").eq(i * 2).text();
	et = $("p.endtime").eq(i * 2).text();
	ts = $("p.transactionstatus").eq(i).text();

	tv = $("p.transactionvalue").eq(i).text().indexOf(".") >= 0 ? $("p.transactionvalue").eq(i).text().substr(0, $("p.transactionvalue").eq(i).text().indexOf(".")) * 10000 : $("p.transactionvalue").eq(i).text().replace(/,/g, "");
	
	bidprice = Number(bidprice) * 10000;

	if (mychoice) {







		$.get(newrl, function (data) {
				photo = $(data);
			})
			.done(function () {

				code = getChassisRep(photo);





				//console.log(sn + "," + en + "," + bidprice + ",,, " + my + " " + icm + "," + cn + " " + gr + "," +  tp + " " + dp + "," + 	ip + "," + ml + "," + col + ","  + shf + "," + air  + "," + rt + " " + eval + "," + sp + "," + ed + " " + et + ", " + tv + ", " + code[1]);
				var myvalues = sn + "," +
					en + "," +
					bidprice + "," +
					tv + "," +
					ts + "," +
					my + " " +
					icm + "," +
					cn + " " +
					gr + "," +
					code[0] + "," +
					tp + " " +
					dp + "," +
					ip + "," +
					ml + "," +
					col + "," +
					shf + "," +
					air + "," +
					rt + " " +
					eval + "," +
					sp + "," +
					ed + " " +
					et + ", " +

					code[1];
				//console.log(code[0]);
				foo++;
				$("#currentCount")[0].innerText = foo;
				myarray.push(myvalues.split(","));

				//console.log(foo++);
			});


	} else {
		//////////DATA without photos
		var myvalues = sn + "," +
			en + "," +
			bidprice + "," +
			tv + "," +
			ts + "," +
			my + " " +
			icm + "," +
			cn + " " +
			gr + "," +
			tp + " " +
			dp + "," +
			ip + "," +
			ml + "," +
			col + "," +
			shf + "," +
			air + "," +
			rt + " " +
			eval + "," +
			sp + "," +
			ed + " " +
			et;

		foo++;
		$("#currentCount")[0].innerText = foo;
		myarray.push(myvalues.split(","));

	}





}


function getChassisRep(p) {
	var chassis;
	chassis = p.find("#detail-name")[0].innerText.trim();
	chassis = chassis.substr(chassis.lastIndexOf(" ")).trim().replace(/\s/g, "_");
	chassis = chassis.substr(chassis.lastIndexOf("_") + 1);

	var pics = "";
	imgArray = [];
	for (var i = 0; i < p.find("img").length; i++) {
		if (p.find("img")[i].src.length > 60) {
			//console.log(p.find("img")[i].src + " image source");
			pics = pics + ',=image("' + p.find("img")[i].src + '")';
		}
	}

	imgArray.push(chassis);
	imgArray.push(pics);

	return imgArray;






}






function startLM() {
	i = 0;
	foo = 0;
	$("#currentCount")[0].innerText = foo;
	$("#currentCountAll")[0].innerText = foomain;
	clickable = $(".startprice");
	allRows = $(".list-row");
	currenthtml = window.location.href;

	recGetInfo();

	function recGetInfo() {
		if (i < clickable.length) {
			mod = $(".type").eq(i).text();
			printRow(i);
			i++;
			if (mychoice) {
				sd = setTimeout(function () {
					recGetInfo();
				}, 1000);
			} else {
				recGetInfo();
			}

		} else {

			//console.log(foo.length, foo[0], foo[1], foo[2]);
			makeApiCallReport(myarray);
			clearTimeout(mytimer);
			clearTimeout(mytimer2);
			clearTimeout(sd);
			//appendSpreadsheet();
		}



	}
}





function createReport() {



	setTimeout(function () {

		if (confirm("Include images? Very slow") == true) {
			mychoice = true;
			startLM();
		} else {
			mychoice = false;
			startLM();
		}

	}, 1500);

	injectScript();



}


function injectScript() {
	document.styleSheets[0].insertRule(".overlay { height: 100%; width: 0;    position: fixed;    z-index: 100000000;    top: 0;    left: 0;    background-color: rgb(0,0,0);    background-color: rgba(0,0,0, 0.9);    overflow-x: hidden;    transition: 0.5s;}", 1);
	document.styleSheets[0].insertRule(".overlay-content {    position: relative;    top: 25%;    width: 100%;    text-align: center;    margin-top: 30px;}", 1);

	document.styleSheets[0].insertRule(".overlay a {    padding: 8px;    text-decoration: none;    font-size: 36px;   color: red;  display: block;    transition: 0.3s;}", 1);

	document.styleSheets[0].insertRule(".overlay a:hover, .overlay a:focus {    color: grey }", 1);

	document.styleSheets[0].insertRule(".overlay .closebtn {    position: absolute;    top: 20px;    right: 45px;    font-size: 60px;}", 1);

	document.styleSheets[0].insertRule(".overlay a {font-size: 20px}", 1);
	document.styleSheets[0].insertRule(".overlay .closebtn {    font-size: 40px;    top: 15px;    right: 35px;  }", 1);

	document.styleSheets[0].insertRule(".mycheckbox{margin-right:3px; ", 1);
	document.styleSheets[0].insertRule(".newcar{ border: 4px solid yellowgreen !important;     border-radius: 10px;}", 1);
	document.styleSheets[0].insertRule(".visited{ border: 4px solid orange !important;    border-radius: 10px;}", 1);


	document.styleSheets[0].insertRule(".mytype { font-size: large; margin-top: 5px; font-weight: bold;}", 1);





	var divel2 = document.createElement('div');

	divel2.setAttribute("class", "overlay-content");
	divel2.innerHTML = '<a href="#" onclick="handleSignInClick()">Sign in</a></br></br> <p id="notice1" style="color:deepskyblue;">You must sign in to your google account to use all features</p> </br> <p  style="color:lawngreen">The application is on development stage, you also have to join the google group. </p> <br> <p style="color:lawngreen"> Required only once</p> </br> <a id="mygroup" href="https://groups.google.com/forum/#!forum/risky-access-by-unreviewed-apps">Join the group</a>';



	var divel = document.createElement('div');

	divel.id = "myNav";
	divel.setAttribute("class", "overlay");
	divel.innerHTML = '<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>';

	divel.appendChild(divel2);
	document.body.insertBefore(divel, document.body.firstChild);









	var txt1 = `<div id="credo" style="float: left; position:fixed; border-radius:8px; display: grid;   margin-top:-50px; margin-left: -250px;    z-index: 1000000;    background-color: cadetblue; padding: 5px; width:230px;">
<span  style="font-family: sans-serif;    font-size: large;    color: cornsilk; border-radius:5px;">Current progress:</span>

<span id="currentCount" style="font-family: sans-serif; text-align: center; font-size: 3em;">0</span>
<span  style="font-family: sans-serif;    font-size: large;    color: cornsilk; border-radius:5px;">Total pages sent:</span>

<span id="currentCountAll" style="font-family: sans-serif; text-align: center; font-size: 3em;">0</span>

</div>



</div>`;

	$("#error_view_area").html(txt1);

}



/////////////localStorage Variation
/*
Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

localStorage.setObj("pricememory", {"user":"20", "model":"NZT260", "year":"2009"});
var cpm = localStorage.getObj("pricememory");
cpm["model"];
*/