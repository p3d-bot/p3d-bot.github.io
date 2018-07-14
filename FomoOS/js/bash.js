$(document).ready(function(){
	$("#commandLine li input").val('');
	$("#commandLine").on("keypress", ".commandInput", function(e){
		if(e.which == 13){
			var command = $("input.active").val().toLowerCase();
			if(/^[a-zA-Z0-9- ?.=/]*$/.test(command) == false){
				command = "syntax_error"
			}
			$("#commandLine li input").each(function(){
				$(this).removeClass("active");
				$(this).attr("disabled", true);
			});
			switch(command){
				// sample case
				case "sumpunk":  // check for input value
					// append new li element to ul
					$("#commandLine").append('<li class="prompt"><span class="ps1 noselect good">&rarr; ' + "Ok</span>");
					// can take multiple lines, check help case for example
					break; // stop further case execution
					
				// include more cases for custom commands here
				case "":
					break;

				case "help":
				case "?":
					$("#commandLine").append('<li class="prompt"><span class="ps1 noselect good">&rarr; List of available commands</span>');
					$("#commandLine").append('<li class="prompt"><span class="ps1 noselect good">help, ?: display this message</span>');
					$("#commandLine").append('<li class="prompt"><span class="ps1 noselect good">clear, cls: clear lines</span>');
					break;
					
				case "syntax_error":
					$("#commandLine").append('<li class="prompt"><span class="ps1 noselect error">&rarr; syntax error</span>');
					break;
				
				case "uname":
				case "uname -a":
					$("#commandLine").append('<li class="prompt"><span class="ps1 noselect good">&rarr; FomoOS jekyllisland 2.3.2-180708 #232-TeamJUST x86_256 GAHNOO/Fomo</span>');
					break;

				case "uptime":
					$("#commandLine").append('<li class="prompt"><span class="ps1 noselect good">&rarr; TIME up DIFFERENCE TO LAUNCH, USERS users, load average: 0,89, 0,92, 0,90</span>');
					break;

				case "clear":
				case "cls":
					$(".prompt").each(function(){
						$(this).remove();
					});
					break;
					
				case "exit":
				case "quit":
					$("#commandLine li input").val('');
					$(".prompt").each(function(){
						$(this).remove();
					});
					$("#terminal").css({
						visibility: "hidden",
					})
					break;
					
				default:  // defaults to not found
					$("#commandLine").append('<li class="prompt"><span class="ps1 noselect error">&rarr; "' + command + '" command not found</span>');
			}
			$("#commandLine").append('<li class="prompt"><span class="ps1 noselect">player@jekyllisland ~ $ <input type="text" class="commandInput active"></li>'); 
			$(".active").focus();
			return false;
		}
	});
});