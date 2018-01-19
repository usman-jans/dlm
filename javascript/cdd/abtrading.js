// JavaScript Document
var txt1 = `
<div id="lever" ><span style="color:white;">DLM</span></div>
<div class="credo" id="credo">

<label style="color:mintcream; margin-top:1px;">Purchase Username</label>
<input id="janusername" type="text" placeholder="Jans Purchase Username" class="jans_username" style="width:150;" />
<label style="color:mintcream; margin-top:1px;">Purchase Password</label>
<input id="janpassword" type="password" placeholder="Jans Purchase Password" class="jans_password" style="width:150;" />
<label style="color:mintcream; margin-top:1px;">Purchase Country</label>
<select id="jans_country" class="jans_country" name="jans_country" onchange="setCountry()" style="width:150;">
<option value="">Select Market</option>
<option value="284">Africa Online</option>
<option value="213">Botswana</option>
<option value="322">Chile</option>
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
<input type="button" value="Remember Me" id="janlogin" onmousedown="janlogin()" class="janlogin" style="background-color: darkgreen;color:#FFF;margin-top: 10px; width:150;" />

<label style="color:mintcream;  margin-top:2px;">Auction Date</label>
<input type="text" placeholder="DD/MM/YYYY" class="jans_auction_date" style="width:150;" />
<div id="janoptions" onmouseover="showJanOptions()">Options</div>
<table style="background-color: lightslategray;    margin-top: 3px; margin-left:200; border-radius: 10px;    position: absolute;">

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
<td id="send_status" style="    text-align: center;    color: aquamarine;    font-size: smaller;"></td></tr>
<tr>
<td>
<span id="carcount" style=" color: floralwhite; margin-left: 10px; font-size: large;"></span>
</td>
<td><input type="button" value="Reset Counter" id="clearcount" onmousedown="clearCount()" style="font-size: small; border-radius: 7px; background-color: chocolate; border-color: chocolate; color: white; float:right;"></td>
</tr>    
<tr>
<td>
<input type="button" value="Sort by LOT" id="sortbylot" onmousedown="sortbylot()" style="font-size: small; border-radius: 7px; background-color: cornflowerblue; border-color: lightslategrey; color: white; float:right;font-size: x-small;width: 80px;height: 23px;">
</td>
<td>
<input type="button" value="Sort A-Z" id="sortbyname" onmousedown="sortbyname()" style="font-size: small; border-radius: 7px; background-color: cornflowerblue; border-color: lightslategrey; color: white; float:right; width: 80px;font-size: x-small;height: 23px;">
</td>
</tr>
<tr>
<td>
</td>
<td>

</td>
</tr>
</tbody>
</table>
<span id="success_msg" class="success_msg" style="margin-left: 200;    width: 150;    background-color: greenyellow;    text-align: -webkit-center;    height: 44px;    font-weight: 900;    margin-top: 185px;    position: fixed;></span>

<div id="optionsilde" onmouseleave="hideJanOptions()" style="border-radius: 10px; margin-top: 65px; padding: 5px; background-color: black; display: none; margin-left: -190px; position: absolute;">
<table style="width:150;">

<tr style="height:22px">
<td style="padding:5px; text-align:center; font-size:medium; color:white;">Quick</td>
<td style="text-align:center; padding:5px; font-size:medium; color:white;">Settings</td>
</tr>

<tr>
<td>
<label style="font-size:small; margin-left: 3px; cursor:pointer; color: white;"><input id="enableDelay" class="mycheckbox" type="checkbox">2s delay</label>
</td>
<td>

</td>
</tr>

<tr>
<td>
<label style="font-size:small; margin-left: 3px; color: white; cursor:pointer; margin-top: 8px; margin-bottom: 8px;"><input id="databaseInput" class="mycheckbox" type="checkbox">Input JDB</label>
</td>
<td>
<label style="font-size:small; margin-left: 3px; color: white; cursor:pointer; margin-top: 8px; margin-bottom: 8px;"><input id="hideSeen" class="mycheckbox" type="checkbox" style="margin-left: 25px; ">Hide Seen</label>
</td>
</tr>

<tr>
<td>
<label style="font-size:small; margin-left: 3px; color: white; cursor:pointer; margin-top: 8px; margin-bottom: 8px;"><input id="ssInput" class="mycheckbox" type="checkbox">Input GSS</label>
</td>
<td>
<label style="font-size:small; margin-left: 25px; color: white; cursor:pointer; margin-top: 8px; margin-bottom: 8px;"><input id="hideList" class="mycheckbox" type="checkbox" >Hide Listed</label>
</td>
</tr>

<tr>
<td>
<label style="font-size:small; margin-left: 3px; color: white; cursor:pointer; margin-top: 8px; margin-bottom: 8px;"><input id="priceHint" class="mycheckbox" type="checkbox">Price Hint</label>
</td>
<td>
<label style="font-size:small; margin-left: 25px; color: white; cursor:pointer; margin-top: 8px; margin-bottom: 8px;"><input id="forceEn" class="mycheckbox" type="checkbox">English</label>
</td>
</tr>

<tr>
<td>
<label style="font-size:small; margin-left: 3px; color: white; cursor:pointer; margin-top: 8px; margin-bottom: 8px;"><input id="show_chassis_shift" class="mycheckbox" type="checkbox">Show Type</label>
</td>
<td>
<label style="font-size:small; margin-left: 25px; color: white; cursor:pointer; margin-top: 8px; margin-bottom: 8px;"><input id="show_fuel" class="mycheckbox" type="checkbox">Show Fuel</label>
</td>
</tr>





</table>
</div>
<label style="color:mintcream; margin-top:1px;">Active List</label>
<select id="activeList" class="jans_country" name="activeList" onchange="setList()" style="width:100%;">
<option value="">Select List</option>
<option value="A">A</option>
<option value="B">B</option>
<option value="C">C</option>
<option value="D">D</option>
</select>

<input type="button" value="Market Price" title="Compare your bid price to sold price. The report will be sent to spreadsheet" id="marketprice" class="janlogin" onmousedown="createReport()" style="background-color: darkgreen;color:#FFF;margin-top: 3px; height:30px; font-size:small;" />

Note!
<br>
<span id="notepricecolor" style="font-family: sans-serif;    font-size: small;    color: cornsilk;">RED price: lower than start price</span>
<span id="notepricehint" style="font-family: sans-serif;    font-size: small;    color: cornsilk;">Blue price: hint price</span>
<span id="noteprice" style="font-family: sans-serif;    font-size: small;    color: cornsilk;">Black price: sent price</span>
</div>`;


