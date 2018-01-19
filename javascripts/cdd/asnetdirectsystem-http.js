// JavaScript Document
var resource_url = 'https://jjinventorysystem.com/devtest/dlm_lmt/';
var jun = "";
var threeImages = [];
var listname = "";
var sendObject = {
	"threeimages": [],
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
	"sched": [],
	"enddate": [],
	"rowloader": [],
	"values": [],
	"remarks": []
};

var settings = [];

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
<input type="button" value="Remember Me" id="janlogin" onmousedown="janlogin()" class="janlogin" style="background-color: darkgreen;color:#FFF;margin-top: 10px; width:100%;" />

<label style="color:mintcream;  margin-top:2px;">Auction Date</label>
<input type="text" placeholder="DD/MM/YYYY" class="jans_auction_date" id="jans_auction_date" style="width:100%;" />

<div id="janoptions" onmouseover="showJanOptions()">Options</div>
<span id="success_msg" class="success_msg" style="background-color: greenyellow; text-align: -webkit-center; height: 44px; font-weight: 900; margin-top: 5px;" display="none"></span>
<table style="width:100%; background-color: lightslategray;    margin-top: 3px;">

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
<input type="button" value="Auction filter" id="filterKaijo" onmousedown="filterKaijo()" style="font-size: small; border-radius: 7px; background-color: cornflowerblue; border-color: lightslategrey; color: white; float:right; font-size: x-small; width: 80px; height: 23px;">
</td>
</tr>
</tbody>
</table>

<div id="optionsilde" onmouseleave="hideJanOptions()" style="border-radius: 10px; margin-top: 65px; padding: 5px; background-color: black; display: none; margin-left: -190px; position: fixed;">
<table style="width:100%;">

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



var scriptj = document.createElement('script');
scriptj.type = 'text/javascript';
scriptj.async = true;
scriptj.setAttribute('onload', 'this.onload=function(){};setDefaults()');
scriptj.setAttribute('onreadystatechange', 'if (this.readyState === "complete") this.onload()');
scriptj.src = resource_url+'javascripts/cdd/iaucmap.js';
document.getElementsByTagName('head')[0].appendChild(scriptj);

var scriptq = window.document.createElement('script');
scriptq.type = 'text/javascript';
scriptq.async = true;
scriptq.src = resource_url+'javascripts/cdd/jquery-3.2.1.js';
//window.document.getElementsByTagName('head')[0].appendChild(scriptq);


function setEL() {
	document.getElementById("databaseInput").removeEventListener("click", inputJDB);
	document.getElementById("databaseInput").addEventListener("click", inputJDB);

	
}
function inputJDB() {

		if (document.getElementById("databaseInput").checked) {
			SendDataToDB = "true";
			localStorage.setItem("SendDataToDB", SendDataToDB);

		} else {

			SendDataToDB = "";
			localStorage.setItem("SendDataToDB", SendDataToDB);
		}

		console.log("setting db input ", SendDataToDB);
	}

