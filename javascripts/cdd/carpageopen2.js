var resource_url = 'https://jjinventorysystem.com/devtest/dlm_lmt/';
var developerKey = 'AIzaSyAjnnliRioxEsgF7_eHEOY7Qrn2dIhaiMk';
var clientId = '926254455801-4k55c08h3qqooar21k5ece85ii1mmgpv.apps.googleusercontent.com';
var scope = ['https://www.googleapis.com/auth/drive'];
var pickerApiLoaded = false;
var oauthToken;
var appId = "926254455801";


// JavaScript Document
var current_version = 9.3;

//PRODUCTION VERSION plpofikbafhjkaagheoojfbkcclamkee //caropenpage2

//TEST VERSION akhmkanhkaebapgajhmfnoigdhchidec //iaucdatatest
var editorExtensionId = "plpofikbafhjkaagheoojfbkcclamkee";
var chead;
var ctail;
var refreshcodelaunch;

var sendObjArray = [];
var sendObject = {
	"aimage": [],
	"fimage": [],
	"rimage": [],
	"detailink": [],
	"aucname": [],
	"lotno": [],
	"ctype": [],
	"clickcount": [],
	"year": [],
	"carname": [],
	"cgrade": [],
	"chassiscode": [],
	"disp": [],
	"inspect": [],
	"mileage": [],
	"ccolor": [],
	"colorno": [],
	"shift": [],
	"air": [],
	"rate": [],
	"ext": [],
	"inter": [],
	"startprice": [],
	"starttime2": [],
	"transactionvalue": [],
	"transactionstatus": [],
	"enddate": [],
	"rowloader": [],
	"values": [],
	"remarks": []
};

var users = [{
	"name": "bots",
	"country": "213"
}, {
	"name": "chile",
	"country": "322"
}, {
	"name": "dur",
	"country": "14"
}, {
	"name": "kenya_user",
	"country": "20"
}, {
	"name": "lesotho_user",
	"country": "353"
}, {
	"name": "messina_user",
	"country": "209"
}, {
	"name": "mozamb_user",
	"country": "214"
}, {
	"name": "namibia_user",
	"country": "212"
}, {
	"name": "pakistan_user",
	"country": "282"
}, {
	"name": "swazi_user",
	"country": "359"
}, {
	"name": "tanzania_user",
	"country": "10"
}, {
	"name": "thai",
	"country": "267"
}, {
	"name": "uae_user",
	"country": "17"
}, {
	"name": "uganda",
	"country": "279"
}, {
	"name": "uk_user",
	"country": "21"
}, {
	"name": "zambia",
	"country": "12"
}, {
	"name": "mohib",
	"country": "17"
}, {
	"name": "kareem",
	"country": "17"
}, {
	"name": "ehtesham",
	"country": "17"
}, {
	"name": "jawed",
	"country": "17"
}, {
	"name": "hameed",
	"country": "17"
}, {
	"name": "malik",
	"country": "17"
}, {
	"name": "khan",
	"country": "17"
}, {
	"name": "tan",
	"country": "10"
}, {
	"name": "dom",
	"country": "391"
}, {
	"name": "mong",
	"country": "396"
}, {
	"name": "qadeer",
	"country": "17"
}, {
	"name": "ugonline",
	"country": "410"
}, {
	"name": "nasrullah",
	"country": "282"
}, {
	"name": "haq",
	"country": "282"
}, {
	"name": "aziz",
	"country": "282"
}, {
	"name": "tariq",
	"country": "282"
}, {
	"name": "noman",
	"country": "282"
}, {
	"name": "ameen",
	"country": "317"
}, {
	"name": "sham",
	"country": "17"
}, {
	"name": "aman_mohib",
	"country": "17"
}, {
	"name": "aman_mohib",
	"country": "391"
}];

var stt;
var sii;
var rs; //restarter interval
var sto;
//var warning1 = "Unable to send data. \r\nYou MUST choose Input JDB or Input GSS in Quick Settings\r\nCheck your choice and try again!";
var warning2 = "Because you have chosen to send data to GSS,\r\nPress LOAD DATA button first to load chassis codes";
var sendtogssOK = "false";
var load_count = 0;
var marketReport = false;
var senddata;
var rowcount_auto_send = 0;
var rowcount_auto_send_loaded = 0;

var showsl = false;
var loadchassis = false;

var foo = 0;
var foomain = 0;
var myarray = [];
var sd;
var mytimer;
var mytimer2;
var mychoice = false;
var mychoiceS = false;
var chastype;

var dlm_spreadsheet_id;
var ActiveSheet;

var selcountry;
var imgArray = [];
var currentCar;
var myWindow;

var fi;
var flash = true;

var jun = "";

var detailRows = [];



var list;
var comIn;
var listName = "C";
var dest = "";

var today;
var ID;
var currentPageID;
var newPageID;

var arm;
var tto;
var sendOK = "";

var loadinitiated = false;

var year = new Date();


function newVersion() {
	$.getScript(resource_url+"javascripts/cdd/carpageopen2.js")
		.done(function (script, textStatus) {
			console.log(textStatus);
		});

	location.reload(true);

}

$(".list.image-mode.list-row").css("height", "272px!important");

console.log("iaucdata injected");

$(document).off().ajaxComplete(function (event, xhr, settings) {
	if (settings.url.indexOf("ajax/service/agreement") > 0) {

		if (Boolean(refreshcodelaunch)) {
			
			console.log("Boolean(refreshcodelaunch)", Boolean(refreshcodelaunch));
			
		} else {
			console.log("Triggered ajaxComplete handler.");
			refreshCode();
			refreshcodelaunch = true;
		}

	}

});



var pageUrl = window.location.href;

if (document.getElementsByClassName("rowp").length > 0) {
	//refreshCode();
} else {
	//console.log(document.getElementsByClassName("rowp").length);
	scriptj = document.createElement('script');
	scriptj.type = 'text/javascript';
	scriptj.async = true;
	scriptj.setAttribute('onload', 'this.onload=function(){};initiate()');
	scriptj.setAttribute('onreadystatechange', 'if (this.readyState === "complete") this.onload()');
	scriptj.src = resource_url+'javascripts/cdd/iaucmap.js';
	document.getElementsByTagName('head')[0].appendChild(scriptj);

}
if (localStorage.getItem("tutorialseen") == null && localStorage.getItem("datemanualchange") == null || localStorage.getItem("janusername") == null || localStorage.getItem("janpassword") == null || localStorage.getItem("jans_country") == null || localStorage.getItem("listname") == null) {
	scriptj = document.createElement('script');
	scriptj.type = 'text/javascript';
	scriptj.setAttribute('onload', 'this.onload=function(){};rechecktut()');
	scriptj.setAttribute('onreadystatechange', 'if (this.readyState === "complete") this.onload()');
	scriptj.src = resource_url+'javascripts/cdd/iauctutorial.js';
	document.getElementsByTagName('body')[0].appendChild(scriptj);
}

if (localStorage.getItem("dlmversion") == null) {
	localStorage.setItem("dlmversion", current_version);

} else {
	if (localStorage.getItem("dlmversion") != current_version || localStorage.getItem("janusername") == null) {
		console.log("old version or fresh install");
		//display the popup updates page
		var updateWindow = window.open(resource_url+"javascripts/cdd/updates/update_page_iauc.html", "Updates", "width=900,height=970,titlebar=yes");
		localStorage.setItem("dlmversion", current_version);
	}
}

var h3s = document.querySelectorAll("h3[id=lot]");

if (h3s.length > 1) {

	for (var i = 0; i < h3s.length; i++) {
		//console.log(h3s[i].innerText);
		h3s[i].parentNode.removeChild(h3s[i]);
	}
}

document.body.setAttribute("onbeforeunload", "clearcache()");


function clearcache() {
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
}






//$(document).unbind("keyup");
document.body.setAttribute("onkeydown", "refreshorcancel(this)");

function refreshorcancel(e) {

	//console.log(e.keyCode);
	if (e.keyCode === 27) {
		//console.log("cancelled");
		cancelSend(); // esc
	} else if (e.keyCode === 18) {
		// console.log("Price input fields");
		refreshCode(); // esc
	}

}

function cancelSend() {
	if (document.getElementById("send_status").innerText == "ESC to cancel") {
		sendOK = "";
		document.getElementById("send_status").innerText = "Cancelled";
		setTimeout(function () {
			document.getElementById("auction_to_send").innerHTML = "";
			document.getElementById("lot_to_send").innerHTML = "";
			document.getElementById("send_status").innerText = "";
		}, 1500);
	}

}




function initiate() {

	var txt1 = `
<div id="lever" ><span style="color:white;">DLM</span></div>
<div class="credo" id="credo">

<a href="`+resource_url+`javascripts/cdd/updates/update_page_iauc.html" target="_blank"><img title="Help" id="aucview" style="width: 18px; text-decoration: none; float: right; position: relative; cursor: pointer; pointer-events: none;" alt="Help" src="`+resource_url+`javascripts/cdd/updates/images/info.png"></a> 
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

<input type="button" value="Remember Me" id="janlogin" onmousedown="setCountry()" class="btn btn-primary btn-sm" style="margin-top:5px;"  />

<label style="color:mintcream;  margin-top:2px;">Auction Date</label>

                        <div class="input-group date" style="float: right;    width: 220px;">
<img id="datemanualchange" src="https://data.htscdn.org/images/unlock.png" title="Save the date" style="
    margin: 10px;
    cursor: pointer;
" onclick="saveDate()">
<input type="text" class="text-black form-control jans_auction_date" oninput="saveDate()" id="auction_date" name="auction_date" value="" readonly="readonly" style="position: relative; top: auto; right: auto; bottom: auto; left: auto; transition: 1s all;">
                        </div>


<input type="button" value="Change list: ` + localStorage.getItem("listname") + `" id="listname" class="btn btn-primary btn-sm" onmousedown="showResetMem()" style="margin-top: 5px;"/>
<div id="janoptions" onclick="openNav('settings')">Options</div>

<span id="success_msg" class="success_msg" ></span>

<span id="repeatingcar_msg" class="repeatingcar_msg"></span>

<table class="sidetable" style="width:100%; height:210px;  background-color: lightslategray;    margin-top: 1px; border-radius:10px;">

<tbody><tr>
<td style="text-align:center; font-size:medium; color:white;">LOT</td>
<td colspan=2 style="text-align:center; font-size:medium; color:white;">PRICE</td>
</tr>


<tr style="height:30px">
<td id="lot_to_send" style="border-radius: 5px; background-color: black; padding:5px; text-align:center; font-size:large; color:white;"></td>
<td  colspan=2 id="auction_to_send" style="border-radius: 5px; background-color: black; text-align:center; padding:5px; font-size:large; color:white;"></td>
</tr>
<tr>
<td><span id="delayStatus" style="color:skyblue;">Status:</span></td>
<td colspan=2 id="send_status" ></td></tr>
<tr>
<td>
<span>JDB</span><span id="carcount" style=" color: floralwhite; margin-left: 10px; font-size: large;"></span>
</td>
<td colspan=2><input type="button" value="Reset Counter" id="clearcount" class="print-button" onmousedown="clearCount()" ></td>
</tr>    
<tr>

<td>
<span>GSS</span><span id="carcountgss" style=" color: floralwhite; margin-left: 10px; font-size: large;"></span>
</td>
<td  colspan=2><input type="button" value="Reset Counter" id="clearcountgss" class="print-button" onmousedown="clearCountGSS()" ></td>
</tr>    

<tr>
<td>
<input type="button" value="Sort by LOT" id="sortbylot" onmousedown="sortbylot()" class="print-button" style="    width: 100px;    font-size: small;">
</td>
<td colspan=2>
<input type="button" value="Sort A-Z" id="sortbyname" onmousedown="sortbyname()" class="print-button" style="    width: 100px;    font-size: small;">
</td>
</tr>
<tr>
<td>
<input type="button" value="Load Data" id="showreauctioned" onmousedown="showreauctioned()" class="print-button" style="width: 100px;    font-size: small;">
</td>
<td colspan=2>
<input type="button" value="Auction filter" id="filterKaijo" onmousedown="filterKaijo()" class="print-button" style="    width: 100px;    font-size: small;">
</td>
</tr>
<tr>

<td>
<input type="button" value="Show Bids" id="showprices" onmousedown="showprices()" class="print-button" style="    width: 100px;    font-size: small;">
</td>

<td>
<span class="vertex">Hide Seen</span>
<label class="switch">
  <input id="hideSeen" type="checkbox">
  <span class="slider round"></span>
</label>
</td><td>
    <span class="vertex">Hide Listed</span>
<label class="switch">
  <input id="hideList" type="checkbox">
  <span class="slider round"></span>
</label>
</td>

</tr>
</tbody>
</table>


<div id="alltolist">

<input type="button" value="A" title="All to list A" id="alist" class="janlogin" onmousedown="alltomylist(event)" />
<input type="button" value="B" title="All to list  B" id="blist" class="janlogin" onmousedown="alltomylist(event)" />
<input type="button" value="C" title="All to list  C" id="clist" class="janlogin" onmousedown="alltomylist(event)" />
<input type="button" value="D" title="All to list  D" id="dlist" class="janlogin" onmousedown="alltomylist(event)" />

</div>

<div id="autosendbuttons" onmouseleave="hideAutoSendButs()" >

<input type="button" value="Market Price" title="Compare your bid price to sold price. The report will be sent to spreadsheet" id="marketprice" style="height:25px;" class="janlogin" onmousedown="createReport()" />

<input type="button" value="Auto pick my cars" title="Add the cars I would usually bid on into my list" id="autopick" class="janlogin" onmousedown="autoPick()" style="height:25px;" />


<input type="button" value="All with previous bid price" title="Cars are identified by their chassis code" id="autosend" class="janlogin" onmousedown="autoSendReauctioned()" style="height:25px;" />
</div>


<input type="button" value="MORE" title="More menu buttons" id="autosend" class="btn btn-primary btn-sm" onmousedown="showAutoSendButs()"  style="height:25px;margin-bottom: 5px;" />
<input type="button" value="Add Price/Remark Fields" title="Add price and remark fields, also use alt key" id="addprices" class="btn btn-primary btn-sm" onmousedown="refreshCode()" style="height: 30px;margin-bottom: 5px;" />

<input type="button" value="Send all with 0 price" title="Send all cars in the current list to jjpurchase system" id="autosend" class="btn btn-primary btn-sm" onmousedown="sendLoaded()"   style="height:25px;margin-bottom: 5px;" />

<div id="resetMemDiv" onmouseleave="hideResetMem()" >

<input type="button" value="A" title="Set your current list to A" id="alist" class="janlogin" onmousedown="setCurrentList(event)" />
<input type="button" value="B" title="Set your current list to B" id="blist" class="janlogin" onmousedown="setCurrentList(event)" />
<input type="button" value="C" title="Set your current list to C" id="clist" class="janlogin" onmousedown="setCurrentList(event)" />
<input type="button" value="D" title="Set your current list to D" id="dlist" class="janlogin" onmousedown="setCurrentList(event)" />

</div>
Note!
<br>
<span id="notepricecolor" style="font-family: sans-serif;    font-size: xx-small;    color: cornsilk;">RED price: lower than start price</span>
<span id="notepricehint" style="font-family: sans-serif;    font-size: xx-small;    color: cornsilk;">Blue price: hint price</span>
<span id="noteprice" style="font-family: sans-serif;    font-size: xx-small;    color: cornsilk;">Black price: sent price</span>
<table style="width:100%;">
<tbody>
<tr><td>
Google account
</td><td>

</td></tr>
<tr><td>
<button id="signin-button" onclick="handleSignInClick()" class="print-button" style="width:80px" >Sign in</button>
</td><td>
<button id="signout-button" onclick="handleSignOutClick()" class="print-button" style="width:80px" >Sign out</button>
</td></tr>
</tbody>
</table>
</div>`;


	pageScriptS = window.document.createElement('script');
	pageScriptS.type = 'text/javascript';
	pageScriptS.async = true;
	pageScriptS.setAttribute('defer', '');
	pageScriptS.setAttribute('onload', 'this.onload=function(){};handleClientLoad()');
	pageScriptS.setAttribute('onreadystatechange', 'if (this.readyState === "complete") this.onload()');
	pageScriptS.src = 'https://apis.google.com/js/api.js';
	document.getElementsByTagName('body')[0].appendChild(pageScriptS);
	if ($("link#zebradps").length < 1) {

		var dateStyle = document.createElement("link");
		dateStyle.rel = "stylesheet";
		dateStyle.id = "zebradps";
		dateStyle.type = "text/css";
		dateStyle.href = resource_url+"javascripts/cdd/dist/css/default/zebra_datepicker.min.css";
		document.head.appendChild(dateStyle);
	}
	var dateScript = document.createElement("script");
	dateScript.setAttribute('onload', 'this.onload=function(){};initiateDate()');
	dateScript.setAttribute('onreadystatechange', 'if (this.readyState === "complete") this.onload()');
	dateScript.async = true;
	dateScript.type = "text/javascript";
	dateScript.src = resource_url+"javascripts/cdd/dist/zebra_datepicker.min.js";
	document.body.appendChild(dateScript);



	if (!document.getElementById("myNav"))

	{

		var myStyle = document.createElement("link");
		myStyle.rel = "stylesheet";
		myStyle.type = "text/css";
		myStyle.href = resource_url+"javascripts/cdd/iaucnewmain.css";
		document.head.append(myStyle);




		var divel = document.createElement('div');

		divel.id = "myNav";
		divel.setAttribute("class", "overlay");
		divel.innerHTML = '<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>';


		document.body.insertBefore(divel, document.body.firstChild);
		
		var divel2 = document.createElement('div');
		divel2.setAttribute("class", "overlay-content");
		divel2.innerHTML = '<a href="#" onclick="handleSignInClick()">Sign in</a></br></br> <p id="notice1" style="color:aqua;">You must sign in to your google account to use all features</p> </br>';

		document.getElementById('myNav').append(divel2);
		
		var sheetnames = document.createElement('div');
		sheetnames.id = "sheet_names";
		sheetnames.innerHTML = 
		`<table class="table table-hover" id="sheet_table">
    <thead>
      <tr>
        <th>Select a sheet name. Data will be stored in the selected worksheet</th>
      </tr>
    </thead>
    <tbody>      
    </tbody>
  </table>
    `;		
		var bottomdiv = document.createElement('div');
		bottomdiv.id = "bottomdiv";
		bottomdiv.innerHTML = `<input type="text" placeholder="sheet title" id="sheettitle" readonly> <input id="setActiveSheet" type="button" class="btn btn-primary" value="OK" onclick="setActiveSheet()" disabled>`;

		document.getElementById('myNav').append(sheetnames);
		document.getElementById('myNav').append(bottomdiv);
		
		
		var quicksettings = document.createElement("div");
		quicksettings.id = "quick_settings";
		document.getElementById('myNav').append(quicksettings);
		
		quicksettings.innerHTML =	`<span id="qsmessage" class="bluetext">You need to select either <span class="orangetext">DATABASE</span> or <span class="greentext">GOOGLE SPREADSHEET</span></span>
        <table class="sidetable" style="width:100%; background-color: black; border-radius:10px;">
<tbody>
<tr style="height:22px">
<td style="padding:1px; text-align:center; font-size:medium; color:white;">Quick Settings</td>


</tr>
<tr>
<td>
<label class="optionslabel orangetext"><input class="SendDataToDB" class="mycheckbox" type="checkbox">Send data to jjpurchase system</label>
</td>
</tr>
<tr>
<td>
<label class="optionslabel greentext"><input class="SendDataToGSS" class="mycheckbox" type="checkbox">Send data to Google Spreadsheets</label>
</td>
</tr>
<tr>
<td>
<label class="optionslabel"><input id="autocheck" class="mycheckbox" type="checkbox">Auto Sayuri check (production year is displayed automatically. Experimental, use with caution)</label>
</td>
</tr>
<tr>
</tr>
<tr>
<td>
<label class="optionslabel"><input id="popversion2" class="mycheckbox" type="checkbox">Popup version 2 (full details view in popup, includes price/remark input)</label>
</td>
</tr>
<tr>
<td>
<label class="optionslabel"><input id="show_chassis_shift" class="mycheckbox" type="checkbox">Show Chassis Type</label>
</td>
</tr>

</tbody>



</table>
        `;
		
		

	}

	if (document.getElementById("credo") == null) {
		document.getElementById("error_view_area").innerHTML = txt1;
	}



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



	if (localStorage.getItem("today") == null || localStorage.getItem("today") != today) {
		localStorage.setItem("today", today);

		document.getElementsByClassName("jans_auction_date")[0].value = today;
		document.getElementById("datemanualchange").setAttribute("src", "https://data.htscdn.org/images/unlock.png");

	} else {
		if (localStorage.getItem("datemanualchange") == today) {

			document.getElementById("datemanualchange").setAttribute("src", "https://data.htscdn.org/images/lock.png");
			document.getElementsByClassName("jans_auction_date")[0].value = localStorage.getItem("auctiondate");
		} else {
			document.getElementsByClassName("jans_auction_date")[0].value = today;
			document.getElementById("datemanualchange").setAttribute("src", "https://data.htscdn.org/images/unlock.png");
		}
	}



	if (window.origin == "https://www.iauc.co.jp") {
		//first check cookie
		pageUrl = window.location;

		if (pageUrl.href.indexOf("iauc.co.jp/detail") > 0) {

			//individual page
			console.log("single vehicle details view ");
			if (checkCookie(true) != null) {

				//indInit();
				//console.log("indInit called from initiate()");

				//test 9-1-2018
				//refreshCode();
				if (Boolean(refreshcodelaunch)) {
					
				}
				else{
					refreshcodelaunch = true;
					refreshCode();
				}

				//alert("Price input in this view is not supported");
			} else {
				setDefaults();
				//alert("Price input in this view is not supported");

			}

		} else {

			//document.getElementsByClassName("mode-button")[0].setAttribute("onmousedown","refreshCode()");




			console.log("list vehicle view");
			if (checkCookie(true) != null && document.getElementsByClassName("rowp".length == 0)) {
				//setDefaults();
				//init();

				//console.log("init() called from initiate");

				//test 12-27-2017
				refreshCode();
			} else {
				setDefaults();
				//alert("You need to select a default list.\r\nClick 'Selected List: undefined' button below date field");

				document.getElementById("listname").value = "Selected list: " + list;
				var obg = $("#listname").css("background");
				fi = setInterval(function () {
					flashButton(document.getElementById("listname"), obg);
				}, 1000);

			}
		}


	}
	jun = localStorage.getItem("janusername");

	selcountry = localStorage.getItem("jans_country");

	document.getElementById("janusername").value = jun;
	document.getElementById("janpassword").value = localStorage.getItem("janpassword");

	setDefaults();
	setEventListeners();
}

