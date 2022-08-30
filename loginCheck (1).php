<?php
session_start();
$ssid=session_id();
$uid=$_REQUEST["uid"];
$pass=$_REQUEST["pass"];
$sid=$_REQUEST["sid"];

//echo "Client Side data :" .$uid. ", " . $pass . ", " . $sid;

if($sid!=$ssid)
	{
		 
		echo "
				
		<script>
		alert('invalid session or trying to hack.');
		
		location.href='index.php';</script>";
	}
else
	{
		
	$conn=mysqli_connect("localhost","dbuser","vvit","cse1923db");
	if($conn)
		{
		echo "DB Connected.<br>";
		}
	else
		{
		echo "Db credentials are invalid.";
		die();
		}
	$result=mysqli_query($conn,"select * from tbl_login where uid='".$uid."'");
	if(mysqli_num_rows($result)>0)
		{
		echo "User Exist.<br>";
		$dr=mysqli_fetch_array
		($result);
		
		
		echo $dr["pwd"]. "," . 
		$dr["active"];
		if($dr==0)
			echo "<br>".$uid . " is disabled, can't login.";
		else
			{
			if($dr["pwd"]==$pass)
				{
					
				}
		//echo "The pass=". $dr.item["pass"]; 
		}
	else
		{
		echo "User not found.<br>";
		}
	}

?>