function setDefaults() {

	if (window.location.href.indexOf("list") > 0) {

		injectSideBar();


		jun = localStorage.getItem("janusername");

		if (jun != undefined || jun != null) {
			document.getElementById("janusername").value = jun;
			document.getElementById("janpassword").value = localStorage.getItem("janpassword");
			document.getElementById("jans_country").value = localStorage.getItem("selected_country");
			document.getElementById("activeList").value = listname = localStorage.getItem("listname");


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
}


function changeSideBar() {

	//console.log(window.innerHeight, window.innerWidth, "window resize");

	if (window.innerWidth < 1800) {
		document.getElementById("lever").style["display"] = "block";
	} else {
		document.getElementById("lever").style["display"] = "none";
	}

	if (window.innerHeight < 740) {
		document.getElementById("janoptions").style["display"] = "block";
		document.getElementById("delaycar").style["display"] = "none";
		document.getElementById("delaycar").style["margin-left"] = "230px";
		document.getElementById("delaycar").style["margin-top"] = "50px";
		document.getElementById("delaycar").style["position"] = "fixed";
		document.getElementById("delaycar").style["onmouseleave"] = "hideJanOptions()";
	} else {
		document.getElementById("janoptions").style["display"] = "none";
		document.getElementById$("delaycar").style["display"] = "block";
		document.getElementById("delaycar").style["margin-left"] = "0px";
		document.getElementById("delaycar").style["margin-top"] = "10px";
		document.getElementById("delaycar").style["position"] = "relative";
		document.getElementById("delaycar").style["onmouseleave"] = "";
	}


}

//http://www14.asnet2.com/asnet_en/

/*
scriptj = window.document.createElement('script');
scriptj.type = 'text/javascript';
scriptj.async = true;
scriptj.src = 'https://code.jquery.com/jquery-3.2.1.js';
window.document.getElementsByTagName('head')[0].appendChild(scriptj);
*/
function injectSideBar() {
	var style = document.createElement("style");
	style.type = "text/css";
	style.innerHTML = "div#panel_fr div.panel { height:290px; } div#imagecont {    position: fixed;    width: 440px;    height: 500px; margin-left: 10px;    margin-top: 10px;} img#popimage{width:100%; height:auto} div#credo {    float: right;    width: 230px;    background-color: cornflowerblue;    padding: 5px;    margin: 10px;} .credo{border-radius: 10px; float: right; display: grid;      z-index: 1000000;    background-color: cadetblue; padding: 5px; width:230px; transition: margin-left 1s;} #janoptions { width: 100%;    background-color: black;    color: aliceblue;    margin-top: 5px;    cursor: pointer; padding: 2px;    text-align: center;}";
	document.head.appendChild(style);


	var mySideBar = document.createElement("div");
	mySideBar.id = "credo0";
	mySideBar.innerHTML = txt1;
	mySideBar.setAttribute("class", "credo0");
	document.body.insertBefore(mySideBar, document.getElementById("container"));


	var mydiv = document.createElement("div");
	mydiv.id = "imagecont";
	var myimage = document.createElement("img");
	myimage.id = "popimage";
	myimage.src = "";
	mydiv.appendChild(myimage);
	document.body.insertBefore(mydiv, document.getElementById("container"));
	setTimeout(
	function(){
		createFields();	
	},2000
	);
	
}



function createFields() {


	for (var i = 0; i < document.getElementsByClassName("panel").length; i++) {

		var pan = document.getElementsByClassName("panel")[i];
		var srcorig = pan.getElementsByTagName("img")[0].src; //front image
		var srco = srcorig.substr(0, srcorig.lastIndexOf(".") - 1);
		srco = srco + "o.jpg"; //auction sheet
		var srcr = srcorig.substr(0, srcorig.lastIndexOf(".") - 1);
		srcr = srcr + "r.jpg"; //rear
		var srci = srcorig.substr(0, srcorig.lastIndexOf(".") - 1);
		srci = srci + "i.jpg"; //rear


		var buts = document.createElement("div");
		buts.setAttribute("class", "myButs");
		buts.setAttribute("onmouseleave", "hidePopImage()");

		var butA = document.createElement("input");
		butA.data = srco;
		butA.setAttribute("type", "button");
		butA.setAttribute("class", "mybuttonA");
		butA.setAttribute("value", "A");
		butA.setAttribute("onmouseover", "showImage(event)");
		butA.setAttribute("style", "height:22px; width:22px");
		buts.appendChild(butA);

		var butF = document.createElement("input");
		butF.data = srcorig;
		butF.setAttribute("type", "button");
		butF.setAttribute("class", "mybuttonF");
		butF.setAttribute("value", "F");
		butF.setAttribute("onmouseover", "showImage(event)");
		butF.setAttribute("style", "height:22px; width:22px");
		//Get the url for the image. Generate rear and auction sheet by replacing f in the end
		//$(".myButs").eq(0).parent().find("img")[0].src;
		buts.appendChild(butF);

		var butR = document.createElement("input");
		butR.data = srcr;
		butR.setAttribute("type", "button");
		butR.setAttribute("class", "mybuttonR");
		butR.setAttribute("value", "R");
		butR.setAttribute("onmouseover", "showImage(event)");
		butR.setAttribute("style", "height:22px; width:22px");
		buts.appendChild(butR);

		var butI = document.createElement("input");
		butI.data = srci;
		butI.setAttribute("type", "button");
		butI.setAttribute("class", "mybuttonI");
		butI.setAttribute("value", "I");
		butI.setAttribute("onmouseover", "showImage(event)");
		butI.setAttribute("style", "height:22px; width:22px");
		buts.appendChild(butI);

		var rowp = document.createElement("input");
		rowp.setAttribute("style", "height:22px; width:17%; background-color: khaki;   margin-left: 1%; text-align: center;    font-size: medium;");
		rowp.setAttribute("onkeypress", "enterPressed(event)");
		rowp.setAttribute("placeholder", "bid");
		rowp.setAttribute("class", "rowp");
		setvars4rowp(pan, rowp);
		buts.appendChild(rowp);

		var rowc = document.createElement("input");
		rowc.setAttribute("style", "height:22px; width:27%; background-color: khaki;   margin-left: 1%; text-align: center;    font-size: medium;");
		rowc.setAttribute("placeholder", "remark");
		rowc.setAttribute("onkeypress", "enterPressed(event)");
		rowc.setAttribute("class", "rowcom");
		buts.appendChild(rowc);

		pan.appendChild(buts);
	}

	//SET Date

	var trt = document.getElementsByClassName("panel_t");

	for (var k = 0; k < trt.length; k++) {
		//console.log("k", k);

		var trs = document.getElementsByClassName("panel_t")[1].children[0].children;

		for (var i = 0; i < trs.length; i++) {
			if (trs[i].innerText.indexOf("é–‹å‚¬") >= 0) {
				var tra = [];
				tra = trs[i].innerText.replace(/[é–‹å‚¬:]/g, "").split("/");
				tra.reverse();
				//console.log(tra);
				var nd = new Date();
				tra = tra.join("/");
				tra = tra + "/" + nd.getFullYear();
				document.getElementById("jans_auction_date").value = tra;
				break;
			}
		}
		if (tra !== "") {
			break;
		}
	}

}

//sendtoDatabase(event.target.parentElement.getElementsByClassName("rowp")[0], pb, cb, chassis.trim(), newrl, threeImages);

function enterPressed(event) {
	var x = event.keyCode;

	threeImages = [];
	//console.log(x);
	if (x == 13) {
		var ccar = event.target.parentElement.getElementsByClassName("rowp")[0];

		ccar.aucname = getAucname(ccar.aucname);

		threeImages.push(event.target.parentElement.getElementsByClassName("mybuttonA")[0].data);
		threeImages.push(event.target.parentElement.getElementsByClassName("mybuttonF")[0].data);
		threeImages.push(event.target.parentElement.getElementsByClassName("mybuttonR")[0].data);

		console.log("three images", threeImages);

		if (document.getElementById("jans_country").value != "") {

			
			var pan = event.target.parentElement.parentElement;
			var srcorig = pan.getElementsByTagName("a")[0];
			var newarray = [];
			var newobject;
			srcorig = srcorig.getAttribute("onclick").replace(/['"]+/g, "").split(";");
			for (var i = 0; i < srcorig.length; i++) {
				newarray.push(srcorig[i].split("="));
			}
			newobject = toObject(newarray);


			function toObject(arr) {
				var rv = {};
				for (var i = 0; i < arr.length; ++i)
					rv[arr[i][0]] = arr[i][1];
				return rv;
			}
			var durl = ["https://www.iauc.co.jp/detail/?vehicleId=55-"+ newobject["todetail.aacount.value"] + "-" + newobject["todetail.exhnum.value"]];
			console.log("durl", durl);
			
			event.target.parentElement.getElementsByClassName("rowp")[0].lotno = [newobject["todetail.aacount.value"] + "//" + newobject["todetail.exhnum.value"]];
			
			event.target.parentElement.getElementsByClassName("rowp")[0].detailink = durl;
			event.target.parentElement.getElementsByClassName("rowp")[0].threeimages = [threeImages];
			event.target.parentElement.getElementsByClassName("rowp")[0].remarks = [event.target.parentElement.getElementsByClassName("rowcom")[0].value];
			event.target.parentElement.getElementsByClassName("rowp")[0].values = event.target.parentElement.getElementsByClassName("rowp")[0].value;
			sendDatabase(event.target.parentElement.getElementsByClassName("rowp")[0]);
		}
	}
}



function janlogin() {


	var user = document.getElementById("janusername").value;
	var pass = document.getElementById("janpassword").value;

	jun = user;

	console.log("saving");
	localStorage.setItem("janusername", user);
	localStorage.setItem("janpassword", pass);
}


function setList() {
	localStorage.setItem("listname", document.getElementById("activeList").value);
}

function setCountry() {
	localStorage.setItem("selected_country", document.getElementById("jans_country").value);
}

function showJanOptions() {
	document.getElementById("optionsilde").style["display"] = "block";
}

function hideJanOptions() {
	document.getElementById("optionsilde").style["display"] = "none";
}

function clearCount() {
	localStorage.setItem("carcount", 0);
	document.getElementById("carcount").innerText = 0;

}

function showImage(event) {
	//console.log(event.target.data);
	document.getElementById("popimage").src = event.target.data;
}







function hidePopImage() {
	document.getElementById("popimage").src = "";
}

function setvars4rowp(pan, rowp) {

	//console.log(pan);

	var mytr = pan.getElementsByTagName("table")[1].getElementsByTagName("td");
	var ryear = mytr[0].getElementsByTagName("span")[0].innerText.match(/[0-9]+/g); //year
	var rgrade = mytr[0].getElementsByTagName("span")[1].innerText; //model type
	//rgrade = translateCarname(rgrade);
	var rkm = mytr[1].innerText.replace(/[èµ°:*è©•åƒa-z\[\]\/\-]/g, "") + "000km"; //km
	var rrate = mytr[1].getElementsByTagName("span")[1] ? mytr[1].getElementsByTagName("span")[1].innerText.replace(/[è©•:]/g, "") : "";
	var rauc = mytr[2].innerText; //Auction
	//var rlot = mytr[3].innerText.match(/[0-9]+/g); //Lot
	var rstart = mytr[4].getElementsByTagName("span")[0] ? mytr[4].getElementsByTagName("span")[0].innerText.replace(/ï½½ï¾€ï½°ï¾„: /g, "") : ""; //start price
	var darray = mytr[4].getElementsByTagName("span")[1] ? mytr[4].getElementsByTagName("span")[1].innerText.replace(/é–‹å‚¬:/g, "").split("/") : ""; //auction date
	if (darray.length > 0) {
		darray = darray.reverse();
		var y = new Date();
		var rdate = darray.join("/") + "/" + y.getFullYear();
	}
	rowp.aucname = [rauc];
	//rowp.lotno = [rlot];
	rowp.year = [ryear];
	rowp.carname = [rgrade];
	rowp.cgrade = [rgrade];
	rowp.ctype = [rgrade];
	rowp.disp = [""];
	rowp.inspect = [""];
	rowp.mileage = [rkm];
	rowp.ccolor = [""];
	rowp.colorno = [""];
	rowp.shift = [""];
	rowp.air = [""];
	rowp.rate = [rrate];
	rowp.ext = [""];
	rowp.inter = [""];
	rowp.startprice = [rstart];
	rowp.starttime2 = [rdate];
	rowp.sched = [rdate];

	/*
	{
		$(this).eq(0).find("span").length > 0 ? panelRows.push(getSpans($(this).eq(0).find("span")).split(",")) : panelRows.push($(this).eq(0).find("td")[0].innerText);
	});
	
	
	var ryear = panelRows[0][0].replace(/å¹´/g, ""); //year
	var rgrade = panelRows[0][1]; //grade
	var rkm = panelRows[1][0].replace(/[èµ°:åƒa-z]/g, "") + "000km"; //km
	var rrate = panelRows[1][1].replace(/[è©•:]/g, ""); //rate
	var rauc = panelRows[2]; //Auction
	var rlot = panelRows[3].replace(/[å·è»Š]/g, ""); //Lot
	var rstart = panelRows[4][0].replace(/ï½½ï¾€ï½°ï¾„: /g, ""); //start price
	var rdate = panelRows[4][1].replace(/é–‹å‚¬:/g, ""); //auction date



	console.log(ryear, rgrade, rkm, rrate, rauc, rlot, rstart, rdate);

	function getSpans(span) {
		var spanstr = "";
		for (var s = 0; s < span.length; s++) {
			spanstr = spanstr + span[s].innerText + ",";
		}
		return spanstr;
	}
	//$(".panel").eq(0).find("table").eq(1).find("span").filter(":contains('å¹´')")[0].innerText;
	//$(".panel").eq(0).find("table").eq(1).find("span").filter(":contains('km')")[0].innerText;
	//$(".panel").eq(0).find("table").eq(1).find("span").filter(":contains('è©•')")[0].innerText;
	*/
}


function getAucname(a) {
	var an = a;
	for (var k in aucmapObj) {
		//aucmapObj[k];
		if (a.indexOf(k) >= 0) {
			a = aucmapObj[k];
		}

	}

	console.log(a);
	return a;

}



function sendDatabase(rowp) {

	//url: resource_url+'www/test/managedata.php',
	//console.log(rowp.sched, rowp.starttime2, rowp.carname, durl, image3);

	var theUrl = "https://www.jjinventorysystem.com/test/ajpagenew.php";

	var data = '?auction_company=' + rowp.aucname +
		'&lot_no=' + rowp.lotno +
		'&modelyear=' + rowp.year +
		'&carname=' + rowp.carname +
		'&grade=' + rowp.cgrade +
		'&type=' + rowp.ctype +
		'&chassiscode=' + ["ch"] +
		'&cc=' + rowp.disp +
		'&inspection=' + rowp.inspect +
		'&mileage=' + rowp.mileage +
		'&color=' + rowp.ccolor +
		'&color_no=' + rowp.colorno +
		'&shift=' + rowp.shift +
		'&ac=' + rowp.air +
		'&rate=' + rowp.rate +
		'&ext=' + rowp.ext +
		'&inter=' + rowp.inter +
		'&start_price=' + rowp.startprice +
		'&start_time=' + rowp.starttime2 +
		'&username=' + document.getElementById("janusername").value +
		'&password=' + document.getElementById("janpassword").value +
		'&jans_auction_date=' + rowp.sched +
		'&jans_country=' + document.getElementById("jans_country").value +
		'&jans_bid_price=' + rowp.values +
		'&remark=' + rowp.remarks +
		'&car_detail_url=' + rowp.detailink +
		'&threeimages=' + [rowp.threeimages];



	var xmlHttp = new XMLHttpRequest();

	xmlHttp.onreadystatechange = function () {
		if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
			callback(xmlHttp.responseText);


		document.getElementsByClassName("success_msg")[0].style["display"] = "block";
		document.getElementById("success_msg").innerText = "Success!";
		document.getElementById("carcount").innerText = Number(document.getElementById("carcount").innerText) + 1;

		localStorage.setItem("carcount", document.getElementById("carcount").innerText);
		document.getElementById("jans_country").value = ((localStorage.getItem("selected_country") != null) ? localStorage.getItem("selected_country") : "");
		setTimeout(function () {

			//console.log($("button[id=mylist-" + listName.toLowerCase() + "]"), " List button");

			document.getElementsByName("chkMy" + listname.toLowerCase())[0].click();

			document.getElementById("success_msg").innerText = "";
			document.getElementById("success_msg").style["display"] = "none";
			document.getElementById("send_status").innerText = "success";
		}, 500);



	}
	xmlHttp.open("POST", theUrl + data, true); // true for asynchronous 
	xmlHttp.send(null);

	function callback(t) {
		console.log("data sent");
	}
	/*
				$.ajax({
					url: "http://localhost/jandatatest/managedata.php",
					//url: resource_url+"www/test/ajpage.php",
					type: "GET",
					data: {
						auction_company: rowp.aucname,
						lot_no: rowp.lotno,
						modelyear: rowp.year,
						carname: rowp.carname,
						grade: rowp.cgrade,
						type: rowp.ctype,
						chassiscode: "ch",
						cc: rowp.disp,
						inspection: rowp.inspect,
						mileage: rowp.mileage,
						color: rowp.ccolor,
						color_no: rowp.colorno,
						shift: rowp.shift,
						ac: rowp.air,
						rate: rowp.rate,
						ext: rowp.ext,
						inter: rowp.inter,
						start_price: rowp.startprice,
						start_time: rowp.starttime2,
						username: document.getElementById("janusername").value,
						password: document.getElementById("janpassword").value,
						jans_auction_date: rowp.sched,
						jans_country: document.getElementById("jans_country").value,
						jans_bid_price: rowp.value,
						remark: rowc.value,
						car_detail_url: durl,
						auctionsheet: image3[0],
						frontimage: image3[1],
						rearimage: image3[2]
					},
					success: function (data) {
						//console.log("received: " + data);
						if (data == "") {
							alert("You already bid on this car");
						} else if (data.indexOf("success") >= 0) {
							//document.getElementsByClassName("success_msg")[0];
							
						} else {
							alert(data);
						}

					},
				});
				
				//try end
	*/
}


function createReport() {
	setTimeout(function () {

		if (confirm("Include images? Very slow") == true) {
			mychoice = true;
			//startLM();
		} else {
			mychoice = false;
			//startLM();
		}
	}, 1500);
	//injectScript();
}



/*

sendtoDatabase(event.target, event.target.parentElement.getElementsByClassName("rowp")[0], pb, cb, chassis.trim(), newrl, threeImages);

//////// SCRAPE

var panelRows = [];
$(".panel").eq(2).find("table").eq(1).find("tr").each(function () {
	$(this).eq(0).find("span").length > 0 ? panelRows.push(getSpans($(this).eq(0).find("span")).split(",")) : panelRows.push($(this).eq(0).find("td")[0].innerText);
});
var ryear = panelRows[0][0].replace(/å¹´/g, ""); //year
var rgrade = panelRows[0][1]; //grade
var rkm = panelRows[1][0].replace(/[èµ°:åƒa-z]/g, "") + "000km"; //km
var rrate = panelRows[1][1].replace(/[è©•:]/g, ""); //rate
var rauc = panelRows[2]; //Auction
var rlot = panelRows[3].replace(/[å·è»Š]/g, ""); //Lot
var rstart = panelRows[4][0].replace(/ï½½ï¾€ï½°ï¾„: /g, ""); //start price
var rdate = panelRows[4][1].replace(/é–‹å‚¬:/g, ""); //auction date



console.log(ryear, rgrade, rkm, rrate, rauc, rlot, rstart, rdate);

function getSpans(span) {
	var spanstr = "";
	for (var s = 0; s < span.length; s++) {
		spanstr = spanstr + span[s].innerText + ",";
	}
	return spanstr;
}
//$(".panel").eq(0).find("table").eq(1).find("span").filter(":contains('å¹´')")[0].innerText;
//$(".panel").eq(0).find("table").eq(1).find("span").filter(":contains('km')")[0].innerText;
//$(".panel").eq(0).find("table").eq(1).find("span").filter(":contains('è©•')")[0].innerText;








////Get onclick content of a lot
$(".hdn").eq(0).attr("onclick");

///////////////////// Dynamic REGEX to translate grade

var array = ["ï½±ï¾›ï½¼ï¾žï½¬ï½½ï¾„ï½¾ï¾šï½¸ï½¼ï½®ï¾", "Aro just collection"];
var f = "Gï½±ï¾›ï½¼ï¾žï½¬ï½½ï¾„ï½¾ï¾šï½¸ï½¼ï½®ï¾";
var stringToGoIntoTheRegex = array[0];
var regex = new RegExp(stringToGoIntoTheRegex, "g");
f = f.replace(regex, " " + array[1] + " ");
console.log(f);
*/