var tabid;

chrome.browserAction.onClicked.addListener(function(tab) {
   chrome.tabs.executeScript(null, {file: "content.js"});

   

   
   });

var myvar=0;
var pricedcars = [];
var initialized = false;

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete' && tab.active) {

    // do your things

if (tab.url.indexOf("vehicle/carlist")>0 || tab.url.indexOf("iauc.co.jp/detail")>0)
{
	tabid = tab;
	console.log("bg script", tabid.id);
}

	
	  
	  
	console.log("execute command sent " + myvar);
	try{
		myvar++;
		//messeageSender("initialized " + initialized);
		chrome.tabs.executeScript(tabId, {file: "content.js"});
		
	}
	catch(e)
	{
		console.log(e.message);
	}
	
  }
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {

	var rm = request.message;
	
	sendResponse( {message:rm + " received"} );	  
	messeageSender(rm);
	/*
	if(request.message === "modelSelect") {
      //console.log("this is background");	  
	  //call content
	  /*
	  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];    
	chrome.tabs.sendMessage(activeTab.id, {"message": "Model Selector"}, function(response) {console.log(response.message);});	
  });
	*/
	
	
	  
	  
    //}
  }
);
chrome.runtime.onMessageExternal.addListener(
  function(request, sender, sendResponse) {
    
	console.log(request.message);
      
    if (request.message == "oliac")
	{
		var rm = request.message;
		var fp = request.chassis_code;
		var sp = request.chassis_no;
	}      
	
	sendResponse( {message:rm + " received from External Messaging"} );	  
	messeageSender(rm, fp, sp);
  });

function messeageSender(x, fp, sp)
{
	  chrome.tabs.query({active: false, currentWindow: false}, function(tabs) {
     
	chrome.tabs.sendMessage(tabid.id, {"message": x, "chassis_code":fp, "chassis_no":sp}, function(response) {console.log(response.message);});	
  });
	
	 // sendResponse( {message:request.message + " rec"} );	  
	
}