overRideOnclicks();


function overRideOnclicks()
{
var ibuts = document.getElementsByClassName("i_but");

for (var i=3; i<ibuts.length;i++)
     {
	document.getElementsByClassName("i_but")[i].setAttribute("onclick","myPop(event)");
}
	setDefaults();
     }


function myPop(event)
{
console.log("clicked", event.target.parentElement.action);
var myWindow = window.open(event.target.parentElement.action , "details", "width=880px,height=970px,titlebar=yes");
	
	setTimeout(function(){
	var scriptj = myWindow.document.createElement('script');
	scriptj.type = 'text/javascript';
	scriptj.async = true;
	
	scriptj.src = "https://inventivesolutionste.ipage.com/javascripts/cdd/abpopscript.js";
	myWindow.document.getElementsByTagName('head')[0].appendChild(scriptj);		
	},1000);
}

function setDefaults() {
	
	console.log("setdefaults");

	if (document.getElementsByClassName("i_but").length > 3) {

		injectSideBar();


		jun = localStorage.getItem("janusername");

		if (jun != undefined || jun != null) {
			document.getElementById("janusername").value = jun;
			document.getElementById("janpassword").value = localStorage.getItem("janpassword");
			document.getElementById("jans_country").value = localStorage.getItem("selected_country");
			document.getElementById("activeList").value = localStorage.getItem("listname");


		}

		var carcnt = localStorage.getItem("carcount");

		if (carcnt != undefined || carcnt != null) {
			document.getElementById("carcount").innerText = carcnt;
		} else if (carcnt == "0") {
			document.getElementById("carcount").innerText = carcnt;
		} else {
			document.getElementById("carcount").innerText = 0;
		}

		if (window.innerWidth < 1850) {
			document.getElementById("lever").style["display"] = "block";

		}
		if (window.innerHeight > 740) {
			document.getElementById("optionsilde").style["display"] = "block";
			document.getElementById("optionsilde").style["margin-left"] = "0px";
			document.getElementById("optionsilde").style["margin-top"] = "10px";
			document.getElementById("optionsilde").style["position"] = "relative";
			document.getElementById("optionsilde").style["onmouseleave"] = "";

		}		
	}
	else {
		alert("Switch to View mode and try again!");
	}
}

function injectSideBar() {
	var style = document.createElement("style");
	style.type = "text/css";
	style.innerHTML = "div#panel_fr div.panel { height:290px; } div#imagecont {    position: fixed;    width: 440px;    height: 500px; margin-left: 10px;    margin-top: 10px;} img#popimage{width:100%; height:auto} div#credo {    float: right;    width: 390px;    background-color: cornflowerblue;    padding: 5px;    margin: 10px;} .credo{border-radius: 10px; float: right; display: grid;      z-index: 1000000;    background-color: cadetblue; padding: 5px; width:230px; transition: margin-left 1s;} #janoptions { width: 100%;    background-color: black;    color: aliceblue;    margin-top: 5px;    cursor: pointer; padding: 2px;    text-align: center;}";
	document.head.appendChild(style);


	var mySideBar = document.createElement("div");
	mySideBar.id = "credo0";
	mySideBar.innerHTML = txt1;
	mySideBar.setAttribute("class", "credo0");
	document.getElementsByTagName("table")[0].getElementsByTagName("table")[0].getElementsByTagName("td")[0].insertBefore(mySideBar, document.getElementsByTagName("table")[0].getElementsByTagName("table")[0].getElementsByTagName("td")[0].children[0]);


	
}


function sortbylot()
{
	navi_sort(document.getElementsByClassName("hd")[4],'bid#asc');
}
function sortbyname()
{
	navi_sort(document.getElementsByClassName("hd")[2],'name#asc');
}