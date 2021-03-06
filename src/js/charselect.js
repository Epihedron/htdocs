var user;

//function for posting data to init.php
function initP(d) {
	$.ajax({
		url:'../php/init.php',
		type:'post',
		data:d,
		success:function(data) {
			console.log(data);
		},
		fail:function() {
			console.log('unable to send '+d);
		}
	});
}

//logincheck
$.ajax({
    url:'../php/init.php',
    type:'post',
    data:{'userquery':1},
    success:function(data)
        {
            user = data;
            if(user == '')
            {
                alert('YOU MUST LOG IN!');
                window.location.replace('../../index.html');
            }
            else
            {
                $('#user').text(user);
            }
        }
    }
);

//ajax for character list
$.ajax({
	url:'../php/init.php',
	type:'post',
	data:{'charlistquery':1},
	success:function(data)
	{
		var d = JSON.parse(data);
		for(var i in d)
		{
			$("#charlist").append("<li value="+i+">"+d[i]['charname']+"</li>");
		}

		//char selected
		$('#charlist li').click(function()
		{
			$.ajax(
			{
				url:'../php/init.php',
				type:'POST',
				data:{cc:d[this.value]['charname']},
				success:function(data)
				{
					data='';
				}
			});
			setTimeout("window.location.href='../html/charactersheet.html?char="+new Date().getTime()+"';",300);
		});
	},
	fail: function() {
		console.log('unable to send charlist query');
	}
});

//basic menu button items
$("#tomain").click(function()
    {
        window.location.href='../html/main.html';
    }
);
$("#logout").click(function()
    {
        window.location.href='../php/logout.php';
    }
);
$("#newchar").click(function()
    {
        window.location.href='../html/newchar.html';
    }
);

//delete character
$("#delchar").click(function()
{
    var p1=prompt("Enter character's name(CaSe SeNsItIvE):");
    if(p1 != null)
        {
            var p2=prompt("Measure twice, cut once:");
            if(p2 != null)
                {
                    if(p1==p2)
                        {
                            $.ajax(
                                {
                                    url:"../php/init.php",
                                    type:"POST",
                                    data:{"delchar":p2},
                                    success:function(data)
                                    {
                                        alert(data);
                                    },
                                    error:function()
                                    {
					console.log('could not send for deleting a character.');
                                    }
                                }
                            ).done(function(){location.reload(true);});
                        }
                    else
                        {
                            alert('The names did not match.');
                        }
                }
        }
});
