// JavaScript Document
var chassiscodes = [];
var code_number = [];
var v = 0;
var hone;

createElements();

function createElements()
{
	var divel = document.createElement('div');
		divel.id = "myNav";
		divel.setAttribute("class", "overlay");
		divel.innerHTML = '<p>Results</p><input type="button" name="check" id="checkBut" value="Check" onclick="startChecking()"><textarea id="checkresults" placeholder="paste here"></textarea><textarea id="checkedresults"></textarea>';

		document.body.insertBefore(divel, document.body.firstChild);
		
		document.styleSheets[0].insertRule("#myNav{height: 100%; color: gold;font-size: 18px;padding: 10px,width: 400px,position:fixed;z-index:100000000;margin-left:1%;margin-top:1%;top:0px;left:0px;background-color: rgba(0, 0, 0, 0.9);overflow-x:hidden;transition:0.5s;	position: fixed;    padding: 10px;    width: 400px;}", 1);
		
		document.styleSheets[0].insertRule("textarea#checkresults {width: 50%; height: 80%;font-size: x-large}", 1);
		document.styleSheets[0].insertRule("textarea#checkedresults {width: 50%; height: 80%;font-size: x-large}", 1);
		document.styleSheets[0].insertRule("input#checkBut {position: absolute;    margin-top: -40px;    margin-left: 74%;    width: 80px;    height: 30px;    border-radius: 3px;}", 1);
	
	    
	
}


function startChecking()
{
	v = 0;
	
	$("#checkedresults").val("");
	
	chassiscodes = $("#checkresults").val().split("\n");
	chassiscodes = $("#checkresults").val().split("\n");
chassiscodes = $("#checkresults").val().split("\n");
	for (var i=0; i<chassiscodes.length;i++)
		{
			code_number[i] = chassiscodes[i].split("-");
		}	
	
	recurCheck();
}

function recurCheck()
{	
	if (v<code_number.length)
		{
			$("input[name=chassis_code]").val(code_number[v][0]);
			$("input[name=chassis_no]").val(code_number[v][1]);
			$("#chassisnochecksubmit").click();
			
			
		}
}
function checkChassisNumber(frm, e) 
			{
	e.preventDefault();
	$.post($(frm).attr('action'), $(frm).serialize(),function(data)
		   {
		$('#chassiformholder').html(data);
		
		hone = $("#chassiformholder").find("h1")[0];
		
		if (hone!=null)
			{
				$("#checkedresults").val($("#checkedresults").val() + $("#chassiformholder").find("h1")[0].innerText + "\n");
			}
		else {
			$("#checkedresults").val($("#checkedresults").val() + "Not found\n");
		}
		
		
		
		
v++;
		recurCheck();	
	
		});
			}