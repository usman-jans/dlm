

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
	  	  
      sendResponse( {"message":"response from content"} );
	  
	  var rm = request.message;
	  //console.log("Hi from content 1");
	   if (rm=="addAllTomyList")
	 {
		console.log("addAllTomyList");
		///////////////////////////////// CODE HERE ///////////////////////////////////////
					
var currenthtml_a;
var latesthtml_a;
var askcount_a = 0;

var list_a;
var listName_a;
askUserA();

function askUserA()
{
list_a = prompt("Enter list name", "a,b,c or d");

if (list_a.length==1)
	{
	list_a = list_a.toUpperCase();
	 if (list_a=="A" || list_a=="B" || list_a=="C" || list_a=="D")
		{
		listName_a = list_a;
		 startLMA();
		}
		else { 
		if (askcount<3)
		{
			askUserA(); 
		}
		else{
			alert("Input failed. Cancelling the task");
		}
		
		}
	}
	

}

document.addEventListener('DOMContentLoaded', startLMA());

	
function startLMA()


{
	if (listName_a)
	{
	console.log("DOM", listName_a);
				if($('input[value=' + listName_a + ']')) 
					{
					currenthtml_a = window.location.href;
					console.log(" cars added to list " + listName_a); 
					$('input[value=' + listName_a + ']').click();
					
					moveNext();
					}			
}
}

function moveNext()
{
	setTimeout(function(){
					
					if ($("a[title='次へ→']").get(0))
					{						
					
						$("a[title='次へ→']").get(0).click(function (e) {
							e.stopPropagation();});
							
							//setTimeout(function(){checkPage();}, 2000);
							
							}
							
							else if ($("a[title='Next→']").get(0))
							{
							$("a[title='Next→']").get(0).click(function (e) {
							e.stopPropagation();});
							
							//setTimeout(function(){checkPage();}, 2000);				
					}
					else {
						
						
						$('input[value=' + listName_a + ']').click();
						alert("Task complete");
					}
					
				},2000);
}
function checkPage()
{
	latesthtml_A = window.location.href;
	console.log("timeout 3 secs");
						latesthtml_a = window.location.href;
					
					if(currenthtml_a !== latesthtml_a) 
					{
						console.log("startLMA");
						startLMA();
					}
					else {
						console.log("no start");
						moveNext();						
					}

}

	///////////////////////////////// CODE HERE ///////////////////////////////////////
		
		
	 }
    
  }
);