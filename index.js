
 var $ = require('jquery');

String.format = function() { 
    var s = arguments[0]; 
    for (var i = 0; i < arguments.length - 1; i++) { 
        var reg = new RegExp("\\{" + i + "\\}", "gm"); 
        s = s.replace(reg, arguments[i + 1]); 
    }

    return s; 
};

 $.get("https://github.com/popular/forked",function(html){

 	var $doc = $(html);
    console.log("No.  name  language  star   forks  ")
 	$doc.find("ul.repolist li.source").each(function(i,project){

        var $project = $(project);
 		var name = $project.find("h3").text().trim();
 		var language = $project.find("li:eq(0)").text().trim();
 		var star = $project.find("li.stargazers").text().trim();
 		var forks = $project.find("li.forks").text().trim();
 		var row =String.format("{4} {0}  {1}  {2}  {3}",name,
 			language,star,forks,i + 1 );
 		
 		console.log(row);
 	});
 });