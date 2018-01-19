var options = new Object;
var resource_url = 'https://jjinventorysystem.com/devtest/dlm_lmt/';
$("#chbox")[0].checked = true;

options.autostart = "yes";

chrome.storage.sync.set({"options":options}, function() {
    
		var status = document.getElementById('status');
		status.textContent = 'Options saved';
		setTimeout(function() {
		status.textContent = 'Status';
	  
		}, 1000);
		});

chrome.storage.sync.get("options",function(oneChassis){
			
			console.log(oneChassis);
			try{
				ocp = oneChassis["options"]["autostart"];
				
				
				if (ocp=="yes")
				{$("#chbox").prop("checked",true);
		
				}
				
			}
			catch(e)
			{
				console.log("options never set");
			}
			

			});


$("input#saveoptions").click(
function(){
	if($("#chbox")[0].checked)
	{	
		options.autostart = "yes";	
    }
	else
	{
		options.autostart = "no";
	}
	
	chrome.storage.sync.set({"options":options}, function() {
    
		var status = document.getElementById('status');
		status.textContent = 'Options saved';
		setTimeout(function() {
		status.textContent = 'Status';
	  
		}, 1000);
		});
}
);


    

 
	
