<?php
	session_start();

	$user=$_SESSION['user'];
	$char=$_SESSION['character'];

	$table=$_POST['table'];
	$column=$_POST['column'];
	$og=$_POST['og'];
	$nv=$_POST['nv'];

	//function to change characters name
	function changenm($nn)
	{
		global $user;
		global $char;

		mysql_connect('localhost','host','');
		mysql_select_db('adventurer');
		mysql_query("update characters set charname='$nn' where username='$user' and charname='$char';");
		mysql_query("update cfeatures set charname='$nn' where username='$user' and charname='$char';");
		mysql_query("update rfeatures set charname='$nn' where username='$user' and charname='$char';");
		mysql_query("update feats set charname='$nn' where username='$user' and charname='$char';");
		mysql_query("update inventory set charname='$nn' where username='$user' and charname='$char';");
		mysql_query("update languages set charname='$nn' where username='$user' and charname='$char';");
		mysql_query("update powers set charname='$nn' where username='$user' and charname='$char';");
	}
	if(isset($_POST['changename'])){changenm($_POST['changename']);}

	//function for changing attributes
	function changeatt($t,$c,$o,$n)
	{
		global $user;
		global $char;

		mysql_connect('localhost','host','');
		mysql_select_db('adventurer');
		$query="update $t set $c='$n' where username='$user' and charname='$char' and $c='$o';";
		mysql_query($query) or die('Could not update attribute');
	}
?>
