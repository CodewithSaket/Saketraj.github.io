<?php
session_start();
echo "My Session Id is: " .$sid=session_id();
?>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Registration Form</title>

<script language="javascript">
	function ajaxCall()
		{
		var uid=document.getElementById("uid");
		var pass=document.getElementById("pass");
		
		var msg=document.getElementById("msg");
		xmlObj=new XMLHttpRequest();
		xmlObj.onreadystatechange=function()
			{
			if(xmlObj.readyState==4 && xmlObj.status==200)
				{
				var data=xmlObj.responseText;
				msg.innerHTML=data;	
				}
			};
xmlObj.open("GET","http://localhost/cse1923/regform/logincheck.php?uid=" + uid.value + "&pass=" + pass.value + "&sid=" + "<?php echo $sid ?>");
xmlObj.send();
		}
</script>

</head>

<body>
<h1 align="center">Registration Form</h1>
<form method="get" action="logincheck.php">
<table width="322" border="0" align="center">
  <tr>
    <td width="126">Enter ID</td>
    <td width="180"><label for="textfield"></label>
    <input type="text" name="uid" id="uid" /></td>
  </tr>
  <tr>
    <td>Enter Password</td>
    <td><input type="password" name="pass" id="pass" /></td>
  </tr>
  <tr>
    <td>Enter Mobile</td>
    <td><input type="text" name="mob" id="mob" maxlength="10" /></td>
  </tr>
  <tr>
    <td>Enter Email</td>
    <td><input type="text" name="email" id="email" /></td>
  </tr>
  <tr>
    <td>&nbsp;</td>
    <td><input type="button" value="Submit" onClick="ajaxCall()" /></td>
  </tr>
  
  <tr>
    <td>&nbsp;</td>
    <td></td>
  </tr>
</table>
</form>
<center><span id="msg" style="background-color:rgb(255,0,0)" onClick="test()"></span></center>



</body>
</html>
