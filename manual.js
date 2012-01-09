require("edu.hm.didaktik", function(ns) {

	ns.makeToc = function(tocClass) {
		var tableOfContents = $(".toc").first();		
	
		tableOfContents
			.siblings("h1")
			.each(function(i,h1){
				tableOfContents.append($("<li>"+$(h1).text()+"</li>"));
				var chapters = $(h1).nextUntil("h1").filter("h2");
				var chapterList = $("<ol></ol>");
				
				chapters.each(function(i, h2){
					chapterList.append("<li>"+$(h2).text()+"</li>");					
				});

				tableOfContents.append(chapterList);
			});		
	};

	ns.makeHtmlPreviews = function(){
		var htmlExampleWrapper = $(	"<div class='html-example-tabs'>"+
											"<ul>"+
												"<li><a href='#tabs-1'>HTML</a></li>"+
												"<li><a href='#tabs-2'>Vorschau</a></li>"+
											"</ul>"+
											"<div id='tabs-1' class='html-example-tab'></div>"+
											"<div id='tabs-2' class='html-example-tab'></div>"+
										"</div>");

		var areas = $("textarea").autoGrow().width("100%").attr("disabled", "disabled");

		areas.each(function(i, item){		
			var text = $(item).text();
			$(this).wrap("<div class='html-example-tabs' />");	
			var wrapped = $(this).parent().html(htmlExampleWrapper.html());	
			wrapped.find(".html-example-tab").first().append($(item));
			wrapped.find(".html-example-tab").last().html($(item).text());
		});

		$(".html-example-tabs").tabs();
	};
});
