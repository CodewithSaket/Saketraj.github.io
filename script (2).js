// JavaScript Document

function ajaxCall()	
	{
		alert("Hello");
		/*var id=document.getElementById("uid");
		var msg=document.getElementById("msg");
		xmlObj=new XMLHttpRequest();
		xmlObj.onreadystatechange=function()
			{
			if(xmlObj.readystate==4 && xmlObj.status==200)
				{
				var data=xmlObj.responsetext;
				msg.innerHTML=data;	
				}
			};
		xmlObj.open("GET","http://localhost/cse1923/regform/logincheck.php?uid=" + document.getElementByID("uid").value)
		xmlObj.send()
*/
	}




function check()
	{
		
		var id=document.getElementById("uid");
		var pass=document.getElementById("pass");
		var mob=document.getElementById("mob");
		var email=document.getElementById("email");
		var msg=document.getElementById("msg");
		
		
		if(id.value=="")
			{
				msg.innerHTML="ID can't be blank.";	
				
				id.focus();
				return false;
				
			}
		if(pass.value=="")
			{
				msg.innerHTML="Password can't be blank.";	
				
				pass.focus();
				return false;
			}
		if(pass.value.length<8)
			{
				msg.innerHTML="Password should be atleast 8 chars long.";	
				
				pass.focus();
				return false;
			}
		
		if(mob.value=="")
			{
				msg.innerHTML="Mobile can't be blank.";	
				
				mob.focus();
				return false;
			}
		if(mob.value.length<10)
			{
				msg.innerHTML="Mobile number should be of 10 digits";	
				
				mob.focus();
				return false;
			}
		if(isNaN(mob.value))
			{
				msg.innerHTML="Mobile Number should be numeric only.";	
				
				mob.focus();
				return false;
			}
		var fc=mob.value.substr(0,1);
		
		if(fc<6)
			{
				msg.innerHTML="Mobile Number should start from 6,7,8 or 9.";	
				
				mob.focus();
				return false;
			}
			
		if(email.value=="")
			{
				msg.innerHTML="Email can't be blank";	
				
				email.focus();
				return false;
			}
			
		if(email.value.indexOf("@")==-1)
			{
				msg.innerHTML="Invalid Email, @ missing.";	
				
				email.focus();
				return false;
			}
		if(email.value.indexOf(".")==-1)
			{
				msg.innerHTML="Invalid Email, . missing (invalid domain).";	
				
				email.focus();
				return false;
			}
			
		if(email.value.indexOf("@")==0)
			{
				msg.innerHTML="Invalid Email, @ should not at first position.";	
				
				email.focus();
				return false;
			}			

		if((email.value.indexOf(".")-email.value.indexOf("@"))<2)
			{
			msg.innerHTML="Invalid Email, . positon is wrong(invalid domain)";	

			email.focus();
			return false;
			}
						
		if((email.value.length-email.value.indexOf("."))==1)
			{
				msg.innerHTML="Invalid Email, domain incomplete";	
				
				email.focus();
				return false;
			}
		
	return true;
	}
	
	
function hideSpan()
	{
		alert("TEST");
		//msg.innerHTML="DEMO TEXT";
		alert(msg.innerHTML);
		//msg.style.visibility="hidden";
		
	}
function showSpan()
	{
		msg.style.visibility="visible";
		
	}
	
	
	
function test()
	{
	alert("Hello ");
	}
	
	
	