function flashButton(but, obg) {
	//get original bg color	


	//console.log("flashing", flash);
	if (flash) {
		$(but).css("background", "red");
		flash = false;
	} else {
		$(but).css("background", obg);
		flash = true;
	}

}

function setActiveSheet() {	
	
	
	localStorage.setItem("SendDataToGSS", $(".SendDataToGSS")[0].checked);
		closeNav();
	$(".SendDataToGSS").prop("checked",Boolean(localStorage.getItem("SendDataToGSS") && localStorage.getItem("activesheet") && localStorage.getItem("dlm_spreadsheet_id")));	
}

function showreauctioned() {
	loadchassis = true;
	document.getElementById("showreauctioned").removeAttribute("style", "color:greenyellow; width:100px; font-size: small;");
	document.getElementById("showreauctioned").setAttribute("style", "width:100px; font-size: small; background: linear-gradient(to bottom,#666 0,#090909 100%);");
	clearInterval(fi);
	autoSend();
}

function sendLoaded() {

	//alert("Load data first!");
	//$("#showreauctioned").css("background", "black");



	if (sendObject.aucname.length > 1) {
		presend();
	} else {
		for (var i = 0; i < $(".rowp").length; i++) {
			for (var l = 0; l < Object.keys($(".rowp")[i]).length; l++) {
				try {
					sendObject[Object.keys($(".rowp")[i])[l]].push($(".rowp")[i][Object.keys($(".rowp")[i])[l]][0]);
					//console.log(Object.keys($(".rowp")[i])[l], $(".rowp")[i][Object.keys($(".rowp")[i])[l]][0]);
				} catch (e) {
					//console.log(e.message);
				}
			}
		}
		//send by choice to JDB or GSS
		presend();



	}

	function presend() {
		if (Boolean(localStorage.getItem("SendDataToDB"))) {
			//sendtoDatabase("insert", sendObject);
			sendOK = true;
			showreauctioned();
		} else if (!Boolean(localStorage.getItem("SendDataToDB")) && !Boolean(localStorage.getItem("SendDataToGSS"))) {
			//alert(warning1);
			
			openNav("settings");
			
		}

		if (Boolean(localStorage.getItem("SendDataToGSS"))) {
			if (sendtogssOK == "true") {
				makeApiCall(sendObject);
			} else {
				//document.getElementById("showreauctioned").setAttribute("style", "color:greenyellow; width:100px; font-size: small;");

				alert("Because you have chosen to send data to GSS,\r\nPress LOAD DATA button first to load chassis codes");
				var obg = "linear-gradient(to bottom,#666 0,#090909 100%)";
				clearInterval(fi);
				fi = setInterval(function () {
					flashButton(document.getElementById("showreauctioned"), obg);
				}, 500);


			}
		}

	}
}




function showprices() {
	$(".fetchprices").click();
}


function autoSendReauctioned() {
	alert("Function disabled");
}

function showAutoSendButs() {

	$("#autosendbuttons").css({
		"display": "table-row"
	});
	$("#autosendbuttons").css({
		"opacity": 1
	});
	$("#autosendbuttons").css({
		"width": "210px"
	});
}


function hideAutoSendButs() {

	$("#autosendbuttons").css({
		"opacity": 0
	});
	$("#autosendbuttons").css({
		"width": "0px"
	});
	setTimeout(function () {
		$("#autosendbuttons").css({
			"display": "none"
		});
	}, 500);
}





