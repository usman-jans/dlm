// JavaScript Document
/*function checkChassisNumber(frm, e) 
						{	
							e.preventDefault();	
							$.ajax( url: 'https://www.sayuri.co.jp/en/api/check_chassis_no', 
								   type: 'PUT',
									
								   data: $(frm).serialize()
									).done(function(data)														
							{	
								var ydata = $(data); 
								document.getElementById('chassiformholder').innerHTML = ydata;
										console.log(data);
							});
						}

*/

function checkChassisNumber(frm, e) 
{
	/*
	var editorExtensionId = 'plpofikbafhjkaagheoojfbkcclamkee'; chrome.runtime.sendMessage(editorExtensionId, {message: 'oliac'},  function(response) {      
		try{
		console.log(response.message);} catch(e){
		
	}   }); 
	*/
	e.preventDefault();
	$.post($(frm).attr('action'), $(frm).serialize(),function(data){
		console.log(data);
		$('#chassiformholder').html(data);
		document.body.setAttribute("style","background-color:olive;");					   
		
			
																   });
}