function findMS() {
	var msf = false;
	for (var i = 0; i < $("script").length; i++) {
		if ($("script")[i].src.indexOf("jjinventorysystem") > 0) {
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




function alltomylist(event) {
	//console.log(event.target.value);
	$("input[value=" + event.target.value + "]").each(function () {
		this.click();
	});
}


function setCurrentList(event) {
	//console.log(event.target.value);
	$("#resetMemDiv").val(event.target.value);
	localStorage.setItem("listname", event.target.value);
	listName = event.target.value;
	document.getElementById("listname").value = "Selected list: " + event.target.value;
	clearInterval(fi);
	hideResetMem();
	$("#listname").css("background", "#337ab7");

	try {
		hideTutorial();

	} catch (e) {

	}
}

function showResetMem() {
	showsl = true;

	var sl = setTimeout(function () {
		if (showsl) {
			$("#resetMemDiv").css("display", "table-row");
			$("#resetMemDiv").css("opacity", "0");
			$("#resetMemDiv").css("z-index", "1000000000");
			setTimeout(function () {
				$("#resetMemDiv").css("width", "210px");
				$("#resetMemDiv").css("opacity", "1");
				var tg = document.getElementById("listname").getBoundingClientRect(); //referencing the target field from the sidebar
				$("#resetMemDiv").css("top", tg.top);
			}, 100);
		}
	}, 300);

}


function hideResetMem() {
	showsl = false;
	$("#resetMemDiv").css("opacity", "0");
	$("#resetMemDiv").css("width", "0px");
	setTimeout(function () {
		$("#resetMemDiv").css("display", "none");
	}, 100);
}



function refreshCode() {
	
	$(".alarm-icon").hide();

	var scripts = [];
	$("script").each(function () {

		if (!checkScriptArray(this.src)) {
			scripts.push(this.src);
		} else {
			$(this).remove();
		}
	});

	function checkScriptArray(v) {
		var bul = false;
		for (var i = 0; i < scripts.length; i++) {
			if (scripts[i] == v) {
				bul = true;
			}
		}
		return bul;
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

	var carcnt = localStorage.getItem("carcount");
	var carcountgss = localStorage.getItem("carcountgss");

	if (carcnt != undefined || carcnt != null) {
		$("#carcount")[0].innerText = carcnt;
	} else if (carcnt == "0") {
		$("#carcount")[0].innerText = carcnt;
	} else {
		$("#carcount")[0].innerText = 0;
	}
	if (carcountgss != undefined || carcountgss != null) {
		$("#carcountgss")[0].innerText = carcountgss;
	} else if (carcountgss == "0") {
		$("#carcountgss")[0].innerText = carcountgss;
	} else {
		$("#carcountgss")[0].innerText = 0;
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


	pageUrl = window.location;

	if (pageUrl.href.indexOf("iauc.co.jp/detail") > 0) {


		//individual page
		//console.log("single vehicle details view ");
		if (checkCookie(true) != null) {
			//console.log("indInit from refreshCode");
			//removeGapi();


			//refreshCode();
	
			indInit();

		}

	} else {
		if (checkCookie(true) != null) {
			//removeGapi();
			clearTimeout(sto);
			sto = setTimeout(function () {
				init();
				console.log("2000 ms");
			}, 1000);
			//restarter();

		} else {

		}

	}




	//console.log("refreshcode complete");

}

function changeSideBar() {

	//console.log(window.innerHeight, window.innerWidth, "window resize");
	if ($(document).width() < 1800) {
		$("#lever").css("display", "block");
	} else {
		$("#lever").css("display", "none");
	}
	
}

function setEventListeners() {
	//window.removeEventListener("resize", changeSideBar);
	window.addEventListener("resize", changeSideBar);



	$("#lever").off().on("mouseover", function () {

		$("#credo").css("margin-left", "5px");
		try {
			rechecktut();
		} catch (e) {

		}

	});
	$("#credo").off().on("mouseleave", function () {
		$("#credo").css("margin-left", "-250px");
		try {
			rechecktut();
		} catch (e) {

		}

	});


	$("#popversion2").off().on("click", function () {

		if ($("#popversion2")[0].checked) {
			localStorage.setItem("popversion2", $("#popversion2")[0].checked);

		} else {
			localStorage.setItem("popversion2", "");
		}
		console.log("pop screen version ");
	});

	$("#autocheck").off().on("click", function () {

		if ($("#autocheck")[0].checked) {
			localStorage.setItem("autocheck", $("#autocheck")[0].checked);

		} else {
			localStorage.setItem("autocheck", "");
		}
		console.log("autocheck set");
	});

	$(".SendDataToDB").off().on("click", function () {

		if ($(this).prop("checked")) {

			localStorage.setItem("SendDataToDB", $(".SendDataToDB")[0].checked);
			closeNav();

		} else {
			localStorage.setItem("SendDataToDB", "");
		}

		console.log("setting db input ");
	});
	$(".SendDataToGSS").off().on("click", function () {
		
		localStorage.removeItem("dlm_spreadsheet_id");
		localStorage.removeItem("activesheet");
		localStorage.setItem("SendDataToGSS", "");
		
		if ($(this).prop("checked")) {
			
			closeNav();
			loadPicker();
			
		} else {
			
		}

		console.log("setting gss input ");
		$(".SendDataToGSS").prop("checked",Boolean(localStorage.getItem("SendDataToGSS") && localStorage.getItem("activesheet") && localStorage.getItem("dlm_spreadsheet_id")));	
	});

	//////////////
	$("#hideSeen").off().on("click", function () {

		if ($("#hideSeen")[0].checked) {
			//localStorage.setItem("hideSeen", $("#hideSeen")[0].checked);
			$(".list-body-image.visited").parent().parent().parent().hide();
		} else {

			//localStorage.setItem("hideSeen", "");
			$(".list-body-image.visited").parent().parent().parent().show();
		}
		console.log("setting hideSeen ");
	});

	$("#hideList").off().on("click", function () {

		if ($("#hideList")[0].checked) {

			//localStorage.setItem("hideList", $("#hideList")[0].checked);

			for (var i = 0; i < $("input[type=button]").length; i++) {
				if ($("input[type=button]").eq(i).attr("data-mode") == "delete" || $("input[type=button]").eq(i).attr("class").indexOf("active")>0) {
					$("input[type=button]").eq(i).parent().parent().parent().hide();
				}
			}


		} else {

			//localStorage.setItem("hideList", "");
			for (var i = 0; i < $("input[type=button]").length; i++) {
				if ($("input[type=button]").eq(i).attr("data-mode") == "delete" || $("input[type=button]").eq(i).attr("class").indexOf("active")>0) {
					$("input[type=button]").eq(i).parent().parent().parent().show();
				}
			}
		}

		//console.log("setting hideList ", hideList);
	});

	

	$("#show_chassis_shift").off().on("click", function () {

		if ($("#show_chassis_shift")[0].checked) {
			localStorage.setItem("show_chassis_shift", $("#show_chassis_shift")[0].checked);
			refreshCode();

		} else {
			localStorage.setItem("show_chassis_shift", "");

		}


	});
}

function markVisited() {
	$(".row_detail_link").each(function () {

		localStorage.setItem(this.href.substr(0, this.href.indexOf("&") + 1) + "visited", "visited");
	});

}

function setDefaults() {

	if (stt > 0) {
		clearTimeout(stt);
	}
	try {
		rechecktut();
	} catch (e) {

	}




	if (localStorage.getItem("lastVehicle") != null) {
		document.getElementById("auction_to_send").innerText = localStorage.getItem("lastVehicle")["price"] != undefined ? localStorage.getItem("lastVehicle")["price"] : "";
		document.getElementById("lot_to_send").innerText = localStorage.getItem("lastVehicle")["lot"] != undefined ? localStorage.getItem("lastVehicle")["lot"] : "";
	}

	if (window.outerWidth < 1850) {
		document.getElementById("lever").setAttribute("style", "display:block;");

	}
	


	document.getElementById("show_chassis_shift").checked = Boolean(localStorage.getItem("show_chassis_shift"));
	document.getElementById("popversion2").checked = Boolean(localStorage.getItem("popversion2"));
	document.getElementById("autocheck").checked = Boolean(localStorage.getItem("autocheck"));
	$(".SendDataToDB").prop("checked", Boolean(localStorage.getItem("SendDataToDB")));
	$(".SendDataToGSS").prop("checked",Boolean(localStorage.getItem("SendDataToGSS") && localStorage.getItem("activesheet") && localStorage.getItem("dlm_spreadsheet_id")));	
	
	

/*
	if (localStorage.getItem("hideSeen") == null || localStorage.getItem("hideSeen") == "") {

		var seencars = document.querySelectorAll(".list-body-image.visited:not(.newcar)");
		for (var i = 0; i < seencars.length; i++) {
			seencars[i].parentElement.parentElement.parentElement.setAttribute("style", "display:block");
		}
	} else {
		$(".list-body-image.visited").parent().parent().parent().hide();

	}

	if (localStorage.getItem("hideList") == null || localStorage.getItem("hideList") == "") {

		//console.log(hideList, "hideList");

		var listedcars = document.querySelectorAll("input[type=button][data-mode=delete]");
		for (var i = 0; i < listedcars.length; i++) {
			listedcars[i].parentElement.parentElement.parentElement.setAttribute("style", "display:block");
		}


	} else {

		var listedcars = document.querySelectorAll("input[type=button][data-mode=delete]");
		for (var i = 0; i < listedcars.length; i++) {
			listedcars[i].parentElement.parentElement.parentElement.setAttribute("style", "display:none");
		}
	}
	*/
	
	
}

function delayedRefreshCode() {
	var pageUrl = window.location.href;
	var retrycount = 0;




	recStart();



	function recStart() {
		var rcs = setTimeout(function () {


			retrycount++;
			var newPageUrl = window.location.href;



			if (pageUrl.indexOf("iauc.co.jp/vehicle/carlist") > 0 || pageUrl.indexOf("mylist") > 0) {

				try {

					refreshCode();
				} catch (e) {
					console.log(e.message);

				}





			} else if (pageUrl.indexOf("iauc.co.jp/detail") > 0 && document.getElementsByClassName("rowp").length == 0) {

				//delayed call to the previously loaded script

				try {
					refreshCode();
					console.log("detail page reload");

				} catch (e) {
					console.log(e.message);

				}

			} else if (document.getElementsByClassName("rowp").length > 0) {
				console.log("page elements are ready");

				//initiate a recheck sequence to check for rowp again
				restarter();
			}



		}, 500);
	}
}

function restarter() {
	var times_checked = 0;
	rs = setInterval(function () {
		if (document.getElementsByClassName("rowp").length == 0) {
			refreshCode();
			clearInterval(rs);
		} else if (times_checked > 3) {
			clearInterval(rs);
			console.log("RS timer cleared");
		}


	}, 1000);
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
					rdb[i].parentElement.style["background-color"] = "paleturquoise";					
					rdb[i].style["font-weight"] = "bold";
					rdb[i].style["font-size"] = "small";

					try {

						$(rdb[i]).parent().parent().eq(0).find("input[value=" + listName.toUpperCase() + "]").eq(0).hasClass("active-" + listName.toLowerCase()) ? console.log("already listed") : $(rdb[i]).parent().parent().eq(0).find("input[value=" + listName.toUpperCase() + "]")[0].click();
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


function init() {


	sendtogssOK = "false";
	sendObjArray = [];
	createSO();

	var elements = document.getElementsByClassName('list-body-image body-image-large lazy-image');

	for (var i = 0; i < elements.length; i++) {
		if (elements[i].getAttribute("data-original").indexOf("iauc") > 0) {
			elements[i].setAttribute("src", elements[i].getAttribute("data-original"));
		}
	}
	document.getElementById("jans_country").value = ((localStorage.getItem("jans_country") != null) ? localStorage.getItem("jans_country") : "");
	selcountry = document.getElementById("jans_country").value;






	listName = getCookie("listname");
	var lr = $(".list-body-buttons");
	for (var i = 0; i < lr.length; i++) {




		var colss = translateGrade($('.list-colorname-colorid').eq(i).find("p").eq(0).text().trim().replace(/[ç³»æ›¿]/g, "")) != undefined ? translateGrade($('.list-colorname-colorid').eq(i).find("p").eq(0).text().trim().replace(/[ç³»æ›¿]/g, "")) : translateGrade($('.list-colorname-colorid').eq(i).find("p").eq(0).text().trim().replace(/[ç³»æ›¿]/g, ""));

		var mycarname = translateName($('.carname').eq(i).text().trim());

		var cgrade = $('.grade').eq(i).text().trim();

		$(".list-row").eq(i).append("<div class='rowx'></div>");



		$(".rowx").eq(i).append("<div class='detprogbar'></div>");

		$(".rowx").eq(i).append("<input type='button' value='S' class='rowsend' onmouseup='enterPressed(event)' onmousedown='changepricecolor(event)'>");
		$(".rowx").eq(i).append("<input placeholder='price' class='rowp' onkeyUp='changepricecolor(event)' onkeypress='enterPressed(event)' onmouseup='windowFocused(event)'>");
		$(".rowx").eq(i).append("<input placeholder='comment' class='rowcom' onkeyUp='changepricecolor(event)' onkeypress='enterPressed(event)'>");
		$(".rowx").eq(i).append("<input class='fetchprices' value='P' type='button' onclick='loadExisting(event)'>");
		$(".rowx").eq(i).append("<div class='loadingicon'><img class='loadingimg' src='"+resource_url+"javascripts/cdd/loading.gif'></div>");



		//$('.type').eq(i).text().trim();
		var mytrans = $('.list-shift-air').eq(i).find("p").eq(0).text().trim();
		var chtype = $('p.type').eq(i).text().trim();

		$(".list-carimage").eq(i).append("<div class='mydiv'></div>")

		if (Boolean(localStorage.getItem("show_chassis_shift"))) {
			$(".list-carimage").eq(i).find(".mydiv").eq(0).append("<p class='mytype' style=' font-size: large; margin-top: 25px; font-weight: bold;'>" + chtype + "</p>");
			$(".list-carimage").eq(i).find(".mydiv").eq(0).append("<p class='mytype' style=' font-size: large; margin-top: 25px; font-weight: bold;'>" + mytrans + "</p>");
		}



		//var tlink = $(".rowp").eq(i).parent().parent().parent().parent().find("a")[0].href;
		var tlink = $(".rowp").eq(i).parent().parent().find("a")[0].href;
		tlink = tlink.substr(0, tlink.indexOf("&") + 1);
		var tla = localStorage.getItem(tlink);

		if (tla) {
			tla = tla.split(",");
			tla[0] = tla[0].split("=");
			tla[1] = tla[1].split("=");
			tla[0][1] != "" ? $(".rowp").eq(i).val(tla[0][1]) : $(".rowp").eq(i).val("");
			tla[1][1] != "" ? $(".rowcom").eq(i).val(tla[1][1]) : $(".rowcom").eq(i).val("");

			//console.log(tla[0][1], tla[1][1], tla);
		}




		//document.getElementsByClassName("rowp")[3].parentElement.parentElement.parentElement.parentElement.getElementsByClassName("body-image-large")[0].classList.add("visited");
		if (localStorage.getItem(tlink + "visited") != null || localStorage.getItem(tlink + "visited") == "visited") {

			document.getElementsByClassName("rowp")[i].parentElement.parentElement.getElementsByClassName("list-carimage")[0].getElementsByTagName("img")[0].classList.add("visited");

		} else {
			document.getElementsByClassName("rowp")[i].parentElement.parentElement.getElementsByClassName("list-carimage")[0].getElementsByTagName("img")[0].classList.add("newcar");
		}



		//


		$(".rowp")[i].aimage = [""];
		$(".rowp")[i].fimage = [""];
		$(".rowp")[i].rimage = [""];


		var detlink = tlink;

		detlink = detlink.substr(0, detlink.indexOf("&"));
		detlink = detlink.substr(detlink.indexOf("=") + 1);
		detlink = detlink.split("-");


		$(".rowp")[i].aucname = [aucmapObj[detlink[0]]];

		$(".rowp")[i].remarks = [$(".rowcom").eq(i).val() != "" ? $(".rowcom").eq(i).val() : ""];
		var ddc = $(".list-body-buttons")[i].children[0].getAttribute("data-code") != null ? $(".list-body-buttons")[i].children[0].getAttribute("data-code") : "//" + $(".exhibit")[i].innerText;



		$(".rowp")[i].detailink = [tlink];

		//console.log("https://www.iauc.co.jp/detail/?vehicleId=140-"+ddc+"&");

		$(".rowp")[i].lotno = [ddc.match(/\-/g).length > 1 ? ddc.substr(ddc.indexOf("-") + 1).replace(/\-/g, "//") : ddc];

		$(".rowp")[i].ctype = [chtype != "" ? chtype : " "];

		$(".rowp")[i].clickcount = 0;




		var ddc = $(".list-body-buttons")[i].children[0].getAttribute("data-code") != null ? $(".list-body-buttons")[i].children[0].getAttribute("data-code") : "//" + $(".exhibit")[i].innerText;
		$(".rowp")[i].lotno = [ddc.match(/\-/g).length > 1 ? ddc.substr(ddc.indexOf("-") + 1).replace(/\-/g, "//") : ddc];


		var myyear = $('p.modelyear').eq(i).text().indexOf("å¹´") >= 0 ? Number($('p.modelyear').eq(i).text().substr(0, $('p.modelyear').eq(i).text().indexOf("å¹´"))) + 1988 : $('p.modelyear').eq(i).text();

		//grade = translateGrade(grade);
		$(".rowp")[i].year = [myyear != "" ? myyear : ""];

		$(".rowp")[i].carname = [mycarname.replace(/['`]/g, "") != "" ? mycarname.replace(/['`]/g, "") : ""];

		$(".rowp")[i].cgrade = [cgrade.replace(/['`]/g, "") != "" ? cgrade.replace(/['`]/g, "") : ""];
		$(".rowp")[i].chassiscode = [""];

		$(".rowp")[i].disp = [$('.displacement').eq(i).text().trim() != "" ? $('.displacement').eq(i).text().trim() : ""];

		$(".rowp")[i].inspect = [$('p.inspection').eq(i).text().trim().replace(/\s+/g, " ").replace(/ /g, " ").trim() != "" ? $('p.inspection').eq(i).text().trim().replace(/\s+/g, " ").replace(/ /g, " ").trim() : ""];
		var mil = $('.mileage').eq(i).text().indexOf("$") >= 0 || $('.mileage').eq(i).text().indexOf("#") >= 0 || $('.mileage').eq(i).text().indexOf("*") >= 0 ? $('.mileage').eq(i).text().replace(/[km:$]/g, "").replace(/,/g, "") + "km$" : $('.mileage').eq(i).text().replace(/[km:$]/g, "").replace(/,/g, "") + "km";



		$(".rowp")[i].mileage = [mil.replace(/åƒ/g, "000") != "" ? mil.replace(/åƒ/g, "000").replace(/,/g, "") : "0?"];

		$(".rowp")[i].ccolor = [colss.trim() != "" ? colss.trim() : ""];

		$(".rowp")[i].colorno = [$('.list-colorname-colorid').eq(i).find("p").eq(1).text().trim() != "" ? $('.list-colorname-colorid').eq(i).find("p").eq(1).text().trim() : ""];

		$(".rowp")[i].shift = [mytrans != "" ? mytrans : ""];

		$(".rowp")[i].air = [$('.list-shift-air').eq(i).find("p").eq(1).text().trim() != "" ? $('.list-shift-air').eq(i).find("p").eq(1).text().trim() : ""];


		$(".rowp")[i].rate = [$('.list-rate-evaluation').eq(i).find("p").eq(0).text().trim() != "" ? $('.list-rate-evaluation').eq(i).find("p").eq(0).text().trim() : ""];

		$(".rowp")[i].ext = [$('.list-rate-evaluation').eq(i).find("p").eq(1).text().trim().substr(0, 1) != "" ? $('.list-rate-evaluation').eq(i).find("p").eq(1).text().trim().substr(0, 1) : ""];

		$(".rowp")[i].inter = [$('.list-rate-evaluation').eq(i).find("p").eq(1).text().trim().substr(2) != "" ? $('.list-rate-evaluation').eq(i).find("p").eq(1).text().trim().substr(2) : ""];

		$(".rowp")[i].values = ["0"];
		var tranval;
		if ($(".transactionvalue")[i] != undefined) {
			tranval = $(".transactionvalue").eq(i).text().replace(/,/g, "");
		} else {
			tranval = "";
		}
		if ($(".img-transactionstatus")[i] != undefined) {
			transtat = $(".img-transactionstatus").eq(i).text().replace(/,/g, "");
		} else {
			transtat = "";
		}

		$(".rowp")[i].transactionvalue = [tranval];
		$(".rowp")[i].transactionstatus = [transtat];


		var sp = $('p.startprice').eq(i).text().trim();
		sp = sp.indexOf(",") > 0 ? sp.replace(/,/g, "") : sp.substr(0, sp.lastIndexOf("."));

		$(".rowp")[i].startprice = [sp != "" ? sp : ""];

		sendObjArray.push($(".rowp")[i]);


	}


	$(".rowp").css({
		"z-index": "10",
		"width": "40px",
		"height": "26px",
		"font-family": "sans-serif",
		"font-size": "small",
		"font-weight": "bold",
		"border": "solid 1px #707070",

		"box-shadow": "0 0 5px 1px #969696",
		"text-align": "center",
		"background-color": "honeydew"
	});

	$("input.rowsend").css({
		"background-color": "lightgray",
		"margin-right": "2px",
		"margin-left": "1%",
		"height": "26px"
	});


	$(".rowcom").css({
		"width": "100px",
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


	for (var t = 0; t < $(".rowp").length; t++) {
		$(".rowp")[t].tabIndex = t + 1000;

	}



	if (document.getElementsByClassName("rowp").length > 100) {
		console.log("init() completed abnormally", document.getElementsByClassName("rowp").length);
		setTimeout(function () {
			refreshCode();
		}, 1000);

	}
	refreshcodelaunch = "";
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
	var chascode = $("#detail-name")[0].innerText.trim().replace(/\s+/g, " ");
	var fchas = getToyotaChassis(chascode);
	chascode = chascode.substr(chascode.lastIndexOf(" ") + 1);
	if (chascode.match(/-/g).length > 1) {
		var cha = chascode.substring(chascode.indexOf("-") + 1, chascode.lastIndexOf("-"));
		var chanu = chascode.substr(chascode.lastIndexOf("-") + 1);
		console.log(cha, chanu, "dual hyphen");
	} else {
		var cha = chascode.substr(0, chascode.lastIndexOf("-"));
		var chanu = chascode.substr(chascode.indexOf("-") + 1);
		console.log(cha, chanu, "regular single hyphen");
	}

	//console.log(cha, chanu);

	var tla = localStorage.getItem(cha + "-" + chanu);

	if (tla) {
		tla = tla.split(",");
		tla[0] = tla[0].split("=");
		tla[1] = tla[1].split("=");
		tla[0][1] != "" ? $(".rowp").eq(0).val(tla[0][1]) : $(".rowp").eq(0).val("");
		tla[1][1] != "" ? $(".rowcom").eq(0).val(tla[1][1]) : $(".rowcom").eq(0).val("");

		//console.log(tla[0][1], tla[1][1], tla);
	}

	document.styleSheets[0].insertRule("h1{background-color:olive; ", 1);



	try {
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


		form1.id = "postform";
		form1.setAttribute("accept-charset", "utf-8");
		document.getElementById('chassiformholder').appendChild(form1);




		var resultdiv = document.createElement('div');
		resultdiv.id = "oliacresponse";
		document.getElementById('chassiformholder').appendChild(resultdiv);


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



		chead = fchas.substr(0, fchas.indexOf("-"));
		ctail = fchas.substr(fchas.indexOf("-") + 1);

		var td1 = document.createElement('input');
		td1.setAttribute("type", "text");
		td1.setAttribute("name", "chassis_code");
		td1.setAttribute("style", "width:60px");
		td1.setAttribute("placeholder", "Code");
		td1.setAttribute("class", "large-input");
		td1.setAttribute("value", chead);
		document.getElementById('tdata1').appendChild(td1);
		var td2 = document.createElement('input');
		td2.setAttribute("type", "text");
		td2.setAttribute("name", "chassis_no");
		td2.setAttribute("style", "width:90px");
		td2.setAttribute("placeholder", "Number");
		td2.setAttribute("class", "large-input");
		td2.setAttribute("value", ctail);
		document.getElementById('tdata2').appendChild(td2);
		var td3 = document.createElement('input');



		td3.setAttribute("id", "chassisnochecksubmit");
		td3.setAttribute("class", "button print-button");
		td3.setAttribute("onclick", "checkChassisNumber(chead,ctail)");

		td3.setAttribute("type", "button");
		td3.setAttribute("value", "Find");
		document.getElementById('tdata3').appendChild(td3);



		/*
		//MESSAGE
		// The ID of the extension we want to talk to.
			var editorExtensionId = "imnafijjefhciebgkkkmniiikggddmdk";			
		//Call the oliac caller:
		chrome.runtime.sendMessage(editorExtensionId, {message: "oliac"},
  		function(response) {
    	console.log(response, "message sent");
		});
		*/



		var lot = document.createElement('h3');

		lot.innerText = chascode;
		lot.id = "lot";
		lot.hidden = true;

		document.getElementsByTagName('body')[0].appendChild(lot);

		document.getElementsByClassName("large-input")[0].style["width"] = "110px";
		document.getElementsByClassName("large-input")[1].style["width"] = "110px";
	} catch (e) {
		refreshCode();
	}

}

function checkChassisNumber(ch, ct) {
	console.log("checkChassisNumber");
	chrome.runtime.sendMessage(editorExtensionId, {
		message: 'oliac',
		chassis_code: ch,
		chassis_no: ct
	}, function (response) {
		try {
			console.log(response.message);
		} catch (e) {
			alert("You are using an old version of the extension. Update the extension");
		}
	});
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
				

				refreshcodelaunch = "";

				try {
					$("#btn-next").click();

				} //console.log(e.keyCode, "Right", event.target, $("input[name='chassis_code']").eq(0) );
				catch (e) {
					console.log(e.message);
				}

			}

		} else if (e.keyCode == 37) {
			if (event.target != document.getElementsByClassName("large-input")[0]) {
				//console.log(e.keyCode, "Left");
				
				refreshcodelaunch = "";

				try {
					$("#btn-prev").click();

				} catch (e) {
					console.log(e.message);
				}


			}
		}

	});


	if (document.getElementsByClassName("rowp").length == 0) {



		document.getElementById("jans_country").value = ((localStorage.getItem("jans_country") != null) ? localStorage.getItem("jans_country") : "");

		listName = getCookie("listname");
		listName = listName.toLowerCase();

		$("#detail-info").append("<div class='rowx'></div>");

		$(".rowx").eq(0).append("<input placeholder='comment' class='rowcom' onkeypress='enterPressedInd(event)'>");
		$(".rowx").eq(0).append("<input placeholder='price' class='rowp' onkeypress='enterPressedInd(event)'>");
		$(".rowx").eq(0).append("<input class='fetchprices' value='P' type='button' onclick='loadExisting(event)' style='float:right; margin-right:1%'>");
		$(".rowx").eq(0).append("<div class='loadingicon' ><img class='loadingimg'  src='"+resource_url+"javascripts/cdd/loading.gif'></div>");

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
			"margin-right": "1%",
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
			"margin-right": "5%"
		});
		$("h1").css({
			"background-color": "black"
		});

		//var inf = getIndPageContent();

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
		$("h4").filter(":contains('Auction House')").parent().children("p")[0].innerText
		try {
			$(".rowp")[0].aucname = [getAucname($("h4").filter(":contains('Auction House')").parent().children("p")[0].innerText.match(/^\D+[[]/g) ? $("h4").filter(":contains('Auction House')").parent().children("p")[0].innerText.match(/^\D+[[]/g)[0].replace(/[\s[]/g, " ") : $("h4").filter(":contains('Auction House')").parent().children("p")[0].innerText)];

		} catch (e) {
			$(".rowp")[0].aucname = [getAucname($("h4").filter(":contains('ä¼šå ´å')").parent().children("p")[0] != undefined ? $("h4").filter(":contains('ä¼šå ´å')").parent().children("p")[0].innerText.match(/^\D+[[]/g)[0].replace(/[\s[]/g, " ") : $("h4").filter(":contains('ä¼šå ´å')").parent().children("p")[0].innerText)];

		}

		try {
			$(".rowp")[0].lotno = [$("h4").filter(":contains('Number of')").parent().children("p")[0].innerText.trim() + "//" + $("h4").filter(":contains('Lot')").parent().children("p")[0].innerText.trim()];
		} catch (e) {
			$(".rowp")[0].lotno = [$("h4").filter(":contains('é–‹å‚¬å›žæ•°')").parent().children("p")[0].innerText.trim() + "//" + $("h4").filter(":contains('å‡ºå“ç•ª')").parent().children("p")[0].innerText.trim()];
		}



		var cd = $("#detail-name");
		var cdc = cd.find("p")[cd.find("p").length - 1].innerText.replace(/\s+/g, " ");
		cdc = cdc.substring(cdc.lastIndexOf(" ") + 1, cdc.indexOf("-"));

		$(".rowp")[0].ctype = [cdc];

		try {
			$(".rowp")[0].year = [$("h4").filter(":contains('Year')").parent().children("p")[0].innerText];
		} catch (e) {
			$(".rowp")[0].year = [$("h4").filter(":contains('å¹´å¼')").parent().children("p")[0].innerText];
		}




		var cd2 = cd;
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

		cdc2 = translateGrade(cdc2);

		$(".rowp")[0].carname = [cdc2.replace(/['`]/g, "")];

		var priceLink = "https://www.iauc.co.jp" + $("#btn-print").attr("data-iauc").replace(/pdf/g, "");
		priceLink = priceLink.substr(0, priceLink.indexOf("&") + 1);

		$(".rowp")[0].detailink = [priceLink];
		
		
		var chascode = getChassisInd();
		$(".rowp")[0].chassiscode = chascode;
		var tla = localStorage.getItem(chascode);

	if (tla) {
		tla = tla.split(",");
		tla[0] = tla[0].split("=");
		tla[1] = tla[1].split("=");
		tla[0][1] != "" ? $(".rowp").eq(0).val(tla[0][1]) : $(".rowp").eq(0).val("");
		tla[1][1] != "" ? $(".rowcom").eq(0).val(tla[1][1]) : $(".rowcom").eq(0).val("");
		$(".rowx").css("background-color", "royalblue");
		$(".rowx").css("border-radius", "8px");
		$(".rowx").css("margin-left", "-10px");
		$(".rowx").css("padding", "10px");
		
		$(".rowx").css("box-shadow", "0 0 5px 5px midnightblue");		     
		
		//console.log(tla[0][1], tla[1][1], tla);
	}

		
		
		//console.log($(".rowp")[0].carname, ", " , $(".rowp")[0].ctype);

		try {
			var grade = $("h4").filter(":contains('Grade')").parent().children("p")[0] != undefined ? $("h4").filter(":contains('Grade')").parent().children("p")[0].innerText.trim() : $("h4").filter(":contains('Grade')").parent().children("p")[0].innerText.trim();
		} catch (e) {
			var grade = $("h4").filter(":contains('ã‚°ãƒ¬ãƒ¼ãƒ‰')").parent().children("p")[0].innerText;
		}



		grade = translateGrade(grade);
		try {
			var incol = $("h4").filter(":contains('Color')").parent().children("p")[0].innerText.trim();
		} catch (e) {
			console.log(e.message);
			var incol = $("h4").filter(":contains('è‰²')").parent().children("p")[0].innerText.trim();
		}
		try {
			var myair = $("h4").filter(":contains('A/C')").parent().children("p")[0] ? $("h4").filter(":contains('A/C')").parent().children("p")[0].innerText.trim() : $("h4").filter(":contains('A/C')").parent().children("p")[0].innerText.trim();

		} catch (e) {
			console.log(e.message);
			var myair = $("h4").filter(":contains('å†·æˆ¿')").parent().children("p")[0] ? $("h4").filter(":contains('å†·æˆ¿')").parent().children("p")[0].innerText.trim() : "";

		}

		$(".rowp")[0].cgrade = [grade.replace(/['`]/g, "")];

		try {
			$(".rowp")[0].disp = [$("h4").filter(":contains('cc')").parent().children("p")[0].innerText.trim().replace(/,/g, "")];
		} catch (e) {
			console.log(e.message);
			$(".rowp")[0].disp = [$("h4").filter(":contains('æŽ’æ°—é‡')").parent().children("p")[0].innerText.trim().replace(/,/g, "")];
		}


		$(".rowp")[0].inspect = [" "];

		try {
			$(".rowp")[0].mileage = [$("h4").filter(":contains('Odo')").parent().children("p")[0].innerText.trim().replace(/,/g, "").indexOf("$") >= 0 || $("h4").filter(":contains('Odo')").parent().children("p")[0].innerText.trim().replace(/,/g, "").indexOf("#") >= 0 || $("h4").filter(":contains('Odo')").parent().children("p")[0].innerText.trim().replace(/,/g, "").indexOf("*") >= 0 ? $("h4").filter(":contains('Odo')").parent().children("p")[0].innerText.trim().replace(/,/g, "").replace(/[km:$]/g, "").replace(/,/g, "") + "km$" : $("h4").filter(":contains('Odo')").parent().children("p")[0].innerText.trim().replace(/,/g, "").replace(/[km:$]/g, "").replace(/,/g, "") + "km"];

		} catch (e) {
			console.log(e.message);
			$(".rowp")[0].mileage = [$("h4").filter(":contains('èµ°è¡Œ')").parent().children("p")[0].innerText.trim().replace(/,/g, "").indexOf("$") >= 0 || $("h4").filter(":contains('èµ°è¡Œ')").parent().children("p")[0].innerText.trim().replace(/,/g, "").indexOf("#") >= 0 || $("h4").filter(":contains('èµ°è¡Œ')").parent().children("p")[0].innerText.trim().replace(/,/g, "").indexOf("*") >= 0 ? $("h4").filter(":contains('èµ°è¡Œ')").parent().children("p")[0].innerText.trim().replace(/,/g, "").replace(/[km:$]/g, "").replace(/,/g, "").replace(/[åƒ]/g, "000") + "km$" : $("h4").filter(":contains('èµ°è¡Œ')").parent().children("p")[0].innerText.trim().replace(/,/g, "").replace(/[km:$]/g, "").replace(/,/g, "").replace(/[åƒ]/g, "000") + "km"];

		}





		incol = translateGrade(incol);

		$(".rowp")[0].ccolor = [incol.trim() != "" ? incol.trim() : "see"];


		$(".rowp")[0].colorno = [""];

		try {
			$(".rowp")[0].shift = [$("h4").filter(":contains('Transmission')").parent().children("p")[0].innerText.trim()];
		} catch (e) {
			console.log(e.message);
			$(".rowp")[0].shift = [$("h4").filter(":contains('ã‚·ãƒ•ãƒˆ')").parent().children("p")[0].innerText.trim()];
		}

		$(".rowp")[0].air = [myair != "" ? myair : ""];

		try {
			$(".rowp")[0].rate = [$("h4").filter(":contains('Condition')").parent().children("p")[0].innerText.trim() != "" ? $("h4").filter(":contains('Condition')").parent().children("p")[0].innerText.trim() : ""];
		} catch (e) {
			console.log(e.message);
			$(".rowp")[0].rate = [$("h4").filter(":contains('è©•ä¾¡')").parent().children("p")[0].innerText.trim() != "" ? $("h4").filter(":contains('è©•ä¾¡')").parent().children("p")[0].innerText.trim() : ""];
		}

		$(".rowp")[0].ext = [""];
		$(".rowp")[0].inter = [""];

		try {
			var acday = $("h4").filter(":contains('Starting')").parent().children("p")[0].innerText.trim().replace(/[å¹´æœˆ]/g, "/").replace(/æ™‚/g, ":").replace(/åˆ†/g, "").replace(/æ—¥/g, "");
		} catch (e) {
			console.log(e.message);
			var acday = $("h4").filter(":contains('é–‹å‚¬æ—¥')").parent().children("p")[0].innerText.trim().replace(/[å¹´æœˆ]/g, "/").replace(/æ™‚/g, ":").replace(/åˆ†/g, "").replace(/æ—¥/g, "");
		}

		acday = acday.substr(0, acday.indexOf(" "));

		$(".rowp")[0].starttime = [$(".jans_auction_date").eq(0).val()];

		//$(".rowp")[0].enddate = [$(".jans_auction_date").eq(0).val()];
		$(".rowp")[0].starttime2 = [$(".jans_auction_date").eq(0).val()];

		$(".rowp")[0].transactionvalue = [""];
		$(".rowp")[0].transactionstatus = [""];


		var asday = acday;


		try {
			var acprice = $("h4").filter(":contains('Price')").parent().children("p")[0].innerText.trim();
		} catch (e) {
			console.log(e.message);
			var acprice = $("h4").filter(":contains('ã‚¹ã‚¿ãƒ¼ãƒˆ')").parent().children("p")[0].innerText.trim();
		}


		$(".rowp")[0].startprice = [acprice != "" ? acprice : ""];

		//$(".rowp")[0].sched = [getScheduledb(i)];


		setTimeout(function () {
			$(".rowp").eq(0).focus();
			if (!document.getElementById("man-year-find-home")) {
				injectSayuri();
			} else {

				/*
				var chascode = $("#detail-name")[0].innerText.trim().replace(/\s+/g, " ");
				chascode = chascode.substr(chascode.lastIndexOf(" ") + 1);
				if (chascode.match(/-/g).length > 1) {
					var cha = chascode.substring(chascode.indexOf("-") + 1, chascode.lastIndexOf("-"));
					var chanu = chascode.substr(chascode.indexOf("-") + 1);

				} else {
					var cha = chascode.substr(0, chascode.lastIndexOf("-"));
					var chanu = chascode.substr(chascode.indexOf("-") + 1);
				}
				*/

				//console.log(cha, chanu);
				var chascode = document.querySelectorAll("h3[id=lot]")[document.querySelectorAll("h3[id=lot]").length - 1].innerText;
				document.getElementsByClassName("large-input")[0].value = chascode.substr(0, chascode.indexOf("-"));
				document.getElementsByClassName("large-input")[1].value = chascode.substr(chascode.indexOf("-") + 1);
			}

		}, 100);


		setTimeout(function () {
			$(".fetchprices").click();

			if (Boolean(localStorage.getItem("autocheck"))) {
				$("#chassisnochecksubmit").click();
				console.log("chassisnochecksubmit button");
			}

		}, 1000);
	}

	if (document.getElementsByClassName("rowp").length > 1)

	{
		console.log("indinit complete abnormally");
		setTimeout(function () {
			refreshCode();
		}, 1000);
	}

	//document.removeEventListener("click", clickHandler);
	setTimeout(function(){
	refreshcodelaunch = null;	
	}, 2000);
	

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


function historyPrice() {
	setTimeout(function () {
		//console.log("history price");
		$(".repeatingcar_msg").show();
		$("#repeatingcar_msg")[0].innerText = "Bid price exists";
		setTimeout(function () {

			$(".repeatingcar_msg").hide();


		}, 3000);

	}, 1000);


}


function getMileage() {
	var m = "";
	try {
		if ($("h4").filter(":contains('Odo')").parent().children("p")[0].innerText.trim().replace(/,/g, "").indexOf("$") >= 0 || $("h4").filter(":contains('Odo')").parent().children("p")[0].innerText.trim().replace(/,/g, "").indexOf("#") >= 0 || $("h4").filter(":contains('Odo')").parent().children("p")[0].innerText.trim().replace(/,/g, "").indexOf("*") >= 0) {
			m = $("h4").filter(":contains('Odo')").parent().children("p")[0].innerText.trim().replace(/,/g, "").replace(/[km:$#*]/g, "").replace(/,/g, "") + "km$, ";
		} else {
			m = $("h4").filter(":contains('Odo')").parent().children("p")[0].innerText.trim().replace(/,/g, "").replace(/[km:]/g, "").replace(/,/g, "") + "km, ";
		}
	} catch (e) {
		if ($("h4").filter(":contains('èµ°è¡Œ')").parent().children("p")[0].innerText.trim().replace(/,/g, "").indexOf("$") >= 0 || $("h4").filter(":contains('èµ°è¡Œ')").parent().children("p")[0].innerText.trim().replace(/,/g, "").indexOf("#") >= 0 || $("h4").filter(":contains('èµ°è¡Œ')").parent().children("p")[0].innerText.trim().replace(/,/g, "").indexOf("*") >= 0) {
			m = $("h4").filter(":contains('èµ°è¡Œ')").parent().children("p")[0].innerText.trim().replace(/,/g, "").replace(/[km:$#*]/g, "").replace(/,/g, "") + "km$, ";
		} else {
			m = $("h4").filter(":contains('èµ°è¡Œ')").parent().children("p")[0].innerText.trim().replace(/,/g, "").replace(/[km:]/g, "").replace(/,/g, "") + "km, ";
		}
		console.log(e.message);
	}

	return m;
}

function getAucTime(i) {
	var hours = "";

	if ($(".list-column.list-transaction.lower.col-lg-12.col-md-14.col-sm-2.col-xs-2").eq(i).find("p")[0] != undefined) {
		hours = "";

	} else {
		try {
			hours = $("h4").filter(":contains('Starting Day')").parent().children("p")[0].innerText;
		} catch (e) {
			hours = $("h4").filter(":contains('é–‹å‚¬æ—¥')").parent().children("p")[0].innerText;
			console.log(e.message);
		}

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
		try {
			var day = $("h4").filter(":contains('Starting Day')").parent().children("p")[0].innerText;

		} catch (e) {
			var day = $("h4").filter(":contains('é–‹å‚¬æ—¥')").parent().children("p")[0].innerText;
			console.log(e.message);
		}


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
		try {
			var day = $("h4").filter(":contains('Starting Day')").parent().children("p")[0].innerText;
		} catch (e) {
			var day = $("h4").filter(":contains('é–‹å‚¬æ—¥')").parent().children("p")[0].innerText;
			console.log(e.message);
		}

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

function enterPressed(event) {
	var x = event.keyCode;

	//console.log("event.keyCode ", event.keyCode);


	var pb = event.target.parentElement.getElementsByClassName("rowp")[0].value.trim();
	pb = pb.replace(/,/g, " ");


	var p = event.target.parentElement.getElementsByClassName("rowp")[0].value != "" ? event.target.parentElement.getElementsByClassName("rowp")[0].value : "0";
	p = p.replace(/,/g, " ");
	var c = document.getElementsByClassName("jans_username")[0].value;
	c = c.replace(/,/g, " ");

	event.target.parentElement.getElementsByClassName("rowp")[0].values = [p];

	var cb = event.target.parentElement.getElementsByClassName("rowcom")[0].value;

	var cbl = cb;
	//console.log(p, cb, event.target);

	try {
		cb = cb.replace(/,/g, " ");
	} catch (e) {

	}


	event.target.parentElement.getElementsByClassName("rowp")[0].remarks = [cb != "" ? cb : ""];

	//console.log(x);
	if (x == 13) {
		//	console.log(x);


		if ($("#jans_country").val() != "") {


			var sampleurl = event.target.parentElement.parentElement.getElementsByTagName("a")[0].href;
			headsec = sampleurl.substr(0, sampleurl.indexOf('&')) + "&move=next";
			tailsec = sampleurl.substr(sampleurl.indexOf('&'));
			var newrl = headsec + tailsec;
			imgArray = [];
			var cardetails = event.target.parentElement.getElementsByClassName("rowp")[0].photo;


			if (cardetails !== undefined) {
				var threeImages = [];
				for (var i = 0; i < cardetails.find("img").length; i++) {
					if (cardetails.find("img")[i].src.length > 60) {
						//console.log(photo.find("img")[i].src + " image source");
						if (threeImages.length < 3) {


							var piclink = cardetails.find("img")[i].src;
							piclink = piclink.substr(0, piclink.indexOf("?"));
							//piclink = piclink.replace(/iauc_pic\/[0-9]+/g, "pv/IMG_SVR_PASS");
							threeImages.push(piclink);
						}

					}
				}
				//console.log("Photos available " + threeImages);

				var clink = event.target.parentElement.parentElement.getElementsByTagName("a")[0].href;
				localStorage.setItem(clink.substr(0, clink.indexOf("&") + 1) + "visited", "visited");

				localStorage.setItem(clink.substr(0, clink.indexOf("&") + 1) + "sent", "sent");

				//event.target.parentElement.parentElement.parentElement.getElementsByClassName("body-image-large")[0].classList.add("visited");

				event.target.parentElement.getElementsByClassName("rowp")[0].aimage = threeImages[0];
				event.target.parentElement.getElementsByClassName("rowp")[0].fimage = threeImages[1];
				event.target.parentElement.getElementsByClassName("rowp")[0].rimage = threeImages[2];



				var chassis;

				try {

					chassis = cardetails.find("#detail-name")[0].innerText.trim().replace(/\s/g, " ");
					chassis = chassis.substr(chassis.lastIndexOf(" ")).trim();
					event.target.parentElement.getElementsByClassName("rowp")[0].chassiscode = [chassis];

				} catch (e) {
					console.log(e.message);
				}


				localStorage.setItem(jun + event.target.parentElement.getElementsByClassName("rowp")[0].ctype[0] + event.target.parentElement.getElementsByClassName("rowp")[0].year[0], p);

				localStorage.setItem(chassis, "bid=" + p + ",remark=" + cb);


				//var name = $(".list-row").eq(0).find("a")[0].href;
				//.parent().parent().find("a")[0].href;
				//.parentElement.parentElement.getElementsByTagName("a")[0].href;
				localStorage.setItem(event.target.parentElement.getElementsByClassName("rowp")[0].detailink[0], "bid=" + p + ",remark=" + cb);




				sendOK = true;



				if (Boolean(sendOK)) {
					//console.log("ignoring");
					sendOne(event);
				}
			}
			/////////////////////////////////////////////////////////////////////////////////////
			////////////////////////NO CAR DETAILS//////MODIFY///////////////////////////////////
			/////////////////////////////////////////////////////////////////////////////////////
			//here may have to implement delay
			else {



				var chassis = " ";

				//chassis = getChassis(cardetails);



				var p = event.target.parentElement.getElementsByClassName("rowp")[0].value;
				p = p.replace(/,/g, " ");
				var c = document.getElementsByClassName("jans_username")[0].value;
				c = c.replace(/,/g, " ");


				localStorage.setItem(jun + event.target.parentElement.getElementsByClassName("rowp")[0].ctype + event.target.parentElement.getElementsByClassName("rowp")[0].year, p);

				//var name = $(".list-row").eq(0).find("a")[0].href;
				//.parent().parent().find("a")[0].href;
				//.parentElement.parentElement.getElementsByTagName("a")[0].href;


				localStorage.setItem(event.target.parentElement.parentElement.getElementsByTagName("a")[0].href.substr(0, event.target.parentElement.parentElement.getElementsByTagName("a")[0].href.indexOf("&") + 1), "bid=" + p + ",remark=" + cb);

				sendOK = true;

				var piclink = event.target.parentElement.parentElement.querySelectorAll("img[data-original]")[0].getAttribute("data-original");
				piclink = piclink.substr(0, piclink.indexOf("?"));
				//piclink = piclink.replace(/iauc_pic\/[0-9]+/g, "pv/IMG_SVR_PASS");


				threeImages = ["", piclink, ""];

				event.target.parentElement.getElementsByClassName("rowp")[0].chassiscode = [""];
				event.target.parentElement.getElementsByClassName("rowp")[0].aimage = threeImages[0];
				event.target.parentElement.getElementsByClassName("rowp")[0].fimage = threeImages[1];
				event.target.parentElement.getElementsByClassName("rowp")[0].rimage = threeImages[2];


				if (Boolean(sendOK)) {
					threeImages = ["", piclink, ""];
					//console.log("ignoring");
					sendOne(event);
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

function sendOne(event) {
	if (Boolean(localStorage.getItem("SendDataToDB"))) {
		sendtoDatabase("insert", event.target.parentElement.getElementsByClassName("rowp")[0]);

	} else if (!Boolean(localStorage.getItem("SendDataToDB")) && !Boolean(localStorage.getItem("SendDataToGSS"))) {
		//alert(warning1);
		openNav("settings");
	}

	if (Boolean(localStorage.getItem("SendDataToGSS"))) {
		makeApiCall(event.target.parentElement.getElementsByClassName("rowp")[0]);

		if (!Boolean(localStorage.getItem("SendDataToDB"))) {
			try {

				$(event.target).parent().parent().eq(0).find("input[value=" + listName.toUpperCase() + "]").eq(0).hasClass("active-" + listName.toLowerCase()) ? console.log("already listed") : $(event.target).parent().parent().eq(0).find("input[value=" + listName.toUpperCase() + "]")[0].click();
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
			var piclink = p.find("img")[i].src;
			piclink = piclink.substr(0, piclink.indexOf("?"));
			//piclink = piclink.replace(/iauc_pic\/[0-9]+/g, "pv/IMG_SVR_PASS");
			pics = pics + ',=image("' + piclink + '")';
		}
	}

	imgArray.push(chassis);
	imgArray.push(pics);

	return imgArray;
}

function getChassis_Photos(p) {
	var chassis;
	chassis = p.find("#detail-name")[0].innerText.trim();
	chassis = chassis.substr(chassis.lastIndexOf(" ")).trim().replace(/\s/g, "_");
	chassis = chassis.substr(chassis.lastIndexOf("_") + 1);

	var pics = "";
	imgArray = [];
	picsArray = [];
	for (var i = 0; i < p.find("img").length; i++) {
		if (p.find("img")[i].src.length > 60) {
			if (picsArray.length < 3) {
				//console.log(p.find("img")[i].src + " image source");
				var picsrc = p.find("img")[i].src;
				picsrc = picsrc.substr(0, picsrc.indexOf("?"));
				//picsrc = picsrc.replace(/iauc_pic\/[0-9]+/g, "pv/IMG_SVR_PASS");
				picsArray.push(picsrc);
			}

		}
	}

	imgArray.push(chassis);
	imgArray.push(picsArray);

	return imgArray;
}

function createSO() {
	sendObject = {
		"aimage": [],
		"fimage": [],
		"rimage": [],
		"detailink": [],
		"aucname": [],
		"lotno": [],
		"ctype": [],
		"clickcount": [],
		"year": [],
		"carname": [],
		"cgrade": [],
		"chassiscode": [],
		"disp": [],
		"inspect": [],
		"mileage": [],
		"ccolor": [],
		"colorno": [],
		"shift": [],
		"air": [],
		"rate": [],
		"ext": [],
		"inter": [],
		"startprice": [],
		"starttime2": [],
		"transactionvalue": [],
		"transactionstatus": [],
		"enddate": [],
		"rowloader": [],
		"values": [],
		"remarks": []
	};
}

function autoSend() {

	//sendObjArray = [];
	createSO();

	rowcount_auto_send = 0;
	rowcount_auto_send_loaded = 0;
	if (confirm("Start the process?") == true) {
		mychoiceS = true;
		startLMS();
	} else {
		mychoiceS = false;

	}
}

var rowloader = function printRowS() {

	var dl = $(this).parent().parent().find(".row_detail_link")[0].href;
	var sampleurl = dl;
	headsec = sampleurl.substr(0, sampleurl.indexOf('&')) + "&move=next";
	tailsec = sampleurl.substr(sampleurl.indexOf('&'));
	var newrl = headsec + tailsec;

	dl = dl.substr(0, dl.indexOf("&") + 1);
	et = this;
	var c_details = this.photo;


	//console.log("loading", et);
	if (mychoiceS) {


		if (c_details == undefined) {


			$.get(newrl, function (data) {
					photo = $(data);
					//console.log("loaded");
				})
				.done(function () {
					//console.log("loaded 2");
					if (loadchassis) {
						var chasnphoto = getChassis_Photos(photo);

						for (var k = 0; k < sendObjArray.length; k++) {
							var priceLink = "https://www.iauc.co.jp" + $(photo).find("#btn-print").attr("data-iauc").replace(/pdf/g, "");
							priceLink = priceLink.substr(0, priceLink.indexOf("&") + 1);

							if (sendObjArray[k].detailink[0] == priceLink) {

								rowcount_auto_send_loaded++;

								//console.log("Matching data", priceLink, chasnphoto[1]);
								sendObjArray[k].chassiscode = [chasnphoto[0]];
								sendObjArray[k].aimage = [chasnphoto[1][0]];
								sendObjArray[k].fimage = [chasnphoto[1][1]];
								sendObjArray[k].rimage = [chasnphoto[1][2]];
								sendObjArray[k].values = [sendObjArray[k].value];
								sendObjArray[k].parentElement.getElementsByClassName("detprogbar")[0].style["background-color"] = "limegreen";

								document.getElementById("lot_to_send").innerText = sendObjArray[k].lotno[0].substr(sendObjArray[k].lotno[0].indexOf("//") + 2);
								document.getElementById("auction_to_send").innerText = sendObjArray[k].values[0];
								//console.log(sendObjArray[k].lotno[0].substr(sendObjArray[k].lotno[0].indexOf("//") + 2), sendObjArray[k].values[0]);

								for (var l = 0; l < Object.keys(sendObjArray[k]).length; l++) {
									try {
										sendObject[Object.keys(sendObjArray[k])[l]].push(sendObjArray[k][Object.keys(sendObjArray[k])[l]][0]);
										//console.log(sendObject.detailink);
									} catch (e) {
										//console.log(e.message);

									}
								}

								//console.log(sendObjArray[k]);											}
								/*
								setTimeout(function(){
																		
								},sendObject.aucname.length * 600);
								*/


								if (localStorage.getItem(chasnphoto[0]) != null) {
									var d = localStorage.getItem(chasnphoto[0]);

									try {
										d = d.split(",");
										d[0] = d[0].split("=");
										d[1] = d[1].split("=");

										console.log(d[0][1], d[1][1], ":history price and comment from load", et, $(et).parent().find(".rowcom").eq(0));

										sendObjArray[k].value = d[0][1];
										$(sendObjArray[k]).parent().find(".rowcom").eq(0).val(d[1][1]);
										sendObjArray[k].style["background-color"] = "darkslategray";
										sendObjArray[k].parentElement.getElementsByClassName("rowcom")[0].style["background-color"] = "darkslategray";
										sendObjArray[k].style["color"] = "aliceblue";
										sendObjArray[k].parentElement.getElementsByClassName("rowcom")[0].style["color"] = "aliceblue";
									} catch (e) {
										console.log("error in history price ", e);
									}
									console.log(chasnphoto[0], "repeating car");
								}


							}
							sendObjArray[k].remarks = [$(sendObjArray[k]).parent().find(".rowcom").eq(0).val()];
						}
						if (sendObject.aucname.length == sendObjArray.length) {
							//alert(sendObject.aucname.length + " items loaded. Send to Database OK");										

							sendtogssOK = "true";

							if (Boolean(sendOK)) {
								sendtoDatabase("insert", sendObject);
							}
						}



					} else {
						sendnow(et);
					}


				});
		} else {
			photo = c_details;
			if (loadchassis) {
				var chasnphoto = getChassisandPhotos(photo);

				setStates(et);
				if (localStorage.getItem(chasnphoto[0]) != null) {
					var d = localStorage.getItem(chasnphoto[0]);

					try {
						d = d.split(",");
						d[0] = d[0].split("=");
						d[1] = d[1].split("=");
						console.log(d[0][1], d[1][1], ":history price and comment", et, $(et).parent().find(".rowcom").eq(0));

						$(et).val(d[0][1]);
						$(et).parent().find(".rowcom").eq(0).val(d[1][1]);
						$(et).parent().css("background-color", "cornflowerblue");
					} catch (e) {
						console.log("error in history price ", e);
					}


					//console.log(cc, "repeating car");





				}

			} else {
				sendnow(et);
			}
		}
	}

	function sendnow(ett) {
		ett.parentElement.getElementsByClassName("detprogbar")[0].style["background-color"] = "limegreen";


		var threeImage = [];
		for (var i = 0; i < ett.photo.find("img").length; i++) {
			if (ett.photo.find("img")[i].src.length > 60) {
				//console.log(photo.find("img")[i].src + " image source");
				if (threeImage.length < 3) {
					var picsrc = ett.photo.find("img")[i].src;
					picsrc = picsrc.substr(0, picsrc.indexOf("?"));
					//picsrc = picsrc.replace(/iauc_pic\/[0-9]+/g, "pv/IMG_SVR_PASS");
					threeImage.push(picsrc);
				}

			}
		}


		//SEND TO DATABASE
		var chasnphoto = getChassisandPhotos(photo);
		var threeImages = chasnphoto[1];
		var code = chasnphoto[0];
		//chassis = getChassis(cardetails);

		//console.log(code, threeImages);

		sendOK = true;

		if (Boolean(sendOK)) {

			//console.log("ignoring");
			if (Boolean(localStorage.getItem("SendDataToDB"))) {

				document.getElementById("auction_to_send").innerHTML = "";
				document.getElementById("lot_to_send").innerHTML = "";
				document.getElementById("send_status").innerText = "request";

			} else if (!Boolean(localStorage.getItem("SendDataToDB")) && !Boolean(localStorage.getItem("SendDataToGSS"))) {
				//alert(warning1);
				openNav("settings");
		}

			if (Boolean(localStorage.getItem("SendDataToGSS"))) {

				console.log("sending to GSS from this option is disabled. \r\nUse other tools");
			}
		}
		if (rowcount_auto_send < clickable.length - 1) {
			startLMS();
		} else {
			console.log("sendObjArray", sendObjArray);
		}
	}
}






function startLMS() {


	clickable = $(".startprice");
	allRows = $(".list-row");


	recGetInfo();

	function recGetInfo() {
		if (rowcount_auto_send < clickable.length) {
			mod = $(".type").eq(rowcount_auto_send).text();
			$(".rowp")[rowcount_auto_send].rowloader = rowloader;

			sendObjArray[rowcount_auto_send].rowloader();
			//console.log(rowcount_auto_send, sendObjArray[rowcount_auto_send])
			rowcount_auto_send++;
			if (mychoiceS) {

				recGetInfo();

			} else {

			}

		} else {

			//alert(rowcount_auto_send, "are ready. Now press Send all with 0 price button");

			mychoiceS = false;

			clearTimeout(mytimer);
			clearTimeout(mytimer2);
			clearTimeout(sd);
			//appendSpreadsheet();
		}



	}
}

function setStates(et) {
	console.log(et.chassiscode);
}

function changepricecolor(event) {

	var pt = event.target.parentElement.getElementsByClassName("rowp")[0].photo;
	//var irl = event.target.parentElement.parentElement.parentElement.parentElement.getElementsByTagName("img")[0].src;
	var irl = event.target.parentElement.parentElement.getElementsByTagName("img")[0].src;

	//var newrl = event.target.parentElement.parentElement.parentElement.parentElement.getElementsByTagName("a")[0].href; //main link to fetch more data

	var sampleurl = event.target.parentElement.parentElement.getElementsByTagName("a")[0].href; //main link to fetch more data
	headsec = sampleurl.substr(0, sampleurl.indexOf('&')) + "&move=next";
	tailsec = sampleurl.substr(sampleurl.indexOf('&'));
	var newrl = headsec + tailsec;


	if (pt == undefined || pt == null) {
		event.target.parentElement.getElementsByClassName("detprogbar")[0].style["background-color"] = "orange";



		loadIt(event.target);
	} else {
		if ($(event.target).hasClass("rowsend")) {
			//console.log("PHOTO " + pt);
			sendOne(event);
		}


	}
	event.target.parentElement.getElementsByClassName("rowp")[0].value = event.target.parentElement.getElementsByClassName("rowp")[0].value.trim();

	var sprice = event.target.parentElement.getElementsByClassName("rowp")[0].startprice[0];

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

	console.log(x);

	if (x == 13) {



		//selcountry = document.getElementsByClassName("rowcom")[0].value.trim();
		//selcountry = checkMarket(selcountry);

		if (selcountry > 0) {
			document.getElementById("jans_country").value = selcountry;
		}


		//console.log("The event target is: " + event.target.tabIndex);
		var chascode = getChassisInd();

		//console.log(event.target.parentElement.getElementsByClassName("rowp")[0].value + ","+   chascode.trim() + ","+ event.target.value);

		var p = document.getElementsByClassName("rowp")[0].value.trim();
		p = p.replace(/,/g, " ");
		var u = document.getElementsByClassName("jans_username")[0].value;
		u = u.replace(/,/g, " ");
		var c = document.getElementsByClassName("rowcom")[0].value.trim();
		c = c.replace(/,/g, " ");

		document.getElementsByClassName("rowp")[0].values = [p != "" ? p : "0"];
		document.getElementsByClassName("rowp")[0].remarks = [c != "" ? c : ""];

		var threeImages = [];
		var photos = document.getElementsByTagName("img");
		for (var i = 0; i < photos.length; i++) {
			if (photos[i].src.indexOf("jpg") >= 0 || photos[i].src.indexOf("JPG") >= 0 || photos[i].src.indexOf("png") >= 0 || photos[i].src.indexOf("PNG") >= 0) {
				//console.log(photo[i].src + " image source");
				if (photos[i].width > 100) {
					if (threeImages.length < 3) {
						var piclink = photos[i].src;
						piclink = piclink.substr(0, piclink.indexOf("?"));
						//piclink = piclink.replace(/iauc_pic\/[0-9]+/g, "pv/IMG_SVR_PASS");

						threeImages.push(piclink);
					}

				}


			}
		}

		document.getElementsByClassName("rowp")[0].aimage = threeImages[0];
		document.getElementsByClassName("rowp")[0].fimage = threeImages[1];
		document.getElementsByClassName("rowp")[0].rimage = threeImages[2];

		sendOK = true;

		document.getElementById("lot_to_send").innerText = document.getElementsByClassName("rowp")[0].lotno[0].substr(document.getElementsByClassName("rowp")[0].lotno[0].indexOf("//") + 2);
		document.getElementById("auction_to_send").innerText = p;
		document.getElementById("send_status").innerText = "Sending soon";

		localStorage.setItem(document.getElementsByClassName("rowp")[0].detailink[0], "bid=" + p + ",remark=" + c);

		chascode = chascode.trim();

		document.getElementsByClassName("rowp")[0].chassiscode = [chascode];


		localStorage.setItem(chascode, "bid=" + p + ",remark=" + c);




		sendOne(event);








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
	//var irl = event.target.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName("row_detail_link")[0].href;
	var irl = event.target.parentElement.parentElement.getElementsByClassName("row_detail_link")[0].href;
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
				if (Boolean(localStorage.getItem("popversion2"))) {


					myWindow = window.open(irl, "Images", "width=1000,height=970,titlebar=yes");


				} else {

					myWindow = window.open("", "Images", "width=650,height=970,titlebar=yes");
					myWindow.document.head.innerHTML = "";
					myWindow.document.body.innerHTML = "";

					$(myWindow.document).ready(function () {

						loadIt(event.target);


					});
				}



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
	sampleurl = et.parentElement.parentElement.getElementsByTagName("a")[0].href; //main link to fetch more data
	headsec = sampleurl.substr(0, sampleurl.indexOf('&')) + "&move=next";
	tailsec = sampleurl.substr(sampleurl.indexOf('&'));
	var newrl = headsec + tailsec;

	et.parentElement.parentElement.getElementsByClassName("body-image-large")[0] != undefined ? et.parentElement.parentElement.getElementsByClassName("body-image-large")[0].classList.add("visited") : et.parentElement.parentElement.getElementsByClassName("list-body-image")[0].classList.add("visited");
	localStorage.setItem(newrl.substr(0, newrl.indexOf("&") + 1) + "visited", "visited");

	//console.log("window load COMPLETE!!!");

	imgArray = [];

	if ($(et).hasClass("rowsend")) {
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
						//console.log(photo.find("img")[i].src + " image source");
						if (threeImages.length < 3) {

							var piclink = photo.find("img")[i].src;
							piclink = piclink.substr(0, piclink.indexOf("?"));
							//piclink = piclink.replace(/iauc_pic\/[0-9]+/g, "pv/IMG_SVR_PASS");
							threeImages.push(piclink);
						}

					}
				}
				//console.log("Photos available " + threeImages);
				et.parentElement.getElementsByClassName("rowp")[0].aimage = threeImages[0];
				et.parentElement.getElementsByClassName("rowp")[0].fimage = threeImages[1];
				et.parentElement.getElementsByClassName("rowp")[0].rimage = threeImages[2];


				var clink = et.parentElement.parentElement.getElementsByTagName("a")[0].href;
				localStorage.setItem(clink.substr(0, clink.indexOf("&") + 1) + "visited", "visited");

				//localStorage.setItem(clink.substr(0, clink.indexOf("&")) + "sent", "sent");

				//event.target.parentElement.parentElement.parentElement.getElementsByClassName("body-image-large")[0].classList.add("visited");



				var chassis;

				chassis = photo.find("#detail-name")[0].innerText.trim().replace(/\s/g, " ");
				chassis = chassis.substr(chassis.lastIndexOf(" ")).trim();

				et.parentElement.getElementsByClassName("rowp")[0].chassiscode = [chassis];


				var p = et.parentElement.getElementsByClassName("rowp")[0].value != "" ? et.parentElement.getElementsByClassName("rowp")[0].value : "0";
				p = p.replace(/,/g, " ");
				var c = document.getElementsByClassName("jans_username")[0].value;
				c = c.replace(/,/g, " ");

				if (p != "0") {
					localStorage.setItem(jun + et.parentElement.getElementsByClassName("rowp")[0].ctype[0] + et.parentElement.getElementsByClassName("rowp")[0].year[0], p);
				}

				var cb = et.parentElement.getElementsByClassName("rowcom")[0].value.trim();
				localStorage.setItem(chassis, "bid=" + p + ",remark=" + cb);
				localStorage.setItem(et.parentElement.parentElement.getElementsByTagName("a")[0].href.substr(0, et.parentElement.parentElement.getElementsByTagName("a")[0].href.indexOf("&") + 1), "bid=" + p + ",remark=" + cb);
				cb = cb.replace(/,/g, " ");
				var pb = et.parentElement.getElementsByClassName("rowp")[0].value.trim();
				pb = pb.replace(/,/g, " ");

				et.parentElement.getElementsByClassName("rowp")[0].values = [pb != "" ? pb : "0"];

				et.parentElement.getElementsByClassName("rowp")[0].remarks = [cb != "" ? cb : ""];

				sendOK = true;
				if (Boolean(localStorage.getItem("SendDataToDB"))) {
					sendtoDatabase("insert", et.parentElement.getElementsByClassName("rowp")[0]);

				} else if (!Boolean(localStorage.getItem("SendDataToDB")) && !Boolean(localStorage.getItem("SendDataToGSS"))) {
					//alert(warning1);
					openNav("settings");
				}

				if (Boolean(localStorage.getItem("SendDataToGSS"))) {
					makeApiCall(et.parentElement.getElementsByClassName("rowp")[0]);

					if (Boolean(localStorage.getItem("SendDataToDB")) == false) {
						try {

							$(et).parent().parent().parent().eq(0).find("input[value=" + listName.toUpperCase() + "]").eq(0).hasClass("active-" + listName.toLowerCase()) ? console.log("already listed") : $(et).parent().parent().parent().eq(0).find("input[value=" + listName.toUpperCase() + "]")[0].click();
						} catch (e) {
							try {
								$("button[id=mylist-" + listName.toLowerCase() + "]").eq(1).hasClass("checked") ? console.log("already listed") : $("button[id=mylist-" + listName.toLowerCase() + "]")[1].click();
							} catch (e) {
								$("button[id=mylist-" + listName.toLowerCase() + "]").eq(0).hasClass("checked") ? console.log("already listed") : $("button[id=mylist-" + listName.toLowerCase() + "]")[0].click();
							}

						}




					}
				}
			});
	} else {
		if (pt != undefined && Number(et.parentElement.getElementsByClassName("rowp")[0].clickcount) < 3) {

			et.parentElement.getElementsByClassName("detprogbar")[0].style["background-color"] = "limegreen";
			console.log("details AVAILABLE!!! ", et, pt, newrl);
			if (myWindow != undefined || myWindow != null) {
				injectImages(pt, et);
			}
		} else {
			console.log("Loading details content", pt != undefined, Number(et.parentElement.getElementsByClassName("rowp")[0].clickcount) < 2);
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
					var threeImages = [];
					for (var i = 0; i < photo.find("img").length; i++) {
						if (photo.find("img")[i].src.length > 60) {
							//console.log(photo.find("img")[i].src + " image source");
							if (threeImages.length < 3) {

								var piclink = photo.find("img")[i].src;
								piclink = piclink.substr(0, piclink.indexOf("?"));
								//piclink = piclink.replace(/iauc_pic\/[0-9]+/g, "pv/IMG_SVR_PASS");
								threeImages.push(piclink);
							}

						}
					}
					//console.log("Photos available " + threeImages);
					et.parentElement.getElementsByClassName("rowp")[0].aimage = [threeImages[0]];
					et.parentElement.getElementsByClassName("rowp")[0].fimage = [threeImages[1]];
					et.parentElement.getElementsByClassName("rowp")[0].rimage = [threeImages[2]];

					var chassis;

					chassis = photo.find("#detail-name")[0].innerText.trim().replace(/\s/g, " ");
					chassis = chassis.substr(chassis.lastIndexOf(" ")).trim();

					et.parentElement.getElementsByClassName("rowp")[0].chassiscode = [chassis];


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
		cdc = cdc.substr(cdc.lastIndexOf(" ") + 1);
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

	}
	et.aimage = [imgArray[0].src.substr(0, imgArray[0].src.indexOf("?"))];
	et.fimage = [imgArray[1].src.substr(0, imgArray[1].src.indexOf("?"))];
	et.rimage = [imgArray[2].src.substr(0, imgArray[2].src.indexOf("?"))];


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
	script.src = resource_url+'javascripts/cdd/callme.js';
	myWindow.document.getElementsByTagName('body')[0].appendChild(script);






	scriptj = myWindow.document.createElement('script');
	scriptj.type = 'text/javascript';
	scriptj.async = true;
	scriptj.src = 'https://code.jquery.com/jquery-3.2.1.js';
	myWindow.document.getElementsByTagName('body')[0].appendChild(scriptj);

	//chassis check
	scriptc = myWindow.document.createElement('script');
	scriptc.type = 'text/javascript';
	scriptc.async = true;
	scriptc.src = resource_url+"javascripts/cdd/chassischeck.js";
	myWindow.document.getElementsByTagName("body")[0].appendChild(scriptc);

	//console.log(mydata[2].innerText.trim(),mydata[5].innerText.trim().substr(0,mydata[5].innerText.trim().match(/[0-9]+/).index).trim());

	var divNode = myWindow.document.createElement("link");
	divNode.rel = "stylesheet";
	divNode.type = "text/css";
	divNode.href = resource_url+"javascripts/cdd/iaucnewpop_css.css";
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
	leftarrow.src = resource_url+"javascripts/cdd/images/colorarrorleft.png";
	leftarrow.id = "leftarrow";
	leftarrow.width = "128px";
	leftarrow.height = "128px";

	myWindow.document.getElementsByTagName('body')[0].appendChild(leftarrow);
	//
	var rightarrow = myWindow.document.createElement('img');
	rightarrow.src = resource_url+"javascripts/cdd/images/colorarrorright.png";
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
	lot.innerText = et.parentElement.parentElement.getElementsByClassName("exhibitnum")[0].innerText;
	console.log(et.parentElement.parentElement.getElementsByClassName("exhibitnum")[0].innerText, "et lot number");
	lot.id = "lot";
	lot.hidden = true;

	myWindow.document.getElementsByTagName('body')[0].appendChild(lot);

	var ads = myWindow.document.createElement("div");
	ads.innerHTML = '<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script><!-- mini --><ins class="adsbygoogle"     style="display:block"     data-ad-client="ca-pub-6558587906070363"     data-ad-slot="9100075227"     data-ad-format="auto"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>';


	myWindow.document.getElementsByTagName('body')[0].appendChild(ads);


	var ccode = myWindow.document.createElement('h4');



	var fullchassis;
	var digits;
	var historychassis;

	var cc = getChassisPop(dp).replace(/\s+/g, " ").trim();
	fullchassis = getToyotaChassis(cc);

	if ($("#oliacresponse").length == 0) {
		var resultdiv = document.createElement('div');
		resultdiv.id = "oliacresponse";
		resultdiv.innerText = "";
		document.body.appendChild(resultdiv);
	}

	//chrome
	console.log("sent to SAYURI ", fullchassis.substr(0, fullchassis.indexOf("-")).trim(), fullchassis.substr(fullchassis.indexOf("-") + 1));

	if (Boolean(localStorage.getItem("autocheck"))) {
		
		checkChassisNumber(fullchassis.substr(0, fullchassis.indexOf("-")).trim(), fullchassis.substr(fullchassis.indexOf("-") + 1));

		var resultdiv = document.createElement('div');
		resultdiv.id = "oliacresponse";

		myWindow.document.getElementById('chassiformholder').appendChild(resultdiv);

		setTimeout(function () {
			myWindow.document.getElementById('oliacresponse').innerText = $("#oliacresponse").text();
		}, 1000);

	}





	historychassis = fullchassis.trim();

	et.chassiscode = [fullchassis];


	//console.log(photo.find("img").length,   " images ", et, historychassis);



	cc = fullchassis;



	//console.log(cc, "repeating car");


	if (localStorage.getItem(historychassis) != null) {
		var d = localStorage.getItem(historychassis);

		try {
			d = d.split(",");
			d[0] = d[0].split("=");
			d[1] = d[1].split("=");
			console.log(d[0][1], d[1][1], ":history price and comment");


			$(et).val(d[0][1]);
			$(et).parent().find(".rowcom").eq(0).val(d[1][1]);
			$(et).parent().css("background-color", "cornflowerblue");
		} catch (e) {
			console.log("error in history price ", e.message);
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

function getToyotaChassis(cc) {
	var fullchassis = cc;

	var tcc = cc.substr(0, cc.lastIndexOf("-")).trim();
	tcc = tcc.substr(tcc.lastIndexOf(" ")).trim();

	digits = cc.substr(cc.lastIndexOf("-") + 1).trim();

	if (cc.indexOf("oyota") > 0 || cc.indexOf("OYOTA") > 0) {




		//console.log(tcc, "tcc", cc.indexOf("OYOTA") > 0, cc.length);
		if (tcc.match(/([\d]+)([a-zA-Z]{1})/g) != null) {
			cc = tcc.substr(0, tcc.length - 1).trim();
			fullchassis = cc + "-" + digits;
			console.log("last is letter", cc);
		} else {
			fullchassis = tcc + "-" + digits;
		}

	} else {
		fullchassis = tcc + "-" + digits;
	}
	console.log(fullchassis, " fullchassis");
	return fullchassis;
}



function saveDate() {

	console.log("date set", $(".jans_auction_date").val());

	localStorage.setItem("datemanualchange", today);

	localStorage.setItem("auctiondate", $(".jans_auction_date").val());

	$(".jans_auction_date").css("background-color", "limegreen");
	setTimeout(function () {
		$(".jans_auction_date").css("background-color", "white");
		$("#datemanualchange").attr("src", "https://data.htscdn.org/images/lock.png");
	}, 1000);

	try {
		hideTutorial();
	} catch (e) {

	}

}

function deleteCheck(event) {
	if (event.ctrlKey) {

		event.target.style["background-color"] = "red";
		event.target.value = "X";
	}
}


function updatePrice(event) {
	if (event.keyCode == null) {


		if (event.target.value != "X") {
			$.ajax({
				url: "https://www.jjinventorysystem.com/test/ajpage.php",
				//url: resource_url+"javascripts/cdd/ajpagenew.php",
				type: "POST",
				data: {
					action: "update",
					username: $("#janusername").val(),
					password: $("#janpassword").val(),
					id: event.target.id,
					jans_bid_price: document.getElementById(event.target.id).parentElement.parentElement.getElementsByClassName("pricefield")[0].value != "" ? document.getElementById(event.target.id).parentElement.parentElement.getElementsByClassName("pricefield")[0].value : "0",
					remarks: document.getElementById(event.target.id).parentElement.parentElement.getElementsByClassName("remarkfield")[0].value != "" ? document.getElementById(event.target.id).parentElement.parentElement.getElementsByClassName("remarkfield")[0].value : ""
				},
				beforeSend: function () {
					// Handle the beforeSend event
					console.log("updating", event.target.id);
				},
				success: function (data) {
					//console.log("received: " + data);
					if (data.indexOf("alter") >= 0) {
						alert(data);

					} else if (data.match(/[0-9]/g) != null) {
						console.log(data);
					} else {
						console.log(data);
						var but = document.getElementById(event.target.id).parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName("fetchprices")[0];
						but.pricelist = undefined;
						$(but).click();
					}

				},
			});
		} else {
			//////////////DELETE
			$.ajax({
				url: "https://www.jjinventorysystem.com/test/ajpage.php",
				//url: resource_url+"javascripts/cdd/ajpagenew.php",
				type: "POST",
				data: {
					action: "delete",
					username: $("#janusername").val(),
					password: $("#janpassword").val(),
					id: event.target.id
				},
				beforeSend: function () {
					// Handle the beforeSend event

					console.log("deleting", event.target.id);
				},
				success: function (data) {
					//console.log("received: " + data);
					if (data.indexOf("alter") >= 0) {
						alert(data);

					} else if (data.match(/[0-9]/g) != null) {
						console.log(data);
					} else {
						console.log(data);
						var but = document.getElementById(event.target.id).parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName("fetchprices")[0];

						but.pricelist = undefined;
						$(but).click();
					}

				},
			});
		}
	} else {
		if (event.keyCode == 13) {
			event.target.parentElement.parentElement.children[3].children[0].click();
		}
	}
}

function loadExisting(event) {


	var aucnumlotnum = event.target.parentElement.parentElement.getElementsByClassName("rowp")[0].lotno[0];
	$.ajax({
		url: "https://www.jjinventorysystem.com/test/ajpage.php",
		//url: resource_url+"javascripts/cdd/ajpagenew.php",
		type: "POST",
		data: {
			action: "load",
			aucnumlotnum: aucnumlotnum,
			username: $("#janusername").val(),
			password: $("#janpassword").val(),
			jans_auction_date: $(".jans_auction_date").eq(0).val(),
		},
		beforeSend: function () {
			// Handle the beforeSend event
			//console.log("sending", aucnumlotnum);
			event.target.parentElement.getElementsByClassName("loadingimg")[0].style["display"] = "block";

		},
		success: function (data) {
			load_count++;
			event.target.parentElement.getElementsByClassName("loadingimg")[0].style["display"] = "none";
			//console.log("received: " + data);
			if (data == "") {

			} else if (data.match(/[0-9]/g) != null) {
				var datarray = data.split(";");
				for (var i = 0; i < datarray.length; i++) {
					datarray[i] = datarray[i].split(",,");
				}
				datarray.pop();
				//console.log(datarray);
				event.target.pricelist = datarray;

				displayPrices(event);

			} else {
				//alert(data);
			}
			//success count
			if (marketReport) {
				if ($(".rowp").length == load_count) {
					//initiate wait cycle
					console.log("Finished loading prices");
					createSO();
					for (var i = 0; i < $(".rowp").length; i++) {
						for (var l = 0; l < Object.keys($(".rowp")[i]).length; l++) {
							try {
								sendObject[Object.keys($(".rowp")[i])[l]].push($(".rowp")[i][Object.keys($(".rowp")[i])[l]][0]);
								//console.log(Object.keys($(".rowp")[i])[l], $(".rowp")[i][Object.keys($(".rowp")[i])[l]][0]);
							} catch (e) {
								//console.log(e.message);
							}
						}
					}
					//check if more pages						
					makeApiCall(sendObject);
				}
			}

		},
	});

}

function hidepriceinfobar(event) {
	if (window.location.href.indexOf("iauc.co.jp/detail") < 0) {


		setTimeout(function () {
			try {
				event.target.parentElement.parentElement.removeChild(event.target.parentElement);
			} catch (e) {
				console.log(e.message);
			}

		}, 300);
	}
}

function displayPrices(event) {

	datarray = event.target.pricelist;


	if ($(event.target).parent().find(".priceinfobar").length == 0) {




		var pi = document.createElement("div");
		if (window.location.href.indexOf("carlist")>0)
			{
				pi.setAttribute("class", "priceinfobarthumb");
			}
		else {
			pi.setAttribute("class", "priceinfobar");
		}
		
		/*
				var pandiv = document.createElement("div");
				pandiv.setAttribute("class", "panorama");
				pandiv.setAttribute("style", "overflow-x: hidden; background-color: black; height:20px!important;");

				var pantxt = document.createElement("p");
				pantxt.setAttribute("class", "pantext");
				pantxt.setAttribute("style", "color: cyan; margin-left: 0px; padding: 2px; height:20px!important;");
				pantxt.innerText = "Do not delete or change bids in jjpurchase, change it here and hit ENTER. To delete input 0 price";
				pandiv.appendChild(pantxt);
				pi.appendChild(pandiv);

		*/

		var close_icon = document.createElement("img");

		close_icon.setAttribute("onmouseup", "hidepriceinfobar(event)");
		close_icon.setAttribute("style", "cursor:pointer;")
		close_icon.src = resource_url+"javascripts/cdd/images/window-close.png";
		pi.appendChild(close_icon);

		var pilab = document.createElement("label");
		pilab.setAttribute("style", "font-size: smaller;");
		pilab.innerText = "Price Manager Window " + datarray[0][0].substr(datarray[0][0].indexOf("//") + 2);
		pi.appendChild(pilab);

		var pit = document.createElement("table");
		pit.setAttribute("class", "pricetable");

		pi.appendChild(pit);
		event.target.parentElement.appendChild(pi);
		getTableBody(pit, datarray, event);


	} else {
		$(event.target).parent().find(".pricetablebody").eq(0).remove();
		//console.log("reload", $(event.target).parent().find(".fetchprices")[0]);
		pit = $(event.target).parent().find(".pricetable")[0];

		getTableBody(pit, datarray, event);
	}
}

function getTableBody(pit, datarray, event) {
	var pitb = document.createElement("tbody");
	pitb.setAttribute("class", "pricetablebody");
	$(pitb).append('<tr style="height: 20px;"><th style="width: 22%">Bid</th><th style="width: 22%">Remarks</th><th style="width: 22%">User</th><th style="width: 12%">Send</th></tr>');
	pit.appendChild(pitb);


	for (var i = 0; i < datarray.length; i++) {



		if (datarray[i][5] == jun) {
			event.target.parentElement.getElementsByClassName("rowp")[0].values = [datarray[i][3]];
			event.target.parentElement.getElementsByClassName("rowp")[0].value = [datarray[i][3]];
			event.target.parentElement.getElementsByClassName("rowp")[0].remarks = [datarray[i][4]];
			event.target.parentElement.getElementsByClassName("rowcom")[0].value = [datarray[i][4]];

		}

		if (selcountry == "23") {
			$(pitb).append(
				'<tr style="height: 20px;"><td style="background-color: darkseagreen;    border-style: solid;    border-width: thin;    border-color: darkolivegreen;"><input type="text" placeholder="price" class="pricefield" onkeypress="updatePrice(event)" value="' + datarray[i][3] + '" style="padding:0px!important; width: 100%;height: 26px;    font-size: medium;    font-weight: bold;    text-align: center;"></td><td style="background-color: darkseagreen;    border-style: solid;    border-width: thin;    border-color: darkolivegreen;"><input type="text" placeholder="remark"  class="remarkfield" onkeypress="updatePrice(event)" value="' + datarray[i][4] + '" style="padding:0px!important; width: 100%;height: 26px;    font-size: medium;    font-weight: bold;    text-align: center;"></td><td style="background-color: darkseagreen;    border-style: solid;    border-width: thin;    border-color: darkolivegreen;">' + datarray[i][5] + '</td><td style="background-color: darkseagreen;    border-style: solid;    border-width: thin;    border-color: darkolivegreen;"><input type="button" id="' + datarray[i][6] + '" value="â‡¨" class="updatebutton" onclick="updatePrice(event)" onmouseover="deleteCheck(event)" style="background-color: darkslategrey;    margin: 1px;    width: 95%;    box-shadow: 0 0 1px 1px aquamarine;    border-radius: 5px;    border-color: #6f7c6f;    color: olivedrab;"></td></tr>'
			);
		} else {
			if (userRolesCheck(datarray[i][5]) || datarray[i][5] == jun) {
				//console.log(datarray[i][5]);

				$(pitb).append(
					'<tr style="height: 20px;"><td style="background-color: darkseagreen;    border-style: solid;    border-width: thin;    border-color: darkolivegreen;"><input type="text" placeholder="price" class="pricefield" onkeypress="updatePrice(event)" value="' + datarray[i][3] + '" style="padding:0px!important; width: 100%;height: 26px;    font-size: medium;    font-weight: bold;    text-align: center;"></td><td style="background-color: darkseagreen;    border-style: solid;    border-width: thin;    border-color: darkolivegreen;"><input type="text" placeholder="remark"  class="remarkfield" onkeypress="updatePrice(event)" value="' + datarray[i][4] + '" style="padding:0px!important; width: 100%;height: 26px;    font-size: medium;    font-weight: bold;    text-align: center;"></td><td style="background-color: darkseagreen;    border-style: solid;    border-width: thin;    border-color: darkolivegreen;">' + datarray[i][5] + '</td><td style="background-color: darkseagreen;    border-style: solid;    border-width: thin;    border-color: darkolivegreen;"><input type="button" id="' + datarray[i][6] + '" value="â‡¨" class="updatebutton" onclick="updatePrice(event)" onmouseover="deleteCheck(event)" style="background-color: darkslategrey;    margin: 1px;    width: 95%;    box-shadow: 0 0 1px 1px aquamarine;    border-radius: 5px;    border-color: #6f7c6f;    color: olivedrab;"></td></tr>'
				);
			}
		}



	}
}

function userRolesCheck(duser) {
	var userroles = [];
	var bul = false;

	for (var i = 0; i < users.length; i++) {
		if (users[i].name == duser) {
			//console.log(duser, users[i].country);
			userroles.push(users[i].country);
		}
	}
	bul = matchUserRoles(userroles);
	return bul;
}

function matchUserRoles(ur) {
	bul = false;
	for (var k = 0; k < ur.length; k++) {
		for (var j = 0; j < users.length; j++) {
			if (users[j].name == jun && users[j].country == ur[k]) {
				bul = true;
			}
		}
	}
	return bul;
}
/*
var notification_array = [
	"Do not delete or change bids in jjpurchase, change it here and hit ENTER. To delete input 0 price",
	"jjpurchaseã®æ–¹ã‹ã‚‰ã¯å…¥æœ­ã‚’å‰Šé™¤ã¾ãŸã¯å¤‰æ›´ã—ãªã„ã§ãã ã•ã„ã€‚ã“ã“ã§å¤‰æ›´ã—ã¦ENTERã‚’æŠ¼ã™ã€‚å‰Šé™¤ã™ã‚‹ã«ã¯0ã®ä¾¡æ ¼ã‚’è¨˜å…¥ã™ã‚‹"
];

if ($(".panorama").width() > 250) {
	var ii = 1270;
} else {
	var ii = 270;
}
var t = 1;

clearInterval(sii);

sii = setInterval(function () {

	if (ii > -500) {
		$(".pantext").css("margin-left", ii + "px");
		ii--;
	} else {
		if ($(".panorama").width() > 250) {
			ii = 1270;
			$(".pantext").each(function () {
				this.innerText = notification_array[t]
			});
			t++;
			if (t == notification_array.length) {
				t = 0;
			}
		} else {
			ii = 270;
			$(".pantext").each(function () {
				this.innerText = notification_array[t]
			});
			t++;
			if (t == notification_array.length) {
				t = 0;
			}
		}
	}
}, 50);
*/
function sendtoDatabase(action, etarget) {

	//url: resource_url+'www/test/managedata.php',
	//console.log(rowb.sched, rowb.carname, rowb.aucname, ch, durl, image3);

	if (etarget.values.length == 1) {
		if (etarget.aucname[0].indexOf("zero") >= 0) {
			if (etarget.values[0] > 999 && etarget.values[0] < 5000 || etarget.values[0] > 0 && etarget.values[0] < 0.5) {
				alert("ZERO auctions min. price is 5000 Yen\r\nUpdate your price in Price Manager Window");
			}
		} else if (etarget.aucname[0].indexOf("LUM") >= 0 || etarget.aucname[0].indexOf("ORIX") >= 0) {
			if (etarget.values[0] > 999 && etarget.values[0] < 10000 || etarget.values[0] > 0 && etarget.values[0] < 1) {
				alert("LUM auctions min. price is 10000 Yen\r\nUpdate your price in Price Manager Window");
			}
		}
	}


	try {


		$.ajax({

			url: "https://www.jjinventorysystem.com/test/ajpage.php",
			//url: resource_url+"javascripts/cdd/ajpagenew.php",
			type: "POST",
			contentType: "application/x-www-form-urlencoded",
			data: {
				action: action,
				username: $("#janusername").val(),
				password: $("#janpassword").val(),
				jans_auction_date: $(".jans_auction_date").val(),
				jans_country: $("#jans_country").val(),
				jans_bid_price: etarget.values,
				remark: etarget.remarks,
				aimage: etarget.aimage,
				fimage: etarget.fimage,
				rimage: etarget.rimage,
				car_detail_url: etarget.detailink,
				auction_company: etarget.aucname,
				lot_no: etarget.lotno,
				modelyear: etarget.year,
				carname: etarget.carname,
				chassiscode: etarget.chassiscode,
				cc: etarget.disp,
				inspection: etarget.inspect,
				mileage: etarget.mileage,
				color_no: etarget.colorno,
				shift: etarget.shift,
				start_price: etarget.startprice,
				color: etarget.ccolor,
				grade: etarget.cgrade,
				ctype: etarget.ctype,
				ac: etarget.air,
				crate: etarget.rate,
				ext: etarget.ext,
				inter: etarget.inter
			},
			beforeSend: function () {
				// Handle the beforeSend event
				//console.log("sending");
				try {
					document.getElementById("lot_to_send").innerText = etarget.lotno[0].substr(etarget.lotno[0].indexOf("//") + 2);
					document.getElementById("auction_to_send").innerText = etarget.values[0];
				} catch (e) {
					console.log(e.message);
				}



				document.getElementById("send_status").innerText = "ESC to cancel";
				//localStorage.setItem("lastVehicle", {"lot": rowb.lotno.substr(rowb.lotno.indexOf("//") + 2), "price":pb});
			},
			success: function (data) {

				sendOK = "";
				//console.log("received: " + data);
				if (data == "") {
					//alert("You already bid on this car");
					$(".success_msg").show();
					$("#success_msg")[0].innerText = "Already Bid";

					setTimeout(function () {
						$("#success_msg")[0].innerText = "";
						$(".success_msg").hide();
						document.getElementById("send_status").innerText = "Complete";
					}, 4000);



				} else if (data.indexOf("success") >= 0) {


					$(".success_msg").show();
					$("#success_msg")[0].innerText = "Success!";
					$("#carcount")[0].innerText = Number($("#carcount")[0].innerText) + Number(data.match(/[0-9]+/g)!=null?data.match(/[0-9]+/g):0);
					$("#carcount").animate({
						fontSize: "24px"
					}, 100).animate({
						fontSize: "18px"
					}, 100);

					localStorage.setItem("carcount", $("#carcount")[0].innerText);
					document.getElementById("jans_country").value = ((localStorage.getItem("jans_country") != null) ? localStorage.getItem("jans_country") : "");

					var but = $(etarget).parent().find(".fetchprices")[0];
					try {
						but.pricelist = undefined;
					} catch (e) {

					}

					$(but).click();


					setTimeout(function () {

						//console.log($("button[id=mylist-" + listName.toLowerCase() + "]"), " List button");




						try {

							$(etarget).parent().parent().eq(0).find("input[value=" + listName.toUpperCase() + "]").eq(0).hasClass("active-" + listName.toLowerCase()) ? console.log("already listed") : $(etarget).parent().parent().eq(0).find("input[value=" + listName.toUpperCase() + "]")[0].click();
						} catch (e) {
							try {
								$("button[id=mylist-" + listName.toLowerCase() + "]").eq(1).hasClass("checked") ? console.log("already listed") : addtolist();

								function addtolist() {
									var urlx = "https://www.iauc.co.jp" + $("button[id=mylist-" + listName.toLowerCase() + "]").eq(1).attr("data-iauc") + "add";
									var newrl = urlx;

									var tid = $("input[name='__tid']")[0].value;

									//console.log("loading", et);

									$.get(newrl + '&__tid=' + tid, function () {

										})
										.done(function () {
											$("button[id=mylist-" + listName.toLowerCase() + "]").eq(1).attr("class", "btn-mylist checked");
										});
								}
							} catch (e) {
								try {
									$("button[id=mylist-" + listName.toLowerCase() + "]").eq(0).hasClass("checked") ? console.log("already listed") : $("button[id=mylist-" + listName.toLowerCase() + "]")[0].click();

								} catch (e) {
									console.log(e.message);
								}
							}
						}
						$("#success_msg")[0].innerText = "";
						$(".success_msg").hide();
						document.getElementById("send_status").innerText = "success";
					}, 200);
				} else {
					document.getElementById("jans_country").value = ((localStorage.getItem("jans_country") != null) ? localStorage.getItem("jans_country") : "");
					alert(data);
				}

			},
		});
		//try end
	} catch (e) {
		alert(e.message);
		document.getElementById("jans_country").value = ((localStorage.getItem("jans_country") != null) ? localStorage.getItem("jans_country") : "");
	}

}

function makeApiCall(ssdata) {

	senddata = [];

	for (var i = 0; i < ssdata.lotno.length; i++) {

		senddata.push([ssdata.aucname[i],
			ssdata.lotno[i].substr(ssdata.lotno[i].indexOf("//") + 2),
			ssdata.year[i],
			ssdata.values[i],
			ssdata.transactionvalue[i],
			ssdata.transactionstatus[i],
			ssdata.remarks[i],
			$("#janusername").val(),
			ssdata.chassiscode[i],
			ssdata.carname[i],
			ssdata.cgrade[i],
			ssdata.ctype[i],
			ssdata.disp[i],
			ssdata.mileage[i],
			ssdata.ccolor[i],
			ssdata.colorno[i],
			ssdata.shift[i],
			ssdata.air[i],
			ssdata.rate[i],
			ssdata.ext[i] + ' ' + ssdata.inter[i],
			',',
			ssdata.startprice[i],
			$(".jans_auction_date").val()
		]);
		//console.log("i", i);
	}
	//console.log(ssdata.lotno.length, senddata);
	if (marketReport) {
		const rows = senddata;
		let csvContent = "data:text/csv;charset=utf-8,";
		rows.forEach(function (rowArray) {
			let row = rowArray.join(",");
			csvContent += row + "\r\n"; // add carriage return
		});

		var encodedUri = encodeURI(csvContent);
		var link = document.createElement("a");
		link.setAttribute("href", encodedUri);
		link.setAttribute("download", "market_report.csv");
		document.body.appendChild(link); // Required for FF
		link.click(); // This will download the data file named "my_data.csv".
		document.body.removeChild(link);
		marketReport = false;
	} else {

		var params = {
			// The ID of the spreadsheet to update.
			spreadsheetId: localStorage.getItem("dlm_spreadsheet_id"), // TODO: Update placeholder value.

			includeValuesInResponse: true,
			// The A1 notation of a range to search for a logical table of data.
			// Values will be appended after the last row of the table.
			range: localStorage.getItem("activesheet") + '!A1:T' + ssdata.lotno.length, // TODO: Update placeholder value.

			// How the input data should be interpreted.
			valueInputOption: 'USER_ENTERED', // TODO: Update placeholder value.

			// How the input data should be inserted.
			insertDataOption: 'INSERT_ROWS', // TODO: Update placeholder value.
		};

		var valueRangeBody = {
			// TODO: Add desired properties to the request body.		  
			"range": localStorage.getItem("activesheet") + "!A1:T" + ssdata.lotno.length,
			"values": senddata,
			"majorDimension": "ROWS"
		};

		var request = gapi.client.sheets.spreadsheets.values.append(params, valueRangeBody);
		request.then(function (response) {
			// TODO: Change code below to process the `response` object:
			//console.log(response.result);
			if (!Boolean(localStorage.getItem("SendDataToDB"))) {
				$(".success_msg").show();
				$("#success_msg")[0].innerText = "Success!";

				document.getElementById("jans_country").value = localStorage.getItem("jans_country");
				$("#carcountgss")[0].innerText = Number($("#carcountgss")[0].innerText) + ssdata.lotno.length;
				$("#carcountgss").animate({
					fontSize: "24px"
				}, 100).animate({
					fontSize: "18px"
				}, 100);
				localStorage.setItem("carcountgss", $("#carcountgss")[0].innerText);

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
		openNav("signin");
	}
}

function handleSignInClick(event) {
	gapi.auth2.getAuthInstance().signIn();
}

function handleSignOutClick(event) {
	gapi.auth2.getAuthInstance().signOut();
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

function initiateDate() {
	$('.jans_auction_date').Zebra_DatePicker({
		format: 'd/m/Y'
	});
}

function createReport() {

	load_count = 0;
	marketReport = true;
	$(".fetchprices").click();
	//
	/*
	const rows = [["name1", "city1", "some other info"], ["name2", "city2", "more info"]];
	let csvContent = "data:text/csv;charset=utf-8,";
	rows.forEach(function(rowArray){
	   let row = rowArray.join(",");
	   csvContent += row + "\r\n"; // add carriage return
	}); 

	var encodedUri = encodeURI(csvContent);
	var link = document.createElement("a");
	link.setAttribute("href", encodedUri);
	link.setAttribute("download", "my_data.csv");
	document.body.appendChild(link); // Required for FF

	link.click(); // This will download the data file named "my_data.csv".
	*/
}

function setCountry() {




	if ($("#jans_country").val() != "") {
		localStorage.setItem("jans_country", $("#jans_country").val());
		selcountry = $("#jans_country").val();
	}





	var user = document.getElementById("janusername").value.toLowerCase();
	var pass = document.getElementById("janpassword").value;

	jun = user;

	if (user != "" && pass != "") {
		console.log("saving");
		localStorage.setItem("janusername", user);
		localStorage.setItem("janpassword", pass);

		$("#janlogin").val("User credentials saved");
		$("#janlogin").css("background-color", "limegreen");

		setTimeout(function () {
			//delayed Remember me button text change
			$("#janlogin").val("Remember Me");
			$("#janlogin").css("background-color", "#286090");
		}, 2000);

	} else {
		alert("Please, enter Username and Password");
		$("#janlogin").css("display", "block");
	}


	

	try {
		hideTutorial();
	} catch (e) {

	}
	//console.log($("#jans_country").val());
}

function clearCount() {
	localStorage.setItem("carcount", 0);
	$("#carcount")[0].innerText = 0;
	$("#carcount").animate({
		fontSize: "24px"
	}, 100).animate({
		fontSize: "18px"
	}, 100);
}

function clearCountGSS() {
	localStorage.setItem("carcountgss", 0);
	$("#carcountgss")[0].innerText = 0;
	$("#carcountgss").animate({
		fontSize: "24px"
	}, 100).animate({
		fontSize: "18px"
	}, 100);
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

function openNav(cont) {
	switch(cont)
		{
			case "signin":
			$(".overlay-content").css("display","block");
				break;
			case "settings":
			$("#quick_settings").css("display","block");
			$(".SendDataToGSS").prop("checked",Boolean(localStorage.getItem("SendDataToGSS") && localStorage.getItem("activesheet") && localStorage.getItem("dlm_spreadsheet_id")));	
				break;
			case "sheets":
			$("#sheet_names").css("display","block");
			$("#sheet_table").css("display","table");
			$("#bottomdiv").css("display","block");
				break;
			
			
		}		
	document.getElementById("myNav").style.width = "100%";
	
}

function closeNav() {
	document.getElementById("myNav").style.width = "0%";
	$(".overlay-content").css("display","none");
		$("#quick_settings").css("display","none");
		$("#sheet_names").css("display","none");
			$("#sheet_table").css("display","none");
			$("#bottomdiv").css("display","none");
}



function loadPicker() {
	gapi.load('auth', {
		'callback': onAuthApiLoad
	});
	gapi.load('picker', {
		'callback': onPickerApiLoad
	});
}

function onAuthApiLoad() {
	window.gapi.auth.authorize({
			'client_id': clientId,
			'scope': scope,
			'immediate': false
		},
		handleAuthResult);
}

function onPickerApiLoad() {
	pickerApiLoaded = true;
	createPicker();
}

function handleAuthResult(authResult) {
	if (authResult && !authResult.error) {
		oauthToken = authResult.access_token;
		createPicker();
	}
}

// Create and render a Picker object for searching images.
function createPicker() {
	if (pickerApiLoaded && oauthToken) {
		var view = new google.picker.View(google.picker.ViewId.SPREADSHEETS);

		var picker = new google.picker.PickerBuilder()
			.addView(view)
			.setOAuthToken(oauthToken)
			.setDeveloperKey(developerKey)
			.setCallback(pickerCallback)
			.build();
		picker.setVisible(true);
	}
}
// A simple callback implementation.
function pickerCallback(data) {
	if (data.action == google.picker.Action.PICKED) {
		var fileId = data.docs[0].id;
		//alert('The user selected: ' + fileId);
		localStorage.setItem("dlm_spreadsheet_id", fileId);
		gapi.client.sheets.spreadsheets.get({
        spreadsheetId: fileId
    }).then(function(response) {
		openNav("sheets");	
		console.log(response.result);
		var sheetnames = response.result.sheets;
		$("#sheet_table tbody")[0].innerHTML = "";
		var table =	$("#sheet_table tbody");
			for (var i=0;i<sheetnames.length;i++)
			 {
				//console.log(sheetnames[i].properties["title"]);
				 var row = document.createElement("tr");
				 row.innerHTML = "<td onclick='setSheetName(event)'>" + sheetnames[i].properties["title"] + "</td>";
				 table.append(row);
		}
    }, function(response) {
        console.log('Error: ' + response.result.error.message);
    });
	}
}
function setSheetName(event)
{
	localStorage.setItem("activesheet", event.target.innerText);
	document.getElementById("setActiveSheet").removeAttribute("disabled");
	document.getElementById("sheettitle").value = event.target.innerText;
}